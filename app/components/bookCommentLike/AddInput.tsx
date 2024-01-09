"use client"
import React, {useState} from 'react';
import {createLikeBookCommentAPICall, deleteLikeBookCommentAPICall} from "@/app/services/BookCommentLike";
import { FaHeart, FaRegHeart } from 'react-icons/fa';


interface AddInputProps {
    bookCommentId: string;
}

const LikeButton: React.FC<AddInputProps> = ({ bookCommentId }) => {
    const [isLiked,setIsLiked]=useState(false);
    const handleAddButtonClick = async () => {
        try {
            if(isLiked){
            await deleteLikeBookCommentAPICall({ bookCommentId });
            console.log(bookCommentId)
            }else{
             await createLikeBookCommentAPICall({bookCommentId})
                console.log(bookCommentId)
            }
            setIsLiked(!isLiked)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleAddButtonClick}>
                {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
            </button>
        </div>
    );
};

export default LikeButton;
