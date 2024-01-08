import axios from "axios";

const POST_COMMENT_REST_API_URL = "http://localhost:8080/api/v1/postComments";


export  const getPostCommentAPICall= async (postId)=>{
    return await axios.get(POST_COMMENT_REST_API_URL+"/"+postId);
}

export const postCommentAPICall= async (request)=>{
    return await axios.post(POST_COMMENT_REST_API_URL+"/"+"create",request)
}

