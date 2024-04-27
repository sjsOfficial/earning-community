import { PackageHistoryTypes } from "@/types/packageHistoryTypes";
import React from "react";
interface Props {
  data:PackageHistoryTypes
}
const PurchasedPackagesHistory: React.FC<Props> =({data}) =>{
  return (
    <div className="bg-[#2E4053] pt-4 pb-4 pl-4 pr-2 rounded-[10px] w-full min-w-[220px] md:min-w-[300px]  max-w-[400px] space-y-1">
      <p className="text-[16px] lg:text-[20px] text-[#FFFFFF] font-medium">
      {data.package.title}
      </p>
      <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-medium">
      {data.price} ৳
      </p>
      <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-medium">
      {data.duration} months
      </p>
      <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-medium">
      {data.withdrawLimit} ৳ withdraw limit
      </p>
      <p className="text-[12px] lg:text-[16px] text-[#A0A0A0] font-medium">
      {data.date}
      </p>
      <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal line-clamp-5">
     {data.package.description}
      </p>
    </div>
  );
}
export default PurchasedPackagesHistory