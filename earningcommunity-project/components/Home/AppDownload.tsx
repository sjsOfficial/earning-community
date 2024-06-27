import Image from "next/image";
import React from "react";

export default function AppDownload() {
  return (
    <div className="px-2">
      <div className="bg-gradient-to-r from-green-400 via-black to-pink-500  p-6 md:p-10 flex flex-col md:flex-row gap-2 md:gap-6 items-center md:justify-between  rounded-[10px] container mx-auto my-8 md:my-10">
        <Image
          className="h-[250px] md:h-[350px] lg:h-[420px] w-[250px] md:w-[350px] lg:w-[420px]"
          alt="App Download"
          src={require("../../public/appDownload.svg")}
        ></Image>
        <div className="text-[#FFFFFF] flex flex-col justify-between ">
          <div>
            <h1 className="text-[24px] md:text-[32px] font-medium text-center mb-2 md:mb-4">
              Download Mobile Apps
            </h1>
            <p className="text-[16px] md:text-[20px] font-medium text-justify mb-2 md:mb-6">
              Unlock the full potential of your mobile device with our curated
              selection of must-have apps! Whether you are an Android
              enthusiast, an iOS aficionado, or somewhere in between, we have
              got you covered with a diverse range of apps to suit every need
              and interest.
            </p>
          </div>
          <div>
            <h1 className=" text-[24px] md:text-[32px] font-medium text-center mb-2 md:mb-4">
              Awesome Experience in Android Device{" "}
            </h1>
            <div className="flex justify-center md:justify-end">
              <div className="w-[200px] md:w-[250px] mt-2 md:mt-6 h-[40px] md:h-[50px] flex justify-center items-center bg-[#2E4053] rounded-[10px]  text-[18px] md:text-[24px] font-medium">
                Download Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
