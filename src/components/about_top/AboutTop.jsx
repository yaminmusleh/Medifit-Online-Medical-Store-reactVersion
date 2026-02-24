import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "./health-service/photo1.svg";
import img2 from "./health-service/photo2.svg";
import img3 from "./health-service/photo3.svg";

export default function AboutTop({ MainColor }) {
  const images = [img1, img2, img3];
  return (
    <Box py={6} sx={{ textAlign: "center" }}>
      <Typography
        sx={{ fontSize: {
            xs:"23px",
            sm:'30px',
            md:"40px",
            lg:"65px",
        }, fontFamily: "poppins", fontWeight:600, color: MainColor }}
      >
        Health products you can trust service you deserve
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", marginTop: "60px" }}
      >
        {images.map((imgs,index) => (
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={imgs}
              sx={{ width: "100%", maxWidth: {
                xs:'250px',

                sm:index==1? '350px': "250px",
                md:index==1? '400px': "250px"
              } }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
