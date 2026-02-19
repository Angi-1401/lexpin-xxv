"use client";

import Link from "next/link";
import { useState } from "react";

import Button from "@/components/atoms/Button";

export default function Home() {
  const [count, setCount] = useState(0); // let count = 0

  function handleClick() {
    setCount(count + 1); // count = count + 1
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the App Gallery</h1>
      <p className="text-gray-600 mb-4">
        Explore a collection of amazing images in this app built with Next.js
        and Tailwind CSS.
      </p>
      <p>This is the main route of the application.</p>
      <Button
        className="px-4 py-2 bg-blue-600 dark:bg-blue-400 text-white rounded w-fit"
        onClick={handleClick}>
        Click me! Count: {count}
      </Button>
      <Link
        href="/gallery"
        className="hover:text-blue-600 dark:hover:text-blue-400 dark:hover:underline">
        Go to gallery
      </Link>
    </div>
  );
}
