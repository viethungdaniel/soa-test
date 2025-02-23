import { alpha } from "@mui/system";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionBlock5",
})((theme) => {
  return {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    content: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
    },
    blog: {
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        borderRadius: theme.shape.borderRadius,
        overflow: "clip",
        "&:before": {
          content: "''",
          position: "absolute",
          zIndex: 1,
          borderRadius: theme.shape.borderRadius,
          backdropFilter: "blur(7.5px)",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          width: `calc(100% - ${theme.spacing(4)})`,
          height: `calc(100% - ${theme.spacing(4)})`,
          background: alpha(theme.palette.common.white, 0.6),
        },
        padding: theme.spacing(4),
      },
    },
    blogThumbnail: {
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "initial",
        zIndex: -1,
      },
    },
    blogTitle: {
      position: "relative",
      zIndex: 1,
      marginBottom: 60,
      [theme.breakpoints.down("lg")]: {
        marginBottom: 40,
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(3),
      },
    },
    blogTextTitle: {
      zIndex: 1,
      marginBottom: theme.spacing(2),
      paddingLeft: 130,
      position: "relative",
      "&:before": {
        content: "''",
        position: "absolute",
        top: 42 / 2,
        left: 0,
        width: 80,
        height: 2,
        backgroundColor: theme.palette.divider,
        translate: "0 50%",
        [theme.breakpoints.down("md")]: {
          width: 40,
        },
        [theme.breakpoints.down("sm")]: {
          width: 2,
          top: 0,
          height: "100%",
          translate: "0 0",
        },
      },
      [theme.breakpoints.down("lg")]: {
        paddingLeft: 110,
      },
      [theme.breakpoints.down("md")]: {
        paddingLeft: 80,
      },
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 8,
      },
    },
    blogText: {
      position: "relative",
      zIndex: 1,
      color: alpha(theme.palette.text.primary, 0.8),
      paddingLeft: 130,
      [theme.breakpoints.down("lg")]: {
        paddingLeft: 110,
      },
      [theme.breakpoints.down("md")]: {
        paddingLeft: 0,
      },
    },
    thumbnailGrid: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    thumbnail: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "clip",
      borderRadius: theme.shape.borderRadius,
    },
    caseList: {
      marginTop: 80,
      [theme.breakpoints.down("md")]: {
        marginTop: 60,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(3),
      },
    },
    caseItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    caseItemIcon: {
      width: 60,
      height: 60,
      fontSize: 34,
      color: theme.palette.common.white,
      backgroundColor: "#0E9594",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(2),
    },
    caseItemTitle: {
      marginBottom: theme.spacing(1),
      textAlign: "center",
    },
    caseItemContent: {
      color: alpha(theme.palette.primary.main, 0.8),
      textAlign: "center",
    },
  };
});

export default useStyles;
