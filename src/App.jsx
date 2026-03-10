import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CssBaseline } from "@mui/material";
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
import '../i18next'


export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </>
  );
}
