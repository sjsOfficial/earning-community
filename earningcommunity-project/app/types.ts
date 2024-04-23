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