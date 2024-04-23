"use client";
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import { CATEGORY } from "@/app/apis/wallets/route";
import CategoryCard from "@/components/CategoryCard";
import AppDownload from "@/components/Home/AppDownload";
import { getApi } from "@/functions/API";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Category() {
  const [data, setData] = useState<CATEGORY[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getApi(`/apis/category`);
        setData(res.data);
      } catch (error: any) {
        toast.error(error.response.data.error);
      }
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto px-2 pt-4 md:pt-40">
      {data ? (
        <div className="space-y-2 md:space-y-5">
          {data.map((data, i) => (
            <CategoryCard key={i} data={data}></CategoryCard>
          ))}
        </div>
      ) : (
        <LoaderScreen />
      )}

      <AppDownload></AppDownload>
    </div>
  );
}
