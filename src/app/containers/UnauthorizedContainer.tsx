import { authStorage } from "@/entities/auth";
import { Flex } from "antd";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const UnauthorizedContainer = () => {
  if (authStorage.isAuthenticated()) {
    return <Navigate to='/' replace />;
  }

  return (
    <Flex justify='center' align='center' style={{ minHeight: "100vh" }}>
      <Outlet />
    </Flex>
  );
};
