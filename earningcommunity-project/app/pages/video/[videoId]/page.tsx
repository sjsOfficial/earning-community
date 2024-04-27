"use client";
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import { getApi } from "@/functions/API";
import { videoTypes } from "@/types/videoTypes";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Video() {
  const { videoId } = useParams();
  const [data, setData] = useState<videoTypes>();
  useEffect(() => {
    getApi("/apis/user/video", {
      videoId: videoId,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  if (!data) {
    return <LoaderScreen />;
  }
  return (
    <div className="container mx-auto px-2  pt-4 md:pt-[100px]">
      <div id="fb-root"></div>
      <script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
      ></script>
      <h1>My Video Player</h1>
      <video
        src={data.videoUrl}
        width="500"
        autoPlay
        controls={false}
        muted // Optional: Mute the video to prevent audio from playing
        onPlaying={(e) => {
          console.log("playing");
        }}
      ></video>
    </div>
  );
}
