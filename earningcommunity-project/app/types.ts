import { packageTypes } from "@/types/packageTypes";

export interface categoryCardData{
title: string;
numberOfVideos: number;
image:string;
}
export interface VideoCardData{
    videoUrl: string;
    title: string;
    date: string;
    duration: number;
}
export interface PackageCardSliderProps{
    packageData: packageTypes[]
}
export interface CategoryCardProps{
    data: categoryCardData
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