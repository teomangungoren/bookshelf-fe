"use client"
import {booksAPICall, getBooksByCategoryIdAPICall} from "@/app/services/BookService";
import {useEffect, useState} from "react";
import {BookCard} from "@/app/components/bookcard/bookCard";


interface Book {
    id: string;
    title: string;
    imageUrl: string;
    totalRating: number;
}

type BookList=Book[];

const Page = ()=>{
    const  categoryId  = "522acf85-5198-4df5-b0ee-01410f52fb1e";
    const [bookList, setBookList] = useState<BookList>([]);


    useEffect(()=>{
        if(bookList.length==0){
            getBooksByCategoryIdAPICall(categoryId).then((response)=>{
                setBookList(response.data);
            })
        }
    },[bookList]);

    return (
        <div>
            <h1>Kitaplar</h1>
            <div className="flex items-center flex-wrap gap-3 md:gap-10">
                {bookList.map((book, index) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Page
