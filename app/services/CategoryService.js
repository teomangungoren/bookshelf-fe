import axios from "axios";

const CATEGORY_REST_API_URL = "http://localhost:8080/api/v1/categories";


export const categoriesAPICall=()=>{
    return axios.get(CATEGORY_REST_API_URL+"/all");
}