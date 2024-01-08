import axios from "axios";
import {getCurrentUser} from "@/app/services/AuthService";

const CATEGORY_REST_API_URL = "http://localhost:8080/api/v1/categories";



export const categoriesAPICall=()=>{
    return axios.get(CATEGORY_REST_API_URL+"/all",{
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "Accept":"*/*",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            "Access-Control-Allow-Headers": 'X-Requested-With, Content-Type, X-Auth-Token, Origin, Authorization',
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    });
}