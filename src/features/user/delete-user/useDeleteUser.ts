import { IUser, userApi, userQueryKeys } from "@/entities/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { App } from "antd";

export const useDeleteUser = (userId: string, onSuccess?: () => void) => {
  const { message } = App.useApp();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => userApi.deleteUser(userId),

    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: userQueryKeys.all,
      });

      const prevUsers = queryClient.getQueryData<IUser[]>(userQueryKeys.all);

      if (prevUsers) {
        queryClient.setQueryData<IUser[]>(
          userQueryKeys.all,
          prevUsers.filter((user) => user.id !== userId),
        );
      }

      return { prevUsers };
    },

    onError: (_error, _variables, context) => {
      if (context?.prevUsers) {
        queryClient.setQueryData(userQueryKeys.all, context.prevUsers);
      }

      message.error("Не удалось удалить пользователя");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.all,
      });
    },

    onSuccess: () => {
      message.success("Пользователь удалён");
      onSuccess?.();
    },
  });
};
