import { PackageCardProps } from "@/app/types";
import Link from "next/link";
import React from "react";

const PackageCard:React.FC<PackageCardProps>=({packageCardData,bgColor})=> {
    const truncatedText = packageCardData.description.length > 300 ? packageCardData.description.slice(0, 300) + "..." : packageCardData.description;
  return (
    <div className={`max-w-[380px] ${bgColor} rounded-[10px] p-[20px] flex flex-col items-center justify-between gap-4 mx-2 h-[350px] md:h-[430px] `}>
      <h1 className="text-[20px] md:text-[24px] font-medium text-[#FFFFFF]">{packageCardData.title}</h1>
      <div className="text-center">
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">{packageCardData.amount} ৳</p>
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">{packageCardData.duration}</p>
      </div>
      <p className="text-[16px] md:text-[20px] text-[#FFFFFF] text-justify line-clamp-6">{truncatedText}</p>
      <Link className="w-full bg-[#2E4053] hover:bg-[#1b2a3e] rounded-[10px] cursor-pointer transition-colors duration-500 ease-in-out" href='/'>
        <div className="py-2 text-center  text-[16px] md:text-[20px] text-[#FFFFFF]">
        Purchase Now
        </div>
      </Link>
    </div>
  );
}
export default PackageCard