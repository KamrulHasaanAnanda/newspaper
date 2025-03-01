import Image from "next/image";
import React from "react";

interface ImageTypeProps {
  image: string;
  description: string;
  type: string;

}

const ImageType: React.FC<ImageTypeProps> = ({ image, description,type }) => {
  return (
    <div className="relative ">
      <Image
      fill
        src={image}
        alt={description}
        className="w-full h-48 object-cover"
      />
      <p className="mt-2 text-white text-sm text-center absolute bottom-0 w-full">{description}</p>
    </div>
  );
};

export default ImageType;
