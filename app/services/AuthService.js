import axios from "axios";
import authHeader from "@/app/services/auth-header";

const AUTH_REST_API_URL = "http://localhost:8080/api/v1/users";

export const registerAPICall = (registerObj) => {
    return axios.post(AUTH_REST_API_URL+"/register", registerObj);
}


export function loginAPICall(loginObj) {
    return axios.post(`${AUTH_REST_API_URL}/authenticate`, loginObj)
        .then(response => {
            if (response.data.token) {
                const token = response.data.token;
                localStorage.setItem("user", token);
                localStorage.setItem("username",response.data.username)
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                console.log(token);
            }
            return response.data;
        });
}
    export function getCurrentUser() {
        return  `Bearer ${localStorage.getItem("user")}`
    }


