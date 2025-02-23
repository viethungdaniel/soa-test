import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "HomeTitle",
})((theme) => {
  return {
    root: {
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      gap: "40px",
      marginBottom: theme.spacing(3),
      "& div": {
        color: theme.palette.primary.main,
        textTransform: "uppercase",
      },
      [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(2),
      },
    },
    divider: {
      flex: 1,
      height: 2,
      borderColor: theme.palette.divider,
      minWidth: 80,
      [theme.breakpoints.down("sm")]: {
        minWidth: 24,
      },
    },
  };
});

export default useStyles;
