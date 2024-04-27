"use client";
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import AppDownload from "@/components/Home/AppDownload";
import PackageCard from "@/components/PackageCard";
import { getApi } from "@/functions/API";
import { packageTypes } from "@/types/packageTypes";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
    <div className="container mx-auto px-2">
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-40">
          {data.map((data, i) => (
            <div className="flex justify-center" key={i}>
              <PackageCard bgColor="bg-[#85929E]" packageCardData={data} />
            </div>
          ))}
        </div>
      ) : (
        <LoaderScreen />
      )}

      <AppDownload></AppDownload>
    </div>
  );
}
