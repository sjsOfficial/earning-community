"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import { usePathname } from "next/navigation";
import { DataProvider } from "./providers/DataProvider";
import MobileNav from "@/components/Shared/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import useFcmToken from "@/hooks/useFcmToken";
import { AuthProvider } from "./providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { fcmToken, notificationPermissionStatus } = useFcmToken();

  useEffect(() => {
    const getCookie = async () => {
      try {
        const res = await axios.get("/apis/cookies");
        console.table(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCookie();
  }, []);

  Cookies.set("fcm", fcmToken);
  // useEffect(() => {
  //   if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  //     const messaging = getMessaging(firebaseApp);
  //     const unsubscribe = onMessage(messaging, (payload) => {
  //       console.log("Foreground push notification received:", payload);
  //     });
  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, []);

  // if (!data) {
  //   return <LoaderScreen />;
  // }
  if (pathname.includes("pay")) {
    return (
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </body>
      </html>
    );
  }

  if (pathname.includes("admin")) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <DataProvider>
            <AuthProvider>
              {children}
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </AuthProvider>
          </DataProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <AuthProvider>
            <div className="dark:bg-darkBg bg-lightBg transition-colors duration-500 ease-in-out">
              <div className="hidden md:block">
                {pathname.split("/")[1] === "admin" || <Header></Header>}
              </div>
              {pathname.split("/")[1] === "admin" || <MobileNav></MobileNav>}

              {children}
              {pathname.split("/")[1] === "admin" || <Footer></Footer>}
            </div>
          </AuthProvider>
        </DataProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
