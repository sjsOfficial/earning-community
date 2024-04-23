'use client'
import AppDownload from "@/components/Home/AppDownload";
import HorizontalSlider from "@/components/HorizontalSlider";
import React from "react";
import ProfileNavigation from "@/components/ProfileNavigation";
import ProfileSettings from "@/components/ProfileSettings";
export default function Profile() {
  
  return (
    <div className="container mx-auto pt-4 md:pt-[100px] ">
      <div className="grid lg:grid-cols-3 gap-4 px-2 my-8 md:my-10">
        <ProfileSettings></ProfileSettings>
        <ProfileNavigation></ProfileNavigation>
      </div>
      <HorizontalSlider></HorizontalSlider>
      <AppDownload></AppDownload>
    </div>
  );
}
