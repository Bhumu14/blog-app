// src/app/dashboard/new/index.tsx

"use client";
import React, { useState } from "react";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to your backend API
    console.log("Title:", title, "Content:", content);
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Publish Post
        </button>
      </form>
    </div>
  );
}
