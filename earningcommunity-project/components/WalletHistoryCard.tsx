import { UserWallet } from "@/app/types";
import Image from "next/image";
import React from "react";
interface Props {
  data: UserWallet
}
 const WalletHistoryCard:React.FC<Props> =({data}) =>{
  return (
    <div className="max-w-[400px] min-w-[300px] grid grid-cols-2 rounded-[10px] bg-[#2E4053]">
      <div className="flex justify-center items-center">
        <div className="h-full w-full relative">
          <Image
            className="h-full w-full rounded-l-[10px]"
            fill
            src={data.wallet.icon}
            alt="merchant logo"
          />
        </div>
      </div>
      <div className="p-2  flex flex-col justify-between">
        <div className="space-y-1">
        <p className="text-[16px] lg:text-[18px] text-[#FFFFFF] font-medium">
          {data.wallet.name}
        </p>
        <p className="text-[12px] lg:text-[14px] text-[#FFFFFF] font-normal">
          {data.number}
        </p>
        <p className="text-[12px] lg:text-[14px] text-[#FFFFFF] font-normal">
          {data.walletHolderName}
        </p>
        <p className="text-[10px] lg:text-[12px] text-[#FFFFFF] font-normal">
          {data.date}
        </p>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            className="text-white"
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.99 7.75052L11.644 16.7505M6.856 16.7505L6.51 7.75052M16.478 4.54052C16.82 4.59252 17.16 4.64752 17.5 4.70652M16.478 4.54052L15.41 18.4235C15.3664 18.9887 15.1111 19.5167 14.695 19.9018C14.279 20.2868 13.7329 20.5007 13.166 20.5005H5.334C4.7671 20.5007 4.22102 20.2868 3.80498 19.9018C3.38894 19.5167 3.13359 18.9887 3.09 18.4235L2.022 4.54052M16.478 4.54052C15.3239 4.36604 14.1638 4.23362 13 4.14352M2.022 4.54052C1.68 4.59152 1.34 4.64652 1 4.70552M2.022 4.54052C3.17613 4.36604 4.33623 4.23362 5.5 4.14352M13 4.14352V3.22752C13 2.04752 12.09 1.06352 10.91 1.02652C9.80362 0.99116 8.69638 0.99116 7.59 1.02652C6.41 1.06352 5.5 2.04852 5.5 3.22752V4.14352M13 4.14352C10.5037 3.9506 7.99628 3.9506 5.5 4.14352"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-[12px] lg:text-[14px] text-[#FFFFFF] font-normal">
            Delete Wallet
          </p>
        </div>
      </div>
    </div>
  );
}
export default WalletHistoryCard