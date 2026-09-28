import React from "react";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-clip">
      {/* Hero Section */}
      <Hero />

      {/* Partner Logos Marquee Section (Background #F5F5F6) */}
      <LogoMarquee />
    </main>
  );
}
