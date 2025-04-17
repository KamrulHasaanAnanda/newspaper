import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";
import Image from "next/image";

function CommonLinkCategory({ data }: any) {
  console.log("datacategories", data);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 my-4 sm:my-6">
      {data?.categories?.map((item: any, index: any) => {
        let categoryData = item?.link?.slice(0, 1)?.length > 0 ? item?.link?.slice(0, 1)[0] : [];

        let linkData = item?.link?.slice(1);
        console.log('categoryData', categoryData)
        return (
          <div key={index} className="col-span-1">
            <SingleHeader title={item?.category_name} />

            <div className="flex flex-col gap-2 sm:gap-3">
              <div className="relative aspect-[2/1] w-full">
                <ImageType
                  image={categoryData?.image}
                  description={categoryData?.short_description}
                  type={categoryData?.type}
                />
              </div>

              {linkData?.map((link: any, index: any) => (
                <div
                  className="flex items-center gap-2 sm:gap-3 bg-[#EEEEEEEE] w-full p-2 sm:p-3 hover:bg-gray-200 transition-colors duration-200 cursor-pointer rounded-md"
                  key={index}
                >
                  <Image
                    src={link?.image}
                    alt={link?.short_description}
                    className="w-10 sm:w-12 h-7 sm:h-8 object-cover rounded"
                    width={48}
                    height={32}
                  />
                  <p className="mt-0 text-[#1B1919] font-semibold text-xs sm:text-sm md:text-base line-clamp-2">
                    {link.short_description}
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