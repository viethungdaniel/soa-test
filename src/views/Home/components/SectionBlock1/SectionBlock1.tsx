import HomeTitle from "../HomeTitle";
import AppContainer from "@/components/AppContainer";
import AppButton from "@/components/AppButton";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import ArrowUpRightIcon from "@@/public/images/icons/arrow-up-right.svg";
import AppImage from "@/components/AppImage";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";

import { useAppSelector } from "@/hooks";

import useStyles from "./SectionBlock1.styles";

const cardImages = [
  "/images/pages/home/block1-card-1.jpg",
  "/images/pages/home/block1-card-2.jpg",
  "/images/pages/home/block1-card-3.jpg",
];

const SectionBlock1 = () => {
  const { classes } = useStyles();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <div className={classes.root}>
      <AppContainer>
        <HomeTitle>{$s_homepageContent?.bloc_1?.title}</HomeTitle>
        <AppTypography
          color="secondary.main"
          textAlign="center"
          variant="subtitleReg24"
          mb={3}
        >
          {$s_homepageContent?.bloc_1?.subtitle}
        </AppTypography>

        <div className={classes.cardList}>
          <Grid container spacing={3}>
            {($s_homepageContent?.bloc_1?.cases || []).map((_case, index) => (
              <Grid key={index} size={{ xs: 12, sm: 4 }}>
                <div className={classes.cardListItem}>
                  <div className={classes.cardListItemPhoto}>
                    <AppImage
                      src={cardImages[index] || "/images/logo.png"}
                      fill
                    />
                  </div>
                  <AppTypography
                    color="primary.main"
                    variant="subtitleMed20"
                    noWrap
                    mb={0.5}
                  >
                    {_case.category}
                  </AppTypography>
                  <AppTypography variant="titleMed28" noWrap mb={2}>
                    {_case.tagline}
                  </AppTypography>
                  <AppTypography
                    className={classes.cardListItemDescription}
                    mb={2}
                  >
                    {_case.description}
                  </AppTypography>
                  <Box display="flex">
                    <AppButton
                      color="text.primary"
                      variant="outlined"
                      noWrap
                      borderRadius="circular"
                      endIcon={
                        <AppSvgIcon
                          component={ArrowUpRightIcon}
                          fontSize="inherit"
                          color="inherit"
                        />
                      }
                    >
                      {_case.cta}
                    </AppButton>
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </AppContainer>
    </div>
  );
};

export default SectionBlock1;
