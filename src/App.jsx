import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}
