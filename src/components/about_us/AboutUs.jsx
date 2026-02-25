import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function AboutUs({ MainColor, MainFont }) {
  return (
    <Box py={"130px"} display={"flex"} justifyContent={"center"}>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "start" }}
        spacing={8}
      >
        <Grid item xs={12} md={4}>
          <Typography
            sx={{
              textAlign: "end",
              fontSize: {
                xs: "34px",
                sm: "40px",
                md: "55px",
              },
              color: MainColor,
              fontFamily: MainFont,
            }}
          >
            About us
          </Typography> 
        </Grid>
        <Grid item xs={12} md={6} sx={{ width: "70%" }}>
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                lg: "start",
              },
              fontSize: {
                xs: "20px",
                sm: "30px",
                md: "40px",
              },
              color: MainColor,
              fontFamily: MainFont,
            }}
          >
            Our focus is on nurturing wellness and empowering health for all
            ages well being for people worldwide.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
