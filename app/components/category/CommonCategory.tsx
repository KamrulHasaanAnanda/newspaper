import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";

function CommonCategory({ data }: any) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full">
      {data?.news.map((item: any, index: any) => {
        return (
          <div key={index} className="col-span-1">
            <SingleHeader title={item?.name} />
            {item?.news.map((news: any, index: any) => {
              // let componentNow;
              // console.log("item", item);
              // if (item.type === "imageType" || item?.type === "imageTypeBig")

              //     componentNow = <ImageType
              //       image={item.image}
              //       description={item.description}
              //       type={item.type}
              //     />

              return (
                <div key={index} className="w-full px-10 grid grid-cols-3">
                  {index === 0 ? (
                    <div className="col-span-1 h-auto">
                      <ImageType
                        image={news.image}
                        description={news.description}
                        type={news.type}
                      />
                    </div>
                  ) : (
                    <div className="col-span-2 flex gap-3 flex-wrap w-full h-60" >
                      <ImageType
                        image={news.image}
                        description={news.description}
                        type={news.type}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CommonCategory;
