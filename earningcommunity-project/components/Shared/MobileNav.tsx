import Link from "next/link";
import React from "react";

export default function MobileNav() {
  return (
    <div className="bg-lightBg dark:bg-darkBg transition-colors duration-500 ease-in-out fixed bottom-0 z-10 w-full block md:hidden">
      <div className="mx-2 my-1 flex justify-between items-center h-[50px]">
        
        <Link href="/">
          <div className="flex flex-col items-center ">
            <svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-darkText dark:text-lightText"
            >
              <path
                d="M18.272 7.26473L10 1.34375"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.72852 7.26473L10.0005 1.34375"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.21094 15.4063V5.78467"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M15.791 15.4063V5.78467"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4.21094 15.4058H15.7917"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <p className="text-darkText dark:text-lightText font-normal text-[12px] ">Home</p>
          </div>
        </Link>
       
      </div>
    </div>
  );
}
