import axios from "axios";
import { BASE_URL_API } from "../constants/constants";

export const api = ({ method, path, data, params, headers }) => {
    return axios({
        method,
        url: `${BASE_URL_API}${path}`,
        data,      
        params,
        headers: {
            "Content-Type": "application/json",
            ...headers 
        }
    });
};
