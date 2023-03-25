import Head from "next/head";
import { Inter } from "next/font/google";
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
    </>
  );
}
