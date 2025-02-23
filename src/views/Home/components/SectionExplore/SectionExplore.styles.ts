import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionExplore",
})((theme) => {
  return {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
      background: "url(/images/pages/home/block6-banner.png)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      minHeight: 666,
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {
        minHeight: 483,
        backgroundSize: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundSize: "130%",
        minHeight: 350,
      },
    },
  };
});

export default useStyles;
