import Image from "next/image";
import React from "react";
import LightMoodToggleButton from "../LightMoodToggleButton";
import LanguageToggleButton from "../LanguageToggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="bg-[#ffffff91] dark:bg-[#00000080] transition-colors duration-500 ease-in-out fixed top-0 z-10 w-full">
      <div className="container mx-auto px-2 my-2 md:my-4 flex justify-between items-center md:h-[70px] h-[50px]">
        <Link href="/">
          <Image
            className="h-[40px] md:h-auto"
            src={require("../../public/logo.svg")}
            alt="logo"
          ></Image>
        </Link>
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className={`text-darkText dark:text-lightText font-normal md:font-medium text-[16px] md:text-[20px] ${pathname === '/'? 'border-b-2 border-[#FFFFFF]':''}`}
          >
            Home
          </Link>
          <Link
            href="/pages/packages"
            className={`"text-darkText dark:text-lightText font-normal md:font-medium text-[16px] md:text-[20px] ${pathname === '/pages/packages'? 'border-b-2 border-[#FFFFFF]':''}`}
          >
            Package
          </Link>
          <Link
            href="/pages/category"
            className={`text-darkText dark:text-lightText  font-normal md:font-medium text-[16px] md:text-[20px] ${pathname === '/pages/category'? 'border-b-2 border-[#FFFFFF]':''}`}
          >
            Category
          </Link>
          <Link
            href="/pages/policies"
            className={`text-darkText dark:text-lightText  font-normal md:font-medium text-[16px] md:text-[20px] ${pathname === '/pages/policies'? 'border-b-2 border-[#FFFFFF]':''}`}
          >
            Policies
          </Link>
          <div className="hidden md:block">
            <LanguageToggleButton></LanguageToggleButton>
          </div>
          <div className="hidden md:block">
            <LightMoodToggleButton></LightMoodToggleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
