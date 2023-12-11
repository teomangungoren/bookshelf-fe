import axios from "axios";

const AUTH_REST_API_URL = "http://localhost:8080/api/v1/users";

export const registerAPICall = (registerObj) => {
    return axios.post(AUTH_REST_API_URL+"/register", registerObj);
}

export function loginAPICall(loginObj){
    return axios.post(AUTH_REST_API_URL+"/login", loginObj);
}
