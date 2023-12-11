import axios from "axios";

const USER_BOOK_REST_API_URL = "http://localhost:8080/api/v1/user/books";


export const userBookAPICall = async ()=>{
    return await axios.get(USER_BOOK_REST_API_URL+"/");
}

export const getUserBookAPICall = async ()=>{
    return await axios.get(USER_BOOK_REST_API_URL+"/");
}