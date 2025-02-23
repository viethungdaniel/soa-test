import AppContainer from "@/components/AppContainer";
import { Grid2, alpha } from "@mui/material";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTypography from "@/components/AppTypography";
import AppImage from "@/components/AppImage";

import AuthenticateIcon from "@@/public/images/icons/authenticate.svg";
import RespectIcon from "@@/public/images/icons/respect.svg";
import DiversityIcon from "@@/public/images/icons/diversity.svg";
import PersonalizationIcon from "@@/public/images/icons/personalization.svg";
import ComfortIcon from "@@/public/images/icons/comfort.svg";

import { useAppSelector } from "@/hooks";

import useStyles from "./SectionBlock5.styles";

const caseIcons = [
  AuthenticateIcon,
  RespectIcon,
  DiversityIcon,
  PersonalizationIcon,
  ComfortIcon,
];

const SectionBlock5 = () => {
  const { classes, theme } = useStyles();

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  return (
    <div className={classes.root}>
      <AppContainer>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, sm: 6, md: 7 }}>
            <div className={classes.blog}>
              <div className={classes.blogThumbnail}>
                <AppImage
                  src="/images/pages/home/block4-thumb.jpg"
                  fill
                  objectPosition="center"
                />
              </div>
              <AppTypography
                textTransform="uppercase"
                variant="headSemi52"
                className={classes.blogTitle}
              >
                {$s_homepageContent?.bloc_4?.title}{" "}
                <AppTypography
                  component="span"
                  variant="inherit"
                  sx={{ color: alpha(theme.palette.primary.main, 0.6) }}
                >
                  {$s_homepageContent?.bloc_4?.subtitle}
                </AppTypography>
              </AppTypography>
              <AppTypography
                variant="titleSemi28"
                className={classes.blogTextTitle}
              >
                {$s_homepageContent?.bloc_4?.text_title}
              </AppTypography>
              <AppTypography className={classes.blogText}>
                {$s_homepageContent?.bloc_4?.text}
              </AppTypography>
            </div>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6, md: 5 }}
            className={classes.thumbnailGrid}
          >
            <div className={classes.thumbnail}>
              <AppImage src="/images/pages/home/block4-thumb.jpg" fill />
            </div>
          </Grid2>
        </Grid2>
        <div className={classes.caseList}>
          <Grid2 container justifyContent={{ xs: "space-around" }} spacing={3}>
            {($s_homepageContent?.bloc_4?.pictos || []).map((picto, index) => (
              <Grid2
                key={`index-${index}`}
                size={{ xs: 12 / 2, md: 12 / 3, lg: 12 / 5 }}
              >
                <div className={classes.caseItem}>
                  <div className={classes.caseItemIcon}>
                    <AppSvgIcon
                      fontSize="inherit"
                      component={caseIcons[index]}
                    />
                  </div>
                  <AppTypography
                    className={classes.caseItemTitle}
                    variant="subtitleMed24"
                  >
                    {picto.title}
                  </AppTypography>
                  <AppTypography className={classes.caseItemContent}>
                    {picto.description}
                  </AppTypography>
                </div>
              </Grid2>
            ))}
          </Grid2>
        </div>
      </AppContainer>
    </div>
  );
};

export default SectionBlock5;
