import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import image from "./bring-trust/bringing-trust.svg";
import imag2 from "./bring-trust/history.svg";
import { Link } from "react-router-dom";

export default function TrustHealth() {
  const color1 = "#503217";
  const color2 = "#8F7D6A";
  const hover_color = "#794c24";
  return (
    <Box py="80px" sx={{ textAlign: { xs: "center", lg: "start" } }}>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
              lg: "60%",
            },
          }}
        
          py={{ xs: "13px", lg: "0px" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "28px",
                  md: "43px",
                },
                fontWeight: "700",
                color: color1,
                fontFamily: "poppins",
              }}
            >
              Bringing trusted health solutions to your doorstep focused on
              quality care & reliability
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                color: color2,
                fontFamily: "poppins",
              }}
            >
              Our store offers a comprehensive range of pharmaceuticals, health
              and wellness products, and medical supplies to meet the diverse
              needs of our community.
            </Typography>
          </Box>
          <Box marginTop={5}>
            <Button
              component={Link}
              to="/about"
              variant="contained"
              sx={{
                textTransform: "none",
                fontFamily: "poppins",
                fontSize: {
                  xs: "12px",
                  md: "16px",
                },
                backgroundColor: color1,
                "&:hover": {
                  backgroundColor: hover_color,
                },
                borderRadius: "8px",
              }}
            >
              Our story
              <img src={imag2} style={{ marginLeft: "4px" }} />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Box component="img" src={image} width={{ xs: "100%", md: "95%" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
