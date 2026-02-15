import React from "react";
import { Form, Modal } from "antd";
import { ModalFooter } from "./UserModalFooter";
import { IUser, UserForm } from "@/entities/user";
import { useDeleteUser, useSaveUser } from "@/features/user";
import { useEntityForm } from "@/shared";

interface Props {
  user: IUser | null;
  modalShow: boolean;
  onClose: () => void;
  clearSelected: () => void;
}

export const UserModal: React.FC<Props> = ({
  user,
  modalShow,
  onClose,
  clearSelected,
}) => {
  const [form] = Form.useForm<IUser>();

  const { submit } = useEntityForm<IUser>(form, user);

  const saveMutation = useSaveUser(user, clearSelected);

  const deleteMutation = useDeleteUser(user?.id!, clearSelected);

  const handleClose = () => {
    clearSelected();
    onClose();
  };

  const handleSave = async () => {
    try {
      const values = await submit();
      if (user) {
        const isSame =
          values.name === user.name && values.avatar === user.avatar;

        if (isSame) {
          onClose();
          return;
        }
      }
      onClose();
      form.resetFields();
      saveMutation.mutate(values);
    } catch (err) {}
  };

  const handleDelete = () => {
    onClose();
    deleteMutation.mutate();
  };

  return (
    <Modal
      open={modalShow}
      title={user ? "Редактирование пользователя" : "Создание пользователя"}
      onCancel={handleClose}
      footer={
        <ModalFooter
          disabled={user?.isAdmin}
          isEdit={!!user}
          loadingSave={saveMutation.isPending}
          loadingDelete={deleteMutation.isPending}
          onSave={handleSave}
          onDelete={handleDelete}
          onCancel={handleClose}
        />
      }
    >
      <UserForm disabled={user?.isAdmin} isEdit={Boolean(user)} form={form} />
    </Modal>
  );
};
