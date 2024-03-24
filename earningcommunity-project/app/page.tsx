import JoinUs from "@/components/Authentication/JoinUs";
import AppDownload from "@/components/Home/AppDownload";
import History from "@/components/Home/History";
import HomeSlider from "@/components/Home/HomeSlider";
import Packages from "@/components/Home/Packages";
import Popular from "@/components/Home/Popular";
import Recent from "@/components/Home/Recent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Earning Community",
  description: "Earn money by this site with trusted way",
};
export default function Home() {
  return (
    <main className="">
      <HomeSlider></HomeSlider>
      <JoinUs></JoinUs>
      <Packages></Packages>
      <History></History>
      <Popular></Popular>
      <Recent></Recent>
      <AppDownload></AppDownload>
    </main>
  );
}
