import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import instance from '../api/axiosInstance'

export default function useResetPassword() {
    const queryClient = useQueryClient();
  return useMutation({
    mutationFn:async()=> await instance.patch(`/auth/Account/ResetPassword`), onSuccess:()=>{
        queryClient.invalidateQueries(['resetPassword']);
    },  onError: (error) => {
      console.error("Send code failed:", error);
    },
  })
}
