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

export const deleteCourseById = async (payload) => {
  return await api({
    path: `/course/courses/${payload.id}`,
    method: "DELETE",
    params: null,
  });
};


export const updateCourseById = async (payload) => {
  return await api({
    path: `/course/courses/${payload.id}`,
    method: "PUT",
    params: null,
    data: {...payload.payload}
  });
};

export const createCourse = async (payload) => {
  return await api({
    path: `/course/create`,
    method: "POST",
    data: {...payload.payload},
    params: null,
  });
};