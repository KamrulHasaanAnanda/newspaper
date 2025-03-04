import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

function ImageGallery({ data }: any) {
  return (
    <div className="my-10">
      <SingleHeader title={data?.title} />
      <div className="grid grid-cols-4 px-10 gap-2">
        <div className="col-span-2 h-auto">
          <div className="w-full h-full flex gap-2 overflow-x-auto items-center scrollbar-hide snap-x snap-mandatory">
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
