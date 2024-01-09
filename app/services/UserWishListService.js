import axios from "axios";

const USER_WISHLIST_REST_API_URL = "http://localhost:8080/api/v1/user/wishlist";

export const createUserWishlist = async (request) =>{
    return await axios.post(USER_WISHLIST_REST_API_URL+"/create",request,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    })
}

export const getWishlistByUser= async (username)=>{
    return await axios.get(`${USER_WISHLIST_REST_API_URL}/books?username=${username}`,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("user")}`
        }
    })
}

export const getPopularWishlist = async () =>{
    return await axios.get(USER_WISHLIST_REST_API_URL+"/popular")
}