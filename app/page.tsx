import fakeData from "@/fakeData";
import SubCategory from "./components/category/SubCategory";
import TopNews from "./components/category/TopNews";
import CommonCategory from "./components/category/CommonCategory";
import CommonLinkCategory from "./components/category/CommonLinkCategory";
import ImageGallery from "./components/category/ImageGallery";



export default async function Home() {

  let url = process.env.NEXT_PUBLIC_BACKEND_URL + "/public/news?reported_at=2025-04-16";
  const data21 = await fetch(url);
  const data22 = await data21.json();
  console.log("data22", data22);
  const data = fakeData;

  return (
    <div className="w-full py-4 ">
      {data22?.data.map((item: any, index: any) => {
        if (item.type === "banner") {
          return (
            <div key={index} className="mb-10 ">
              <SubCategory data={item} />
            </div>
          );
        }

        if (item.type === "top_news") {
          return (
            <div key={index}>
              <TopNews data={item} />
            </div>
          );
        }

        if (item.type === "common") {
          return (
            <div key={index}>
              <CommonCategory data={item} index={index} />
            </div>
          );
        }

        if (item?.type === "photo_gallery") {
          return (
            <div key={index}>
              <ImageGallery data={item} />
            </div>
          );

        }
        if (item?.type === "common_link") {
          return (
            <div key={index}>
              <CommonLinkCategory data={item} />
            </div>
          );

        }


      })}
    </div>
  );
}


