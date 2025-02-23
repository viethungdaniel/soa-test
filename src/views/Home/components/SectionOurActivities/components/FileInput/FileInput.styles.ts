import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "FileInput",
})(() => {
  return {
    root: {},
    input: {
      display: "none",
    },
  };
});

export default useStyles;
