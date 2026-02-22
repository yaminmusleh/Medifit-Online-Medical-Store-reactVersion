import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import authinstance from "../api/authAxiosInstance";
export default function useCard() {
  const getcard = async () => {
    const response = await authinstance.get(`/Carts`);
    return response.data;
  };
  const query = useQuery({
    queryKey: ["cart", "en"],
    queryFn: getcard, 
    staleTime: 1000 * 60 * 2,
    // takes data from cache for a certian time before making a new request
  });
  return query;
}
