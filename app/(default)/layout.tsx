"use client";

import { useEffect } from "react";
// import "./css/style.css";

// import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const architects_daughter = Architects_Daughter({
//   subsets: ["latin"],
//   variable: "--font-architects-daughter",
//   weight: "400",
//   display: "swap",
// });

import AOS from "aos";
import "aos/dist/aos.css";

import PageIllustration from "@/components/page-illustration";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: false,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="grow">
          <PageIllustration />

          {children}
        </main>

        <Footer />
        <Banner />
      </div>
    </>
  );
}
