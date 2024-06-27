import { CategoryCardProps } from "@/app/types";
import Image from "next/image";
import React from "react";

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <div className="bg-gradient-to-b from-green-400  to-pink-500  rounded-[10px] px-2 md:px-10 py-2 md:py-4 flex gap-1 justify-between items-center">
      <div className="flex gap-1 md:gap-6 items-center">
        <Image
          className="h-[40px] md:h-[60px] lg:h-[100px] w-[40px] md:w-[60px] lg:w-[120px]"
          height={0}
          width={0}
          src={data.icon}
          alt="category image"
        ></Image>
        <div>
          <h1 className="text-[15px] lg:text-[24px] text-[#FFFFFF] font-normal">
            {data.title}
          </h1>
          <p className="text-[12px] lg:text-[16px] text-[#FFFFFF] font-normal">
           44 videos
          </p>
        </div>
      </div>
      <div className="flex gap-1 md:gap-6 items-center">
        <h1 className="text-[14px] lg:text-[24px] text-[#FFFFFF] font-normal">
          Play All
        </h1>
        <svg
          className="h-[20px] lg:h-[40px] w-[20px] lg:w-[40px]"
          viewBox="0 0 66 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60.6935 26.5899C67.425 30.3245 67.5893 39.9456 60.9894 43.9079L16.4396 70.6534C9.83967 74.6157 1.42538 69.9474 1.29391 62.2506L0.406497 10.2966C0.275029 2.59973 8.52498 -2.35315 15.2564 1.38144L60.6935 26.5899Z"
            fill="#292929"
          />
        </svg>
      </div>
    </div>
  );
};
export default CategoryCard;
