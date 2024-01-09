import axios from "axios";

const BOOK_COMMENT_LIKE_REST_API_URL = "http://localhost:8080/api/v1/user-liked-book-comment";

export const createLikeBookCommentAPICall= async (request)=>{
    return await axios.post(BOOK_COMMENT_LIKE_REST_API_URL+"/create",request,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    })
}


export const deleteLikeBookCommentAPICall= async (request)=>{
    return await axios.delete(BOOK_COMMENT_LIKE_REST_API_URL+"/delete",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        },data:{
            request
        }
    })
}