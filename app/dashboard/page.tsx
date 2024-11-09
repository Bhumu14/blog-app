// src/app/dashboard/index.tsx

"use client";
import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Admin Dashboard
      </h1>
      <div className="flex flex-col items-center gap-4">
        <Link href="/dashboard/new" className="text-blue-500 hover:underline">
          Create New Blog Post
        </Link>
        <Link href="/dashboard/posts" className="text-blue-500 hover:underline">
          Manage Blog Posts
        </Link>
      </div>
    </div>
  );
}
