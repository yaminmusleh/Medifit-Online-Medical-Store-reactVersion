import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import photo from "./whattoexpectImage/Rectangle 126.svg";
import { useTranslation } from "react-i18next";

export default function WhatToExpect({ MainColor, MainFont }) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const MenuItem = ({ icon, text, active }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&:hover": {
          color: "#503217",
        },
        transition: "0.4s all ease",
        color: "#8F7D6A",
        fontWeight: active ? 600 : 400,
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: {
            xs: "20px",
            md: "35px",
          },
          fontFamily: MainFont,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
  return (
    <Box
      dir={isRTL ? "rtl" : "ltr"}
      className="explore-store"
      sx={{ py: "100px", marginBottom: "90px" }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "40px",
              lg: "58px",
            },
            textAlign: {
              xs: "center",
              lg: "start",
            },
            fontWeight: 600,
            width: {
              xs: "100%",
              lg: "80%",
            },
            color: MainColor,
            fontFamily: MainFont,
            marginBottom: {
              xs: "40px",
              sm: "80px",
              lg: "130px",
            },
          }}
        >
          {t("whatToExpect.title")}
        </Typography>
        <Grid
          container
          spacing={isRTL ? 9 : 4}
          alignItems="stretch"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <MenuItem
                icon={<TrendingUpIcon fontSize="large" />}
                text={t("whatToExpect.mission")}
              />

              <MenuItem
                icon={<ThumbUpAltOutlinedIcon fontSize="large" />}
                text={t("whatToExpect.commitments")}
                active
              />

              <MenuItem
                icon={<VisibilityOutlinedIcon fontSize="large" />}
                text={t("whatToExpect.vision")}
                active
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box component={"img"} src={photo} width={"100%"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              width: {
                lg: "30%",
                md: "70%",
                xs: "100%",
              },
              textAlign: {
                xs: "center",
                lg: "start",
              },

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              fontFamily: "sans-serif",
              fontSize: "18px",
            }}
          >
            <Typography
              color="#8F7D6A"
              sx={{
                "&:hover": {
                  color: MainColor,
                },
                transition: "0.4s all ease",
              }}
            >
              {t("whatToExpect.desc")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
