import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useQuery } from "@tanstack/react-query";

export default function Categories() {
  const getCats = async () => {
    const response = await axios.get(
      `https://knowledgeshop.runasp.net/api/Categories`,
    );

    return response.data.response;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCats,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading)
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress />
      </Box>
    );
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
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {data.map((categs) => (
        <Card
          key={categs.id}
          sx={{
            flex: {
              xs: "1 1 100%",
              sm: "1 1 45%",
              md: "1 1 30%",
              lg: "1 1 20%",
            },
            borderRadius: "20px",
            boxShadow: "inherit",
            border: "1px solid #503217",
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "poppins",
                  color: "#503217",
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {categs.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
