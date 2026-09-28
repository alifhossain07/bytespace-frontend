import React from "react";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white overflow-x-clip">
      {/* 
        Hero Section (Contains the Persian Blue background and ShapeGrid behind navbar and hero content).
        Subsequent sections added below will have their own clean backgrounds without ShapeGrid.
      */}
      <Hero />
    </main>
  );
}
