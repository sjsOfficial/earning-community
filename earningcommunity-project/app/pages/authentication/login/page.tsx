"use client";
import AppDownload from "@/components/Home/AppDownload";
import { postApi } from "@/functions/API";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!phone || !password) {
      setError("Please fill out all fields.");
      return;
    }
    const toastId = toast.loading("Please wait...");
    try {
      const res = await postApi(`/apis/auth/login`, {
        phone: phone,
        password: password,
      });

      if (res.statusText == "OK") {
        toast.update(toastId, {
          render: "Login successful",
          type: "success",
          isLoading: false,
        });
        Cookies.set("token", res.data.userToken);
        window.location.href = "/";
      }
    } catch (error: any | AxiosError | TypeError) {
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
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-around gap-4 items-center md:pt-28 mx-2">
        <div className="">
          <Image
            className="h-[250px] md:h-[350px] w-[250px] md:w-[350px]"
            src={require("../../../../public/logInImage.svg")}
            alt="login"
          ></Image>
        </div>
        <div className=" bg-[#85929E] px-6 md:px-20 py-4 md:py-16 w-full max-w-[500px] rounded md:rounded-md">
          <div className="flex flex-col items-center gap-4 mb-4 md:mb-6">
            <div className="flex justify-center items-center h-[100px] md:h-[120px] w-[100px] md:w-[120px] bg-[#80714B] rounded-full">
              <Image
                className="h-[60px] md:h-[80px] w-[60px] md:w-[80px]"
                src={require("../../../../public/logo.svg")}
                alt="logo"
              ></Image>
            </div>
            <p className=" text-center text-[#FFFFFF] text-[16px] md:text-[20px] font-normal my-2 md:my-4">
              Get your account and start making money online by watching video
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="">
              <label className="text-[#FFFFFF] text-[16px] md:text-[20px] font-normal">
                Phone Number
              </label>
              <div className="flex items-center border border-[#FFFFFF] rounded-[5px] px-4 py-2 gap-4">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.05417C1 12.5174 7.716 18.568 16 18.568H18.25C18.8467 18.568 19.419 18.3545 19.841 17.9743C20.2629 17.5942 20.5 17.0786 20.5 16.541V15.3049C20.5 14.84 20.149 14.4346 19.648 14.322L15.225 13.3256C14.785 13.2265 14.323 13.3751 14.052 13.7012L13.082 14.8661C12.8 15.2049 12.313 15.3544 11.872 15.2085C10.2349 14.6663 8.74815 13.8099 7.51478 12.6987C6.28141 11.5875 5.33087 10.2481 4.729 8.77319C4.567 8.37588 4.733 7.93713 5.109 7.68307L6.402 6.80917C6.765 6.56502 6.929 6.14789 6.819 5.75238L5.713 1.76759C5.65214 1.54839 5.51172 1.3538 5.31405 1.21472C5.11638 1.07565 4.8728 1.00008 4.622 1H3.25C2.65326 1 2.08097 1.21357 1.65901 1.59372C1.23705 1.97387 1 2.48947 1 3.02708V5.05417Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  maxLength={11}
                  minLength={11}
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="01*********"
                  className="w-full focus:outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="">
              <label className="text-[#FFFFFF] text-[16px] md:text-[20px] font-normal">
                Password
              </label>
              <div className="flex items-center border border-[#FFFFFF] rounded-[5px] px-4 py-2 gap-4">
                <svg
                  width="26"
                  height="25"
                  viewBox="0 0 26 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6154 4.46005C18.5946 4.46005 19.5338 4.82521 20.2262 5.47522C20.9187 6.12522 21.3077 7.00682 21.3077 7.92606M25 7.92606C25.0002 8.93712 24.7647 9.93597 24.3102 10.8526C23.8556 11.7692 23.193 12.5814 22.3687 13.2321C21.5444 13.8829 20.5785 14.3566 19.5386 14.6199C18.4987 14.8832 17.41 14.9298 16.3489 14.7564C15.656 14.6444 14.9225 14.7865 14.4252 15.2532L11.1538 18.3241H8.38462V20.9236H5.61538V23.5231H1V20.2674C1 19.5777 1.29169 18.9156 1.81108 18.4293L9.80985 10.9207C10.3071 10.4539 10.4585 9.76536 10.3391 9.11491C10.1645 8.16888 10.2013 7.19913 10.4469 6.26712C10.6926 5.33511 11.1418 4.46116 11.7661 3.70067C12.3904 2.94018 13.1763 2.30972 14.0737 1.84925C14.9712 1.38879 15.9608 1.10835 16.9798 1.02572C17.9988 0.94309 19.025 1.06007 19.9933 1.36924C20.9617 1.67841 21.851 2.17303 22.605 2.82175C23.359 3.47048 23.9612 4.25916 24.3735 5.13782C24.7858 6.01648 24.9991 6.96595 25 7.92606Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <input
                  id="password"
                  minLength={6}
                  maxLength={20}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="******"
                  className="w-full focus:outline-none  bg-transparent"
                />
              </div>
              {error && (
                <p className=" text-red-500 text-xs mt-1 ml-1">{error}</p>
              )}
              <div className="flex justify-between mt-1">
                <p className="text-[#233140] hover:text-[#000000] text-[16px] md:text-[20px] font-normal underline">
                  Forget Password?
                </p>
                <Link
                  href="/pages/authentication/signup"
                  className="text-[#233140] hover:text-[#000000] text-[16px] md:text-[20px] font-normal underline"
                >
                  Register Now
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#2E4053] hover:bg-[#233140] text-white font-medium py-2 px-4 rounded-md w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <AppDownload></AppDownload>
    </div>
  );
};
export default LoginPage;
