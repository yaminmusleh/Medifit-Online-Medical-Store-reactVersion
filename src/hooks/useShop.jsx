import React from "react";
import { useQuery } from "@tanstack/react-query";
import instance from "../api/axiosInstance";

export default function useShop(id) {
  const getProduct = async () => {
    const response = await instance.get(`/Products/${id}`);
    return response.data.response;
  };
  const query = useQuery({
    queryKey: ["product", "en", id],
    queryFn: getProduct,
    staleTime: 1000 * 60 * 2,
  });
  return query;
}
