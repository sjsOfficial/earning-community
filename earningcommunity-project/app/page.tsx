import HomeSlider from "@/components/HomeSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Earning Community",
  description: "Earn money by this site with trusted way",
};
export default function Home() {
  return (
    <main className="">
      <HomeSlider></HomeSlider>
      <h1>Home Page t t</h1>
    </main>
  );
}
