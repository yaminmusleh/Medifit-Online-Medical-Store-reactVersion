import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import instance from "../api/axiosInstance";

export default function useCategs(limit) {
  const getCats = async () => {
    const response = await instance.get(`/Categories?limit=${limit}`);
    return response.data.response.data;
  };
  const query = useQuery({
    queryKey: ["categories", "en", limit],
    queryFn: getCats,
    staleTime: 1000 * 60 * 2,
    // takes data from cache for a certian time before making a new request
  });
  return query; //returning the query value
}
