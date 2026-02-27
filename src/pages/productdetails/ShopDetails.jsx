import React from "react";
import { useParams } from "react-router-dom";
import useShop from "../../hooks/useShop";
import Loader from "../../ui/Loader";
import { Box, Typography } from "@mui/material";


export default function ShopDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useShop(id);
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
    console.log(data);
  return <div>ShopDetails</div>;
}
