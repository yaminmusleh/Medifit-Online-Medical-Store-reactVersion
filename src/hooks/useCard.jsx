import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import authinstance from "../api/authAxiosInstance";
import { useTranslation } from "react-i18next";
export default function useCard() {
  const { i18n } = useTranslation();
  const getcard = async () => {
    const response = await authinstance.get(`/Carts`);
    return response.data;
  };
  const query = useQuery({
    queryKey: ["cart", i18n.language],
    queryFn: getcard, 
    staleTime: 1000 * 60 * 2,
    // takes data from cache for a certian time before making a new request
  });
  return query;
}
