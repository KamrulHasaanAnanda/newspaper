import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { LuListFilter } from "react-icons/lu";

function SubHeader() {
  return (
    <div className='bg-[#0A0A0B] flex justify-between gap-4 items-center sm:px-10 h-12 overflow-x-auto'>
        <div></div>
        <div className='flex gap-6 items-center'>
            <p className=' font-light text-lg text-[#FFFFFF]'>
            জাতীয়
            </p>
            <p className=' font-light text-lg text-[#FFFFFF]'>
            সারাদেশ
            </p>
            <p className=' font-light text-lg text-[#FFFFFF]'>
            সাভার
            </p> 
            <p className=' font-light text-lg text-[#FFFFFF]'>
            আশুলিয়া
            </p>
             <p className=' font-light text-lg text-[#FFFFFF]'>
             রাজধানী
            </p>
            <p className=' font-light text-lg text-[#FFFFFF]'>
            রাজনীতি
            </p>  <p className=' font-light text-lg text-[#FFFFFF]'>
            আন্তর্জাতিক
            </p>  <p className=' font-light text-lg text-[#FFFFFF]'>
            খেলা
            </p>  <p className=' font-light text-lg text-[#FFFFFF]'>
            অর্থ ও বাণিজ্য
            </p>  <p className=' font-light text-lg text-[#FFFFFF]'>
            বিনোদন
            </p>
            <LuListFilter className='w-6 h-6'/>
        </div>
        <IoIosSearch className='w-8 h-8 '/>
    

    </div>
  )
}

export default SubHeader