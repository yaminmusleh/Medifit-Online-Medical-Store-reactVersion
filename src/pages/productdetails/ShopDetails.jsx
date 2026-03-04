import React from "react";
import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop";
import Loader from "../../ui/Loader";
import { Box, Grid, Typography } from "@mui/material";
import HighlightsRow from "../../components/highlights_row/HighlightsRow";
import Invitation from "../../components/about_invitation/Invitation";

import Products from "../../components/products/Products";
import CustomerReview from "../../components/customers_reviews/CustomerReview";

export default function ShopDetails({}) {
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
      <Box className="Product_details" py={"130px"} >
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: {
                xs: "100%",
                md: "30%",
              },
              
            }}
          >
            <Box
              component="img"
              src={data.image}
              display={"block"}
              
              sx={{ borderRadius: "20px", width:{
                xs:'66%', md:'80%'
                
              }, mx:'auto' }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              <Box className="title">
                <Typography
                  sx={{
                    fontSize: {
                      xs:'30px', md:"40px"
                    },
                    color: color1,
                    fontFamily: font,
                    fontWeight: 600,
                  }}
                >
                  {data.name}
                </Typography>
              </Box>
              <Box
                className="price"
                sx={{
                  display: "flex",
                  columnGap: "44px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs:'23px', md:"33px"
                    },
                    color: "#8F7D6A",
                    fontFamily: font,
                    fontWeight: 600,
                  }}
                >
                  ${data.price} USD
                </Typography>
              </Box>
              <Box
                className="description"
                sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: font,
                    color: color1,
                    fontWeight: 600,
                  }}
                >
                  Product Description
                </Typography>
                <Typography sx={{ fontSize: "15px", color: "#8F7D6A", fontFamily:"sans-serif" }}>
                  {data.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <HighlightsRow MainColor={color1} MainFont={font} />
      <CustomerReview MainColor={color1} MainFont={font} />
      <Products MainColor={color1} MainFont={font} title={"Recent Products"} />
      <Invitation />
    </>
  );
}
