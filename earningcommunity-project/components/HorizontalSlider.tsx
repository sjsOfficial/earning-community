import React from "react";
import VideoCard from "./VideoCard";
import { VideoCardData } from "@/app/types";
import './styles.css'

export default function HorizontalSlider() {
  const videoCardData: VideoCardData[] = [
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
    {
      videoUrl: "nbziWticmjI?si=kXMwx-uoP_8-Z9oq",
      title:
        "সূরা আর রহমান, সূরা ইয়াসিন, সূরা ওয়াকিয়া, সূরা মুলক Best Quran Recitation by Zain Abu Kautsar",
      date: "March 18, 2024",
      duration: 120,
    },
  ];
  return (
    <div className="bg-[#85929E] mx-2 rounded-[10px] ">
      <div className="flex items-center justify-between p-4">
        <p className="text-[20px] md:text-[24px] text-[#FFFFFF] font-normal md:font-semibold">
          Recent Views
        </p>
        <div className="flex items-center gap-2">
          <p className="text-[20px] md:text-[24px] text-[#2FFD82] font-normal md:font-semibold">
            View More
          </p>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 1.5L8.75 9L1.25 16.5"
              stroke="#2CFF5A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-2 p-4">
          {videoCardData.map((data, i) => (
            <VideoCard minWidth="min-w-56" videoData={data} key={i}></VideoCard>
          ))}
        </div>
      </div>
    </div>
  );
}
