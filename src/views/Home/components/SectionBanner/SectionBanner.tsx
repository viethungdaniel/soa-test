import AppSwiper from "@/components/AppSwiper";
import useStyles from "./SectionBanner.styles";
import { useAppSelector } from "@/hooks";
import { SwiperClass, SwiperSlide } from "swiper/react";
import { Box, ButtonBase, Divider } from "@mui/material";
import AppImage from "@/components/AppImage";
import { useState } from "react";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import AppContainer from "@/components/AppContainer";

import FishingSvg from "@@/public/images/svgs/fishing.svg";
import CrosshairSvg from "@@/public/images/svgs/crosshair.svg";
import MountainsSvg from "@@/public/images/svgs/mountains.svg";
import TopLightSvg from "@@/public/images/pages/home/top-light.svg";

const menuLogoSvgs = [MountainsSvg, FishingSvg, CrosshairSvg];

const SectionBanner = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const { classes, theme, cx } = useStyles();

  const $s_bannerMenus = useAppSelector(
    (state) => state.pageContent.homepageContent?.banner_menu
  );

  return (
    <div className={classes.root}>
      <AppSwiper
        speed={theme.transitions.duration.standard}
        spaceBetween={0}
        initialSlide={slideIndex}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setSlideIndex(swiper.activeIndex);
        }}
      >
        {($s_bannerMenus || []).map((bannerMenu, bannerMenuIndex) => (
          <SwiperSlide key={`index-${bannerMenuIndex}`}>
            <Box
              className={classes.bannerSwiperSlidePhoto}
              sx={{ display: "flex" }}
            >
              <AppImage
                src={"/images/pages/home/hero-banner.jpg"}
                alt={bannerMenu || "Home banner"}
                fill
              />
            </Box>
          </SwiperSlide>
        ))}
      </AppSwiper>
      <div className={classes.bannerTitle}>
        <AppContainer>
          <div className={classes.bannerTitleContainer}>
            <div
              className={classes.bannerTitleLight}
              style={{
                left: `calc(100%/3 * ${slideIndex})`,
              }}
            >
              <TopLightSvg />
            </div>
            <Divider />
            <div className={classes.bannerTitleList}>
              {($s_bannerMenus || [])?.map((bannerMenu, bannerMenuIndex) => (
                <ButtonBase
                  key={`index-${bannerMenuIndex}`}
                  className={cx(classes.bannerTitleListItem, {
                    [classes.active]: slideIndex === bannerMenuIndex,
                  })}
                  onClick={() => {
                    swiper?.slideTo(bannerMenuIndex);
                  }}
                >
                  <AppSvgIcon
                    component={menuLogoSvgs[bannerMenuIndex] ?? undefined}
                  />
                  <AppTypography
                    className={classes.bannerTitleListItemText}
                    variant="bodySemi18"
                  >
                    {bannerMenu}
                  </AppTypography>
                </ButtonBase>
              ))}
            </div>
          </div>
        </AppContainer>
      </div>
    </div>
  );
};

export default SectionBanner;
