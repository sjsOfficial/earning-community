import { packageTypes } from "@/types/packageTypes";
import { CATEGORY } from "./apis/wallets/route";

export interface VideoCardData{
    videoUrl: string;
    title: string;
    date: string;
    duration: number;
}
export interface PackageCardSliderProps{
    packageData?: packageTypes[]
}
export interface CategoryCardProps{
    data: CATEGORY
}
export interface VideoSliderProps{
    videoCardData: VideoCardData[]
}
export interface PackageCardProps{
    packageCardData: packageTypes
    bgColor?: string

}
export interface VideoCardProps{
    videoData: VideoCardData
    minWidth?:string
}

export interface userWithdrawHistoryTypes {
    id: string
    amount: number
    userWallet: UserWallet
    status: string
    message: any
    date: string
    userId: string
  }
  
  export interface UserWallet {
    id: string
    number: string
    walletHolderName: string
    userId: string
    date: string
    wallet: Wallet
  }
  
  export interface Wallet {
    name: string
    id: string
    icon: string
    cashout: boolean
    payment: boolean
  }
