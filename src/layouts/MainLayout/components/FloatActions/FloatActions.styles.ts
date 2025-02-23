import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "floatActions",
})((theme) => {
  return {
    root: {
      position: "fixed",
      bottom: theme.spacing(3),
      right: theme.spacing(3),
      zIndex: theme.zIndex.appBar,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    },
  };
});

export default useStyles;
