import React from 'react'
import PackageSlider from '../PackageSlider'
import { packageData } from '@/app/data/packageData'

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
