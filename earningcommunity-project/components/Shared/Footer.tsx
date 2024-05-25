import Image from "next/image";
import Link from "next/link";
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
            <Image
              className="h-10 w-10 md:h-16 md:w-16"
              src={require("../../public/youtube.svg")}
              alt="logo"
            ></Image>
            <Image
              className="h-10 w-10 md:h-16 md:w-16"
              src={require("../../public/whatsapp.svg")}
              alt="logo"
            ></Image>
            <Image
              className="h-10 w-10 md:h-16 md:w-16"
              src={require("../../public/telegram.svg")}
              alt="logo"
            ></Image>
            <Image
              className="h-10 w-10 md:h-16 md:w-16"
              src={require("../../public/facebook.svg")}
              alt="logo"
            ></Image>
            <Image
              className="h-10 w-10 md:h-16 md:w-16"
              src={require("../../public/instragram.svg")}
              alt="logo"
            ></Image>
          </div>
        </div>
      </div>
      <div className="bg-[#000000]">
        <div className="container mx-auto px-2 grid grid-cols-1 md:grid-cols-2 py-[30px] md:py-[60px] gap-4 md:gap-8 lg:gap-20">
          <div>
            <Link href="/">
              <Image
                className="h-[70px] md:h-auto"
                src={require("../../public/logo.svg")}
                alt="logo"
              ></Image>
            </Link>
            <p className="text-[20px] md:text-[24px] font-normal md:font-medium text-[#FFFFFF]">
              About US
            </p>
            <p className="text-[16px] md:text-[20px] font-normal text-[#FFFFFF] mt-[10px] mb-[15px] md:mt-[30px] md:mb-[40px] text-justify">
              Are you a passionate gamer or content creator? Ready to turn your
              love for gaming into a lucrative opportunity? Look no further! Our
              dynamic community is the perfect platform for gamers and content
              creators to monetize their skills and creativity. Join our
              community of like-minded individuals who are earning money by
              playing video content. Whether you are streaming gameplay,
              creating tutorials, or showcasing your gaming prowess, theres a
              place for you here. With our supportive community and innovative
              monetization features, you can turn your passion into profit.
              Participate in tournaments, collaborate with fellow creators, and
              engage with your audience to maximize your earnings potential.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-[20px] md:text-[24px] font-normal md:font-medium text-[#FFFFFF] mb-[10px] md:mb-[30px]">
                About US
              </p>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Community News
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Empower Documents
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Legacy Control
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Instant Cash
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Partnership Offer
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Recent Reviews
              </Link>
            </div>
            <div className="text-end flex flex-col">
              <p className="text-[20px] md:text-[24px] font-normal md:font-medium text-[#FFFFFF] mb-[10px] md:mb-[30px]">
                Internal Links
              </p>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Account Policy
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Payment Policy
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                Package Policy
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                External Links
              </Link>
              <Link
                href="/"
                className="text-[16px] md:text-[20px] font-normal text-[#E3A832] mb-[10px]  md:mb-[15px] hover:text-[#ffcc65] transition-colors duration-300 ease-in-out"
              >
                External Links
              </Link>
            </div>
          </div>
          <p className="text-[20px] md:text-[24px] font-normal text-[#FFFFFF] mb-[50px] md:mb-0">
            2024@ All rights reserved by Earning Community
          </p>
        </div>
      </div>
    </div>
  );
}
