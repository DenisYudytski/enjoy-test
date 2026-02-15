import { useNavigate } from "react-router-dom";
import { api } from "@/shared";
import { App } from "antd";

//просто для красоты, у всех юзеров будет дефолтные пароли при создании, но зайти можно только в админа, как бы мок апи не сервер)

export const useLogin = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();

  const login = async (payload: { login: string; password: string }) => {
    try {
      const { data } = await api.get(`/users?name=${payload.login}`);

      if (!data.length) {
        message.error("Пользователь не найден");
      }

      const user = data[0];

      if (user.password !== payload.password || !user.isAdmin) {
        message.error("Неверный логин или пароль");
        return;
      }

      localStorage.setItem("token", "fake-jwt-token");

      navigate("/users");
    } catch (error) {
      message.error("Неверный логин или пароль");
    }
  };

  return { login };
};
