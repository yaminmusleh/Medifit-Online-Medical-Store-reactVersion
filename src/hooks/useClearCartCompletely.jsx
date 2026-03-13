import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import authinstance from "../api/authAxiosInstance";

export default function useClearCartCompletely() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => authinstance.delete(`/Carts/clear`),
    onSuccess: () => {
      queryClient.invalidateQueries(["carts"]);
    },
    onError: (error) => {
      console.error("Failed to clear cart", error);
    },
  });
}
