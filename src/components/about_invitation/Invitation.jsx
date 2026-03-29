import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./about_images/img.webp";
import imag2 from "./about_images/link-external.svg";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";
import { useTranslation } from "react-i18next";

export default function Invitation() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const color1 = "#503217";
  const color2 = "#8F7D6A";
  const hover_color = "#794c24";
  const token = useAuthStore((state) => state.token);
  return (
    <Box dir={isRTL ? "rtl" : "ltr"} py="80px" sx={{ textAlign: { xs: "center", lg: "start" } }}>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        sx={{
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: "15px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
              lg: "43%",
            },
          }}
          px={5}
          py={{ xs: "13px", lg: "0px" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "28px",
                  md: "44px",
                },
                color: color1,
                fontFamily: "poppins",
              }}
            >
              {t("about.invitation.title")}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                color: color2,
                fontFamily: "poppins",
              }}
            >
              {t("about.invitation.description")}
            </Typography>
          </Box>
          <Box marginTop={5}>
            {token ? (
              <Button
                variant="contained"
                disabled
                sx={{
                  textTransform: "none",
                  fontFamily: "poppins",
                  fontSize: { xs: "12px", md: "14px" },
                  backgroundColor: "#503217",
                  color: "#fff",
                  cursor: "default",
                }}
              >
                {t("about.invitation.joined")}
              </Button>
            ) : (
              <Button
                component={Link}
                to="/register"
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: "poppins",
                  fontSize: { xs: "12px", md: "14px" },
                  backgroundColor: color1,
                  "&:hover": { backgroundColor: hover_color },
                  color: "#fff",
                }}
              >
                {t("about.invitation.cta")}
                <img src={imag2} style={{ marginInlineStart: "12px" }} />
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box component="img" src={image} width={{ xs: "100%", md: "95%" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
