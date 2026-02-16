import React from "react";
import useCard from "../../hooks/useCard";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
export default function Cart() {
  const { data, isError, isLoading, error } = useCard();
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

  return <div>Cart</div>;
}
