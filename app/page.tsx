// src/app/page.tsx
'use client'; 
import Link from "next/link";
import ProductCard from './component/ProductCard';
import UsersPage from "./users/page";

export default function Home() {
  return (
    <main>
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">
        Welcome to My Blog Dashboard!
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        This is a simple blog management system built with Next.js and Tailwind CSS.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Dashboard
      </Link>
    </div>
    
    </main>
  );
}

