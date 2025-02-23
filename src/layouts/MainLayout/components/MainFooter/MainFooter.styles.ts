import { alpha } from "@mui/system";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "disabled">({
  name: "MainFooter",
  uniqId: "T7bGB7",
})((theme) => {
  return {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    logoImg: {
      height: 40,
      width: "auto",
      maxWidth: "100%",
    },
    branchInfo: {
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        display: "flex",
        alignItems: "center",
      },
    },
    menuList: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(0.5),
      [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(1.25),
      },
    },
    menuListItem: {
      color: alpha(theme.palette.common.white, 0.6),
      "&:hover": {
        color: theme.palette.common.white,
      },
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    content: {
      padding: "40px 0",
    },
    sectionSecondary: {
      paddingBottom: 40,
    },
    sectionSecondaryContentMediaSocial: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    disabled: {},
  };
});

export default useStyles;
