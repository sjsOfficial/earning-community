'use client'
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import { useData } from "@/app/providers/DataProvider";
import WalletHistoryCard from "@/components/WalletHistoryCard";
import React from "react";

export default function Wallets() {
  const { userWalletHistory } = useData();
  return (
    <div className="bg-[#85929E] mx-2 rounded-[10px] ">
      <div className="flex items-center justify-between p-4">
        <p className="text-[20px] md:text-[24px] text-[#FFFFFF] font-normal md:font-semibold">
          My Wallets
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-2 items-center">
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0.958862V12.5822M16.5 6.77055H1.5"
                stroke="#00FF0A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-[20px] md:text-[24px] text-[#00FF0A] font-normal md:font-semibold">
              Add Wallet
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-2 p-4">
        {userWalletHistory ? (
            userWalletHistory.map((data, i) => (
              <WalletHistoryCard
                data={data}
                key={i}
              ></WalletHistoryCard>
            ))
          ) : (
            <LoaderScreen></LoaderScreen>
          )}
        
        </div>
      </div>
    </div>
  );
}
