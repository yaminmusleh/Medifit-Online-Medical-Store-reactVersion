import React from 'react'
import useProfile from '../../hooks/useProfile'
import Loader from '../../ui/Loader';
import { Box, Typography } from '@mui/material';

export default function ProfileInfo() {
    const {data, isError, isLoading,error}= useProfile();
    if (isLoading) return <Loader />;
  if (isError)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
        }}
      >
        <Typography component={"h1"} variant="h1">
          {error.message}
        </Typography>
      </Box>
    );
    
  return (
    <div>ProfileInfo</div>
  )
}
