import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SectionBlock6",
})((theme) => {
  return {
    root: {
      paddingTop: 60,
      paddingBottom: 60,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%), #EAFCFF",
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    },
    footerCaption: {
      marginTop: 48,
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        marginTop: 40,
      },
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3),
      },
    },
    casesList: {
      marginTop: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginTop: theme.spacing(2),
      },
    },
    caseCardItem: {
      position: "relative",
      paddingTop: "100%",
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
    },
    caseCardItemFooter: {
      position: "absolute",
      minHeight: 60,
      bottom: 0,
      width: "100%",
      padding: theme.spacing(1, 2),
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
      overflow: "clip",
      color: theme.palette.common.white,
      "&:before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(86, 44, 44, 0.60)",
        backdropFilter: "blur(2px)",
      },
      [theme.breakpoints.down("md")]: {
        minHeight: 32,
      },
    },
    caseCardItemFooterIcon: {
      position: "relative",
      zIndex: 1,
    },
    caseCardItemFooterText: {
      position: "relative",
      zIndex: 1,
      flex: 1,
    },

    caseCardDetail: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
      paddingTop: 52,
      paddingBottom: 52,
      padding: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
        borderRadius: 0,
      },
    },
    caseCardDetailContent: {
      position: "relative",
      zIndex: 1,
      backgroundColor: theme.palette.common.white,
      maxWidth: "100%",
      width: 1030,
      marginLeft: "auto",
      marginRight: "auto",
      padding: theme.spacing(3),
      borderRadius: theme.shape.borderRadius,
    },
    caseCardDetailContentPhoto: {
      width: "100%",
      height: "auto",
      marginBottom: theme.spacing(3),
    },
    caseCardDetailContentTitle: {
      display: "flex",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(0.5),
    },
    caseCardDetailContentTitleChip: {
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      borderRadius: "40px",
      minHeight: "40px",
      whiteSpace: "nowrap",
      border: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down("sm")]: {
        minHeight: "28px",
        padding: "0 8px",
      },
    },
    textGrid: {
      order: 1,
      [theme.breakpoints.down("sm")]: {
        order: 2,
      },
    },
    titleGrid: {
      order: 2,
      [theme.breakpoints.down("sm")]: {
        order: 1,
      },
    },
  };
});

export default useStyles;
