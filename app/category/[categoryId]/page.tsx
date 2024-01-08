"use client"
import { useEffect, useState} from "react";
import {getBooksByCategoryIdAPICall} from "@/app/services/BookService";
import {BookCard} from "@/app/components/bookcard/bookCard";
import Link from "next/link";
import {useAuth} from "@/app/hooks/auth";

interface Book{
    id:string,
    title:string,
    imageUrl:string,
    totalRating:number
}

type BookList=Book[];

const CategoryPage = ({ params }: { params: { categoryId: string } })=>{
    const categoryId=params.categoryId
    const [bookList,setBookList]=useState<BookList>([]);
    const {auth}=useAuth()
    useEffect(()=>{
        if(bookList.length==0 && categoryId && auth?.accessToken){
            getBooksByCategoryIdAPICall(categoryId).then((response)=>{
                setBookList(response.data);
            })
        }
    },[bookList, categoryId]);

    return(
        <div>
            <div className="flex items-center flex-wrap gap-3 md:gap-10">
                {bookList.map((book, index) => (
                    <Link href={`/book/${book.id}`} key={index}>
                        <BookCard key={book.id} book={book} />
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default CategoryPage