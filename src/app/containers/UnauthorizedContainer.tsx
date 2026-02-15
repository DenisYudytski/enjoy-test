import { authStorage } from "@/entities/auth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const UnauthorizedContainer = () => {
  if (authStorage.isAuthenticated()) {
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
};
