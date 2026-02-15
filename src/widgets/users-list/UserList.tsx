import React, { FC } from "react";
import { List } from "antd";
import { IUser, UserItem } from "@/entities/user";

interface IUsersList {
  users: IUser[];
  handleUserAction: (user?: IUser) => void;
}

export const UsersList: FC<IUsersList> = ({ users, handleUserAction }) => {
  return (
    <List
      dataSource={users}
      renderItem={(user) => (
        <UserItem user={user} handleUserAction={handleUserAction} />
      )}
    />
  );
};
