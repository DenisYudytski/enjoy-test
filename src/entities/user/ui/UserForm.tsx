import React from "react";
import { Form, Input } from "antd";
import { FC } from "react";

interface Props {
  form: any;
  isEdit: boolean;
  disabled: boolean | undefined;
}

export const UserForm: FC<Props> = ({ form, isEdit, disabled }) => {
  return (
    <Form form={form} layout='vertical'>
      {isEdit && (
        <Form.Item label='Id' name='id'>
          <Input disabled />
        </Form.Item>
      )}

      <Form.Item
        rules={[{ required: true, message: "Введите имя пользователя" }]}
        label='Имя'
        name='name'
      >
        <Input disabled={disabled} />
      </Form.Item>

      <Form.Item initialValue='' label='Ссылка на аватарку' name='avatar'>
        <Input />
      </Form.Item>
    </Form>
  );
};
