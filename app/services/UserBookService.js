import axios from "axios";

const USER_BOOK_REST_API_URL = "http://localhost:8080/api/v1/user/books";


export const userBookAPICall = async ()=>{
    return await axios.get(USER_BOOK_REST_API_URL+"/");
}

export const getUserBookAPICall = async ()=>{
    return await axios.get(USER_BOOK_REST_API_URL+"/");
}

export const getAllUsersByBookIdAPICall= async (bookId)=>{
    return await axios.get(USER_BOOK_REST_API_URL+"/users/"+bookId)
}

export const createUserBookByBookIdAPICall= async (request)=>{
    return await axios.post(USER_BOOK_REST_API_URL+"/create",request,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
}
    })
}
export const getPopularUserBooks = async () =>{
    return await axios.get(USER_BOOK_REST_API_URL+"/popular")
}


