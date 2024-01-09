import axios from "axios";
import {getCurrentUser} from "@/app/services/AuthService";

const CATEGORY_REST_API_URL = "http://localhost:8080/api/v1/categories";



export const categoriesAPICall=async ()=>{
    return await axios.get(CATEGORY_REST_API_URL+"/all");
}