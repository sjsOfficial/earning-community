import Image from "next/image";
import React from "react";
import LightMoodToggleButton from "../LightMoodToggleButton";
import LanguageToggleButton from "../LanguageToggleButton";

export default function Header() {
  return (
    <div className="bg-[#00000083] dark:bg-[#ffffff96] transition-colors duration-500 ease-in-out fixed top-0 z-10 w-full">
      <div className="container mx-auto px-2 my-4 flex justify-between items-center h-[70px]">
        <div>
          <Image src={require("../../public/logo.svg")} alt="logo"></Image>
        </div>
        <div className="flex items-center gap-10">
          <p className="text-[#FFFFFF] dark:text-[#000000] font-medium text-[20px]">Package</p>
          <p className="text-[#FFFFFF] dark:text-[#000000] font-medium text-[20px]">Category</p>
          <p className="text-[#FFFFFF] dark:text-[#000000] font-medium text-[20px]">Policies</p>
          <LanguageToggleButton></LanguageToggleButton>
          <LightMoodToggleButton></LightMoodToggleButton>
        </div>
      </div>
    </div>
  );
}
