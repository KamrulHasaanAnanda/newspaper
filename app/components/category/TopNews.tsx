import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";
import LinkType from "../newsTypes/LinkType";

function TopNews({ data }: any) {
  return (
    <div>
      <SingleHeader title="Top News" />
      <div className="grid grid-cols-6 gap-4 px-10 mt-3 mb-6">
        {data?.news.map((item: any, index: any) => {
          let componentNow;

          if (item.type === "imageType" || item?.type === "imageTypeBig")
            componentNow = (
              <ImageType
                image={item.image}
                description={item.description}
                type={item.type}
              />
            );
          else if (item?.type === "linkType")
            componentNow = <LinkType data={item} />;

          return (
            <div
              key={index}
              className={` ${
                item.type === "imageType" ? "col-span-1" : "col-span-2"
              }   w-full h-60`}
            >
              {componentNow}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopNews;
