import React from "react";
import Invitation from "../../components/about_invitation/Invitation";
import { Box, Grid, Typography } from "@mui/material";
import video from "./assets_about/IMG_5209.MP4";
import poster from "./assets_about/ChatGPT Image Oct 25, 2025, 02_10_06 PM.webp";

export default function About() {
  const color1 = "#503217";
  return (
    <>
      <Grid container justifyContent="center" alignItems="center" gap={3}>
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              sm: "32px",
              md: "48px",
              
            },
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "poppins",
            color: color1,
          }}
        >
          Experts Behind Your Care
        </Typography>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="video"
            src={video}
            poster={poster}
            controls
            muted
            sx={{
              width: "100%",
              display: "block",
              borderRadius: "15px",
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
      <Invitation />
    </>
  );
}
