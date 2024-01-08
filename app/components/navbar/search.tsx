"use client"
import React, { useState } from 'react';
import "./Search.css"
import {useRouter} from "next/navigation";

export const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const router=useRouter()

    const handleSearchInputChange = (event:any) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchClick = () => {
        router.push(`/search?=${searchQuery}`)
    };

    return (
        <div className="search">
            <input
                className="search-input"
                placeholder="Search for best books"
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <button className="search-button" onClick={handleSearchClick}>
                Search
            </button>
        </div>
    );
};
