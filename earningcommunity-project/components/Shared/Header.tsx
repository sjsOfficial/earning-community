import Image from "next/image";
import React, { ReactNode, useState } from "react";
import LightMoodToggleButton from "../LightMoodToggleButton";
import LanguageToggleButton from "../LanguageToggleButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dp from "../../public/dp.png";
import useAuth from "@/hooks/useAuth";

export default function Header() {
  const { userData } = useAuth();
  console.log(userData);
  
  const pathname = usePathname();
  const [notificationShow, setNotificationShow] = useState(false);
  const handleShowNotification = () => {
    setNotificationShow(!notificationShow);
  };
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
            } ${userData || "hidden"}`}
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
            } ${userData && "hidden"}`}
          >
            Policies
          </Link>
          {userData ? (
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

              <svg
                onClick={handleShowNotification}
                width="38"
                height="41"
                viewBox="0 0 38 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`hover:scale-110 duration-300 ease-in-out`}
              >
                <path
                  d="M25.1995 31.511C29.2364 31.033 33.2029 30.0803 37.0165 28.6727C33.7868 25.0951 32.0022 20.4447 32.0093 15.625V14C32.0093 10.5522 30.6397 7.24559 28.2017 4.80761C25.7638 2.36964 22.4571 1 19.0093 1C15.5615 1 12.2549 2.36964 9.81695 4.80761C7.37897 7.24559 6.00933 10.5522 6.00933 14V15.625C6.01587 20.445 4.23047 25.0954 1 28.6727C4.75483 30.0593 8.71333 31.0235 12.8192 31.511M25.1995 31.511C21.0871 31.9988 16.9315 31.9988 12.8192 31.511M25.1995 31.511C25.5117 32.4857 25.5894 33.5204 25.4261 34.5307C25.2628 35.5411 24.8633 36.4987 24.26 37.3254C23.6567 38.1522 22.8667 38.8248 21.9543 39.2885C21.0418 39.7522 20.0328 39.9939 19.0093 39.9939C17.9859 39.9939 16.9768 39.7522 16.0644 39.2885C15.152 38.8248 14.362 38.1522 13.7587 37.3254C13.1554 36.4987 12.7558 35.5411 12.5926 34.5307C12.4293 33.5204 12.5069 32.4857 12.8192 31.511"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div
                className={`absolute bg-[#292929] shadow-[#0000003d] top-[102px] right-4 w-[380px] overflow-hidden  rounded-b-md space-y-2 ${
                  notificationShow ? "h-[340px] p-4" : "h-[0px]"
                } transition-height duration-500`}
              >
                <NotificationCard
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.375 23.25L0.75 17.625M0.75 17.625L6.375 12M0.75 17.625H17.625M17.625 0.75L23.25 6.375M23.25 6.375L17.625 12M23.25 6.375H6.375"
                        stroke="#FA0E0E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Withdraw Cancelled"
                  description="Your withdraw request 200 BDT has been cancelled"
                  date="11 JUN 2023"
                ></NotificationCard>
                <NotificationCard
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.375 23.25L0.75 17.625M0.75 17.625L6.375 12M0.75 17.625H17.625M17.625 0.75L23.25 6.375M23.25 6.375L17.625 12M23.25 6.375H6.375"
                        stroke="#00D508"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Withdraw Cancelled"
                  description="Your withdraw request 200 BDT has been cancelled"
                  date="11 JUN 2023"
                ></NotificationCard>
                <NotificationCard
                  icon={
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.25 4.5L18.625 15.132C18.5913 15.705 18.3399 16.2436 17.9222 16.6373C17.5045 17.031 16.952 17.2502 16.378 17.25H5.622C5.04796 17.2502 4.49555 17.031 4.07783 16.6373C3.66011 16.2436 3.40868 15.705 3.375 15.132L2.75 4.5M9 8.25H13M2.375 4.5H19.625C20.246 4.5 20.75 3.996 20.75 3.375V1.875C20.75 1.254 20.246 0.75 19.625 0.75H2.375C1.754 0.75 1.25 1.254 1.25 1.875V3.375C1.25 3.996 1.754 4.5 2.375 4.5Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Withdraw Cancelled"
                  description="Your withdraw request 200 BDT has been cancelled"
                  date="11 JUN 2023"
                ></NotificationCard>
                <NotificationCard
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.571 18.3525C17.9 18.0767 20.1884 17.5271 22.3885 16.715C20.5253 14.651 19.4957 11.9681 19.4998 9.1875V8.25C19.4998 6.26088 18.7096 4.35322 17.3031 2.9467C15.8966 1.54018 13.9889 0.75 11.9998 0.75C10.0107 0.75 8.10301 1.54018 6.69648 2.9467C5.28996 4.35322 4.49979 6.26088 4.49979 8.25V9.1875C4.50356 11.9683 3.47352 14.6512 1.60979 16.715C3.77604 17.515 6.05978 18.0713 8.42853 18.3525M15.571 18.3525C13.1985 18.6339 10.8011 18.6339 8.42853 18.3525M15.571 18.3525C15.7512 18.9148 15.796 19.5117 15.7018 20.0947C15.6076 20.6776 15.3771 21.23 15.029 21.707C14.6809 22.184 14.2252 22.572 13.6988 22.8395C13.1724 23.107 12.5903 23.2465 11.9998 23.2465C11.4093 23.2465 10.8272 23.107 10.3008 22.8395C9.7744 22.572 9.31862 22.184 8.97056 21.707C8.6225 21.23 8.39199 20.6776 8.2978 20.0947C8.20361 19.5117 8.24841 18.9148 8.42853 18.3525M0.904785 6.375C1.25725 4.28121 2.19703 2.33055 3.61478 0.75M20.3848 0.75C21.8025 2.33055 22.7423 4.28121 23.0948 6.375"
                        stroke="#FFB61A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  }
                  title="Withdraw Cancelled"
                  description="Your withdraw request 200 BDT has been cancelled"
                  date="11 JUN 2023"
                ></NotificationCard>
              </div>
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
interface NotificationCardProps {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  icon,
  title,
  description,
  date,
}) => {
  return (
    <div className="p-2 flex gap-3 items-center rounded-sm bg-[#85929E]">
      {icon}
      <div>
        <p className="text-[14px] text-[#FFFFFF] font-medium">{title}</p>
        <p className="text-[12px] text-[#FFFFFF] font-normal">{description}</p>
        <p className="text-[10px] text-[#ffffff83] font-normal">{date}</p>
      </div>
    </div>
  );
};
