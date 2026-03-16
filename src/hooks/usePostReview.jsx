import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import authinstance from "../api/authAxiosInstance";

export default function usePostReview() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({productId, rating, comment}) => {
      const response = await authinstance.post(`/Products/${productId}/reviews`, {
        Rating: rating,
        Comment: comment,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customerReview"] });
    },
    onError: (error) => {
      console.error("Sending Review failed:", error);
    },
  });
}
