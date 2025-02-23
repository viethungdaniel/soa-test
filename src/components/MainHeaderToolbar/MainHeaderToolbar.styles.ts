import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "MainHeaderToolbar",
})((theme) => {
  return {
    root: {
      width: "100%",
      position: "relative",
      height: 72,
      minHeight: 72,
      [theme.breakpoints.down("md")]: {
        height: 72,
        minHeight: 72,
      },
    },
  };
});

export default useStyles;
