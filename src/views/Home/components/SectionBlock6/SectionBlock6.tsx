import AppContainer from "@/components/AppContainer";
import { Grid2, alpha } from "@mui/material";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import AppImage from "@/components/AppImage";
import { Fragment } from "react";

import ArrowUpRightIcon from "@@/public/images/icons/arrow-up-right.svg";
import InstagramOutlinedIcon from "@@/public/images/icons/instagram-outlined.svg";

import { useAppMomentWithLocale, useAppSelector } from "@/hooks";

import useStyles from "./SectionBlock6.styles";

const reviewImages = [
  "/images/pages/home/block5-thumb.jpg",
  "/images/pages/home/block5-card-1.jpg",
  "/images/pages/home/block5-card-2.jpg",
  "/images/pages/home/block5-card-3.jpg",
  "/images/pages/home/block5-card-4.jpg",
];

const SectionBlock6 = () => {
  const { classes, theme } = useStyles();

  const { momentWithLocale } = useAppMomentWithLocale();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <div className={classes.root}>
      <AppContainer>
        <Grid2
          alignItems="center"
          container
          spacing={{ xs: 0.5, sm: 4, md: "60px", lg: "80px" }}
        >
          <Grid2 className={classes.textGrid} size={{ xs: 12, sm: 6 }}>
            <AppTypography
              sx={{ color: alpha(theme.palette.text.primary, 0.8) }}
            >
              {$s_homepageContent?.bloc_5?.text}
            </AppTypography>
          </Grid2>
          <Grid2 className={classes.titleGrid} size={{ xs: 12, sm: 6 }}>
            <AppTypography
              variant="headSemi40"
              textTransform="uppercase"
              sx={{ color: alpha(theme.palette.text.primary, 0.8) }}
            >
              {$s_homepageContent?.bloc_5?.title}
            </AppTypography>
          </Grid2>
        </Grid2>

        <div className={classes.casesList}>
          <Grid2 container spacing={3}>
            {($s_homepageContent?.bloc_5?.reviews || []).map(
              (review, index) => (
                <Fragment key={`index-${index}`}>
                  {index === 0 && (
                    <Grid2 size={{ xs: 12 }}>
                      <div className={classes.caseCardDetail}>
                        <AppImage
                          fill
                          src={reviewImages[index] || ""}
                          objectFit="cover"
                          objectPosition="center"
                        />
                        <div className={classes.caseCardDetailContent}>
                          <AppImage
                            className={classes.caseCardDetailContentPhoto}
                            src="/images/pages/home/block5-thumb.jpg"
                            width={500}
                            height={500}
                          />
                          <div className={classes.caseCardDetailContentTitle}>
                            <AppTypography
                              color="common.black"
                              variant="subtitleSemi24"
                              flex={1}
                            >
                              {review.author}
                            </AppTypography>
                            <div
                              className={classes.caseCardDetailContentTitleChip}
                            >
                              {momentWithLocale(
                                review.date,
                                "DD/MM/YYYY"
                              ).format("DD MMM YYYY")}
                            </div>
                          </div>
                          <AppTypography color="#666">
                            {review.review}
                          </AppTypography>
                        </div>
                      </div>
                    </Grid2>
                  )}
                  {index !== 0 && (
                    <Grid2 size={{ xs: 6, md: 3 }}>
                      <div className={classes.caseCardItem}>
                        <AppImage fill src={reviewImages[index] || ""} />
                        <div className={classes.caseCardItemFooter}>
                          <AppSvgIcon
                            component={InstagramOutlinedIcon}
                            className={classes.caseCardItemFooterIcon}
                          />
                          <AppTypography
                            className={classes.caseCardItemFooterText}
                            noWrap
                          >
                            {review.author}
                          </AppTypography>
                          <AppSvgIcon
                            component={ArrowUpRightIcon}
                            className={classes.caseCardItemFooterIcon}
                          />
                        </div>
                      </div>
                    </Grid2>
                  )}
                </Fragment>
              )
            )}
          </Grid2>
        </div>

        <AppTypography
          className={classes.footerCaption}
          variant="subtitleReg24"
          color="#666"
        >
          {$s_homepageContent?.bloc_5?.footer}
        </AppTypography>
      </AppContainer>
    </div>
  );
};

export default SectionBlock6;
