import React from "react";
import { Button, Input, Card } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const LoginPage = () => {
  const navigate = useNavigate();
  console.log("process.env.API_BASE_URL", process.env.API_BASE_URL);

  return (
    <Wrapper>
      <Card title='Авторизация' style={{ width: 400 }}>
        <Input placeholder='Логин' style={{ marginBottom: 16 }} />
        <Input.Password placeholder='Пароль' style={{ marginBottom: 16 }} />
        <Button type='primary' block onClick={() => navigate("/users")}>
          Войти
        </Button>
      </Card>
    </Wrapper>
  );
};
