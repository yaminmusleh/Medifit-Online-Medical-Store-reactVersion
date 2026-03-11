import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import image1 from "./cta_imgs/img1.svg";
import image2 from "./cta_imgs/img2.svg";
import image3 from "./cta_imgs/img3.svg";

export default function CTA() {
  const theme = useTheme();
  const items = [
    {
      img: image1,
      title: "30 Days warranty",
      details: "Enjoy peace of mind with warranty",
    },
    {
      img: image2,
      title: "Free Shipping",
      details: "You’re satisfied with your purchase",
    },
    {
      img: image3,
      title: "Secure Payment",
      details: "Shop with confidence every time",
    },
  ];

  return (
    <Box
      py={"100px"}
      textAlign={"center"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
      className = 'cta-grid'
        borderRadius={"10px"}
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        
        width={"100%"}
      >
        {items.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box component="img" src={item.img} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#503217",
                    fontFamily: "poppins",
                    fontWeight: 600,
                    fontSize: {
                      xs: "16px",
                      sm: "18px",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#8F7D6A",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                    },
                  }}
                >
                  {item.details}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

