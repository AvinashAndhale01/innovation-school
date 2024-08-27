import { customToast, toastTypes } from "../components/customToast/customToast";
import { BASE_URL_API } from "../constants/constants";
import Cookies from "js-cookie";

export const api = async ({ method, path, data, params, headers }) => {
  const token =
    localStorage.getItem("auth-Token") || Cookies.get("token") || null;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : null,
  };

  const finalHeaders = { ...defaultHeaders, ...headers };

  const url = new URL(`${BASE_URL_API}${path}`);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const fetchOptions = {
    method,
    headers: finalHeaders,
    body: method !== "GET" && method !== "HEAD" ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(url, fetchOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    customToast(toastTypes.error, error.message);
    console.error("API request error:", error);
    throw error;
  }
};
