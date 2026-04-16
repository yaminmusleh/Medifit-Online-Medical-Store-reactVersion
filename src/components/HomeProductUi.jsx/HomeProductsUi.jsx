import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import Loader from "../../ui/Loader";
import useProducts from "../products/useProducts";
import ProductUiHome2 from "./ProductUiHome2";
import { Link } from "react-router-dom";
import image2 from "../../components/idk_what_to_name_it/middle-cta/chevron-right.svg";
import { useTranslation } from "react-i18next";

export default function HomeProductsUi({
  MainColor,
  MainFont,
  Product,
  hover,
}) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const limit = Product?.limit || 3;

  const { data, isLoading, isError, error } = useProducts(limit);

  if (isLoading) return <Loader />;

  if (isError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <Typography variant="h5">{error.message}</Typography>
      </Box>
    );

  return (
    <Box
    dir={isRTL ? "rtl" : "ltr"}
      py={8}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        columnGap: "15px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
            lg: "30%",
          },
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <Typography
          sx={{
            fontFamily: MainFont,
            color: MainColor,
            fontWeight: 600,
            mb: 2,

            fontSize: {
              xs: "29px",
              sm: "35px",
              md: "48px",
            },
          }}
        >
          {t("homeProducts.title")}
        </Typography>
        <Typography
          sx={{ color: "#8F7D6A", fontSize: "18px", width: "98%", mb: 3 }}
        >
          {t("homeProducts.description")}
          
        </Typography>
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
            marginBottom:"20px",
            color: "#fff",
            borderRadius: "8px",
            backgroundColor: MainColor,
            "&:hover": {
              backgroundColor: hover,
            },
          }}
        >
          {t("homeProducts.cta")}
          <img src={image2} alt="chevron" style={{ marginInlineStart: "3px",  transform:isRTL?"rotate(180deg)":"none"}} />
        </Button>
      </Box>

      <Grid container spacing={4}>
        <ProductUiHome2
          products={data}
          MainColor={MainColor}
          MainFont={MainFont}
          limit={limit}
        />
      </Grid>
    </Box>
  );
}
