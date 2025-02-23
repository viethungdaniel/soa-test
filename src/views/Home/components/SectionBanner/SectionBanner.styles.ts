import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "active">({
  name: "SectionBanner",
})((theme, _, classes) => {
  return {
    root: {
      position: "relative",
    },
    bannerSwiperSlidePhoto: {
      position: "relative",
      paddingTop: "100vh",
      "&:after": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 73%, rgba(0, 0, 0, 0.30) 85.5%)",
      },
    },
    bannerTitleContainer: {
      position: "relative",
    },
    bannerTitleLight: {
      position: "absolute",
      top: 0,
      left: "0%",
      width: "calc(100%/3)",
      transition: theme.transitions.create(["left"]),
    },
    bannerTitle: {
      position: "absolute",
      width: "100%",
      bottom: 0,
      zIndex: 1,
      color: theme.palette.common.white,
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    bannerTitleList: {
      display: "flex",
      justifyContent: "space-around",
      overflow: "clip",
    },
    bannerTitleListItem: {
      padding: theme.spacing(3),
      flexDirection: "column",
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
      gap: theme.spacing(2),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
    },
    bannerTitleListItemText: {
      minHeight: 63,
      textAlign: "center",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      width: "100%",
      opacity: 0,
      translate: "0px 20px",
      transition: theme.transitions.create(["opacity", "translate"]),
      [`.${classes.active} &`]: {
        opacity: 1,
        translate: "0px 0px",
      },
    },
    active: {},
  };
});

export default useStyles;
