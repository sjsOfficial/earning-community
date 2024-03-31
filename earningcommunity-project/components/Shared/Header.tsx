import Image from "next/image";
import React from "react";
import LightMoodToggleButton from "../LightMoodToggleButton";
import LanguageToggleButton from "../LanguageToggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useData } from "@/app/providers/DataProvider";
import dp from "../../public/dp.png";

export default function Header() {
  const { user } = useData();
  const pathname = usePathname();
  return (
    <div className="bg-[#ffffff91] dark:bg-[#00000080] transition-colors duration-500 ease-in-out fixed top-0 z-30 w-full">
      <div className="container mx-auto px-2 my-2 md:my-4 flex justify-between items-center md:h-[70px] h-[50px]">
        <Link href="/">
          <Image
            className="h-[40px] md:h-auto"
            src={require("../../public/logo.svg")}
            alt="logo"
          ></Image>
        </Link>
        <div className="flex items-center gap-5 lg:gap-10">
          <Link
            href="/"
            className={`text-darkText dark:text-lightText font-normal md:font-medium text-[16px] md:text-[20px] ${
              pathname === "/" ? "border-b-2 border-[#85929E]" : ""
            } ${user || "hidden"}`}
          >
            Home
          </Link>
          <Link
            href="/pages/packages"
            className={`"text-darkText dark:text-lightText font-normal md:font-medium text-[16px] md:text-[20px] ${
              pathname === "/pages/packages"
                ? "border-b-2 border-[#85929E]"
                : ""
            }`}
          >
            Package
          </Link>
          <Link
            href="/pages/category"
            className={`text-darkText dark:text-lightText  font-normal md:font-medium text-[16px] md:text-[20px] ${
              pathname === "/pages/category"
                ? "border-b-2 border-[#85929E]"
                : ""
            }`}
          >
            Category
          </Link>
          <Link
            href="/pages/policies"
            className={`text-darkText dark:text-lightText  font-normal md:font-medium text-[16px] md:text-[20px] ${
              pathname === "/pages/policies"
                ? "border-b-2 border-[#85929E]"
                : ""
            } ${user && "hidden"}`}
          >
            Policies
          </Link>
          {user ? (
            <div className="flex items-center gap-5 lg:gap-10">
              <Link href="/pages/profile">
                <div
                  className={`border border-white rounded-full p-1 pr-10 flex gap-4 items-center cursor-pointer hover:bg-[#85929eaa] transition-colors duration-500 ease-in-out ${
                    pathname === "/pages/profile" ? "bg-[#85929eaa]" : ""
                  }`}
                >
                  <Image
                    className="h-[60px] w-[60px] rounded-full"
                    src={dp}
                    alt="profile image"
                  ></Image>
                  <div>
                    <p className="text-[20px] font-medium text-white">
                      My Profile
                    </p>
                    <p className="text-[16px] font-medium text-white">30.00৳</p>
                  </div>
                </div>
              </Link>
              <Link href="/pages/notification">
                <svg
                  width="38"
                  height="41"
                  viewBox="0 0 38 41"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hover:scale-110 duration-300 ease-in-out ${
                    pathname === "/pages/notification" ? "text-[#85929eaa]" : "fill-none text-white "
                  }`}
                >
                  <path
                    d="M25.1995 31.511C29.2364 31.033 33.2029 30.0803 37.0165 28.6727C33.7868 25.0951 32.0022 20.4447 32.0093 15.625V14C32.0093 10.5522 30.6397 7.24559 28.2017 4.80761C25.7638 2.36964 22.4571 1 19.0093 1C15.5615 1 12.2549 2.36964 9.81695 4.80761C7.37897 7.24559 6.00933 10.5522 6.00933 14V15.625C6.01587 20.445 4.23047 25.0954 1 28.6727C4.75483 30.0593 8.71333 31.0235 12.8192 31.511M25.1995 31.511C21.0871 31.9988 16.9315 31.9988 12.8192 31.511M25.1995 31.511C25.5117 32.4857 25.5894 33.5204 25.4261 34.5307C25.2628 35.5411 24.8633 36.4987 24.26 37.3254C23.6567 38.1522 22.8667 38.8248 21.9543 39.2885C21.0418 39.7522 20.0328 39.9939 19.0093 39.9939C17.9859 39.9939 16.9768 39.7522 16.0644 39.2885C15.152 38.8248 14.362 38.1522 13.7587 37.3254C13.1554 36.4987 12.7558 35.5411 12.5926 34.5307C12.4293 33.5204 12.5069 32.4857 12.8192 31.511"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-5 lg:gap-10">
              <LanguageToggleButton></LanguageToggleButton>
              <LightMoodToggleButton></LightMoodToggleButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
