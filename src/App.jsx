import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { CssBaseline } from "@mui/material";
import "@fontsource/poppins";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <CssBaseline />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>

    </>
  );
}
