"use client"
import React, { useState, useEffect } from 'react';
import { getPostsAPICall, postPostAPICall } from "@/app/services/PostService";
import PostCommentList from "@/app/components/postComment/postComment";
import {color} from "@mui/system";

interface Post {
    id: string;
    title: string;
    description: string;
    username: string;
    likes: number;
}

const PostPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        const fetchPosts = () => {
            getPostsAPICall()
                .then((response) => setPosts(response.data))
                .catch((error) => console.error('Error fetching posts:', error));
        };

        fetchPosts();
    }, []);

    const handlePostSubmit = () => {
        postPostAPICall({ content: newPost })
            .then((response) => {
                setPosts((prevPosts) => [...prevPosts, response.data]);
                setNewPost('');
            })
            .catch((error) => console.error('Error creating post:', error));
    };

    return (
        <div>
            <h1>Post Page</h1>

            <div>
                <textarea
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                />
                <button onClick={handlePostSubmit}>Post</button>
            </div>

            <div>
                <h2>Posts</h2>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} >
                            {post.username}  {post.title} - {post.description} - {post.likes} Likes
                            <PostCommentList postId={post.id} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PostPage;
