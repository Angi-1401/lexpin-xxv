import ImageGrid from "@/components/molecules/ImageGrid";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.jpg";

export default function ImageGallery() {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Patonana",
      author: "Yo :)",
    },
    {
      id: 2,
      src: image2,
      alt: "Gusanito con sombrero",
      author: "Yo :)",
    },
  ];

  return <ImageGrid images={images} />;
}
