import { Typography } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
