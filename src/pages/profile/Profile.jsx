import { Avatar, Box, Grid } from "@mui/material";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import useProfile from "../../hooks/useProfile";
import video from "./video/IMG_6120.MP4";

export default function Profile() {
  const { data } = useProfile();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" , flexDirection:'column'}}
    >
      <Card sx={{ width: "100%" }}>
        <CardActionArea sx={{ py: "40px" }}>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              margin: "0 auto 10px",
              bgcolor: "#503217",
              color: "#fff",
            }}
          >
            {data?.fullName?.[0] || "U"}
          </Avatar>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            <Typography
              gutterBottom
              sx={{
                color: "#503217",
                fontFamily: "poppins",
                fontSize: {
                  xs: "20px",
                  md: "34px",
                },
              }}
            >
              {data?.fullName}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontFamily: "poppins" }}>
              {data?.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Grid container justifyContent="center" alignItems="center" gap={3} sx={{mt:'30px'}}>
       
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
            controls
            muted
            sx={{
              width: "100%",
              maxWidth:1000,
              display: "block",
              borderRadius: "15px",
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
