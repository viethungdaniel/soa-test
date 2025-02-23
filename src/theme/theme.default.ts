import { createTheme } from "@mui/material/styles";

import generalStyles from "./general.styles";
import overridesStyles from "./overrides.styles";
import customStyles from "./custom.styles";

import type { TypographyOptions } from "@mui/material/styles/createTypography";

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 832,
      lg: 1288,
      xl: 1920,
    },
    keys: ["xs", "sm", "md", "lg", "xl"],
  },
});

const fontFamily = [`var(--poppins-font)`, "sans-serif"].join(", ");

const typography: TypographyOptions = {
  fontFamily: fontFamily,
  fontWeightBlack: 900,
  fontWeightExtraBold: 800,
  fontWeightBold: 700,
  fontWeightSemiBold: 600,
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  fontWeightLight: 300,
  htmlFontSize: 16,
  fontSize: 14,
  body1: undefined,
  body2: undefined,
  caption: undefined,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  overline: undefined,
  subtitle1: undefined,
  subtitle2: undefined,

  button: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(18),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    textTransform: "initial",
  },

  captionReg12: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  captionMed12: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  captionSemi12: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },

  bodyReg14: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodyMed14: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodySemi14: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },

  bodyReg16: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  bodyMed16: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  bodySemi16: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },

  bodyReg18: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(18),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  bodyMed18: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(18),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  bodySemi18: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(18),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },

  subtitleReg20: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  subtitleMed20: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  subtitleSemi20: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },

  subtitleReg22: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(22),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  subtitleMed22: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(22),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  subtitleSemi22: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(22),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },

  subtitleReg24: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  subtitleMed24: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },
  subtitleSemi24: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(18),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(14),
    },
  },

  titleReg28: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(28),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  titleMed28: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(28),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  titleSemi28: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(28),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },

  headSemi40: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(40),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },

  headSemi52: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(52),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("lg")]: {
      fontSize: muiTheme.typography.pxToRem(40),
    },
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(32),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },
};

const appColors = {
  darkNeutral: "#0A0A0A",
  neutral: "#333333",
  lightNeutral: "#8F8F8F",
  lighterNeutral: "#E0E0E0",
  lightestNeutral: "#F5F5F5",
};

const defaultTheme = createTheme({
  ...muiTheme,
  palette: {
    primary: {
      main: "#F2542D",
      contrastText: muiTheme.palette.common.white,
    },
    secondary: {
      main: "#562C2C",
      contrastText: muiTheme.palette.common.white,
    },
    success: {
      main: "#72B043",
      contrastText: muiTheme.palette.common.white,
    },
    error: {
      main: "#E12729",
      contrastText: muiTheme.palette.common.white,
    },
    info: {
      main: "#1E88F9",
      contrastText: muiTheme.palette.common.white,
    },
    warning: {
      main: "#F8CC1B",
      contrastText: muiTheme.palette.common.white,
    },
    background: {
      default: appColors.lightestNeutral,
    },
    divider: "#BBBBBB",
    text: {
      primary: "#562C2C",
      secondary: "#999999",
      disabled: appColors.lighterNeutral,
    },
    common: {
      ...appColors,
    },
    action: {
      tonalOpacity: 0.2,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParams: any) => `
				${generalStyles(themeParams)}
				${overridesStyles(themeParams)}
        ${customStyles(themeParams)}
			`,
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 1350,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "bodyReg18",
        variantMapping: {
          captionReg12: "p",
          captionMed12: "p",
          captionSemi12: "p",

          bodyReg14: "p",
          bodyMed14: "p",
          bodySemi14: "p",

          bodyReg16: "p",
          bodyMed16: "p",
          bodySemi16: "p",

          bodyReg18: "p",
          bodyMed18: "p",
          bodySemi18: "p",

          subtitleReg20: "p",
          subtitleMed20: "p",
          subtitleSemi20: "p",

          subtitleReg22: "p",
          subtitleMed22: "p",
          subtitleSemi22: "p",

          subtitleReg24: "p",
          subtitleMed24: "p",
          subtitleSemi24: "p",

          titleReg28: "p",
          titleMed28: "p",
          titleSemi28: "p",

          headSemi40: "p",

          headSemi52: "p",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        color: appColors.darkNeutral,
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: { ...typography },
  zIndex: {
    backdrop: 1350,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  transitions: {
    duration: {
      switchMedium: 500,
    },
  },
  app: {
    shadows: {
      bottomAppBar: "0px -11px 24px -4px rgba(27, 46, 94, 0.08)",
      menu: "4px 4px 12px 0px rgba(34, 34, 34, 0.05)",
      paper: "4px 4px 12px 0px rgba(34, 34, 34, 0.05)",
    },
    sizes: {
      large: 50,
      medium: 40,
      small: 30,
    },
    spacings: {
      gutters: 24,
      guttersSmall: 16,
    },
    utils: {
      remToPx: (rem) =>
        (parseFloat(rem) * typography.htmlFontSize!) /
        (typography.fontSize! / 14),
    },
  },
});

export default defaultTheme;
