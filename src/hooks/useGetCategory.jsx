import React from 'react'
import instance from '../api/axiosInstance'
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';

export default function useGetCategory(id) {
    const { i18n } = useTranslation();
    const getProductsFromCateg=async()=>{

        const response = await instance.get(`/Products/category/${id}`);
        return response.data;

    }
    const query = useQuery({
    queryKey: ["products", i18n.language,id],
    queryFn: getProductsFromCateg,
    staleTime: 1000 * 60 * 2,
   
  });
  return query;
}
