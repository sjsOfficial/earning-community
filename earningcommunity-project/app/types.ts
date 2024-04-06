export interface PackageCardData{
title: string,
amount: number,
duration: string,
description: string,
}
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
    packageData: PackageCardData[]
}
export interface CategoryCardProps{
    data: categoryCardData
}
export interface VideoSliderProps{
    videoCardData: VideoCardData[]
}
export interface PackageCardProps{
    packageCardData: PackageCardData
    bgColor?: string

}
export interface VideoCardProps{
    videoData: VideoCardData
    minWidth?:string
}