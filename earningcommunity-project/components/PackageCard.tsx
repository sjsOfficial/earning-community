"use client";
import { PackageCardProps } from "@/app/types";
import { postApi } from "@/functions/API";
import useAuth from "@/hooks/useAuth";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const PackageCard: React.FC<PackageCardProps> = ({
  packageCardData,
  bgColor,
}) => {
  
  
  const { userData } = useAuth();
  const router = useRouter();
  const handlePurchasePachage = async () => {
    const toastId = toast.loading("Please wait...");
    if (userData) {
      try {
        const res = await postApi("/apis/user/pay", {
          packageId: packageCardData.id,
          redirectUrl: "/pages/profile/packages",
          cancelUrl: "/pages/packages",
        });
        window.location.href= res.data.url
        
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
    } else {
      setTimeout(() => {
        toast.dismiss(toastId);
      }, 1000);
      router.push("/pages/authentication/login");
    }
  };

  const truncatedText =
    packageCardData.description.length > 300
      ? packageCardData.description.slice(0, 300) + "..."
      : packageCardData.description;
  return (
    <div
      className={`max-w-[380px] ${bgColor} rounded-[10px] p-[20px] flex flex-col items-center justify-between gap-4 mx-2 h-[350px] md:h-[430px] `}
    >
      <h1 className="text-[20px] md:text-[24px] font-medium text-[#FFFFFF]">
        {packageCardData.title}
      </h1>
      <div className="text-center">
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">
          {packageCardData.price} ৳
        </p>
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF]">
          {packageCardData.duration} months
        </p>
        <p className="text-[18px] md:text-[20px] font-medium text-[#FFFFFF] mt-2">
          {packageCardData.withdrawLimit}৳ Withdraw Limit
        </p>
      </div>
      <p className="text-[16px] md:text-[20px] text-[#FFFFFF] text-justify line-clamp-4 md:line-clamp-5">
        {truncatedText}
      </p>
      <div
        onClick={handlePurchasePachage}
        className="w-full bg-[#2E4053] hover:bg-[#1b2a3e] rounded-[10px] cursor-pointer transition-colors duration-500 ease-in-out"
      >
        <div className="py-2 text-center  text-[16px] md:text-[20px] text-[#FFFFFF]">
          Purchase Now
        </div>
      </div>
    </div>
  );
};
export default PackageCard;
