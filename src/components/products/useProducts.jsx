import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import instance from "../../api/axiosInstance"

export default function useProducts(limit) {
  const getProducts = async () => {
    const response = await instance.get(`/Products?limit=${limit}`);
    return response.data.response.data;
  };
  const query = useQuery({
    queryKey: ["products", "en",limit],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 2,
  });
  return query;
}
//knowledgeshop.runasp.net/api/Products
