import { alpha } from "@mui/system";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "MainHeader",
})((theme) => {
  return {
    root: {
      overflowX: "clip",
      backgroundColor: alpha(theme.palette.secondary.main, 0.7),
      boxShadow: "0px 4px 8px 0px #00000014",
      color: theme.palette.common.white,
    },
    toolbar: {
      gap: theme.spacing(3.75),
      [theme.breakpoints.down("md")]: {
        gap: theme.spacing(1.25),
      },
    },
    logoImg: {
      height: 40,
      width: "auto",
      maxWidth: "100%",
      objectFit: "contain",
      objectPosition: "center",
      [theme.breakpoints.down("md")]: {
        height: 40,
      },
    },
    menuList: {
      display: "flex",
      justifyContent: "space-evenly",
      overflow: "hidden",
      minWidth: 500,
      flex: 1,
      gap: theme.spacing(2.5),
      [theme.breakpoints.down("md")]: {
        minWidth: "initial",
        "& *": {
          display: "none",
        },
      },
    },
    headActions: {
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      gap: theme.spacing(2.5),
    },
  };
});

export default useStyles;
