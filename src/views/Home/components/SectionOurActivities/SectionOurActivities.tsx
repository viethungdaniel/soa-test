import { alertDialogService, loadingScreenOverlayService } from "@/services";
import { formikHelpers } from "@/utils/helpers";
import { appYup } from "@/libs";
import { useAppSelector, useIsMounted } from "@/hooks";

import { FastField, Form, Formik, useFormikContext } from "formik";
import { Box } from "@mui/material";
import AppTextField from "@/components/AppTextField";
import AppContainer from "@/components/AppContainer";
import AppButton from "@/components/AppButton";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import HomeTitle from "../HomeTitle";
import AlertDialogContentStatus from "@/components/AlertDialogContentStatus";
import CalendarSelect from "./components/CalendarSelect";
import AppFormHelperText from "@/components/AppFormHelperText";
import FileInput from "./components/FileInput";

import SendIcon from "@@/public/images/icons/send.svg";

import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

import useStyles from "./SectionOurActivities.styles";

import type { FastFieldProps, FormikProps } from "formik";

type ContactFormValues = {
  date: string;
  name: string;
  email: string;
  message: string;
  file: File | null;
};

const ClearButton = () => {
  const { resetForm, initialValues } = useFormikContext<ContactFormValues>();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <AppButton
      variant="outlined"
      color="text.primary"
      borderRadius="circular"
      onClick={() => {
        resetForm({
          values: {
            ...initialValues,
          },
          errors: {},
          touched: {},
          submitCount: 0,
        });
      }}
    >
      {$s_homepageContent?.bloc_2_2?.btn_5}
    </AppButton>
  );
};

const SubmitButton = () => {
  const { values, validateForm, handleSubmit } =
    useFormikContext<ContactFormValues>();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <AppButton
      variant="contained"
      color="primary"
      type="submit"
      borderRadius="circular"
      endIcon={
        <AppSvgIcon component={SendIcon} fontSize="inherit" color="inherit" />
      }
      onClick={formikHelpers.handleValidateAndSubmit({
        handleSubmit,
        validateForm,
        values,
      })}
    >
      {$s_homepageContent?.bloc_2_2?.btn_6}
    </AppButton>
  );
};

const SimpleForm = () => {
  const { classes } = useStyles();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <Form className={classes.root}>
      <AppContainer>
        <HomeTitle>{$s_homepageContent?.bloc_2_2?.title}</HomeTitle>
        <Box data-name="date" mb={3}>
          <FastField name={`date`}>
            {({ field, form, meta }: FastFieldProps) => (
              <>
                <CalendarSelect {...field} />
                {!!formikHelpers.showError({
                  error: meta.error,
                  touched: meta.touched,
                  submitCount: form.submitCount,
                }) && (
                  <AppFormHelperText error>
                    {formikHelpers.showError({
                      error: meta.error,
                      touched: meta.touched,
                      submitCount: form.submitCount,
                    })}
                  </AppFormHelperText>
                )}
              </>
            )}
          </FastField>
        </Box>
        <div className={classes.fields}>
          <AppTypography lineHeight="40px" variant="subtitleReg24">
            {$s_homepageContent?.bloc_2_2?.btn_1?.[0]}:
          </AppTypography>
          <FastField name="name">
            {({ field, form, meta }: FastFieldProps) => (
              <AppTextField
                bgColor="common.white"
                borderRadius="circular"
                fullWidth
                placeholder={$s_homepageContent?.bloc_2_2?.btn_1?.[1]}
                error={
                  !!formikHelpers.showError({
                    error: meta.error,
                    submitCount: form.submitCount,
                    touched: meta.touched,
                  })
                }
                helperText={formikHelpers.showError({
                  error: meta.error,
                  submitCount: form.submitCount,
                  touched: meta.touched,
                })}
                {...field}
              />
            )}
          </FastField>

          <AppTypography lineHeight="40px" variant="subtitleReg24">
            {$s_homepageContent?.bloc_2_2?.btn_2?.[0]}:
          </AppTypography>
          <FastField name="email">
            {({ field, form, meta }: FastFieldProps) => (
              <AppTextField
                bgColor="common.white"
                borderRadius="circular"
                fullWidth
                placeholder={$s_homepageContent?.bloc_2_2?.btn_2?.[1]}
                type="email"
                error={
                  !!formikHelpers.showError({
                    error: meta.error,
                    submitCount: form.submitCount,
                    touched: meta.touched,
                  })
                }
                helperText={formikHelpers.showError({
                  error: meta.error,
                  submitCount: form.submitCount,
                  touched: meta.touched,
                })}
                {...field}
              />
            )}
          </FastField>

          <AppTypography lineHeight="40px" variant="subtitleReg24">
            {$s_homepageContent?.bloc_2_2?.btn_3}:
          </AppTypography>
          <FastField name="message">
            {({ field, form, meta }: FastFieldProps) => (
              <AppTextField
                bgColor="common.white"
                multiline
                minRows={5}
                maxRows={8}
                fullWidth
                error={
                  !!formikHelpers.showError({
                    error: meta.error,
                    submitCount: form.submitCount,
                    touched: meta.touched,
                  })
                }
                helperText={formikHelpers.showError({
                  error: meta.error,
                  submitCount: form.submitCount,
                  touched: meta.touched,
                })}
                {...field}
              />
            )}
          </FastField>

          <AppTypography lineHeight="40px" variant="subtitleReg24">
            {$s_homepageContent?.bloc_2_2?.btn_4?.[0]}:
          </AppTypography>
          <FastField name="file">
            {({ field }: FastFieldProps) => <FileInput {...field} />}
          </FastField>
        </div>

        <div className={classes.actions}>
          <ClearButton />
          <SubmitButton />
        </div>
      </AppContainer>
    </Form>
  );
};

const SectionOurActivities = () => {
  const formikRef = useRef<FormikProps<ContactFormValues> | null>(null);

  const { t, i18n } = useTranslation();

  const initialValues: ContactFormValues = {
    date: "",
    email: "",
    message: "",
    name: "",
    file: null,
  };

  const validationSchema = appYup.object().shape({
    date: appYup.string().required(t("dateIsRequired")),
    name: appYup.string().required(t("nameIsRequired")),
    email: appYup
      .string()
      .email(t("emailIsInvalid"))
      .required(t("emailIsRequired")),
    message: appYup.string().required(t("messageIsRequired")),
  });

  const handleFormSubmit = async (_: ContactFormValues) => {
    loadingScreenOverlayService.fire(`${t("submitting")}...`);

    alertDialogService.fire({
      content: (
        <AlertDialogContentStatus
          variant="succeeded"
          title={t("thankYou")}
          content={t("weHaveReceivedYourContactAndWillResponseSoon")}
        />
      ),
      cancelButtonProps: {
        show: false,
      },
    });
    formikRef.current?.resetForm({
      values: {
        ...initialValues,
      },
      errors: {},
      touched: {},
      submitCount: 0,
    });

    loadingScreenOverlayService.close();
  };

  useEffect(() => {
    if (!isMounted()) return;
    formikRef.current?.validateForm();
  }, [i18n]);

  const isMounted = useIsMounted();

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <SimpleForm />
    </Formik>
  );
};

export default SectionOurActivities;
