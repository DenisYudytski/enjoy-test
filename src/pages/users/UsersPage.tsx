import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Spin } from "antd";

import { UsersList } from "@/widgets/users-list";
import { UserModal } from "@/widgets/user-modal";
import { IUser } from "@/entities/user/types";
import { Header } from "@/shared/ui";
import { userApi, userQueryKeys } from "@/entities/user/api";

export const UsersPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: userQueryKeys.all,
    queryFn: userApi.getUsers,
  });

  const [selected, setSelected] = useState<IUser | null>(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalMode, setModalMode] = useState(false);

  if (isLoading) {
    return (
      <Flex justify='center' align='center' style={{ height: "100vh" }}>
        <Spin size='large' />
      </Flex>
    );
  }

  return (
    <div>
      {/* <Header /> */}
      <UsersList users={data} onSelect={setSelected} />

      <Button
        type='primary'
        style={{ marginTop: 16 }}
        onClick={() => setModalShow(true)}
      >
        Создать пользователя
      </Button>

      <UserModal
        modalShow={modalShow}
        user={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};
