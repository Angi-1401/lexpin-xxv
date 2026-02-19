import ImageItem from "@/components/atoms/ImageItem";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <ImageItem
          key={img.id}
          src={img.download_url}
          alt={`Image by ${img.author}`}
          author={img.author}
          width={img.width > 500 ? 500 : img.width}
          height={img.height > 300 ? 300 : img.height}
        />
      ))}
    </div>
  );
}
