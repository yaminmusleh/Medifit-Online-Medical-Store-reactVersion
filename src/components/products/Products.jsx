import React from "react";
import useProducts from "./useProducts";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../../ui/Loader";

export default function Products({ MainColor, MainFont }) {
  const { data, isError, isLoading, error } = useProducts();
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
    <Box py={"70px"} sx={{textAlign:'center'}}>
      <Typography sx={{fontFamily:MainFont, color:MainColor, fontSize:{
        md:'48px'
        , xs:'27px', sm:'35px'
      }, fontWeight:600}} marginBottom={"60px"}>Latest Products</Typography>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {data?.map((cardInfo) => (
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
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "transparent",
                boxShadow: 0,
                textAlign: {
                  xs: "center",
                  lg: "start",
                },
              }}
            >
              <CardMedia
                component="img"
                image={cardInfo.image}
                alt="productImage"
                sx={{
                  borderRadius:'20px',
                  display: "block",
                  mx: "auto",
                  width: {
                    xs: "70%",
                    sm: "80%",
                    md: "100%",
                  },
                  height: {
                    md: 330,
                  },
                  justifyContent: "center",
                  alignItems: "center",
                  objectFit: "cover",
                }}
              />
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
    </Box>
  );
}
