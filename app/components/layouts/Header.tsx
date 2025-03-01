import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="py-4 px-10 flex justify-between gap-4 items-center">
      <div>
      <p className=" font-semibold text-lg text-[#111010]">মঙ্গলবার,২১ জানুয়ারি ২০২৫</p>
      <p className=" font-semibold text-lg text-[#111010]">৭ মাঘ ১৪৩১</p>
      <p className=" font-semibold text-lg text-[#111010]">১৪ রবিউল আওয়াল</p>

      </div>
      <Image src={"/shilpobangla.svg"} width={200} height={200} alt="logo"/>
      <div className="flex gap-2 items-center">
        <Image src={"/logoFacebook.svg"} alt="facebook" width={20} height={20}/>
        <Image src={"/logoYoutube.svg"} alt="youtube" width={20} height={20}/>
        <Image src={"/logoX.svg"} alt="facebook" width={20} height={20}/>
        <Image src={"/logoLinkedin.svg"} alt="facebook" width={20} height={20}/>


      </div>
    </div>
  );
}

export default Header;
