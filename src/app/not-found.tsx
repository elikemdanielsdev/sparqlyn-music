// src/app/not-found.js
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700">
        Go Back Home
      </Link>
    </div>
  );
}
