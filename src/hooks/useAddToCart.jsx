import { useMutation, useQueryClient } from "@tanstack/react-query";
import authinstance from "../api/authAxiosInstance";
import React from "react";

export default function useAddToCart() {
  const queryClient = useQueryClient(); // we didnt put new because we need the same query in the app.jsx
  const mutation = useMutation({
    mutationFn: async ({ ProductId, Count }) => {
      return await authinstance.post("/Carts", {
        ProductId: ProductId,
        Count: Count,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] }); //we give this the same names in useQuery
      //this line tells the website to treat the cache as old data, and to get the data from server
      //so when i add to cart it will be added immediatly without refreshing
    },
  });

  return mutation;
} 