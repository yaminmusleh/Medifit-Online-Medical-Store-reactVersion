import React from "react";
import useProducts from "./useProducts";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import ProductUi from "../UI/ProductUi";

export default function Products({ MainColor, MainFont, Product }) {
  const { isLoading, isError, error } = useProducts();

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
    <Box py={"70px"} sx={{ textAlign: "center" }}>
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
        marginBottom={"60px"}
      >
        Latest Products
      </Typography>
      <ProductUi MainColor={MainColor} MainFont={MainFont} Product={Product} />
    </Box>
  );
}
