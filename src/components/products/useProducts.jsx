import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import instance from "../../api/axiosInstance"
import { useTranslation } from "react-i18next";

export default function useProducts(limit) {
  const { i18n } = useTranslation();
  const getProducts = async () => {
    const response = await instance.get(`/Products?limit=${limit}`);
    return response.data.response.data;
  };
  const query = useQuery({
    queryKey: ["products", i18n.language,limit],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 2,
  });
  return query;
}
//knowledgeshop.runasp.net/api/Products
