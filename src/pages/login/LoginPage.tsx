import React from "react";
import { LoginForm } from "@/features/auth";
import { Card } from "antd";

export const LoginPage = () => {
  return (
    <Card title='Авторизация' style={{ width: 400 }}>
      <LoginForm />
    </Card>
  );
};
