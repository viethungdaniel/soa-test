import { commonHelpers } from "@/utils/helpers";

import { AppBar, useMediaQuery } from "@mui/material";
import AppContainer from "@/components/AppContainer";
import AppLink from "@/components/AppLink";
import MainHeaderAppBarToolbar from "@/components/MainHeaderToolbar";
import AppImage from "@/components/AppImage";
import Sidebar from "./components/Sidebar";
import AppButton from "@/components/AppButton";
import AppSvgIcon from "@/components/AppSvgIcon";
import LanguageSelect from "./components/LanguageSelect";

import ArrowUpRightIcon from "@@/public/images/icons/arrow-up-right.svg";
import FishingSvg from "@@/public/images/svgs/fishing.svg";
import CrosshairSvg from "@@/public/images/svgs/crosshair.svg";
import MountainsSvg from "@@/public/images/svgs/mountains.svg";

import { useTranslation } from "next-i18next";
import { useAppSelector } from "@/hooks";
import { useMemo } from "react";

import MainHeaderContext from "@/layouts/MainLayout/components/MainHeader/MainHeader.context";

import useStyles from "./MainHeader.styles";

import type { MainHeaderContextValue } from "@/layouts/MainLayout/components/MainHeader/MainHeader.context";

const MainHeader = () => {
  const { classes, theme } = useStyles();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { t } = useTranslation();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  const navMenus = useMemo<MainHeaderContextValue["navMenus"]>(() => {
    return (
      $s_homepageContent?.head_menu?.map((headMenu) => {
        const slug = commonHelpers.generateSlug(headMenu);
        return {
          href: `/${slug}`,
          title: headMenu,
          pathnameReg: new RegExp(`^/${slug}`),
        };
      }) || []
    );
  }, [$s_homepageContent]);

  return (
    <MainHeaderContext.Provider
      value={{
        navMenus,
      }}
    >
      <AppBar
        component="header"
        className={classes.root}
        elevation={0}
        color="default"
      >
        <AppContainer>
          <MainHeaderAppBarToolbar disableGutters>
            <AppLink
              href="/"
              underline="none"
              hoverColor="none"
              display="flex"
              minWidth={40}
            >
              <AppImage
                className={classes.logoImg}
                width={500}
                height={500}
                defaultPlaceholderVariant="none"
                src="/images/logo.png"
                unoptimized
              />
            </AppLink>
            <div className={classes.menuList}>
              {navMenus.map((navMenu, index) => (
                <AppLink
                  key={`index-${index}`}
                  color="inherit"
                  hoverColor="none"
                  href={navMenu.href}
                  noWrap
                >
                  {navMenu.title}
                </AppLink>
              ))}
            </div>
            <div className={classes.headActions}>
              <LanguageSelect />
              {isMdDown && <Sidebar />}

              {!isMdDown && (
                <>
                  <AppSvgIcon
                    component={MountainsSvg}
                    color="common.white"
                    sx={{ fontSize: 28 }}
                  />
                  <AppSvgIcon
                    component={FishingSvg}
                    color="common.white"
                    sx={{ fontSize: 28 }}
                  />
                  <AppSvgIcon
                    component={CrosshairSvg}
                    color="common.white"
                    sx={{ fontSize: 28 }}
                  />
                  <AppButton
                    variant="contained"
                    borderRadius="circular"
                    noWrap
                    endIcon={
                      <AppSvgIcon
                        fontSize="inherit"
                        component={ArrowUpRightIcon}
                      />
                    }
                  >
                    {t("bookNow")}
                  </AppButton>
                </>
              )}
            </div>
          </MainHeaderAppBarToolbar>
        </AppContainer>
      </AppBar>
    </MainHeaderContext.Provider>
  );
};

export default MainHeader;
