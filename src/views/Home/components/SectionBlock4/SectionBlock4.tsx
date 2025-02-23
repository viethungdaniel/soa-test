import AppContainer from "@/components/AppContainer";
import AppButton from "@/components/AppButton";
import { Box, useMediaQuery } from "@mui/material";
import AppSwiper from "@/components/AppSwiper";
import { SwiperSlide } from "swiper/react";
import ArrowRightIcon from "@@/public/images/icons/arrow-right.svg";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import AppImage from "@/components/AppImage";

import { useAppSelector } from "@/hooks";

import useStyles from "./SectionBlock4.styles";

const cardImages = [
  "/images/pages/home/block2-card-1.png",
  "/images/pages/home/block2-card-2.png",
  "/images/pages/home/block2-card-3.png",
  "/images/pages/home/block2-card-4.png",
];

const SectionBlock1 = () => {
  const { classes, theme } = useStyles();

  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <div className={classes.root}>
      <AppContainer>
        <Box display="flex" alignItems="center" mb={3}>
          <AppTypography color="primary.main" variant="headSemi52" flex={1}>
            {$s_homepageContent?.bloc_3?.title}
          </AppTypography>
          {!isSmDown && (
            <AppButton
              color="text.secondary"
              edge={"end"}
              borderRadius="circular"
              endIcon={<AppSvgIcon component={ArrowRightIcon} />}
            >
              {$s_homepageContent?.bloc_3?.more_info}
            </AppButton>
          )}
        </Box>
        <AppSwiper
          rootProps={{
            className: classes.serviceSwiperContainer,
          }}
          className={classes.serviceSwiper}
          speed={1000}
          spaceBetween={24}
          slidesPerView={"auto"}
          pagination={true}
        >
          {($s_homepageContent?.bloc_3?.cases || []).map((_case, index) => (
            <SwiperSlide className={classes.serviceSwiperSlide} key={index}>
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
              </div>
            </SwiperSlide>
          ))}
        </AppSwiper>
        {isSmDown && (
          <AppButton
            fullWidth
            variant="contained"
            borderRadius="circular"
            color="primary.main"
            endIcon={<AppSvgIcon component={ArrowRightIcon} />}
            sx={{ mt: 3 }}
          >
            {$s_homepageContent?.bloc_3?.more_info}
          </AppButton>
        )}
      </AppContainer>
    </div>
  );
};

export default SectionBlock1;
