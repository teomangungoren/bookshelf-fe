import axios from "axios";

const POST_REST_API_URL = "http://localhost:8080/api/v1/posts";

export const getPostsAPICall=()=>{
    return axios.get(POST_REST_API_URL+"/all");
}

export const postPostAPICall= async (request)=>{
    return await axios.post(POST_REST_API_URL+"/create",request,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    })
}

