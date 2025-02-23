import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionOurActivities",
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
    fields: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: theme.spacing(2),
    },
    actions: {
      marginTop: theme.spacing(2),
      display: "flex",
      justifyContent: "flex-end",
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        "& button": {
          width: "100%",
        },
      },
    },
  };
});

export default useStyles;
