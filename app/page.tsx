import fakeData from "@/fakeData";
import SubCategory from "./components/category/SubCategory";
import TopNews from "./components/category/TopNews";

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


      })}
    </div>
  );
}
