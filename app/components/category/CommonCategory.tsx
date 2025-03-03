import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

function CommonCategory({ data }: any) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {data?.news.map((item: any, index: any) => {
        console.log("index", index);
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
                index === 0 || index % 2 == 0 ? "pl-10" : ""
              } grid grid-cols-3 gap-3`}
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
              <div className="col-span-2 flex gap-2 flex-wrap w-full min-h-80">
                {gridTwoData &&
                  gridTwoData.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="w-[calc(50%-0.25rem)]" // 50% minus half of gap-2 (0.5rem / 2 = 0.25rem)
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
