"use client";
import React, { useState } from "react";
import PostCard from "./PostCard";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
}

const FeedPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, author: "Roberto", content: "", likes: 0 },
    { id: 2, author: "Milena", content: "", likes: 3 },
    { id: 3, author: "Maria", content: "", likes: 5 },
  ]);

  const handleLike = (postId: number) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="flex justify-center flex-col text-center">
      <h1>Feed</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
};

export default FeedPage;
