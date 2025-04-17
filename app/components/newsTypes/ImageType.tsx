import Image from "next/image";
import React from "react";

interface ImageTypeProps {
  image: string;
  description: string;
  type: string;

}

const ImageType: React.FC<ImageTypeProps> = ({ image, description, type }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        fill
        src={image}
        alt={"image"}
        className="w-full h-48 object-cover"
      />

      <div style={{
        background: "linear-gradient(167.82deg, rgba(84, 84, 84, 0.05) 8.86%, rgba(235, 217, 217, 0.25) 91.14%)",
        backdropFilter: "blur(5.399999618530273px)"


      }} className="absolute bottom-0 w-full p-3">
        <p className="mt-2 text-white text-[14px] font-semibold  ">{description}</p>

      </div>
    </div>
  );
};

export default ImageType;
