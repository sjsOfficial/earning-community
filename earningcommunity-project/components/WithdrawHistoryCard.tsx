import Image from "next/image";
import React from "react";

export default function WithdrawHistoryCard() {
  return (
    <div className="bg-[#2E4053] pt-4 pb-4 pl-4 pr-2 rounded-[10px] w-full min-w-[220px] md:min-w-[300px]">
      <div className="md:flex justify-between mb-1">
        <p className="text-[16px] lg:text-[20px] text-[#FFFFFF] font-medium">
          E4I78XTHKEIRTY
        </p>
        <p className="text-[12px] text-[#A0A0A0] font-normal">11 JUN 2024</p>
      </div>
      <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-medium mt-1">
        200 ৳
      </p>
      <p className="text-[12px] lg:text-[16px] text-[#C6A600] font-medium mt-1">
        PENDING
      </p>
      <div className="flex items-center lg:gap-4 gap-2 mt-2">
        <Image
          className="h-[60px] lg:h-[100px] w-[60px] lg:w-[100px] rounded-[10px]"
          height={0}
          width={0}
          src={require("../public/wallets/bkashA.png")}
          alt="marchent logo"
        ></Image>
        <div>
          <p className="text-[14px] lg:text-[20px] text-[#FFFFFF] font-medium">
            Bkash Merchant
          </p>
          <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal">
            01763628322
          </p>
          <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal">
            MST. Tasnia Alam
          </p>
        </div>
      </div>
    </div>
  );
}
