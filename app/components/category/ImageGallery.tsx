"use client"
import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageGallery({ data }: any) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="my-10">
      <SingleHeader title={data?.title} />
      <div className="grid grid-cols-4 px-10 gap-2">
        <div className="col-span-2 h-auto">
          <div className="w-full h-full relative">
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-900 transition"
              onClick={scrollLeft}
            >
              <ChevronLeft size={24} />
            </button>
            <div
              ref={carouselRef}
              className="w-full h-full flex gap-2 overflow-x-auto items-center scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {data?.gallery?.map((item: any, index: any) => (
                <div key={index} className="shrink-0 snap-start w-full h-full">
                  <ImageType
                    image={item?.image}
                    description={item?.description}
                    type={item?.type}
                  />
                </div>
              ))}
            </div>

            <button
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-900 transition"
        onClick={scrollRight}
      >
        <ChevronRight size={24} />
      </button>
          </div>
        </div>
        <div className="col-span-2 flex gap-2 flex-wrap w-full min-h-80">
          {data?.items?.map((item: any, index: any) => (
            <div key={index} className="w-[calc(50%-0.25rem)]">
              <ImageType
                image={item?.image}
                description={item?.description}
                type={item?.type}
              />
            </div>
          ))}
        </div>
        {/* {data?.news?.map((item: any, index: any) => {
          console.log('item', item)
          const gridOneData = item?.data.find(
            (section: any) => section.type === "carousel"
          )?.items;
          const gridTwoData = item?.data.find(
            (section: any) => section.type !== "carousel"
          )?.items;

          return (
            <React.Fragment key={index}>
              <div className="col-span-1 h-auto">
                {gridOneData && (
                  <ImageType
                    image={gridOneData?.image}
                    description={gridOneData?.description}
                    type={gridOneData?.type}
                  />
                )}
              </div>
              <div className="col-span-2 flex gap-2 flex-wrap w-full min-h-80">
                {gridTwoData &&
                  gridTwoData.map((item: any, index: any) => (
                    <div key={index} className="w-[calc(50%-0.25rem)]">
                      <ImageType
                        image={item?.image}
                        description={item?.description}
                        type={item?.type}
                      />
                    </div>
                  ))}
              </div>
            </React.Fragment>
          );
        })} */}
      </div>
    </div>
  );
}

export default ImageGallery;
