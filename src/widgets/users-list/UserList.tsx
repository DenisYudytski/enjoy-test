import React, { FC } from "react";
import { List, Avatar } from "antd";
import { IUser } from "@/entities/user";
import { getDateFormat } from "@/shared";

interface Props {
  users: IUser[];
  handleUserAction: (user?: IUser) => void;
}

export const UsersList: FC<Props> = ({ users, handleUserAction }) => {
  return (
    <List
      dataSource={users}
      renderItem={(user) => (
        <List.Item
          style={{ cursor: "pointer" }}
          onClick={() => handleUserAction(user)}
        >
          <List.Item.Meta
            avatar={<Avatar size={44} src={user.avatar} />}
            title={user.name}
            description={`Зарегестрирован: ${getDateFormat(user.createdAt)}`}
          />
        </List.Item>
      )}
    />
  );
};
