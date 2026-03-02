import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import photo from "./whattoexpectImage/Rectangle 126.svg";

export default function WhatToExpect({ MainColor, MainFont }) {
  const MenuItem = ({ icon, text, active }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        "&:hover": {
          color: "#503217",
        },
        transition: "0.4s all ease",
        color: "#8F7D6A",
        fontWeight: active ? 600 : 400,
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: {
            xs: "20px",
            md: "35px",
          },
          fontFamily: MainFont,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
  return (
    <Box sx={{ backgroundColor: "#E8E6DE", py: "100px", marginBottom: "90px" }}>
      <Container>
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "40px",
              lg: "58px",
            },
            textAlign: {
              xs: "center",
              lg: "start",
            },
            fontWeight: 600,
            width: {
              xs: "100%",
              lg: "80%",
            },
            color: MainColor,
            fontFamily: MainFont,
            marginBottom: "130px",
          }}
        >
          What to Expect When You Join Our Team
        </Typography>
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <MenuItem
                icon={<TrendingUpIcon fontSize="large" />}
                text="Mission"
              />

              <MenuItem
                icon={<ThumbUpAltOutlinedIcon fontSize="large" />}
                text="Commitments"
                active
              />

              <MenuItem
                icon={<VisibilityOutlinedIcon fontSize="large" />}
                text="Vision"
                active
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box component={"img"} src={photo} width={"100%"} />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              width: {
                lg: "30%",
                md: "70%",
                xs: "100%",
              },
              textAlign: {
                xs: "center",
                lg: "start",
              },

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              fontFamily: "sans-serif",
              fontSize: "18px",
            }}
          >
            <Typography
              color="#8F7D6A"
              sx={{
                "&:hover": {
                  color: MainColor,
                },
                transition: "0.4s all ease",
              }}
            >
              We're committed to supporting your health journey by offering
              valuable educational resources, wellness insights, and expert
              advice to help you make informed decisions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
