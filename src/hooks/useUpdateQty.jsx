import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import authinstance from "../api/authAxiosInstance";

export default function useUpdateQty() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({productId, count}) => {
       await authinstance.patch(`/Carts/${productId}`, { count }); // i can do {count:count} but since they are the same name, react will understand it
    },
    onSuccess:()=>{queryClient.invalidateQueries({
      queryKey:['carts']
    })}
  });
}
