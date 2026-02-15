import React from "react";
import { Wrapper } from "./styles";
import { LoginForm } from "@/features/auth";
import { Card } from "antd";

export const LoginPage = () => {
  return (
    <Wrapper>
      <Card title='Авторизация' style={{ width: 400 }}>
        <LoginForm />
      </Card>
    </Wrapper>
  );
};
