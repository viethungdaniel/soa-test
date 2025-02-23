import AppContainer from "@/components/AppContainer";
import AppButton from "@/components/AppButton";
import AppTypography from "@/components/AppTypography";
import { Box, alpha } from "@mui/material";

import { useAppSelector } from "@/hooks";

import useStyles from "./SectionExplore.styles";

const SectionExplore = () => {
  const { classes, theme } = useStyles();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <div className={classes.root}>
      <AppContainer>
        <AppTypography color="secondary.main" variant="headSemi52">
          {$s_homepageContent?.bloc_6?.title}
        </AppTypography>
        <AppTypography
          variant="headSemi52"
          sx={{
            color: alpha(theme.palette.secondary.main, 0.5),
          }}
          mb={3}
        >
          {$s_homepageContent?.bloc_6?.subtitle}
        </AppTypography>
        <AppTypography
          color="secondary.main"
          variant="subtitleReg24"
          mb={{ xs: 3, sm: "40px" }}
        >
          {$s_homepageContent?.bloc_6?.text}
        </AppTypography>
        <Box display={"flex"} justifyContent="center">
          <AppButton
            variant="contained"
            color="primary.main"
            borderRadius="circular"
            noWrap
          >
            {$s_homepageContent?.bloc_6?.button}
          </AppButton>
        </Box>
      </AppContainer>
    </div>
  );
};

export default SectionExplore;
