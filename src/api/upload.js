import { api } from "./api";

export const fileUpload = async (payload) => {
  return await api({
    path: "/upload",
    method: "POST",
    data: payload,
    params: null,
  });
};

