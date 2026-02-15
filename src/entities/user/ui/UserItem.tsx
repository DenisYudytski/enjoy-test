import React from "react";
import { List, Avatar } from "antd";
import { IUser } from "../types";
import { getDateAndTimeFormat } from "@/shared";

interface IUserItem {
  user: IUser;
  handleUserAction: (user?: IUser) => void;
}

const defaultAvatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqXhxMVJGGyIeBf5oOKpFuitkX2ukwhBoTQg&s";

export const UserItem: React.FC<IUserItem> = ({ user, handleUserAction }) => {
  return (
    <List.Item
      style={{ cursor: "pointer" }}
      onClick={() => handleUserAction(user)}
    >
      <List.Item.Meta
        avatar={<Avatar size={44} src={user.avatar || defaultAvatar} />}
        title={user.name}
        description={`Зарегестрирован: ${getDateAndTimeFormat(user.createdAt)}`}
      />
    </List.Item>
  );
};
