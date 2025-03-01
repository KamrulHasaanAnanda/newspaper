import Image from "next/image";
import React from "react";

interface LinkTypeProps {
  data: any;
  description: string;
  type: string;
}

const LinkType: React.FC<LinkTypeProps> = ({ data, description }) => {
  return (
    <div className="relative ">
      <div
        className={`h-12 text-center`}
        style={{
          backgroundColor: data?.color || "black",
          color: "white",
        }}
      >
        <p className="mt-2 text-white text-sm text-center  w-full">
          {data?.name}
        </p>
      </div>

      {data?.links.map((link: any) => (
        <div className="flex items-center justify-between gap-2">
          <Image
            src={link.image}
            alt={link.description}
            className="w-16 h-16 object-cover"
          />
          <p className="mt-2 text-white text-sm text-center absolute bottom-0 w-full">
            {link.description}
          </p>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default LinkType;
