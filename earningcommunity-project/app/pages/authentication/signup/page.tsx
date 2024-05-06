"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { getApi, putApi } from "@/functions/API";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [isOpenInputOTP, setIsOpenInputOTP] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remainingTime, setRemainingTime] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const handleChange = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timerActive) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerActive]);

  useEffect(() => {
    if (remainingTime <= 0) {
      setTimerActive(false);
    }
  }, [remainingTime]);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleVarifyOTP = async () => {
    setError("");
    if (!phone) {
      setError("Please fill out all fields.");
      return;
    }
    const key = localStorage.getItem("token");
    const toastId = toast.loading("Please wait...");

    try {
      const res = await putApi(`/apis/auth/create`, {
        OTP: "000000",
        key: key,
      });
      if (res.statusText == "OK") {
        localStorage.removeItem("token");
        Cookies.set("token", res.data.token,{expires:120});
        toast.update(toastId, {
          render: "Number authorize",
          type: "success",
          isLoading: false,
        });
        router.push("/pages/authentication/signup/signupForm");
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
  const handleVarifyNumber = async () => {
    setRemainingTime(60);
    setIsOpenInputOTP(true);
    setTimerActive(true);
    const toastId = toast.loading("Please wait...");
    try {
      const res = await getApi(`/apis/auth/create?phoneNumber=${phone}`);
      toast.update(toastId, {
        render: "Getting OTP Successfull",
        type: "success",
        isLoading: false,
      });
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.key);
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
    <div className="flex flex-col md:flex-row justify-evenly h-full md:min-h-[calc(100vh-110px)] items-center px-2 py-4 mb-10 gap-4">
      <div className="">
        <Image
          className="h-[250px] md:h-[350px] w-[250px] md:w-[350px]"
          src={require("../../../../public/logInImage.svg")}
          alt="login"
        ></Image>
      </div>

      <div className="bg-[#85929E] px-6 md:px-20 py-4 md:py-16 w-full max-w-[500px] rounded md:rounded-md">
        <div className=" text-center">
          <p className="font-semibold text-[20px] md:text-[24px] text-[#FFFFFF]">
            Register
          </p>
          <p className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF] my-[10px] md:my-[30px]">
            Our verified client has a value to give <br /> attention about their
            advantage and disadvantage
          </p>
        </div>
        <div>
          <div>
            <label className="font-normal text-[14px] md:text-[16px] text-[#FFFFFF] md:mb-[7px]">
              Max Length 11
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
            {error && (
              <p className=" right-0 text-red-500 text-xs mt-1">{error}</p>
            )}
            <div
              className={`flex items-center gap-1 md:mt-[11px] mt-[5px] ${
                isOpenInputOTP ? "hidden" : "block"
              }`}
            >
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7.99993V11.7499M1.697 15.1259C0.831004 16.6259 1.914 18.4999 3.645 18.4999H18.355C20.085 18.4999 21.168 16.6259 20.303 15.1259L12.949 2.37793C12.083 0.87793 9.917 0.87793 9.051 2.37793L1.697 15.1259ZM11 14.7499H11.007V14.7579H11V14.7499Z"
                  stroke="#DF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {phone.length == 11 ? (
                <p
                  onClick={handleVarifyNumber}
                  className={`underline text-[#006216] text-[16px] font-normal cursor-pointer hover:text-[#1d4025]`}
                >
                  Verify Now
                </p>
              ) : (
                <p
                  className={`underline text-[#006216] text-[16px] font-normal cursor-not-allowed opacity-75`}
                >
                  Verify Now
                </p>
              )}
            </div>
            <div
              className={`${
                isOpenInputOTP ? "block" : "hidden"
              } md:mt-[11px] mt-[5px]`}
            >
              {remainingTime === 0 ? (
                <p
                  onClick={handleVarifyNumber}
                  className="underline text-[#006216] hover:text-[#1d4025] cursor-pointer text-[16px] font-normal"
                >
                  Resent OTP
                </p>
              ) : (
                <p>Remaining Time: {formatTime(remainingTime)}</p>
              )}
            </div>
            <div
              className={`${
                isOpenInputOTP ? "block" : "hidden"
              } md:mt-[29px] mt-[10px]`}
            >
              <PinInput otp value={value} onChange={handleChange}>
                <div className="flex w-full gap-1 justify-between">
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                  <PinInputField className=" w-[40px] h-[40px] rounded-md text-center bg-lightFooterBg " />
                </div>
              </PinInput>
            </div>
          </div>

          <div className="my-[10px]">
            <div
              onClick={handleVarifyOTP}
              className={`bg-[#2E4053] hover:bg-[#233140] text-white font-medium py-2 px-4 rounded-md w-full ${
                !isOpenInputOTP
                  ? "cursor-not-allowed opacity-70"
                  : "cursor-pointer"
              }`}
            >
              Verify OTP
            </div>
          </div>
          <Link
            href="/pages/authentication/login"
            className="text-[#233140] hover:text-[#000000] text-[16px] md:text-[20px] font-normal underline"
          >
            Already have an account? LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
