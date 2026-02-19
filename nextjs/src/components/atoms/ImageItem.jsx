import Image from "next/image";

export default function ImageItem({ src, alt, author, width = 500, height = 300 }) {
  return (
    <div className="border rounded overflow-hidden shadow-lg">
      <Image src={src} alt={alt} className="w-full h-48 object-cover" width={width} height={height} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{alt}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">By {author}</p>
      </div>
    </div>
  );
}
