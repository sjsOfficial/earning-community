import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#2E4053]">
        <div className="container mx-auto px-2 flex flex-col md:flex-row justify-between items-center py-[10px]  md:py-[20px]">
          <p className="text-[20px] md:text-[24px] font-normal md:font-medium text-[#FFFFFF]">
            Join into our member community
          </p>
          <div className="flex gap-4 md:gap-6 py-5">
              <Image className="h-10 w-10 md:h-16 md:w-16" src={require('../../public/youtube.svg')} alt="logo"></Image>
              <Image className="h-10 w-10 md:h-16 md:w-16" src={require('../../public/whatsapp.svg')} alt="logo"></Image>
              <Image className="h-10 w-10 md:h-16 md:w-16" src={require('../../public/telegram.svg')} alt="logo"></Image>
              <Image className="h-10 w-10 md:h-16 md:w-16" src={require('../../public/facebook.svg')} alt="logo"></Image>
              <Image className="h-10 w-10 md:h-16 md:w-16" src={require('../../public/instragram.svg')} alt="logo"></Image>
          </div>
        </div>
      </div>
      <div className="bg-[#000000]">
        <div className="container mx-auto px-2 flex justify-between "></div>
      </div>
    </div>
  );
}
