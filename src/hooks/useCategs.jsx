import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import instance from "../api/axiosInstance";

export default function useCategs() {
  const getCats = async () => {
    const response = await instance.get(`/Categories`);

    return response.data.response;
  };
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: getCats,
    staleTime: 1000 * 60 * 2,
  });
  return query; //returning the query value
}
