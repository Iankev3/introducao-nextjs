"use client";

import React from "react";

interface Post {
  id: number;
  author: string;
  content: string;
  likes: number;
}

interface PostCardProps {
  post: Post;
  onLike: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{post.author}</h3>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => onLike(post.id)}>Curtir</button>
    </div>
  );
};

export default PostCard;
