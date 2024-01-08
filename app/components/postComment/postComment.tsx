import React, { useState, useEffect } from 'react';
import {getPostCommentAPICall, postCommentAPICall} from "@/app/services/PostComment";

interface PostCommentListProps {
    postId: string;
}

interface PostComment {
    id: string;
    username: string;
    comment: string;
    likes: number;
    createdDate: string;
}

const   PostCommentList: React.FC<PostCommentListProps> = ({ postId }) => {
    const [comments, setComments] = useState<PostComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await getPostCommentAPICall(postId);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await postCommentAPICall({ postId, comment: newComment });

            const response = await getPostCommentAPICall(postId);
            setComments(response.data);

            setNewComment('');
        } catch (error) {
            console.error('Error submitting comment:', error);
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

export default PostCommentList;
