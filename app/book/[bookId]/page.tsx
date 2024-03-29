"use client"
import React, { useEffect, useState } from "react";
import { getBookByIdAPICall } from "@/app/services/BookService";
import Image from "next/image";
import styles from "./bookDetail.module.css";
import BookCommentList from "@/app/components/bookComment/page";
import UserBookPage from "@/app/components/userBook/userBook";
import AddInput from "@/app/components/userBook/addInput";
import AddUserWishlist from "@/app/components/userWishList/AddInput";

interface Book {
    id: string;
    title: string;
    author: string;
    bookYear: string;
    pressYear: string;
    description:string;
    isbn: string;
    totalPageNumber: number;
    imageUrl: string;
    totalOwner: number;
    totalRating: number;
    categoryName:string;
}

const BookDetailPage = ({ params }: { params: { bookId: string } }) => {
    const {bookId} = params;
    const [bookDetail, setBookDetail] = useState<Book | null>(null);

    useEffect(() => {
        if (bookDetail === null) {
            getBookByIdAPICall(bookId)
                .then((response) => {
                    setBookDetail(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching book details:", error);
                });
        }
    }, [bookDetail, bookId]);

    return (
        <div className={styles.bookDetailContainer}>
            <div className="flex bg-cover bg-no-repeat">
                <Image src={bookDetail?.imageUrl}
                       alt={bookDetail?.title}
                       width={300}
                      height={300}
                      className={styles.ResponsiveImage}
                />
            </div>
            <div className={styles.detailsContainer}>
                <div>
                <p className={styles.category}>{bookDetail?.categoryName}</p>
                <h1 className="text-2xl font-bold mb-3">{bookDetail?.title}</h1>
                </div>
                <div>
                <p>Author: {bookDetail?.author}</p>
                <p>Total Rating: {bookDetail?.totalRating} ({bookDetail?.totalOwner})</p>
                <p>Book Year: {bookDetail?.bookYear}</p>
                <p>Press Year: {bookDetail?.pressYear}</p>
                <p>{bookDetail?.description}</p>
                <p>Book Isbn: {bookDetail?.isbn}</p>
                <p>Page: {bookDetail?.totalPageNumber}</p>

                    <BookCommentList bookId={bookId}></BookCommentList>
                    <AddInput bookId={bookId}/>
                    <AddUserWishlist bookId={bookId}/>
                </div>
                <div>
                    <UserBookPage bookId={bookId}/>
                </div>
            </div>

        </div>

    );
}
export default BookDetailPage;
