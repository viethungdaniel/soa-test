import { makeStyles } from "tss-react/mui";
import _capitalize from "lodash/capitalize";
import { CSSObject } from "tss-react";

const useStyles = makeStyles({
  name: "AppContainer",
})((theme) => {
  const disableGutterClasses = {};

  theme.breakpoints.keys.forEach((key) => {
    const className = _capitalize(key);
    Object.assign<CSSObject, CSSObject>(disableGutterClasses, {
      [`disableGutter${className}Up`]: {
        [theme.breakpoints.up(key)]: {
          padding: 0,
        },
      },
      [`disableGutter${className}Down`]: {
        [theme.breakpoints.down(key)]: {
          padding: 0,
        },
      },
    });
  });

  return {
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
    disableGutters: {
      padding: 0,
    },
    ...(disableGutterClasses as {
      [Property in keyof typeof theme.breakpoints.values as `disableGutter${Capitalize<
        string & Property
      >}${"Up" | "Down"}`]: CSSObject;
    }),
  };
});

export default useStyles;
