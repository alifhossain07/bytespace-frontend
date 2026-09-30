import React from "react";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { CoursesSection } from "@/components/courses-section";
import { LearningPaths } from "@/components/learning-paths";
import { GrowthSection } from "@/components/growth-section";
import { PotentialSection } from "@/components/potential-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-zinc-900 overflow-x-clip">
      {/* Hero Section  */}
      <Hero />

      {/* Partner Logos Marquee Section  */}
      <LogoMarquee />

      {/* Courses Section  */}
      <CoursesSection />

      {/* Learning Paths Section  */}
      <LearningPaths />

      {/* Growth & Course Management Section */}
      <GrowthSection />

      {/* Potential Section */}
      <PotentialSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
