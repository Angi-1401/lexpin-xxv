import ImageItem from "@/components/atoms/ImageItem";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <ImageItem
          key={img.id}
          src={img.src}
          alt={img.alt}
          author={img.author}
        />
      ))}
    </div>
  );
}
