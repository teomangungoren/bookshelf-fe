import axios from "axios";

const SEARCH_REST_API_URL = "http://localhost:8080/api/v1/search";


export const searchAPICall=(search)=>{
    return axios.get(`${SEARCH_REST_API_URL}?search${search}`);
}

