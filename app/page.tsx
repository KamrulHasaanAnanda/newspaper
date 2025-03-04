import fakeData from "@/fakeData";
import SubCategory from "./components/category/SubCategory";
import TopNews from "./components/category/TopNews";
import CommonCategory from "./components/category/CommonCategory";
import CommonLinkCategory from "./components/category/CommonLinkCategory";

export default function Home() {
  const data = fakeData;

  return (
    <div className="w-full py-4 ">
      {data.map((item: any, index: any) => {
        if (item.type === "Sub") {
          return (
            <div key={index} className="mb-10 ">
              <SubCategory data={item} />
            </div>
          );
        }

        if (item.type === "topNews") {
          return (
            <div key={index}>
              <TopNews data={item} />
            </div>
          );
        }

        if (item.type === "commonTypes") {
          return (
            <div key={index}>
              <CommonCategory data={item} index={index}/>
            </div>
          );
        }
        if (item?.type === "commonLinkTypes") {
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
