import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="py-4 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-row justify-between gap-4 items-center">
      <div className="text-center sm:text-left">
        <p className="font-semibold text-base sm:text-lg text-[#111010]">
          মঙ্গলবার, ২১ জানুয়ারি ২০২৫
        </p>
        <p className="font-semibold text-base sm:text-lg text-[#111010]">
          ৭ মাঘ ১৪৩১
        </p>
        <p className="font-semibold text-base sm:text-lg text-[#111010]">
          ১৪ রবিউল আওয়াল
        </p>
      </div>
      
      <div className="order-first sm:order-none">
        <Image 
          src={"/shilpobangla.svg"} 
          width={150} 
          height={150} 
          alt="logo" 
          className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
        />
      </div>

      <div className="flex gap-2 items-center">
        <Image 
          src={"/logoFacebook.svg"} 
          alt="facebook" 
          width={16} 
          height={16} 
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <Image 
          src={"/logoYoutube.svg"} 
          alt="youtube" 
          width={16} 
          height={16} 
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <Image 
          src={"/logoX.svg"} 
          alt="twitter" 
          width={16} 
          height={16} 
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
        <Image 
          src={"/logoLinkedin.svg"} 
          alt="linkedin" 
          width={16} 
          height={16} 
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>
    </div>
  );
}

export default Header;