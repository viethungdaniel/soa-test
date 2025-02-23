import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionBlock4",
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
    serviceSwiper: {},
    serviceSwiperContainer: {
      marginTop: theme.spacing(3.75),
      paddingBottom: theme.spacing(6),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2.5),
      },
    },
    serviceSwiperSlide: {
      width: `calc(100% - ${theme.spacing((2 + 1.75) * 2)})`,
      maxWidth: 300,
      height: "auto",
      [theme.breakpoints.down("md")]: {
        width: `calc(100% - ${theme.spacing((2 + 1.25) * 2)})`,
      },
    },

    cardListItem: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardListItemPhoto: {
      position: "relative",
      paddingTop: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
    },
    cardListItemDescription: {
      position: "relative",
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      width: `calc(100% - ${theme.spacing(3)})`,
      paddingLeft: theme.spacing(3),
      "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: theme.spacing(1),
        width: 2,
        height: "100%",
        backgroundColor: theme.palette.divider,
        [theme.breakpoints.down("sm")]: {
          left: theme.spacing(0.5),
        },
      },
      [theme.breakpoints.down("lg")]: {
        width: `calc(100% - ${theme.spacing(2.5)})`,
        paddingLeft: theme.spacing(2.5),
      },
      [theme.breakpoints.down("sm")]: {
        width: `calc(100% - ${theme.spacing(1.5)})`,
        paddingLeft: theme.spacing(1.5),
      },
    },
  };
});

export default useStyles;
