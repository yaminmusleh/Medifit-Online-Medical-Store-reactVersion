import { useMutation, useQueryClient } from "@tanstack/react-query";
import authinstance from "../api/authAxiosInstance";

export default function useRemoveFromCart() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cartItemId) => authinstance.delete(`/Carts/${cartItemId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
      });
    },
  });
}
