import { api } from "@/shared/api/base";
import { IUser } from "../types";

export const userApi = {
  getUsers: async (): Promise<IUser[]> => {
    const { data } = await api.get("/users");
    return data;
  },

  createUser: async (payload: Omit<IUser, "id" | "createdAt">) => {
    const { data } = await api.post("/users", payload);
    return data;
  },

  updateUser: async (id: string, payload: Partial<IUser>) => {
    const { data } = await api.put(`/users/${id}`, payload);
    return data;
  },

  deleteUser: async (id: string) => {
    await api.delete(`/users/${id}`);
  },
};
