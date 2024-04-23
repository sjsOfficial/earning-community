'use client'
<<<<<<< Updated upstream
=======
import { useData } from "@/app/providers/DataProvider";
>>>>>>> Stashed changes
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function JoinUs() {
  const { userData } = useAuth();
  return (
    <div className={`container mx-auto mt-[37px] ${userData && 'hidden'}`}>
      <div className="bg-[#85929E] mx-2 rounded-[10px] p-[20px] ">
        <div className="gap-2 flex justify-between items-center">
          <div className="w-[286px] md:w-[950px]">
            <h1 className="text-[#FFFFFF] font-medium text-[16px] md:text-[24px]">
              Join with us
            </h1>
            <p className="text-[#FFFFFF] font-normal teext-[14px] md:text-[20px] mt-[12px] mb-[12px]">
              With our supportive community and innovative monetization
              features, you can turn your passion into profit. Participate in
              tournaments, collaborate with fellow creators, and engage with
              your audience to maximize your earnings potential.
            </p>
            <Link href="/pages/authentication/signup">
              <div className="hidden md:block py-2 md:py-4 bg-[#2E4053] hover:bg-[#1b2a3e] rounded-[10px] max-w-[350px] cursor-pointer transition-colors duration-500 ease-in-out">
                <p className="text-[#FFFFFF] font-medium teext-[14px] md:text-[20px] text-center">
                  Register Now/Login
                </p>
              </div>
            </Link>
          </div>
          <div className="w-[86px] md:w-auto">
            <Image
              className=""
              src={require("../public/earnNow.svg")}
              alt="add"
            ></Image>
          </div>
        </div>
        <Link href="/pages/authentication/signup">
          <div className=" md:hidden py-2 md:py-4 bg-[#2E4053] hover:bg-[#1b2a3e] rounded-[10px] cursor-pointer transition-colors duration-500 ease-in-out">
            <p className="text-[#FFFFFF] font-medium teext-[14px] md:text-[20px] text-center">
              Register Now/Login
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
