import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "mapImage">({
  name: "SectionMap",
})((theme, _, classes) => {
  return {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
      background: "url(/images/pages/home/block2-banner.png)",
      backgroundSize: "cover",
      backgroundRepeat: "none",
      backgroundPosition: "bottom",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    actions: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: theme.spacing(2),
    },
    actionButton: {
      "& *": {
        color: theme.palette.text.primary,
      },
    },
    map: {
      position: "relative",
      marginTop: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
      paddingTop: "calc(100%*698/1240)",
      [theme.breakpoints.down("md")]: {
        paddingTop: "calc(100%*698/770)",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: "calc(100%*600/343)",
      },
    },
    mapWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    mapImage: {
      height: "100%",
      transition: theme.transitions.create(["scale", "translate"]),
    },
    mapMountainZoom: {
      [`& .${classes.mapImage}`]: {
        scale: "4",
        translate: "58% 38%",
        [theme.breakpoints.down("md")]: {
          translate: "77% 37%",
        },
        [theme.breakpoints.down("sm")]: {
          translate: "96% 44%",
        },
      },
    },
    mapFishZoom: {
      backgroundSize: "350% 350%",
      backgroundPosition: "53% 53%",
      [`& .${classes.mapImage}`]: {
        scale: "4",
        translate: "-8% 6%",
        [theme.breakpoints.down("md")]: {
          translate: "-32% 6%",
        },
        [theme.breakpoints.down("sm")]: {
          translate: "-148% 2%",
        },
      },
    },
    mapCrosshairZoom: {
      backgroundSize: "350% 350%",
      backgroundPosition: "25% 63%",
      [`& .${classes.mapImage}`]: {
        scale: "4",
        translate: "66% -32%",
        [theme.breakpoints.down("md")]: {
          translate: "88% -32%",
        },
        [theme.breakpoints.down("sm")]: {
          translate: "126% -36%",
        },
      },
    },
    mountainButton: {
      width: "3.5%",
      height: "8%",
      position: "absolute",
      left: "32.6%",
      top: "36.5%",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        width: "4.5%",
        height: "7%",
        left: "28.6%",
        top: "36.9%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "10.5%",
        height: "8%",
        left: "19.6%",
        top: "34.9%",
      },
    },
    fishButton: {
      width: "3.5%",
      height: "8%",
      position: "absolute",
      left: "49.5%",
      top: "44.5%",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        width: "4.5%",
        height: "7%",
        left: "55.9%",
        top: "45.2%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "10.5%",
        height: "8%",
        left: "81.3%",
        top: "44.3%",
      },
    },
    crosshairButton: {
      width: "3.5%",
      height: "8%",
      position: "absolute",
      left: "30.6%",
      top: "54.5%",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        width: "4.5%",
        height: "7%",
        left: "25.5%",
        top: "55.2%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "10.5%",
        height: "8%",
        left: "12.9%",
        top: "56%",
      },
    },
    mapImageDesktop: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    mapImageTablet: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mapImageMobile: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  };
});

export default useStyles;
