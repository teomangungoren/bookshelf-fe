import axios from "axios";

const USER_WISHLIST_REST_API_URL = "http://localhost:8080/api/v1/user/wishlist";


export const userWishlistAPICall= async ()=>{
    return await axios.get(USER_WISHLIST_REST_API_URL+"/username");
}

export const createUserWishlist = async () =>{
    return await axios.post(USER_WISHLIST_REST_API_URL+"/create")
}