import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async (payload: { login: string; password: string }) => {
    if (payload.login && payload.password) {
      localStorage.setItem("token", "fake-jwt-token");
      navigate("/users");
    } else {
      throw new Error("Неверный логин или пароль");
    }
  };

  return {
    login,
  };
};
