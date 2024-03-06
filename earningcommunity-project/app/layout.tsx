"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import { usePathname } from "next/navigation";
import { DataProvider } from "./providers/DataProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <DataProvider>
          <div className="dark:bg-darkBg bg-lightBg  transition-colors duration-500 ease-in-out">
            {pathname.split("/")[1] === "admin" || <Header></Header>}

            {children}
            {pathname.split("/")[1] === "admin" || <Footer></Footer>}
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
