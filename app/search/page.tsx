"use client"
import React, { useState, useEffect } from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {searchAPICall} from "@/app/services/SearchService";
import {BookCard} from "@/app/components/bookcard/bookCard";
import Link from "next/link";

const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
     const searchParam=useSearchParams()
    const handleSearch = async () => {
        try {
            if (searchParam) {
                const response = await searchAPICall(searchParam);
                setSearchResults(response.data);
            }
        } catch (error) {
            console.error('Error searching books:', error);
        }
    };

    useEffect(() => {
        handleSearch();
    }, [searchParam]);

    return (
        <div className="search-results">
            {searchResults.map((book) => (
                <Link href={`/book/${book.id}`} >
                <BookCard key={book.id} book={book} />
                </Link>
            ))}
        </div>
    );
};

export default Search;
