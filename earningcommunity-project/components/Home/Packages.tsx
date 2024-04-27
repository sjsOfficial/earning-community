'use client'
import React, { useEffect, useState } from 'react'
import PackageSlider from '../PackageSlider'
import { getApi } from '@/functions/API';
import { toast } from 'react-toastify';
import { packageTypes } from '@/types/packageTypes';

export default function Packages() {
  const [data, setData] = useState<packageTypes[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getApi(`/apis/packages`);
        setData(res.data.packages);
      } catch (error: any) {
        toast.error(error.response.data.error);
      }
    };
    getData();
  }, []);
  return (
    <div className='container mx-auto px-2  mt-[37px]'>
      <h1 className='text-[24px] md:text-[32px] text-[#FFFFFF] font-medium mb-[20px] md:mb-[55px]'>PACKAGES</h1>
      <div>
        <PackageSlider packageData ={data}></PackageSlider>
      </div>
    </div>
  )
}
