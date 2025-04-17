import Image from "next/image";
import React from "react";

interface LinkTypeProps {
  data: any;
  //   description: string;
  //   type: string;
}

const LinkType: React.FC<LinkTypeProps> = ({ data }) => {
  console.log('data hell', data)
  return (
    <div className="relative ">
      <div
        className={`h-12 text-center flex justify-center items-center`}
        style={{
          backgroundColor: "#181616EE",
          color: "white",
        }}
      >
        <p className="mt-0 text-white text-[23px] font-semibold text-center  w-full">
          {data?.name}
        </p>
      </div>

      {data?.links.map((link: any, index: any) => (
        <div className="flex items-center  gap-4 bg-[#EEEEEEEE] w-full p-2 my-2 cursor-pointer" key={index}>
          <Image
            src={link.image}
            alt={"image"}
            className="w-[50px] h-[34px] object-cover"
            width={50}
            height={34}
          />
          <p className="mt-0 text-[#1B1919] font-semibold text-sm">
            {link.title}
          </p>
        </div>
      ))}

    </div>
  );
};

export default LinkType;
