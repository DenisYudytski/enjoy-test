import { useEffect } from "react";
import { FormInstance } from "antd";

export const useEntityForm = <T extends object>(
  form: FormInstance,
  entity: T | null,
) => {
  useEffect(() => {
    if (entity) {
      form.setFieldsValue(entity);
    } else {
      form.resetFields();
    }
  }, [entity, form]);

  const submit = async (): Promise<T> => {
    const values = await form.validateFields();
    return values as T;
  };

  return { submit };
};
