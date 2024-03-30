import { categoryCardData } from "@/app/types";
import CategoryCard from "@/components/CategoryCard";
import AppDownload from "@/components/Home/AppDownload";
import React from "react";

export default function page() {
  const categoryCardData: categoryCardData[] = [
    {
      title: "News & Current Affairs",
      numberOfVideos: 50,
      image: "",
    },
    {
      title: "Funny Videos",
      numberOfVideos: 54,
      image: "",
    },
    {
      title: "Games",
      numberOfVideos: 7654,
      image: "",
    },
    {
      title: "Live",
      numberOfVideos: 546,
      image: "",
    },
    {
      title: "Music",
      numberOfVideos: 256,
      image: "",
    },
    {
      title: "Drama & TV Shows",
      numberOfVideos: 678,
      image: "",
    },
    {
      title: "Vlogs & Life Style",
      numberOfVideos: 546,
      image: "",
    },
    {
      title: "Education & Tutorial",
      numberOfVideos: 786,
      image: "",
    },
    
  ];
  return (
    <div className="container mx-auto px-2 pt-4 md:pt-40">
      <div className="space-y-2 md:space-y-5">
        {categoryCardData.map((data, i) => (
          <CategoryCard key={i} data={data}></CategoryCard>
        ))}
      </div>
      <AppDownload></AppDownload>
    </div>
  );
}
