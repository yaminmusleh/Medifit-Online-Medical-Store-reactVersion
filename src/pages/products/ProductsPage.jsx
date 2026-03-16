import React from "react";
import useGetCategory from "../../hooks/useGetCategory";
import { useParams } from "react-router-dom";
import Loader from "../../ui/Loader";
import { Box, Typography } from "@mui/material";

export default function ProductsPage() {
  const { categId } = useParams();
  const { data, isLoading, isError } = useGetCategory(categId);

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

  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography>No Products available now :(</Typography>
    </Box>
  )
}
