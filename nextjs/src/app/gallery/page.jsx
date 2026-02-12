import Link from "next/link";

import ImageGallery from "@/components/organism/ImageGallery";

export default function Gallery() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery Page</h1>
      <p>This is the gallery route of the application.</p>

      <ImageGallery />

      <Link href="/" className="hover:text-blue-500 hover:underline">
        Go to home
      </Link>
    </div>
  );
}