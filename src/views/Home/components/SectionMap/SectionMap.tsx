import { useAppSelector } from "@/hooks";

import useStyles from "./SectionMap.styles";
import HomeTitle from "../HomeTitle";
import AppContainer from "@/components/AppContainer";
import AppButton from "@/components/AppButton";

import FishingSvg from "@@/public/images/svgs/fishing.svg";
import CrosshairSvg from "@@/public/images/svgs/crosshair.svg";
import MountainsSvg from "@@/public/images/svgs/mountains.svg";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";

import AppImage from "@/components/AppImage";
import { useState } from "react";

const menuLogoSvgs = [MountainsSvg, FishingSvg, CrosshairSvg];

const SectionMap = () => {
  const [selectedLocationIndex, setSelectedLocationIndex] =
    useState<number>(-1);

  const { classes, cx } = useStyles();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );
  const cases = $s_homepageContent?.bloc_2?.cases || [];

  return (
    <div className={classes.root}>
      <AppContainer>
        <HomeTitle>{$s_homepageContent?.bloc_2?.title}</HomeTitle>
        <div className={classes.actions}>
          {cases.map((_case, index) => (
            <AppButton
              className={cx({
                [classes.actionButton]: selectedLocationIndex !== index,
              })}
              startIcon={
                <AppSvgIcon
                  fontSize="inherit"
                  component={menuLogoSvgs[index]}
                />
              }
              key={index}
              borderRadius="circular"
              color="primary.main"
              onClick={() => {
                setSelectedLocationIndex(
                  selectedLocationIndex > -1 && selectedLocationIndex === index
                    ? -1
                    : index
                );
              }}
              {...(selectedLocationIndex === index
                ? {
                    variant: "contained",
                  }
                : {
                    variant: "outlined",
                  })}
            >
              <AppTypography
                component="span"
                color={selectedLocationIndex < 0 ? "text.primary" : "inherit"}
                lineHeight="inherit"
              >
                {_case}
              </AppTypography>
            </AppButton>
          ))}
        </div>
        <div
          className={cx(classes.map, {
            [classes.mapMountainZoom]: selectedLocationIndex === 0,
            [classes.mapFishZoom]: selectedLocationIndex === 1,
            [classes.mapCrosshairZoom]: selectedLocationIndex === 2,
          })}
        >
          <div className={classes.mapWrapper}>
            <div className={classes.mapImage}>
              <AppImage
                className={classes.mapImageDesktop}
                src="/images/pages/home/map.jpg"
                fill
                objectFit="contain"
                objectPosition="center"
              />
              <AppImage
                className={classes.mapImageTablet}
                src="/images/pages/home/map-tablet.jpg"
                fill
                objectFit="contain"
                objectPosition="center"
              />
              <AppImage
                className={classes.mapImageMobile}
                src="/images/pages/home/map-mobile.jpg"
                fill
                objectFit="contain"
                objectPosition="center"
              />
              <span
                className={classes.mountainButton}
                onClick={() => {
                  setSelectedLocationIndex(
                    selectedLocationIndex > -1 && selectedLocationIndex === 0
                      ? -1
                      : 0
                  );
                }}
              />
              <span
                className={classes.fishButton}
                onClick={() => {
                  setSelectedLocationIndex(
                    selectedLocationIndex > -1 && selectedLocationIndex === 1
                      ? -1
                      : 1
                  );
                }}
              />
              <span
                className={classes.crosshairButton}
                onClick={() => {
                  setSelectedLocationIndex(
                    selectedLocationIndex > -1 && selectedLocationIndex === 2
                      ? -1
                      : 2
                  );
                }}
              />
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default SectionMap;
