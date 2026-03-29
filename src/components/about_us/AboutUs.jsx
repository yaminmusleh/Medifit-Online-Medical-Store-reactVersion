import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs({ MainColor, MainFont }) {
  const { t } = useTranslation();
  const {i18n}= useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <Box dir={isRTL ? "rtl" : "ltr"} py={"130px"} display={"flex"} justifyContent={"center"}>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "start" }}
        spacing={8}
      >
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              textAlign: "end",
              fontSize: {
                xs: "34px",
                sm: "40px",
                md: "55px",
              },
              color: MainColor,
              fontFamily: MainFont,
            }}
          >
            {t("about.title")}
          </Typography> 
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "70%" }}>
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                lg: "start",
              },
              fontSize: {
                xs: "20px",
                sm: "30px",
                md: "40px",
              },
              color: MainColor,
              fontFamily: MainFont,
            }}
          >
            {t("about.description")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
