import React from "react";
import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop";
import Loader from "../../ui/Loader";
import { Box, Typography } from "@mui/material";
import HighlightsRow from "../../components/highlights_row/HighlightsRow";
import Invitation from "../../components/about_invitation/Invitation";

import Products from "../../components/products/Products";
import CustomerReview from "../../components/customers_reviews/CustomerReview";

export default function ShopDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useShop(id);
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
    console.log(data);
  const color1 = "#503217";
  const font = "poppins";
  return (
    <>
      <HighlightsRow MainColor={color1} MainFont={font} />
      <CustomerReview MainColor={color1} MainFont={font}/>
      <Products MainColor={color1} MainFont={font} title={'Recent Products'} />
      <Invitation />
    </>
  );
}
