import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ProductUiHome2({ products, MainColor, MainFont, limit }) {
  return (
    <Grid
      container
      spacing={4}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {products?.map((product) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          key={product.id}
          sx={{
            width: {
              xs: "70%",
              sm: "40%",
              md: "fit-content",
            },
          }}
        >
          <Card
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "transparent",
              boxShadow: 0,
              borderRadius: "20px",
              textAlign: {
                xs: "center",
                lg: "start",
              },
              "&:hover .hoverButton": {
                opacity: 1,
                transform: "translate(-50%, 0)",
              },
              "&:hover img": {
                transform: "scale(1.08)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt="productImage"
                sx={{
                  display: "block",
                  mx: "auto",
                  borderRadius: "20px",
                  width: {
                    md: "100%",
                  },
                  transition: "transform 0.5s ease",
                  height: {
                    md: 330,
                  },
                  objectFit: "cover",
                }}
              />

              <Button
                component={Link}
                to={`/product/${product.id}`}
                variant="contained"
                className="hoverButton"
                sx={{
                  position: "absolute",
                  bottom: 50,
                  left: "50%",
                  transform: "translate(-50%, 20px)",
                  opacity: 0,
                  transition: "all 0.3s ease",
                  borderRadius: "8px",
                  textTransform: "none",
                  boxShadow: "none",
                  px: {
                    xs: 3,
                    sm: 5,
                    md: 7,
                  },
                  backgroundColor: "#EEEDE7",
                  color: MainColor,
                  fontFamily: MainFont,
                  whiteSpace: "nowrap",
                  fontWeight: 600,
                }}
              >
                <ShoppingCartOutlinedIcon
                  fontSize="small"
                  sx={{ marginRight: "3px" }}
                />
                Shop now
              </Button>
            </Box>

            <CardContent sx={{ flexGrow: 1, p: 0, marginTop: "20px" }}>
              <Typography
                sx={{
                  color: MainColor,
                  fontFamily: MainFont,
                  fontWeight: 600,
                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },
                }}
              >
                {product.name ?? "Unnamed Product"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}