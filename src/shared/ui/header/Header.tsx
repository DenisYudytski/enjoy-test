import React from "react";
import { Button, Flex, Typography } from "antd";
const { Title } = Typography;

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const Header = () => {
  return (
    <Flex justify='flex-end' align='center' style={{ marginBottom: 24 }}>
      <Button type='primary' onClick={handleLogout}>
        Выход
      </Button>
    </Flex>
  );
};
