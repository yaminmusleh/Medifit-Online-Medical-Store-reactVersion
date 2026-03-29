import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import photo4 from "./highlights_imgs/services/credit-card.svg";
import photo2 from "./highlights_imgs/services/exchange-dollar.svg";
import photo3 from "./highlights_imgs/services/headphone-mic.svg";
import photo1 from "./highlights_imgs/services/truck-fast.svg";
import { useTranslation } from "react-i18next";

export default function HighlightsRow({ MainColor, MainFont }) {
  const { t } = useTranslation();
  const data = [
    {
      image: photo1,
      text: t("highlights.freeShipping"),
    },
    {
      image: photo2,
      text: t("highlights.easyRefund"),
    },
    {
      image: photo3,
      text: t("highlights.onlineSupport"),
    },
    {
      image: photo4,
      text: t("highlights.flexiblePayment"),
    },
  ];

  return (
    <Box paddingBottom={"90px"}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          columnGap: "130px",
          rowGap: "70px",
          textAlign: "center",
        }}
      >
        {data.map((img, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box component="img" src={img.image} alt={`highlight-${index}`} />
            <Typography
              sx={{
                color: MainColor,
                fontFamily: MainFont,
                fontSize: {
                  xs: "15px",
                  md: "22px",
                },
              }}
            >
              {img.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
