import React from "react";
import { Button, Flex, Form, Input } from "antd";
import { useLogin } from "../hooks/useLogin";

export const LoginForm = () => {
  const { login } = useLogin();
  const [form] = Form.useForm();

  const handleFinish = (values: { login: string; password: string }) => {
    login(values);
  };

  return (
    <Form form={form} layout='vertical' onFinish={handleFinish}>
      <Form.Item
        name='login'
        rules={[{ required: true, message: "Введите логин" }]}
      >
        <Input placeholder='Логин' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: "Введите пароль" }]}
      >
        <Input.Password placeholder='Пароль' />
      </Form.Item>

      <Flex justify='flex-end'>
        <Button type='primary' htmlType='submit'>
          Войти
        </Button>
      </Flex>
    </Form>
  );
};
