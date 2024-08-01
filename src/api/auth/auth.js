import { api } from "../api"

export const loginApi = (payload) =>{
    api({
        method: "POST",
        data: payload,
        params: null,
        path: "",
    })
}

export const SignupApi = (payload) =>{
    api({
        method: "POST",
        data: payload,
        params: null,
        path: "",
    })
}

export const getAllUserByIdApi = (payload) =>{
    api({
        method: "GET", 
        data: null,  // if send data through body then write here or pass null
        params: {
            id : payload.id  // if send data through params then write params data or pass null
        },
        path: "",  // api path endpoint
    })
}


// All are exampless
