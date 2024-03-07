import React from 'react'
import PackageSlider from '../PackageSlider'
import { PackageCardData } from '@/app/types'
const packageData : PackageCardData[] = [
    {
      title: "Package 1",
      amount: 50,
      duration: "1 month",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons",
    },
    {
      title: "Package 2",
      amount: 75,
      duration: "3 months",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Package 3",
      amount: 100,
      duration: "6 months",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons",
    },
    {
      title: "Package 4",
      amount: 120,
      duration: "1 year",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Package 5",
      amount: 150,
      duration: "1 month",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo cons",
    },
    {
      title: "Package 6",
      amount: 200,
      duration: "3 months",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
   
    
  ];
export default function Packages() {
  return (
    <div className='container mx-auto px-2  mt-[37px]'>
      <h1 className='text-[24px] md:text-[32px] text-[#FFFFFF] font-medium mb-[20px] md:mb-[55px]'>PACKAGES</h1>
      <div>
        <PackageSlider packageData ={packageData}></PackageSlider>
      </div>
    </div>
  )
}
