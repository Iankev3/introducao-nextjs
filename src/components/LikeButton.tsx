"use client"
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xl font-medium transition-all duration-200 shadow-md
          ${isLiked ? "text-red-600 bg-red-100 hover:bg-red-200" : "text-gray-700 bg-gray-200 hover:bg-gray-300"}`}
      >
        {isLiked ? <FaHeart className="animate-pulse" /> : <FaRegHeart />}
        <span>{likes}</span>
        <span>{isLiked ? "Curtido" : "Curtir"}</span>
      </button>
    </div>
  );
}
