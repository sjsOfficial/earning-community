import Image from "next/image";
import React from "react";

export default function JoinUs() {
  return (
    <div className="container mx-auto mt-[37px]">
      <div className="bg-[#85929E] rounded-[10px] p-[20px] flex justify-between items-center">
        <div className="max-w-[950px]">
          <h1 className="text-[#FFFFFF] font-medium text-[24px]">
            Join with us
          </h1>
          <p className="text-[#FFFFFF] font-medium text-[20px] mt-[12px] mb-[12px]">
            With our supportive community and innovative monetization features,
            you can turn your passion into profit. Participate in tournaments,
            collaborate with fellow creators, and engage with your audience to
            maximize your earnings potential.
          </p>
          <div className="py-4 bg-[#2E4053] rounded-[10px] max-w-[350px]">
            <p className="text-[#FFFFFF] font-medium text-[20px] text-center">
              Register Now
            </p>
          </div>
        </div>
        <div>
          <Image src={require("../../public/earnNow.svg")} alt="add"></Image>
        </div>
      </div>
    </div>
  );
}
