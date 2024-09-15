import { api } from "./api";

export const fileUpload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return await api({
    path: "/upload",
    method: "POST",
    data: formData,

  });
};
