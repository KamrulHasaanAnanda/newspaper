"use client";
import React, { useRef } from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageGallery({ data }: any) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: -window.innerWidth * 0.8, // More dynamic scrolling
        behavior: "smooth" 
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: window.innerWidth * 0.8, 
        behavior: "smooth" 
      });
    }
  };

  return (
    <div className="my-6 sm:my-8 md:my-10">
      <SingleHeader title={data?.title} />
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 sm:px-6 md:px-8 lg:px-10 gap-2 sm:gap-3 md:gap-4">
        <div className="col-span-1 md:col-span-2 h-auto">
          <div className="w-full h-full relative">
            <button
              className="absolute left-2 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-900 transition-all duration-200"
              onClick={scrollLeft}
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <div
              ref={carouselRef}
              className="w-full h-64 sm:h-72 md:h-80 flex gap-2 sm:gap-3 overflow-x-auto items-center scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {data?.gallery?.map((item: any, index: any) => (
                <div 
                  key={index} 
                  className="shrink-0 snap-start w-full sm:w-3/4 md:w-full h-full"
                >
                  <ImageType
                    image={item?.image}
                    description={item?.description}
                    type={item?.type}
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute right-2 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 z-10 p-1 sm:p-2 bg-gray-700/50 text-white rounded-full hover:bg-gray-900 transition-all duration-200"
              onClick={scrollRight}
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex gap-2 sm:gap-3 flex-wrap w-full min-h-[16rem] sm:min-h-72 md:min-h-80">
          {data?.items?.map((item: any, index: any) => (
            <div 
              key={index} 
              className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)]"
            >
              <ImageType
                image={item?.image}
                description={item?.description}
                type={item?.type}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;