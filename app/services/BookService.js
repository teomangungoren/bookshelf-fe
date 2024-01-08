import axios from "axios";

const BOOK_REST_API_URL = "http://localhost:8080/api/v1/books";


export  const booksAPICall= async ()=>{
    return await axios.get(BOOK_REST_API_URL);
}
export  const getBooksByCategoryIdAPICall= async (categoryId)=>{
    return await axios.get(BOOK_REST_API_URL+"/book/category/"+categoryId);
}

export const getBookByIdAPICall = async (bookId) =>{
    return await axios.get(BOOK_REST_API_URL+"/book/id/"+bookId)
}


