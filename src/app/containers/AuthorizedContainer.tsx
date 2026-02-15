import React from "react";
import { Layout, Button } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useLogout } from "@/features/auth";
import { authStorage } from "@/entities/auth";

const { Header, Content } = Layout;

export const AuthorizedContainer: React.FC = () => {
  const { logout } = useLogout();

  if (!authStorage.isAuthenticated()) {
    return <Navigate to='/auth' replace />;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button type='primary' onClick={logout}>
          Выход
        </Button>
      </Header>

      <Content style={{ padding: "0 24px 24px" }}>
        <Outlet />
      </Content>
    </Layout>
  );
};
