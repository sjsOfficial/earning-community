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
import { useEffect } from "react";
import axios from "axios";
import firebaseApp from "@/libs/firebase";
import { getMessaging, onMessage } from "firebase/messaging";
import useFcmToken from "@/hooks/useFcmToken";
import { toast } from "react-toastify";
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
    const getIP = async () => {
      const res = await axios.get("https://api.ipify.org?format=json");
      Cookies.set("ip", res.data.ip);
    };
    getIP();
    Cookies.set("os", window.navigator.userAgent);
    Cookies.set("id", `${window.screen.width}+${window.screen.height}`);
  }, []);

  Cookies.set("fcm", fcmToken);
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);

  if (pathname.includes("pay") || pathname.includes("admin")) {
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
            <div className="dark:bg-darkBg bg-lightBg  transition-colors duration-500 ease-in-out">
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
