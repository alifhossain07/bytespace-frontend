import React from "react";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { CoursesSection } from "@/components/courses-section";
import { LearningPaths } from "@/components/learning-paths";
import { GrowthSection } from "@/components/growth-section";
import { PotentialSection } from "@/components/potential-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-zinc-900 overflow-x-clip">
      {/* Hero Section (Persian Blue with ShapeGrid) */}
      <Hero />

      {/* Partner Logos Marquee Section (Background #F5F5F6) */}
      <LogoMarquee />

      {/* Courses Section (Discover Your Passion, Build Your Skills) */}
      <CoursesSection />

      {/* Learning Paths Section (Explore Diverse Learning Paths at Bytespace) */}
      <LearningPaths />

      {/* Growth & Course Management Section */}
      <GrowthSection />

      {/* Potential Section (Unlock Your Potential as a Creator) */}
      <PotentialSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
