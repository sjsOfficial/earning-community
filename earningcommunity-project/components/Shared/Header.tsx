import Image from "next/image";
import React from "react";
import LightMoodToggleButton from "../LightMoodToggleButton";
import LanguageToggleButton from "../LanguageToggleButton";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#ffffff91] dark:bg-[#00000080] transition-colors duration-500 ease-in-out fixed top-0 z-10 w-full">
      <div className="container mx-auto px-2 my-4 flex justify-between items-center h-[70px]">
        <Link href='/' className="">
          <Image src={require("../../public/logo.svg")} alt="logo"></Image>
        </Link>
        <div className="flex items-center gap-10">
          <p className="text-darkText dark:text-lightText font-medium text-[20px]">Package</p>
          <p className="text-darkText dark:text-lightText font-medium text-[20px]">Category</p>
          <p className="text-darkText dark:text-lightText font-medium text-[20px]">Policies</p>
          <LanguageToggleButton></LanguageToggleButton>
          <LightMoodToggleButton></LightMoodToggleButton>
        </div>
      </div>
    </div>
  );
}
