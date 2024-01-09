"use client"
import Slider from 'react-slick';
import { BookCard } from '@/app/components/bookcard/bookCard';
import {useEffect, useState} from "react";
import {getPopularWishlist} from "@/app/services/UserWishListService";
import {getBookByIdAPICall} from "@/app/services/BookService";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const BookSlider = () => {
    const [popularBooks, setPopularBooks] = useState([]);

    useEffect(() => {
        const fetchPopularWishlist = async () => {
            try {
                const response = await getPopularWishlist();

                const bookDetails = await Promise.all(
                    response.data.map(async (bookId:any) => {
                        const bookDetailResponse = await getBookByIdAPICall(bookId);
                        return bookDetailResponse.data;
                    })
                );

                setPopularBooks(bookDetails);
            } catch (error) {
                console.error('Error fetching popular wishlist:', error);
            }
        };

        fetchPopularWishlist();
    }, []);

    const settings = {
        className:"center",
        centerMode:true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <div className="w-1/2 m-auto">
            <h2 className="text-2xl font-bold mb-4 text-black">Top 5 Wishlist</h2>
        <Slider {...settings}>
            {popularBooks.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </Slider>
        </div>
    );
};

export default BookSlider;
