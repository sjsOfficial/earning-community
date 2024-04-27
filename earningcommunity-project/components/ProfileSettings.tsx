'use client'
import { getApi } from '@/functions/API';
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify';
import Cookies from "js-cookie";
import dp from "../public/dp.png";
import useAuth from '@/hooks/useAuth';
export default function ProfileSettings() {
  const { userData } = useAuth();
  // console.log(userData);
  
    const handleLogOut =async()=>{
        const toastId = toast.loading("Please wait...");
    
        try {
          await getApi("/apis/user/logout");
          Cookies.remove("token");
          toast.update(toastId, {
            render: "Logout successful",
            type: "success",
            isLoading: false,
          });
          window.location.href='/'
        } catch (error: any) {
          toast.update(toastId, {
            render: error.response.data.error,
            type: "error",
            isLoading: false,
          });
        } finally {
          setTimeout(() => {
            toast.dismiss(toastId);
          }, 2000);
        }
      }
  return (
    <div className="lg:col-span-2 bg-[#85929E] p-3 lg:p-4 xl:p-10 rounded-lg">
          <div className="flex  flex-col md:flex-row w-full">
            <div className="flex gap-4 items-center justify-center md:justify-normal md:w-1/3">
              <div className="relative">
                <Image
                  className="h-[60px] md:h-[80px] md:w-[80px] w-[60px] rounded-full"
                  src={dp}
                  alt="dp"
                ></Image>
                {/* <div className="absolute -bottom-1 -right-2  p-1 rounded-full bg-[#ffffff] flex justify-center items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.827 6.17496C6.64699 6.45987 6.40682 6.70194 6.12334 6.88419C5.83985 7.06645 5.51993 7.18446 5.186 7.22996C4.806 7.28396 4.429 7.34196 4.052 7.40496C2.999 7.57996 2.25 8.50696 2.25 9.57396V18C2.25 18.5967 2.48705 19.169 2.90901 19.591C3.33097 20.0129 3.90326 20.25 4.5 20.25H19.5C20.0967 20.25 20.669 20.0129 21.091 19.591C21.5129 19.169 21.75 18.5967 21.75 18V9.57396C21.75 8.50696 21 7.57996 19.948 7.40496C19.5707 7.3421 19.1927 7.28376 18.814 7.22996C18.4802 7.18432 18.1605 7.06624 17.8772 6.884C17.5939 6.70175 17.3539 6.45975 17.174 6.17496L16.352 4.85896C16.1674 4.55906 15.9132 4.30805 15.611 4.1272C15.3089 3.94634 14.9675 3.84095 14.616 3.81996C12.8733 3.72635 11.1267 3.72635 9.384 3.81996C9.03245 3.84095 8.69114 3.94634 8.38896 4.1272C8.08678 4.30805 7.83262 4.55906 7.648 4.85896L6.827 6.17496Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 12.75C16.5 13.9435 16.0259 15.0881 15.182 15.932C14.3381 16.7759 13.1935 17.25 12 17.25C10.8065 17.25 9.66193 16.7759 8.81802 15.932C7.97411 15.0881 7.5 13.9435 7.5 12.75C7.5 11.5565 7.97411 10.4119 8.81802 9.56802C9.66193 8.72411 10.8065 8.25 12 8.25C13.1935 8.25 14.3381 8.72411 15.182 9.56802C16.0259 10.4119 16.5 11.5565 16.5 12.75ZM18.75 10.5H18.758V10.508H18.75V10.5Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div> */}
              </div>
              <div className="">
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  {
                    userData?.name
                  }
                </p>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  {
                    userData?.phone
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-evenly gap-1 md:w-2/3 mt-4 md:mt-0">
              <div className="h-10 w-[2px] bg-[#ffffff] hidden md:block"></div>
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 4V10H14.5M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  22m Watch Time
                </p>
              </div>
              <div className="h-10  hidden md:block w-[2px] bg-[#ffffff]"></div>
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.03613 12.322C1.96712 12.1146 1.96712 11.8904 2.03613 11.683C3.42313 7.51 7.36013 4.5 12.0001 4.5C16.6381 4.5 20.5731 7.507 21.9631 11.678C22.0331 11.885 22.0331 12.109 21.9631 12.317C20.5771 16.49 16.6401 19.5 12.0001 19.5C7.36213 19.5 3.42613 16.493 2.03613 12.322Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  22 Content View
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-10 gap-4">
            <div className="md:border-r-2 border-[#ffffff] space-y-4 w-full max-w-[300px]">
              <div>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  Full Name
                </p>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-normal">
                 {
                  userData?.name
                 }
                </p>
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  Age
                </p>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-normal">
                 1000000
                </p>
              </div>
              <div>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-semibold">
                  Gender
                </p>
                <p className="text-[#ffffff] text-[14px] lg:text-[16px] xl:text-[20px] font-normal">
                {
                  userData?.gender || 'Not added yet'
                 }
                </p>
              </div>
            </div>
            <p className="text-[#05FB1E] text-[14px] font-normal md:hidden">
              Active On : {userData?.device}
            </p>
            <div className="flex flex-col gap-4">
              <div className="hover:shadow-md hover:scale-105 duration-300 flex gap-4 items-center py-2 px-4 bg-[#ffffff] rounded-lg ">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.862 3.487L16.549 1.799C16.9007 1.44733 17.3777 1.24976 17.875 1.24976C18.3723 1.24976 18.8493 1.44733 19.201 1.799C19.5527 2.15068 19.7502 2.62766 19.7502 3.125C19.7502 3.62235 19.5527 4.09933 19.201 4.451L8.582 15.07C8.05332 15.5984 7.40137 15.9867 6.685 16.2L4 17L4.8 14.315C5.01328 13.5986 5.40163 12.9467 5.93 12.418L14.862 3.487ZM14.862 3.487L17.5 6.125M16 13V17.75C16 18.3467 15.7629 18.919 15.341 19.341C14.919 19.763 14.3467 20 13.75 20H3.25C2.65326 20 2.08097 19.763 1.65901 19.341C1.23705 18.919 1 18.3467 1 17.75V7.25C1 6.65327 1.23705 6.08097 1.65901 5.65901C2.08097 5.23706 2.65326 5 3.25 5H8"
                    stroke="#2E4053"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-[#2E4053] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Edit Profile
                </p>
              </div>
              <div className="hover:shadow-md hover:scale-105 duration-300 flex gap-4 items-center py-2 px-4 bg-[#ffffff] rounded-lg ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 5.75C1.25 14.034 7.966 20.75 16.25 20.75H18.5C19.0967 20.75 19.669 20.5129 20.091 20.091C20.5129 19.669 20.75 19.0967 20.75 18.5V17.128C20.75 16.612 20.399 16.162 19.898 16.037L15.475 14.931C15.035 14.821 14.573 14.986 14.302 15.348L13.332 16.641C13.05 17.017 12.563 17.183 12.122 17.021C10.4849 16.4191 8.99815 15.4686 7.76478 14.2352C6.53141 13.0018 5.58087 11.5151 4.979 9.878C4.817 9.437 4.983 8.95 5.359 8.668L6.652 7.698C7.015 7.427 7.179 6.964 7.069 6.525L5.963 2.102C5.90214 1.85869 5.76172 1.6427 5.56405 1.48834C5.36638 1.33397 5.1228 1.25008 4.872 1.25H3.5C2.90326 1.25 2.33097 1.48705 1.90901 1.90901C1.48705 2.33097 1.25 2.90326 1.25 3.5V5.75Z"
                    stroke="#2E4053"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#2E4053] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Update Phone Number
                </p>
              </div>
              <div className="hover:shadow-md hover:scale-105 duration-300 flex gap-4 items-center py-2 px-4 bg-[#ffffff] rounded-lg ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.75 4.25002C15.5456 4.25002 16.3087 4.56609 16.8713 5.1287C17.4339 5.69131 17.75 6.45437 17.75 7.25002M20.75 7.25002C20.7501 8.12513 20.5588 8.98968 20.1895 9.78305C19.8202 10.5764 19.2818 11.2794 18.6121 11.8427C17.9424 12.406 17.1575 12.816 16.3126 13.0439C15.4677 13.2718 14.5831 13.3121 13.721 13.162C13.158 13.065 12.562 13.188 12.158 13.592L9.5 16.25H7.25V18.5H5V20.75H1.25V17.932C1.25 17.335 1.487 16.762 1.909 16.341L8.408 9.84202C8.812 9.43802 8.935 8.84202 8.838 8.27902C8.6962 7.46019 8.72604 6.62082 8.92563 5.81413C9.12522 5.00743 9.49021 4.25099 9.99748 3.59275C10.5047 2.9345 11.1432 2.38881 11.8724 1.99026C12.6016 1.5917 13.4057 1.34897 14.2336 1.27745C15.0616 1.20593 15.8953 1.30718 16.6821 1.57478C17.4688 1.84238 18.1914 2.2705 18.8041 2.832C19.4167 3.3935 19.906 4.07615 20.241 4.83667C20.5759 5.59719 20.7493 6.419 20.75 7.25002Z"
                    stroke="#2E4053"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#2E4053] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Update Password
                </p>
              </div>
              <div onClick={handleLogOut} className="hover:shadow-md hover:scale-105 duration-300 flex gap-4 items-center py-2 px-4 bg-[#ffffff] rounded-lg cursor-pointer">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9.25V5.5C13 4.30653 13.4741 3.16193 14.318 2.31802C15.1619 1.47411 16.3065 1 17.5 1C18.6935 1 19.8381 1.47411 20.682 2.31802C21.5259 3.16193 22 4.30653 22 5.5V9.25M3.25 20.5H13.75C14.3467 20.5 14.919 20.2629 15.341 19.841C15.7629 19.419 16 18.8467 16 18.25V11.5C16 10.9033 15.7629 10.331 15.341 9.90901C14.919 9.48705 14.3467 9.25 13.75 9.25H3.25C2.65326 9.25 2.08097 9.48705 1.65901 9.90901C1.23705 10.331 1 10.9033 1 11.5V18.25C1 18.8467 1.23705 19.419 1.65901 19.841C2.08097 20.2629 2.65326 20.5 3.25 20.5Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#2E4053] text-[14px] lg:text-[16px] xl:text-[20px] font-medium">
                  Log Out
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#05FB1E] text-[16px] font-normal mt-6 hidden md:block">
            Active On : {userData?.device}
          </p>
        </div>
  )
}
