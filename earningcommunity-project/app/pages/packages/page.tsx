import { packageData } from "@/app/data/packageData";
import AppDownload from "@/components/Home/AppDownload";
import PackageCard from "@/components/PackageCard";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-40">
        {packageData?.map((data, i) => (
          <div className="flex justify-center" key={i}>
            <PackageCard bgColor="bg-[#85929E]" packageCardData={data} />
          </div>
        ))}
      </div>
      <AppDownload></AppDownload>
    </div>
  );
}
