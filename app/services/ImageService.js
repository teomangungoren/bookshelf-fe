import axios from "axios";

const IMAGE_REST_API_URL = "http://localhost:8080/api/v1/image";


export const getUserImageAPICall = (username) => {
    return axios.get(IMAGE_REST_API_URL + "/get", { params: { username } });
};