import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import Loader from "../../ui/Loader";
import useProducts from "../products/useProducts";
import ProductUiHome2 from "./ProductUiHome2";
import { Link } from "react-router-dom";
import image2 from "../../components/idk_what_to_name_it/middle-cta/chevron-right.svg";

export default function HomeProductsUi({
  MainColor,
  MainFont,
  Product,
  hover,
}) {
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
          Discover our collection
        </Typography>
        <Typography
          sx={{ color: "#8F7D6A", fontSize: "18px", width: "98%", mb: 3 }}
        >
          Our medical store offers trusted products easy navigation, and fast
          shipping
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
            color: "#fff",
            borderRadius: "8px",
            backgroundColor: MainColor,
            "&:hover": {
              backgroundColor: hover,
            },
          }}
        >
          View sale products
          <img src={image2} alt="chevron" style={{ marginLeft: "3px" }} />
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
