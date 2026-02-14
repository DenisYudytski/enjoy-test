import React, { FC } from "react";
import { Layout, Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

interface Props {
  isAuth?: boolean;
  onLogout?: () => void;
}

export const AppLayout: FC<Props> = ({ isAuth = false, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout?.();
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {isAuth && (
          <Button type='primary' onClick={handleLogout}>
            Выход
          </Button>
        )}
      </Header>

      <Content style={{ padding: 24 }}>
        <Outlet />
      </Content>
    </Layout>
  );
};
