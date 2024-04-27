import { userWithdrawHistoryTypes } from "@/app/types";
import Image from "next/image";
import React from "react";
interface Props{
  data:userWithdrawHistoryTypes
}
 const WithdrawHistoryCard:React.FC<Props>=({data}) =>{
  return (
    <div className="bg-[#2E4053] pt-4 pb-4 pl-4 pr-2 rounded-[10px] w-full min-w-[220px] md:min-w-[300px] max-w-[400px]">
      <div className="md:flex justify-between mb-1">
        <p className="text-[16px] lg:text-[20px] text-[#FFFFFF] font-medium">
          {data.id}
        </p>
        <p className="text-[12px] text-[#A0A0A0] font-normal">11 JUN 2024</p>
      </div>
      <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-medium mt-1">
        {data.amount} ৳
      </p>
      <p className="text-[12px] lg:text-[16px] text-[#C6A600] font-medium mt-1">
        {data.status}
      </p>
      <div className="flex items-center lg:gap-4 gap-2 mt-2">
        <div className="h-[60px] lg:h-[100px] w-[60px] lg:w-[100px]  relative">
        <Image
          className="rounded-[10px]"
          fill
          src={data.userWallet.wallet.icon}
          alt="marchent logo"
        ></Image>
        </div>
        <div>
          <p className="text-[14px] lg:text-[20px] text-[#FFFFFF] font-medium">
            {data.userWallet.wallet.name}
          </p>
          <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal">
          {data.userWallet.number}
          </p>
          <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal">
          {data.userWallet.walletHolderName}
          </p>
        </div>
      </div>
    </div>
  );
}
export default WithdrawHistoryCard