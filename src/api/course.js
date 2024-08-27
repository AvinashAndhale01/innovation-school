import { api } from "./api";

export const getAllCourses = async (payload) => {
  return await api({
    path: "/course/get/all",
    method: "GET",
    data: null,
    params: payload,
  });
};

export const getCourseById = async (payload) => {
  return await api({
    path: `/course/courses/${payload.id}`,
    method: "GET",
    data: null,
    params: null,
  });
};
