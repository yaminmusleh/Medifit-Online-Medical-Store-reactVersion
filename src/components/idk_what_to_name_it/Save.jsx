import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "./middle-cta/CTA.svg";
import image2 from "./middle-cta/chevron-right.svg";

import { Link } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function Save() {
  const {t}= useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const color1 = "#503217";
  const color2 = "#8F7D6A";
  const hover_color = "#794c24";
  return (
    <Box
    dir={isRTL ? "rtl" : "ltr"}
    className="explore-store"
      py="80px"
      sx={{
        textAlign: { xs: "center", lg: "start" },
      }}
    >
      <Container>
        <Grid
          container
          spacing={9.75}
          alignItems={"center"}
          sx={{
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            width={{ xs: "100%", sm: "75%", md: "65%", lg: "50%" }}
          >
            <Box
              component="img"
              src={image}
              width={{ xs: "100%" }}
              alt="image"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            sx={{
              width: {
                xs: "90%",
                sm: "80%",
                lg: "40%",
              },
            }}
          >
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "28px",
                    md: "43px",
                  },
                  color: color1,
                  fontFamily: "poppins",
                  fontWeight: "700",
                }}
              >
                {t("saveSection.title")}
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
                {t("saveSection.description")}
              </Typography>
            </Box>
            <Box marginTop={5}>
              <Button
                component={Link}
                to="/shop"
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: "poppins",
                  fontSize: {
                    xs: "12px",
                    md: "14px",
                  },
                  color:'#fff',
                  borderRadius: "8px",
                  backgroundColor: color1,
                  "&:hover": {
                    backgroundColor: hover_color,
                  },
                }}
              >
                {t("saveSection.cta")}
                <img src={image2} alt="chevron" style={{ marginInlineStart: "3px", transform:isRTL?"rotate(180deg)":"none" }} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
