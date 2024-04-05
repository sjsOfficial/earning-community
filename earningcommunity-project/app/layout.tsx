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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname.includes("pay") || pathname.includes("admin")) {
    
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

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <div className="dark:bg-darkBg bg-lightBg  transition-colors duration-500 ease-in-out">
            <div className="hidden md:block">
              {pathname.split("/")[1] === "admin" || <Header></Header>}
            </div>
            {pathname.split("/")[1] === "admin" || <MobileNav></MobileNav>}

            {children}
            {pathname.split("/")[1] === "admin" || <Footer></Footer>}
          </div>
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
