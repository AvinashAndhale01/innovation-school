import { customToast, toastTypes } from "../components/customToast/customToast";
import { BASE_URL_API } from "../constants/constants";
import Cookies from "js-cookie";

export const api = async ({ method, path, data, params, headers }) => {
  const token =
    localStorage.getItem("auth-Token") || Cookies.get("token") || null;

  const defaultHeaders = {
    Authorization: token ? `Bearer ${token}` : null,
  };

  // If not form-data, default to JSON
  const isFormData = data instanceof FormData;
  if (!isFormData) {
    defaultHeaders["Content-Type"] = "application/json";
  }

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
    body: method !== "GET" && method !== "HEAD" ? (isFormData ? data : JSON.stringify(data)) : null,
  };

  try {
    const response = await fetch(url, fetchOptions);

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'An error occurred';
      customToast(toastTypes.error, errorMessage);
      console.error("API error:", errorMessage);
      throw new Error(errorMessage);
    }

    // Assume the response is JSON
    const result = await response.json();
    return result;
  } catch (error) {
    // Handle errors
    customToast(toastTypes.error, error.message);
    console.error("API request error:", error);
    throw error;
  }
};
