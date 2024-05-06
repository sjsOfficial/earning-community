import React from 'react'
import VideoSlider from '../VideoSlider'
import { VideoCardData } from '@/app/types';
const videoCardData : VideoCardData[] = [
  {
    videoUrl: 'nbziWticmjI?si=kXMwx-uoP_8-Z9oq',
    title: 'সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar',
    date: 'March 18, 2024', 
    duration: 120,
  },
  {
    videoUrl: 'nbziWticmjI?si=kXMwx-uoP_8-Z9oq',
    title: 'সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar',
    date: 'March 18, 2024', 
    duration: 120,
  },
  {
    videoUrl: 'nbziWticmjI?si=kXMwx-uoP_8-Z9oq',
    title: 'সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar',
    date: 'March 18, 2024', 
    duration: 120,
  },
  {
    videoUrl: 'nbziWticmjI?si=kXMwx-uoP_8-Z9oq',
    title: 'সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar',
    date: 'March 18, 2024', 
    duration: 120,
  },
  {
    videoUrl: 'nbziWticmjI?si=kXMwx-uoP_8-Z9oq',
    title: 'সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar',
    date: 'March 18, 2024', 
    duration: 120,
  },
 
];
export default function Popular() {
  return (
    <div className='container mx-auto px-2  mt-[37px]'>
      <h1 className='text-[24px] md:text-[32px] dark:text-[#FFFFFF] font-medium mb-[20px] md:mb-[55px]'>Popular</h1>
      <div>
        <VideoSlider videoCardData ={videoCardData}></VideoSlider>
      </div>
    </div>
  )
}
