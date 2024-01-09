"use client"
import { useEffect, useState } from "react";
import { getCurrentUsername } from "@/app/services/AuthService";
import { getWishlistByUser } from "@/app/services/UserWishListService";
import { getBookByIdAPICall } from "@/app/services/BookService";
import { BookCard } from "@/app/components/bookcard/bookCard";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [books, setBooks] = useState([]);
    const username = getCurrentUsername();

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const response = await getWishlistByUser(username);
                setWishlist(response.data);

                const bookIds = response.data.map((item:any) => item.bookId);
                const bookDetails = await Promise.all(
                    bookIds.map((bookId:any) => getBookByIdAPICall(bookId))
                );

                setBooks(bookDetails.map((response) => response.data));
            } catch (error) {
                console.error("Error fetching wishlist:", error);
            }
        };

        if (username) {
            fetchWishlist();
        }
    }, [username]);

    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
