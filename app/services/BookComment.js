import axios from "axios";

const BOOK_COMMENT_REST_API_URL = "http://localhost:8080/api/v1/bookComments";


export  const booksCommentAPICall= async (bookId)=>{
    return await axios.get(BOOK_COMMENT_REST_API_URL+"/"+bookId);
}

export const postBooksCommentAPICall= async (request)=>{
    return await axios.post(BOOK_COMMENT_REST_API_URL+"/"+"create",request,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    })
}

