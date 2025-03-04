import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";
import LinkType from "../newsTypes/LinkType";
import Image from "next/image";

function CommonLinkCategory({ data }: any) {
  console.log("data", data);
  return (
    <div className="px-10 grid grid-cols-3 gap-2 my-6">
      {data?.news?.map((item: any, index: any) => {
        return (
          <div key={index} className="col-span-1">
            <SingleHeader title={item?.name} />

            <div className="flex flex-col">
              <div className="relative aspect-[2/1]">
                <ImageType
                  image={item?.banner?.image}
                  description={item?.banner?.description}
                  type={item?.banner?.type}
                />
              </div>

              {item?.links.map((link: any, index: any) => (
                <div
                  className="flex items-center  gap-2 bg-[#EEEEEEEE] w-full p-2 mb-2 cursor-pointer"
                  key={index}
                >
                  <Image
                    src={link.image}
                    alt={link.description}
                    className="w-[50px] h-[34px] object-cover"
                    width={50}
                    height={34}
                  />
                  <p className="mt-0 text-[#1B1919] font-semibold text-sm">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommonLinkCategory;
