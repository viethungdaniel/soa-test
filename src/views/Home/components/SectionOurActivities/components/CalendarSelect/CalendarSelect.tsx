import { createContext, forwardRef, useContext, useMemo } from "react";
import moment from "moment";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import AppSvgIcon from "@/components/AppSvgIcon";

import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AppIconButton from "@/components/AppIconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import AppPaper from "@/components/AppPaper";
import AppTypography from "@/components/AppTypography";

import useStyles from "./CalendarSelect.styles";

import { LocalizationProvider, PickersDay } from "@mui/x-date-pickers";

import { useTranslation } from "next-i18next";

import type { Moment } from "moment";
import type { AppIconButtonProps } from "@/components/AppIconButton";
import type { DateCalendarProps, PickersDayProps } from "@mui/x-date-pickers";
import type { PickerSelectionState } from "@mui/x-date-pickers/internals";

type CustomCalendarSelectSlotProps = {
  nextIconButton?: AppIconButtonProps;
  previousIconButton?: AppIconButtonProps;
  switchViewButton?: AppIconButtonProps;
};

type DateValue = string | string[] | null;

type CustomCalendarSelectProps = {
  multiple?: boolean;
  format?: string;
  name?: string;
  value?: DateValue;
  slotProps?: Omit<
    DateCalendarProps<Moment>["slotProps"],
    keyof CustomCalendarSelectSlotProps
  > &
    CustomCalendarSelectSlotProps;
  onChange?: (
    event: {
      target: {
        name: string;
        value: DateValue;
      };
    },
    value: string | string[],
    selectionState?: PickerSelectionState
  ) => void;
};

export type CalendarSelectProps = Omit<
  DateCalendarProps<Moment>,
  keyof CustomCalendarSelectProps
> &
  CustomCalendarSelectProps;

type CalendarSelectContextValue = Pick<
  CalendarSelectProps,
  "multiple" | "format" | "value"
>;

const CalendarSelectContext = createContext<CalendarSelectContextValue>(null!);

const busyDays = ["2025-01-28", "2025-01-29", "2025-02-04"];

const StyledSwitchViewIcon = forwardRef<any, any>((props, ref) => (
  <AppSvgIcon
    ref={ref}
    component={ArrowDropDownIcon}
    fontSize="inherit"
    color="text.primary"
    {...props}
  />
));

class OverriddenAdapterMoment extends AdapterMoment {
  getWeekdays = () => {
    return this.moment.localeData(this.locale).weekdays();
  };
}

const StyledArrowLeftIcon = forwardRef<any, any>((props, ref) => (
  <AppSvgIcon
    ref={ref}
    component={ArrowLeftIcon}
    fontSize="inherit"
    color="text.primary"
    {...props}
  />
));

const StyledArrowRightIcon = forwardRef<any, any>((props, ref) => (
  <AppSvgIcon
    ref={ref}
    component={ArrowRightIcon}
    fontSize="inherit"
    color="text.primary"
    {...props}
  />
));

const SwitchViewButton = forwardRef<any, any>((props, ref) => {
  const { ownerState, className, ...rest } = props;
  const { view, views = [] } = ownerState || {};

  const { classes, cx } = useStyles();

  return (
    <AppIconButton
      ref={ref}
      {...rest}
      className={cx(
        className,
        classes.switchViewButton,
        ((view === "year" && (views.length === 3 || views.length === 2)) ||
          (view === "month" && !views.includes("year"))) &&
          classes.rotated
      )}
    />
  );
});

const CalendarSelectDay = (props: PickersDayProps<Moment>) => {
  const { format, multiple, value } = useContext(CalendarSelectContext);

  const { day, ...rest } = props;

  const { t } = useTranslation();

  const { classes } = useStyles();

  const selected = useMemo(() => {
    if (multiple) {
      return Array.isArray(value)
        ? value.some((v) => moment(v, format).isSame(day.format(format)))
        : false;
    }
    return (
      !!value &&
      moment(value, format).isSame(moment(day.format(format), format))
    );
  }, [day, format, multiple, value]);

  const isFreeDay = !busyDays.includes(day.format(format));

  return (
    <PickersDay day={day} {...rest} selected={selected}>
      <div className={classes.pickersDay}>
        {day.format("DD")}
        {!rest.outsideCurrentMonth && (
          <>
            {isFreeDay ? (
              <AppTypography className={classes.dayTag} color="primary.main">
                {t("free")}
              </AppTypography>
            ) : (
              <AppTypography className={classes.dayTag} color="#999999">
                {t("busy")}
              </AppTypography>
            )}
          </>
        )}
      </div>
    </PickersDay>
  );
};

const CalendarSelect = forwardRef(
  (props: CalendarSelectProps, ref: React.ForwardedRef<any>) => {
    const {
      className,
      slots,
      slotProps,
      multiple,
      format = "YYYY-MM-DD",
      value,
      name = "",
      onChange,
      ...rest
    } = props;

    const { classes, cx } = useStyles();

    const { i18n } = useTranslation();

    const handleChange: DateCalendarProps<Moment>["onChange"] = (
      valueMoment,
      selectionState
    ) => {
      let newValue = multiple
        ? Array.isArray(value)
          ? [...value]
          : []
        : (value ?? null);
      if (multiple) {
        const newValueIndex = (newValue as string[]).findIndex((v) =>
          moment(v).isSame(valueMoment!.format(format))
        );
        if (newValueIndex > -1) {
          (newValue as string[]).splice(newValueIndex, 1);
        } else (newValue as string[]).push(valueMoment!.format(format));
      } else newValue = valueMoment!.format(format);
      onChange &&
        onChange(
          {
            target: {
              name,
              value: newValue,
            },
          },
          newValue as any,
          selectionState
        );
    };

    return (
      <CalendarSelectContext.Provider
        value={{
          value,
          format,
          multiple,
        }}
      >
        <LocalizationProvider
          dateAdapter={OverriddenAdapterMoment}
          adapterLocale={i18n.language}
        >
          <AppPaper className={classes.paper}>
            <DateCalendar
              ref={ref}
              className={cx(classes.root, className)}
              showDaysOutsideCurrentMonth
              fixedWeekNumber={6}
              {...rest}
              dayOfWeekFormatter={(day) => day.format("ddd")}
              value={null}
              slotProps={{
                ...slotProps,
                nextIconButton: {
                  color: "text.primary",
                  borderRadius: "circular",
                  size: "small",
                  ...slotProps?.nextIconButton,
                } as AppIconButtonProps as any,
                previousIconButton: {
                  color: "text.primary",
                  borderRadius: "circular",
                  size: "small",
                  ...slotProps?.nextIconButton,
                } as AppIconButtonProps as any,
                switchViewButton: {
                  color: "text.primary",
                  borderRadius: "circular",
                  size: "small",
                  ...slotProps?.nextIconButton,
                } as AppIconButtonProps as any,
              }}
              slots={{
                day: CalendarSelectDay,
                leftArrowIcon: StyledArrowLeftIcon,
                rightArrowIcon: StyledArrowRightIcon,
                nextIconButton: AppIconButton,
                previousIconButton: AppIconButton,
                switchViewIcon: StyledSwitchViewIcon,
                switchViewButton: SwitchViewButton,
                ...slots,
              }}
              views={["day"]}
              shouldDisableDate={(day) => {
                return busyDays.some((busyDay) =>
                  moment(busyDay, format).isSame(
                    moment(day.format(format), format)
                  )
                );
              }}
              onChange={handleChange}
            />
          </AppPaper>
        </LocalizationProvider>
      </CalendarSelectContext.Provider>
    );
  }
);

export default CalendarSelect;
