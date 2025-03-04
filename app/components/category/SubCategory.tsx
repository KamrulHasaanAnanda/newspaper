import React from "react";
import ImageType from "../newsTypes/ImageType";
import LinkType from "../newsTypes/LinkType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SubCategory({ data }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
      {data?.news.map((item: any, index: any) => {
        let componentNow;
        if (item.type === "imageType" || item?.type === "imageTypeBig") {
          componentNow = (
            <ImageType
              image={item.image}
              description={item.description}
              type={item.type}
            />
          );
        } else if (item?.type === "linkType") {
          componentNow = <LinkType data={item} />;
        }

        return (
          <div
            key={index}
            className={`w-full h-60
              ${
                item.type === "imageType" || item?.type === "linkType"
                  ? "col-span-1"
                  : "col-span-1 sm:col-span-2"
              }`}
          >
            {componentNow}
          </div>
        );
      })}
    </div>
  );
}

export default SubCategory;