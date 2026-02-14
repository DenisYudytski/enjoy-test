import React, { FC } from "react";
import { List, Avatar } from "antd";
import { IUser } from "@/entities/user/types";
import { getDateFormat } from "@/shared/lib/date";

interface Props {
  users: IUser[];
  onSelect: (user: IUser) => void;
}

export const UsersList: FC<Props> = ({ users, onSelect }) => {
  return (
    <List
      dataSource={users}
      renderItem={(user) => (
        <List.Item onClick={() => onSelect(user)}>
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
