import { useMutation, useQueryClient } from "@tanstack/react-query";

import dayjs from "dayjs";
import { App } from "antd";
import {
  ISaveUserContext,
  ISaveUserVariables,
  IUser,
  userApi,
  userQueryKeys,
} from "@/entities/user";

export const useSaveUser = (user?: IUser | null, onSuccess?: () => void) => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation<IUser, unknown, ISaveUserVariables, ISaveUserContext>({
    mutationFn: (variables) =>
      user
        ? userApi.updateUser(user.id, variables)
        : userApi.createUser(variables),

    onMutate: async (variables) => {
      await queryClient.cancelQueries({
        queryKey: userQueryKeys.all,
      });

      const previousUsers = queryClient.getQueryData<IUser[]>(
        userQueryKeys.all,
      );

      if (!previousUsers) {
        return { previousUsers };
      }

      if (user) {
        queryClient.setQueryData<IUser[]>(
          userQueryKeys.all,
          previousUsers.map((existingUser) =>
            existingUser.id === user.id
              ? { ...existingUser, ...variables }
              : existingUser,
          ),
        );

        return { previousUsers };
      }

      const tempId = `temp-${Date.now()}`;

      const optimisticUser: IUser = {
        id: tempId,
        name: variables.name,
        avatar: variables.avatar,
        createdAt: dayjs().toISOString(),
      };

      queryClient.setQueryData<IUser[]>(userQueryKeys.all, [
        ...previousUsers,
        optimisticUser,
      ]);

      return { previousUsers };
    },

    onError: (_error, _variables, context) => {
      if (context?.previousUsers) {
        queryClient.setQueryData(userQueryKeys.all, context.previousUsers);
      }

      message.error(
        user
          ? "Ошибка обновления пользователя"
          : "Ошибка создания пользователя",
      );
    },

    onSuccess: () => {
      message.success(user ? "Пользователь обновлён" : "Пользователь создан");
      onSuccess?.();
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.all,
      });
    },
  });
};
