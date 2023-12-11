"use client"
import {Suspense, useEffect, useState} from "react";
import {booksAPICall} from "@/app/services/BookService";
import {BookCard} from "@/app/components/bookcard/bookCard";
import BooksLoadingPage from "@/app/loading-out";

interface Book{
    id:string,
    title:string,
    imageUrl:string,
    totalRating:number
}

type BookList=Book[];

 const Books = ()=>{
    const [bookList,setBookList]=useState<BookList>([]);
    useEffect(()=>{
        if(bookList.length==0){
            booksAPICall().then((response)=>{
                setBookList(response.data);
            })
        }
    },[bookList]);

   return(
       <div>
           <div className="flex items-center flex-wrap gap-3 md:gap-10">
               {bookList.map((book, index) => (
                 <Suspense fallback={<BooksLoadingPage/>} key={book.id}>
                   <BookCard key={book.id} book={book} />
                 </Suspense>
               ))}
           </div>
       </div>
   )
}
export default Books