// src/app/dashboard/posts/index.tsx

"use client";
import React from "react";

export default function PostList() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Manage Blog Posts</h2>
      <ul>
        {/* Map over blog posts here */}
        <li className="p-4 border border-gray-300 rounded mb-2 bg-sky-400">
          Sample Blog Post - Draft
        </li>
        <li className="p-4 border border-gray-300 rounded mb-2 bg-sky-400">
          Sample Blog Post - Published
        </li>
      </ul>
    </div>
  );
}

