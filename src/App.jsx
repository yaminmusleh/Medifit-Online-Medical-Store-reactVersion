import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@fontsource/poppins";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "../i18next";
import theme from "../theme";
import getThemes from "../theme";
import useThemeStore from "./store/useThemeStore";

export default function App() {
  const mode = useThemeStore((state)=>state.mode);
  const queryClient = new QueryClient();
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={getThemes(mode)}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
