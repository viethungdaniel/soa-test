import { enUS, frFR } from "@mui/material/locale";

import { poppinsFonts } from "@/utils/fonts";
import * as envConfig from "./env.config";

export const DEFAULT_LOCALE = envConfig.DEFAULT_LOCALE;

export const DEFAULT_FONT_VARIABLE = poppinsFonts.poppins.variable;

export const localeToConfigMap = {
  "en-US": {
    label: "English",
    themeLocale: enUS,
    font: poppinsFonts.poppins,
    imageSrc: "/images/svgs/en-us-flag.svg",
    requestedValue: "en",
  },
  "fr-FR": {
    label: "Français",
    themeLocale: frFR,
    font: poppinsFonts.poppins,
    imageSrc: "/images/svgs/fr-fr-flag.svg",
    requestedValue: "fr",
  },
} as Record<
  string,
  {
    label: string;
    themeLocale: typeof enUS;
    font: typeof poppinsFonts.poppins;
    imageSrc: string;
    requestedValue: string;
  }
>;

export const localeConfigs = Object.entries(localeToConfigMap).map(
  ([locale, config]) => ({
    locale,
    ...config,
  })
);

export const locales = Object.entries(localeToConfigMap).map(
  ([locale]) => locale
);
