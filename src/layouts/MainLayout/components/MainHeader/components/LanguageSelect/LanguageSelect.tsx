import { appStorageService } from "@/services";
import { localeConfig } from "@/utils/config";

import AppImage from "@/components/AppImage";
import AppIconButton from "@/components/AppIconButton";
import AppMenu from "@/components/AppMenu";
import AppMenuItem from "@/components/AppMenuItem";
import AppListItemIcon from "@/components/AppListItemIcon";
import AppListItemText from "@/components/AppListItemText";
import AppSvgIcon from "@/components/AppSvgIcon";

import KeyboardArrowDown from "@@/public/images/icons/keyboard-arrow-down.svg";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";

import useStyles from "./LanguageSelect.styles";

const LanguageSelect = () => {
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] =
    useState<HTMLElement | null>(null);
  const languageMenuOpen = !!languageMenuAnchorEl;

  const router = useRouter();

  const { i18n } = useTranslation();

  const { classes, cx } = useStyles();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const locale = event.target.value;
    router.push(router.asPath, undefined, { locale });
    window.NextPublic.lang = locale as any;
    appStorageService.saveCookieLocale(locale);
    setLanguageMenuAnchorEl(null);
  };

  const selectedLanguage =
    localeConfig.localeToConfigMap[i18n.language] ??
    localeConfig.localeToConfigMap["en-US"];

  const handleLanguageMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageMenuAnchorEl(null);
  };

  return (
    <>
      <AppIconButton
        className={cx(!!languageMenuOpen && classes.expanded)}
        variant="text"
        edge="end"
        color="divider"
        onClick={handleLanguageMenuOpen}
      >
        <AppImage
          src={selectedLanguage?.imageSrc}
          alt={`${selectedLanguage?.label} - language flag`}
          defaultPlaceholderVariant="none"
          width={24}
          height={24}
          unoptimized
        />
        <AppSvgIcon
          className={classes.arrowIcon}
          component={KeyboardArrowDown}
        />
      </AppIconButton>
      <AppMenu
        anchorEl={languageMenuAnchorEl}
        open={languageMenuOpen}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleLanguageMenuClose}
      >
        {localeConfig.localeConfigs.map((localeConfig) => (
          <AppMenuItem
            selected={localeConfig.locale === i18n.language}
            key={localeConfig.locale}
            value={localeConfig.locale}
            onClick={() =>
              handleLanguageChange({
                target: {
                  value: localeConfig.locale,
                },
              } as any)
            }
          >
            <AppListItemIcon>
              <AppImage
                src={localeConfig?.imageSrc}
                alt={`${localeConfig?.label} - language flag`}
                defaultPlaceholderVariant="none"
                width={24}
                height={24}
                unoptimized
              />
            </AppListItemIcon>
            <AppListItemText primary={localeConfig.label} />
          </AppMenuItem>
        ))}
      </AppMenu>
    </>
  );
};

export default LanguageSelect;
