import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

function CommonCategory({ data }: any) {
  console.log('data category', data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full">
      {data?.categories.map((item: any, index: any) => {
        const gridOneData = item.image?.slice(0, 1);
        const gridTwoData = item.image?.slice(1);

        console.log('gridOneData', gridOneData)
        console.log('gridTwoData', gridTwoData)

        return (
          <div key={item.id || index} className="col-span-1">
            <SingleHeader title={item?.category_name} />
            <div
              className={`w-full ${index === 0 || index % 2 === 0
                ? "pl-4 sm:pl-6 md:pl-8 lg:pl-10"
                : "pr-4 sm:pr-6 md:pr-8 lg:pr-10"
                } grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3`}
            >
              <div className="col-span-1 h-auto">
                {gridOneData?.length > 0 && (
                  <ImageType
                    image={gridOneData[0]?.image}
                    description={gridOneData[0]?.short_description}
                    type={gridOneData[0]?.type}
                  />
                )}
              </div>
              <div className="col-span-1 sm:col-span-2 flex gap-2 sm:gap-3 flex-wrap w-full min-h-[12rem] sm:min-h-80">
                {gridTwoData?.length > 0 &&
                  gridTwoData.map((item: any, i: any) => (
                    <div
                      key={item.id || `${index}-${i}`}
                      className="w-full sm:w-[calc(50%-0.375rem)] md:w-[calc(50%-0.5rem)]"
                    >
                      <ImageType
                        image={item?.image}
                        description={item?.short_description}
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