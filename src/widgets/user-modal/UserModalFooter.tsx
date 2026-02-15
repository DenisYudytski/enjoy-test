import React from "react";
import { Button, Popconfirm } from "antd";

interface Props {
  isEdit: boolean;
  loadingSave: boolean;
  loadingDelete: boolean;
  onSave: () => void;
  onDelete: () => void;
  onCancel: () => void;
}

export const ModalFooter: React.FC<Props> = ({
  isEdit,
  loadingSave,
  loadingDelete,
  onSave,
  onDelete,
  onCancel,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isEdit ? "space-between" : "flex-end",
        width: "100%",
      }}
    >
      {isEdit && (
        <Popconfirm
          title='Удалить пользователя?'
          okText='Удалить'
          cancelText='Отмена'
          onConfirm={onDelete}
        >
          <Button type='primary' loading={loadingDelete}>
            Удалить
          </Button>
        </Popconfirm>
      )}

      <div>
        <Button
          type='primary'
          loading={loadingSave}
          onClick={onSave}
          style={{ marginRight: 8 }}
        >
          {isEdit ? "Сохранить" : "Создать"}
        </Button>

        <Button type='primary' onClick={onCancel}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
