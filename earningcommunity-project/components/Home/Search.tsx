import React from "react";

export default function Search() {
  return (
    <div className="container mx-auto px-2  mt-[37px]">
      <div className="bg-[#85929E] flex justify-between items-center w-full py-2 md:py-4 px-4 md:px-6 rounded-[10px]">
        <p className="text-[#FFFFFF] text-[16px] md:text-[24px] font-medium">Search</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0008 19L13.8038 13.803M13.8038 13.803C15.2104 12.3964 16.0006 10.4887 16.0006 8.49949C16.0006 6.51029 15.2104 4.60256 13.8038 3.19599C12.3972 1.78941 10.4895 0.999207 8.50028 0.999207C6.51108 0.999207 4.60336 1.78941 3.19678 3.19599C1.79021 4.60256 1 6.51029 1 8.49949C1 10.4887 1.79021 12.3964 3.19678 13.803C4.60336 15.2096 6.51108 15.9998 8.50028 15.9998C10.4895 15.9998 12.3972 15.2096 13.8038 13.803Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
