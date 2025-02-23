import { alpha, darken } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "rotated">({
  name: "CalendarSelect",
  uniqId: "nDI3aS",
})((theme, _, classes) => {
  const mainColor = theme.palette.primary.main;

  return {
    root: {
      borderRadius: theme.shape.borderRadius,
      maxWidth: "100%",
      width: "100%",
      maxHeight: "initial",
      height: "auto",
      "& .MuiPickersArrowSwitcher-root": {
        // marginRight: -9,
      },
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.primary,
      },
      "& .MuiPickersCalendarHeader-root": {
        marginTop: theme.spacing(2.5),
        marginBottom: theme.spacing(1.25),
        paddingLeft: theme.spacing(2.5),
        paddingRight: theme.spacing(2.5),
      },
      "& .MuiPickersDay-dayOutsideMonth": {
        color: alpha(theme.palette.text.primary, 0.4),
      },
      "& .MuiPickersDay-root": {
        flex: 1,
        width: "auto",
        height: 72,
        border: `1px solid ${theme.palette.primary.main}`,
        alignItems: "flex-start",
        padding: theme.spacing(1),

        margin: 0,
        backgroundColor: "transparent",
        transition: theme.transitions.create(["background-color", "color"], {
          duration: theme.transitions.duration.shortest,
        }),
        // width: 30,
        minWidth: 30,
        // height: 30,
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
          backgroundColor: alpha(mainColor, theme.palette.action.hoverOpacity),
        },
        "&.MuiPickersDay-today": {
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        },
        "&.Mui-selected": {
          backgroundColor: mainColor,
          borderColor: mainColor,
          "&:hover": {
            borderColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
            backgroundColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
          },
          "& *": {
            color: `${theme.palette.common.white} !important`,
          },
        },
        "&.MuiPickersDay-dayOutsideMonth": {
          borderColor: theme.palette.text.secondary,
          backgroundColor: "#F5F5F5",
        },
        "&.Mui-disabled": {
          borderColor: "#999999",
          color: `#999999 !important`,
          "&.Mui-selected": {
            backgroundColor: mainColor,
            color: theme.palette.common.white,
          },
          "&.MuiPickersDay-dayOutsideMonth": {
            borderColor: theme.palette.text.secondary,
            backgroundColor: "#F5F5F5",
            "& *": {
              color: `#999999 !important`,
            },
          },
        },
        ...(theme.typography.subtitleSemi20 as any),
        [theme.breakpoints.down("sm")]: {
          flex: 1,
          width: 36,
          height: 36,
          border: `1px solid ${theme.palette.primary.main}`,
          alignItems: "center",
          padding: 0,
        },
      },
      "& .MuiYearPicker-root": {
        paddingBottom: theme.spacing(1.25),
        marginLeft: theme.spacing(-2.5),
        marginRight: theme.spacing(-2.5),
        paddingRight: theme.spacing(1.25),
        paddingLeft: theme.spacing(1.25),
      },
      "& .MuiPickersYear-yearButton": {
        backgroundColor: "transparent",
        transition: theme.transitions.create(["background-color", "color"], {
          duration: theme.transitions.duration.shortest,
        }),
        height: 36,
        width: 72 + 2,
        margin: "5px 0",
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
          borderColor: theme.palette.primary.main,
          backgroundColor: alpha(mainColor, theme.palette.action.hoverOpacity),
        },
        "&.Mui-selected": {
          backgroundColor: mainColor,
          borderColor: mainColor,
          color: theme.palette.common.white,
          "&:hover": {
            borderColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
            backgroundColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
          },
        },
        "&.Mui-disabled": {
          color: alpha(
            theme.palette.text.disabled,
            theme.palette.action.disabledOpacity
          ),
          "&.Mui-selected": {
            backgroundColor: mainColor,
            color: theme.palette.common.white,
          },
        },
        ...(theme.typography.subtitleSemi20 as any),
      },

      "& .MuiPickersMonth-monthButton": {
        backgroundColor: "transparent",
        transition: theme.transitions.create(["background-color", "color"], {
          duration: theme.transitions.duration.shortest,
        }),
        height: 36,
        width: 72 + 2,
        margin: theme.spacing(1.25, 0),
        borderRadius: theme.shape.borderRadius,
        "&:hover": {
          borderColor: theme.palette.primary.main,
          backgroundColor: alpha(mainColor, theme.palette.action.hoverOpacity),
        },
        "&.Mui-selected": {
          backgroundColor: mainColor,
          borderColor: mainColor,
          color: theme.palette.common.white,
          "&:hover": {
            borderColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
            backgroundColor: darken(
              mainColor,
              theme.palette.contrastThreshold / 10
            ),
          },
        },
        "&.Mui-disabled": {
          color: alpha(
            theme.palette.text.disabled,
            theme.palette.action.disabledOpacity
          ),
          "&.Mui-selected": {
            backgroundColor: mainColor,
            color: theme.palette.common.white,
          },
        },
        ...(theme.typography.subtitleSemi20 as any),
      },
      "& .MuiPickersCalendarHeader-label": {
        ...(theme.typography.subtitleMed20 as any),
      },
      [`& div[role="row"].MuiDayCalendar-header`]: {
        marginBottom: theme.spacing(1.25),
        "& .MuiDayCalendar-weekDayLabel": {
          flex: 1,
          width: "auto",
        },
      },
      "& .MuiYearCalendar-root": {
        maxWidth: "100%",
        paddingBottom: theme.spacing(1.25),
      },
      "& .MuiDayCalendar-weekDayLabel": {
        color: theme.palette.text.primary,
        margin: 0,
        width: 30,
        height: 30,
        ...(theme.typography.subtitleSemi24 as any),
        whiteSpace: "nowrap",
      },
      [`& div[role="row"]`]: {
        gap: theme.spacing(1.25),
        margin: 0,
        [theme.breakpoints.down(30 * 7 + 10 * 6 + 16 * 4)]: {
          gap: theme.spacing(0.5),
        },
      },
      [`& div[role="rowgroup"]`]: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(1.25),
        [theme.breakpoints.down(30 * 7 + 10 * 6 + 16 * 4)]: {
          gap: theme.spacing(0),
        },
      },
      [`& .MuiDayCalendar-monthContainer`]: {
        padding: "0 2px",
        position: "relative",
      },
      [`& .MuiPickersSlideTransition-root[role="presentation"]`]: {
        // minHeight: 230 + 20,
        minHeight: "initial",
      },
    },
    switchViewButton: {
      rotate: "0deg",
      transition: theme.transitions.create(["rotate"]),
      [`&.${classes.rotated}`]: {
        rotate: "180deg",
      },
    },
    rotated: {},
    paper: {
      padding: theme.spacing(3),
    },
    pickersDay: {
      display: "flex",
      flexDirection: "column",
    },
    dayTag: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

export default useStyles;
