"use client"
import React, { useState, useEffect } from "react";
import { booksCommentAPICall, postBooksCommentAPICall } from "@/app/services/BookComment";
import {getCurrentUser} from "@/app/services/AuthService";
import {router} from "next/client";

interface BookCommentListProps {
    bookId: string;
}

interface BookComment {
    id: string;
    username: string;
    comment: string;
    likes: number;
    createdDate: string;
}

const BookCommentList: React.FC<BookCommentListProps> = ({ bookId }) => {
    const [comments, setComments] = useState<BookComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await booksCommentAPICall(bookId);
                setComments(response.data);
            } catch (error) {
                console.error("Error fetching comments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [bookId]);

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await postBooksCommentAPICall({ bookId, comment: newComment });

            const response = await booksCommentAPICall(bookId);
            setComments(response.data);

            setNewComment("");
            }
        catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    if (loading) {
        return <p>Loading comments...</p>;
    }

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.username}</strong>: {comment.comment}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BookCommentList;
