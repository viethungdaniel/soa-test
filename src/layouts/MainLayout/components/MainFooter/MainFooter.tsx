import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import AppLink from "@/components/AppLink";
import AppImage from "@/components/AppImage";
import AppContainer from "@/components/AppContainer";
import AppTypography from "@/components/AppTypography";
import AppIconButton from "@/components/AppIconButton";
import AppSvgIcon from "@/components/AppSvgIcon";

import FacebookSvg from "@@/public/images/svgs/facebook.svg";
import InstagramSvg from "@@/public/images/svgs/instagram.svg";
import YoutubeSvg from "@@/public/images/svgs/youtube.svg";

import { useAppSelector } from "@/hooks";
import { useMemo } from "react";
import { useMediaQuery } from "@mui/system";

import useStyles from "./MainFooter.styles";

const splitArray = <T,>(arr: T[], parts: number) => {
  const result: T[][] = [];
  const chunkSize = Math.ceil(arr.length / parts);

  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  return result;
};

const MainFooter = () => {
  const { classes, theme } = useStyles();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  const $s_homepageContent = useAppSelector(
    (state) => state.pageContent.homepageContent
  );

  const navMenuGroups = useMemo(() => {
    return splitArray(
      $s_homepageContent?.footer?.links || [],
      isSmDown ? 1 : isMdDown ? 2 : 3
    );
  }, [$s_homepageContent?.footer?.links, isMdDown, isSmDown]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <AppContainer>
          <Grid
            container
            justifyContent={{ xs: "center", sm: "space-between" }}
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={3}
          >
            <Grid size={{ xs: "auto" }}>
              <div className={classes.branchInfo}>
                <AppLink
                  href="/"
                  underline="none"
                  hoverColor="none"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  color="common.white"
                >
                  <AppImage
                    className={classes.logoImg}
                    src={"/images/logo.png"}
                    defaultPlaceholderVariant="none"
                    width={500}
                    height={500}
                  />
                  {$s_homepageContent?.footer?.address?.name}
                </AppLink>
                <AppTypography>
                  {$s_homepageContent?.footer?.address?.phone}
                </AppTypography>
                <AppTypography>
                  {$s_homepageContent?.footer?.address?.location}
                </AppTypography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: "grow" }}>
              <Grid
                container
                spacing={3}
                justifyContent={{ xs: "center", sm: "space-between" }}
              >
                {navMenuGroups.map((navMenus, index) => (
                  <Grid
                    key={`index-${index}`}
                    size={{ xs: 12, sm: "auto" }}
                    order={2}
                  >
                    <div className={classes.menuList}>
                      {navMenus.map((navMenu) => (
                        <AppLink
                          className={classes.menuListItem}
                          key={navMenu.name}
                          href={`/${navMenu.url}`}
                          whiteSpace="wrap"
                        >
                          {navMenu.name}
                        </AppLink>
                      ))}
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </AppContainer>
      </div>
      <div className={classes.sectionSecondary}>
        <AppContainer>
          {!isSmDown && (
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Divider />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Grid container>
                  <Grid size={{ xs: "grow" }}>
                    <AppTypography>© BASIC 2024</AppTypography>
                  </Grid>

                  <Grid size={{ xs: 12, sm: "auto" }}>
                    <div className={classes.sectionSecondaryContentMediaSocial}>
                      <AppIconButton
                        variant="contained"
                        borderRadius="circular"
                        size="small"
                      >
                        <AppSvgIcon
                          fontSize="inherit"
                          component={FacebookSvg}
                        />
                      </AppIconButton>
                      <AppIconButton
                        variant="contained"
                        borderRadius="circular"
                        size="small"
                      >
                        <AppSvgIcon
                          fontSize="inherit"
                          component={InstagramSvg}
                        />
                      </AppIconButton>
                      <AppIconButton
                        variant="contained"
                        borderRadius="circular"
                        size="small"
                      >
                        <AppSvgIcon fontSize="inherit" component={YoutubeSvg} />
                      </AppIconButton>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {isSmDown && (
            <Grid
              container
              alignItems="center"
              flexDirection={"column"}
              spacing={3}
            >
              <Grid size={{ xs: "auto" }}>
                <div className={classes.sectionSecondaryContentMediaSocial}>
                  <AppIconButton
                    variant="contained"
                    borderRadius="circular"
                    size="small"
                  >
                    <AppSvgIcon fontSize="inherit" component={FacebookSvg} />
                  </AppIconButton>
                  <AppIconButton
                    variant="contained"
                    borderRadius="circular"
                    size="small"
                  >
                    <AppSvgIcon fontSize="inherit" component={InstagramSvg} />
                  </AppIconButton>
                  <AppIconButton
                    variant="contained"
                    borderRadius="circular"
                    size="small"
                  >
                    <AppSvgIcon fontSize="inherit" component={YoutubeSvg} />
                  </AppIconButton>
                </div>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Divider />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <AppTypography textAlign={"center"}>
                  © BASIC 2024
                </AppTypography>
              </Grid>
            </Grid>
          )}
        </AppContainer>
      </div>
    </div>
  );
};

export default MainFooter;
