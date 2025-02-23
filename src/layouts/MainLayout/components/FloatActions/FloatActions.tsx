import { Portal } from "@mui/material";
import AppIconButton from "@/components/AppIconButton";
import AppSvgIcon from "@/components/AppSvgIcon";

import ChatIcon from "@@/public/images/icons/chat.svg";

import useStyles from "./FloatActions.styles";

const FloatActions = () => {
  const { classes } = useStyles();

  return (
    <Portal>
      <div className={classes.root}>
        <AppIconButton variant="contained" borderRadius="circular">
          <AppSvgIcon component={ChatIcon} />
        </AppIconButton>
      </div>
    </Portal>
  );
};

export default FloatActions;
