"use client";
import LoaderScreen from "@/app/admin/(DashboardLayout)/components/shared/LoaderScreen";
import { getApi } from "@/functions/API";
import { videoTypes } from "@/types/videoTypes";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";

export default function Video() {
  const { videoId } = useParams();
  const [data, setData] = useState<videoTypes>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    getApi("/apis/user/video", {
      videoId: videoId
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    // Load Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "2319234501801028",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v11.0",
      });

      // Check login status
      window.FB.getLoginStatus(function (response: any) {
        if (response.status === "connected") {
          setIsLoggedIn(true);
        }
      });
    };

    (function (d: Document, s: string, id: string) {
      let js: HTMLScriptElement | null,
        fjs: Element | null = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s) as HTMLScriptElement;
      if (!js) {
        return;
      }
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }, []);
  const handleLogin = () => {
    window.FB.login(function (response: any) {
      if (response.authResponse) {
        setIsLoggedIn(true);
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    });
  };

  const handlePlaying = () => {
    console.log("Video is playing");
    // Add your logic here
  };

  const handlePause = () => {
    console.log("Video is paused");
    // Add your logic here
  };

  if (!data) {
    return <LoaderScreen />;
  }
  return (
    <div className="container mx-auto px-2  pt-4 md:pt-[100px]">
      {isLoggedIn ? (
        <div
          className="fb-video"
          data-href={data.videoUrl}
          data-width="500"
          data-allowfullscreen="true"
          onPlaying={handlePlaying}
          onPause={handlePause}
        ></div>
      ) : (
        <button onClick={handleLogin}>Login with Facebook</button>
      )}
    </div>
  );
}
