import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import image from "./about_images/img.webp";
import imag2 from "./about_images/link-external.svg";
import { Link } from "react-router-dom";

export default function Invitation() {
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
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
          borderRadius: "15px",
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
              lg: "43%",
            },
          }}
          px={5}
          py={{ xs: "13px", lg: "0px" }}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "28px",
                  md: "44px",
                },
                color: color1,
                fontFamily: "poppins",
              }}
            >
              Join our trustable Medifit product community
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
              Join us as we build a community where wellness is accessible,
              education is empowering, and health is a shared journey.
            </Typography>
          </Box>
          <Box marginTop={5}>
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                textTransform: "none",
                fontFamily: "poppins",
                fontSize: {
                  xs: "12px",
                  md: "14px",
                },
                backgroundColor: color1,
                "&:hover": {
                  backgroundColor: hover_color,
                },
              }}
            >
              Get started
              <img src={imag2} style={{ marginLeft: "12px" }} />
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
