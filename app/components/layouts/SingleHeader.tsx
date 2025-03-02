import React from "react";

function SingleHeader({ title }: any) {
  return (
    <div className="bg-[#0A0A0B]  flex justify-center  items-center text-white font-bold text-[32px] h-16">
      {title}
    </div>
  );
}

export default SingleHeader;
