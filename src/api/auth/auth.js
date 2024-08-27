import { api } from "../api";

export const loginApi = async (payload) => {
  return await api({
    path: "/admin/signin",
    method: "POST",
    data: payload,
    params: null,
  });
};
