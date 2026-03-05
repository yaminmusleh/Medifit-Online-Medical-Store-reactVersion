import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop";
import Loader from "../../ui/Loader";
import { Box, IconButton, Grid, Typography, Button } from "@mui/material";
import HighlightsRow from "../../components/highlights_row/HighlightsRow";
import Invitation from "../../components/about_invitation/Invitation";
import Products from "../../components/products/Products";
import CustomerReview from "../../components/customers_reviews/CustomerReview";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useAddToCart from "../../hooks/useAddToCart";
export default function ShopDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useShop(id);

  const { mutate, isPending } = useAddToCart();

  const addToCart = (id) => {
    alert(id);
  };
  const [quantity, setQuantity] = useState(1);
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

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <>
      <Box className="Product_details" py={"100px"}>
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
              sx={{
                borderRadius: "20px",
                width: {
                  xs: "66%",
                  md: "80%",
                  lg: "100%",
                },
                mx: "auto",
              }}
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
                      xs: "30px",
                      md: "40px",
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
                      xs: "23px",
                      md: "33px",
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
                className="amount_and_button"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                {/*quantity selector*/}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #D7CCC8",
                    borderRadius: "12px",
                    overflow: "hidden",
                    width: "fit-content",
                  }}
                >
                  {/* Number */}
                  <Typography
                    sx={{
                      px: 3,
                      py: 1.5,
                      fontSize: "18px",
                      fontWeight: 600,
                      fontFamily: font,
                      color: color1,
                      minWidth: "40px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderLeft: "1px solid #D7CCC8",
                    }}
                  >
                    <IconButton
                      onClick={increase}
                      size="small"
                      sx={{
                        p: 0.5,
                        borderBottom: "1px solid #D7CCC8",
                        borderRadius: 0,
                        width: 32,
                        height: 28,
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                      onClick={decrease}
                      size="small"
                      sx={{
                        p: 0.5,
                        borderRadius: 0,
                        width: 32,
                        height: 28,
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                <Box className="the_button">
                  {/*Button*/}
                  <Button
                    variant="contained"
                    onClick={() =>
                      mutate({
                        ProductId: data.id,
                        Count: quantity,
                      })
                    }
                    sx={{
                      fontFamily: font,
                      textTransform: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      bgcolor: color1,
                      ":hover": { bgcolor: "#72451e" },
                      height: 56,
                      px: 3,
                    }}
                    endIcon={<AddShoppingCartIcon />}
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>

              {/*description*/}
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
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#8F7D6A",
                    fontFamily: "sans-serif",
                  }}
                >
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
