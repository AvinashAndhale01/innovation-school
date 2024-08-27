import axios from "axios";
import { BASE_URL_API } from "../constants/constants";
import Cookies from 'js-cookie';


export const api = ({ method, path, data, params, headers }) => {
  
  const token = localStorage.getItem("auth-Token") || Cookies.get("token") || null;
 
  const defaultHeaders = {
    "Content-Type": "application/json",
    "Authorization": token ? `Bearer ${token}` : null
  };

  const finalHeaders = { ...defaultHeaders, ...headers };

  return axios({
    method,
    url: `${BASE_URL_API}${path}`,
    data,
    params,
    headers: finalHeaders,
  });
};
