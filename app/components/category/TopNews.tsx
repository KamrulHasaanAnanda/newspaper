import React from "react";
import SingleHeader from "../layouts/SingleHeader";
import ImageType from "../newsTypes/ImageType";
import LinkType from "../newsTypes/LinkType";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TopNews({ data }: any) {
  const links = data?.link ?? [];
  const images = data?.image ?? [];

  const linkData = [
    {
      name: "Useful Links",
      type: "linkType",
      links: links.slice(0, 3)
    },
    {
      name: "Useful Links",
      type: "linkType",
      links: links.slice(3)
    }
  ];

  const mergedData = [
    ...images.slice(0, 4),
    linkData[0],
    ...images.slice(4),
    linkData[1]
  ];

  // console.log('mergedData', mergedData)
  return (
    <div>
      <SingleHeader title="Top News" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-6 md:px-8 lg:px-10 mt-3 mb-6">
        {mergedData?.length > 0 && mergedData?.map((item: any, index: any) => {
          let componentNow;

          if (item.type === "image")
            componentNow = (
              <ImageType
                image={item.image}
                description={item.short_description}
                type={item.type}
              />
            );
          else if (item?.type === "linkType")
            componentNow = <LinkType data={item} />;

          return (
            <div
              key={index}
              className={`w-full h-48 sm:h-56 md:h-60 ${item.type === "image" ? "col-span-1" : "col-span-2"}`}
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



[

]