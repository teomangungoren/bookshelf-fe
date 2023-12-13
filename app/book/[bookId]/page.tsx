"use client"
import React, { useEffect, useState } from "react";
import { getBookByIdAPICall } from "@/app/services/BookService";
import Image from "next/image";
import styles from "./bookDetail.module.css";

interface Book {
    id: string;
    title: string;
    author: string;
    bookYear: string;
    pressYear: string;
    isbn: string;
    totalPageNumber: number;
    imageUrl: string;
    totalOwner: number;
    totalRating: number;
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
            <div className="flex-1 bg-cover bg-no-repeat">
                <Image src={bookDetail?.imageUrl} alt={bookDetail?.title} />
            </div>
            <div className={styles.imageContainer}></div>
            <div className={styles.detailsContainer}>
                <h1>{bookDetail?.title}</h1>
                <p>Author: {bookDetail?.author}</p>
                <p>Book Year: {bookDetail?.bookYear}</p>
                <p>Press Year: {bookDetail?.pressYear}</p>
                <p>Book Isbn: {bookDetail?.isbn}</p>
                <p>Page: {bookDetail?.totalPageNumber}</p>
                <p>Total Owner: {bookDetail?.totalOwner}</p>
                <p>Total Rating: {bookDetail?.totalRating}</p>
            </div>
        </div>
    );
}
    export default BookDetailPage;