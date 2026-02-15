import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Flex, Spin } from "antd";

import { UsersList } from "@/widgets/users-list";
import { UserModal } from "@/widgets/user-modal";
import { userApi, userQueryKeys, IUser } from "@/entities/user";

export const UsersPage = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: userQueryKeys.all,
    queryFn: userApi.getUsers,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  const [selected, setSelected] = useState<IUser | null>(null);
  const [modalShow, setModalShow] = useState(false);

  const handleUserAction = (user?: IUser) => {
    setModalShow(true);
    if (user) {
      setSelected(user);
    }
  };

  if (isLoading) {
    return (
      <Flex justify='center' align='center' style={{ height: "100vh" }}>
        <Spin size='large' />
      </Flex>
    );
  }

  return (
    <>
      <UsersList users={data} handleUserAction={handleUserAction} />

      <Button
        type='primary'
        style={{ marginTop: 20 }}
        onClick={() => handleUserAction()}
      >
        Создать пользователя
      </Button>

      <UserModal
        modalShow={modalShow}
        user={selected}
        onClose={() => setModalShow(false)}
        clearSelected={() => setSelected(null)}
      />
    </>
  );
};
