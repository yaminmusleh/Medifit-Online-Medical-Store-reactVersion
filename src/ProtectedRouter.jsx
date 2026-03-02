import React, { useEffect } from "react";
import useAuthStore from "./store/useAuthStore";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRouter({ children }) {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    if (!toast.isActive("auth-warning")) {
      toast.warning("Please login first...", { toastId: "auth-warning" });
    }
    return <Navigate to="/login" replace />;
  }

  return children; // return the cart page if there was a token
}
