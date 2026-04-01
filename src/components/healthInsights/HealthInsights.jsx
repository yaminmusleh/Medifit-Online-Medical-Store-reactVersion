import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import main_img1 from "./health-care-insights/pills1.svg";
import main_img2 from "./health-care-insights/pills2.svg";
import chevron from "./health-care-insights/chevron-right.svg";
import calenderimg from "./health-care-insights/calendar-week.svg";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function HealthInsights({ MainColor, MainFont }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <Box
      dir={isRTL ? "rtl" : "ltr"}
      py={"120px"}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "60px",
        textAlign: {
          xs: "center",
          lg: "start",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: MainFont,
          color: MainColor,
          fontSize: {
            xs: "30px",
            sm: "37px",
            md: "48px",
          },
          fontWeight: 600,
        }}
      >
        {t("healthInsights.title")}
      </Typography>
      <Grid container spacing={6}>
        {/*left card*/}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: "flex",
            columnGap: "30px",
            width: {
              xs: "100%",
              lg: "46%",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/*image*/}
          <Box>
            <Box
              component={"img"}
              src={main_img1}
              sx={{
                width: {
                  xs: "80%",
                  sm: "fit-content",
                },
              }}
            />
          </Box>

          {/*text*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "start",
                  },
                  alignItems: "center",
                  fontSize: "16px",
                  fontFamily: MainFont,
                  color: "#8F7D6A",
                }}
              >
                <img
                  src={calenderimg}
                  alt="calender"
                  style={{ marginRight: "5px" }}
                />
                {t("healthInsights.article1.date")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: MainColor,
                  fontFamily: MainFont,
                }}
              >
                {t("healthInsights.article1.title")}
              </Typography>
            </Box>

            <Box>
              <Link
                component={RouterLink}
                to="/about"
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "start",
                  },
                  alignItems: "center",
                  color: MainColor,
                  fontFamily: MainFont,
                  textDecoration: "underline",
                  textDecorationColor: MainColor,
                  fontSize: "18px",
                  fontWeight: 600,
                  "& img": {
                    transition: "transform 0.4s ease",
                  },
                  "&:hover": {
                    color: "#7c512b",

                    transition: "all 0.4s ease",
                  },
                  "&:hover img": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                {t("healthInsights.readMore")}
                <img
                  src={chevron}
                  alt="chevron-right"
                  style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        {/*right card*/}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            columnGap: "30px",
            width: {
              xs: "100%",
              lg: "46%",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/*image*/}
          <Box>
            <Box
              component={"img"}
              src={main_img2}
              sx={{
                width: {
                  xs: "80%",
                  sm: "fit-content",
                },
              }}
            />
          </Box>

          {/*text*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "30px" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: {
                    xs: "center",
                    md: "start",
                  },
                  alignItems: "center",
                  fontSize: "16px",
                  fontFamily: MainFont,
                  color: "#8F7D6A",
                }}
              >
                <img
                  src={calenderimg}
                  alt="calender"
                  style={{ marginRight: "5px" }}
                />
                {t("healthInsights.article2.date")}
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  color: MainColor,
                  fontFamily: MainFont,
                }}
              >
                {t("healthInsights.article2.title")}
              </Typography>
            </Box>

            <Box>
              <Link
                component={RouterLink}
                to="/about"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {
                    xs: "center",
                    md: "start",
                  },
                  color: MainColor,
                  fontFamily: MainFont,
                  textDecoration: "underline",
                  textDecorationColor: MainColor,
                  fontSize: "18px",
                  fontWeight: 600,
                  "& img": {
                    transition: "transform 0.4s ease",
                  },
                  "&:hover": {
                    color: "#7c512b",

                    transition: "all 0.4s ease",
                  },
                  "&:hover img": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                {t("healthInsights.readMore")}
                <img
                  src={chevron}
                  alt="chevron-right"
                  style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
