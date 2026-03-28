import React, { useTransition } from "react";
import useProducts from "../products/useProducts";
import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import ProductUi from "../UI/ProductUi";
import useProducts2 from "../../hooks/useProducts2";
import { useTranslation } from "react-i18next";

export default function ExplpreOurStore({ MainColor, MainFont, Product }) {
  const limit = Product?.limit || 6;
  const { isLoading, isError, error } = useProducts(limit);
  const { data } = useProducts2({});
  const { t }=useTranslation();

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
        <Typography component={"h1"} variant="h1">
          {error.message}
        </Typography>
      </Box>
    );

  return (
    <Box className="explore-store" py={"70px"} sx={{ textAlign: "center" }}>
      <Container>
        <Typography
          sx={{
            fontFamily: MainFont,
            color: MainColor,
            fontSize: {
              md: "48px",
              xs: "27px",
              sm: "35px",
            },
            fontWeight: 600,
          }}
          marginBottom={"40px"}
        >
          {t("ExploreOurStore.ExploreTitle")}
        </Typography>
        <ProductUi
          MainColor={MainColor}
          MainFont={MainFont}
          Product={data}
          limit={limit}
        />
      </Container>
    </Box>
  );
}
