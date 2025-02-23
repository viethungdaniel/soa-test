import AppTypography from "@/components/AppTypography";
import useStyles from "./HomeTitle.styles";
import { Divider } from "@mui/material";

type HomeTitleProps = {
  children?: React.ReactNode;
};

const HomeTitle = (props: HomeTitleProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <AppTypography
      component="div"
      variant="headSemi52"
      className={classes.root}
    >
      <Divider className={classes.divider} />
      <div>{children}</div>
      <Divider className={classes.divider} />
    </AppTypography>
  );
};

export default HomeTitle;
