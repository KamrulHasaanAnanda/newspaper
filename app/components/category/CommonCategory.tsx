import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

function CommonCategory({ data }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full">
      {data?.news.map((item: any, index: any) => {
        const gridOneData = item.news.find(
          (section: any) => section.name === "grid-1"
        )?.items;
        const gridTwoData = item.news.find(
          (section: any) => section.name === "grid-2"
        )?.items;

        return (
          <div key={item.id} className="col-span-1">
            <SingleHeader title={item?.name} />
            <div
              className={`w-full ${
                index === 0 || index % 2 === 0 
                  ? "pl-4 sm:pl-6 md:pl-8 lg:pl-10" 
                  : "pr-4 sm:pr-6 md:pr-8 lg:pr-10"
              } grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3`}
            >
              <div className="col-span-1 h-auto">
                {gridOneData && (
                  <ImageType
                    image={gridOneData?.image}
                    description={gridOneData?.description}
                    type={gridOneData?.type}
                  />
                )}
              </div>
              <div className="col-span-1 sm:col-span-2 flex gap-2 sm:gap-3 flex-wrap w-full min-h-[12rem] sm:min-h-80">
                {gridTwoData &&
                  gridTwoData.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)]" // Adjusted for different gap sizes
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
      })}
    </div>
  );
}

export default CommonCategory;