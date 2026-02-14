import React, { FC, useState } from "react";
import { Modal, Input, Button } from "antd";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "@/entities/user/api/userApi";
import { IUser } from "@/entities/user/types";
import { userQueryKeys } from "@/entities/user/api/queryKeys";

interface UserModalProps {
  user: IUser | null;
  modalShow: boolean;
  onClose: () => void;
}

export const UserModal: FC<UserModalProps> = ({ modalShow, user, onClose }) => {
  const queryClient = useQueryClient();

  const [name, setName] = useState<string>(user?.name ?? "");
  const [avatar, setAvatar] = useState<string>(user?.avatar ?? "");

  const updateMutation = useMutation({
    mutationFn: () =>
      user
        ? userApi.updateUser(user.id, { name, avatar })
        : userApi.createUser({ name, avatar }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
      onClose();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => userApi.deleteUser(user!.id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      onClose();
    },
  });

  return (
    <Modal open={modalShow} onCancel={onClose} footer={null}>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Имя'
      />

      <Input
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder='Ссылка на аватар'
        style={{ marginTop: 16 }}
      />

      <div style={{ marginTop: 24, display: "flex", gap: 8 }}>
        {user && (
          <Button danger onClick={() => deleteMutation.mutate()}>
            Удалить
          </Button>
        )}

        <Button type='primary' onClick={() => updateMutation.mutate()}>
          Сохранить
        </Button>
      </div>
    </Modal>
  );
};
