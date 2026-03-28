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
import useProducts from "../products/useProducts";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTranslation } from "react-i18next";

export default function ProductUi({ MainColor, MainFont, Product, limit }) {
  const { t } = useTranslation();
  return (
    <Grid
      container
      spacing={4}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      {Product?.slice(0, limit)?.map((cardInfo) => (
        <Grid
          sx={{
            width: {
              xs: "70%",
              sm: "40%",
              md: "fit-content",
            },
          }}
          item
          xs={12}
          sm={6}
          md={4}
          key={cardInfo.id}
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
                transform: "translateY(-50%, 0)",
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
                image={cardInfo.image}
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
                to={`/product/${cardInfo.id}`}
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
                />{" "}
                {t("products.button")}
              </Button>
              <Typography
                
                sx={{
                  position: "absolute",
                  top:14, left:16,
                  backgroundColor:'#D3744A',
                  color:'#fff',
                 fontFamily:"sans-serif",
                 fontSize:'13px',
                 width:'50px',
                 display:'flex', alignItems:'center', justifyContent:'center',
                 height:'30px',
                 
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                  
                }}
              >{t("products.New")}</Typography>
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
                {cardInfo.name ?? "Unnamed Product"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
