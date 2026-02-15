import React from "react";
import { Form, Input } from "antd";
import { FC } from "react";

interface Props {
  form: any;
  isEdit: boolean;
}

export const UserForm: FC<Props> = ({ form, isEdit }) => {
  return (
    <Form form={form} layout='vertical'>
      {isEdit && (
        <Form.Item label='Id' name='id'>
          <Input disabled />
        </Form.Item>
      )}

      <Form.Item label='Имя' name='name'>
        <Input />
      </Form.Item>

      <Form.Item label='Ссылка на аватарку' name='avatar'>
        <Input />
      </Form.Item>
    </Form>
  );
};
