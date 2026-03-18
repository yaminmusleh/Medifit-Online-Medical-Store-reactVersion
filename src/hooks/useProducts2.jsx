import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useTranslation } from "react-i18next";
import instance from "../api/axiosInstance";

export default function useProducts2({
  sortBy,
  minPrice,
  maxPrice,
  search,
  ascending,
}) {
  const { i18n } = useTranslation();
  const getProducts = async () => {
    const response = await instance.get(`/Products`, {
      params: {
        sortBy,
        minPrice,
        maxPrice,
        search,
        ascending,
        lang: i18n.language,
      },
    });
    return response.data.response.data;
  };
  const query = useQuery({
    queryKey: [
      "product",
      i18n.language,
      sortBy,
      minPrice,
      maxPrice,
      search,
      ascending,
    ],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 2,
  });
  return query;
}
