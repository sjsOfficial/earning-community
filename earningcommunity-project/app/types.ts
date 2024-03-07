export interface PackageCardData{
title: string,
amount: number,
duration: string,
description: string,
}
export interface PackageCardSliderProps{
    packageData: PackageCardData[]

}
export interface PackageCardProps{
    packageCardData: PackageCardData

}