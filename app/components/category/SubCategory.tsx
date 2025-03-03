import React from "react";
import ImageType from "../newsTypes/ImageType";
import LinkType from "../newsTypes/LinkType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SubCategory({ data }: any) {

  return (
    <div className="grid grid-cols-4 gap-4 px-10">
      {data?.news.map((item: any, index: any) => {
        let componentNow;
        // console.log("item", item);
        if (item.type === "imageType" || item?.type === "imageTypeBig")
           
            componentNow = <ImageType
              image={item.image}
              description={item.description}
              type={item.type}
            />
          
        else if (item?.type === "linkType")
        componentNow= <LinkType data={item} />;

        return (
          <div
            key={index}
            className={` ${
              item.type === "imageType" || item?.type === "linkType"
                ? "col-span-1"
                : "col-span-2"
            }   w-full h-60`}
          >
            {componentNow}
          </div>
        );
      })}
    </div>
  );
}

export default SubCategory;
