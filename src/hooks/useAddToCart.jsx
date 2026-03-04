import { useMutation } from "@tanstack/react-query";
import authinstance from "../api/authAxiosInstance";
import React from "react";

export default function useAddToCart() {
  const mutation = useMutation({
    mutationFn: async ({ProductId, Count}) => {
      return await authinstance.post("/Carts", {
        ProductId: ProductId,
        Count: Count,
      });
    },
  });

  return mutation;
}
