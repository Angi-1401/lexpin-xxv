"use client";

import ImageGrid from "@/components/molecules/ImageGrid";

import { useImages } from "@/hooks/useImages";

export default function ImageGallery() {
  const { images, loading, error } = useImages();

  if (loading) {
    return <p>Loading images...</p>;
  }

  if (error) {
    return <p>Error loading images: {error.message}</p>;
  }

  return <ImageGrid images={images} />;
}
