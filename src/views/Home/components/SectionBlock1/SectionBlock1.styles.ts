import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionBlock1",
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
    cardList: {
      [theme.breakpoints.up("md")]: {
        paddingTop: 40,
      },
    },
    cardListItem: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      transition: theme.transitions.create(["translate"]),
      [theme.breakpoints.up("md")]: {
        "&:hover": {
          translate: "0px -40px",
        },
      },
    },
    cardListItemPhoto: {
      position: "relative",
      paddingTop: "100%",
      marginBottom: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
    },
    cardListItemDescription: {
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      width: "100%",
    },
  };
});

export default useStyles;
