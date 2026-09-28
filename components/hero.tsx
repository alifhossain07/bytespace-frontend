"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import ShapeGrid from "@/components/reactbits/shape-grid";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
  };

  return (
    <section className="relative w-full bg-persian-blue text-white pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-auto"
        aria-hidden="true"
      >
        <ShapeGrid
          speed={0}
          maxCols={14}
          squareSize={96}
          borderColor="rgba(255, 255, 255, 0.12)"
          hoverFillColor="rgba(203, 252, 1, 0.15)"
          shape="square"
          hoverTrailAmount={4}
          className="w-full h-full opacity-90"
        />
      </div>

      {/* Top-Left Spring  */}
      <div className="absolute left-[2%] xl:left-[0%] 2xl:left-[0%] top-[26%] sm:top-[28%] 2xl:top-[22%] lg:top-[21%] z-10 w-16 sm:w-24 md:w-28 lg:w-52 2xl:w-72 pointer-events-none select-none">
        <Image
          src="/images/Mask Group.png"
          alt="Yellow spring"
          width={130}
          height={180}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Mid-Left Spring */}
      <div className="absolute left-[10%] xl:left-[12%] 2xl:left-[13%] top-[48%] sm:top-[50%] md:top-[42%] 2xl:top-[46%] z-10 w-10 sm:w-14 md:w-16 lg:w-48 2xl:w-64 pointer-events-none select-none">
        <Image
          src="/images/Frame-1.png"
          alt="White zigzag small"
          width={80}
          height={80}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Bottom-Left Donut */}
      <div className="absolute left-[2%] xl:left-[0%] 2xl:left-[10%] bottom-[4%] sm:bottom-[6%] md:bottom-[-2%] z-20 w-24 sm:w-36 md:w-44 lg:w-72 2xl:w-80 pointer-events-none select-none">
        <Image
          src="/images/Cone.png"
          alt="White torus ring"
          width={210}
          height={210}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top-Right Cylinder */}
      <div className="absolute right-[2%] xl:right-[0%] 2xl:right-[0%] top-[22%] sm:top-[24%] md:top-[24%] z-10 w-16 sm:w-24 md:w-28 lg:w-56 pointer-events-none select-none">
        <Image
          src="/images/Cone-1.png"
          alt="Yellow cone cylinder"
          width={130}
          height={180}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Mid-Right Pyramid ) */}
      <div className="absolute right-[10%] xl:right-[12%] 2xl:right-[14%] top-[46%] sm:top-[48%] md:top-[43%] 2xl:top-[47%] z-10 w-12 sm:w-16 md:w-20 lg:w-48 2xl:w-60 pointer-events-none select-none">
        <Image
          src="/images/Cone-2.png"
          alt="White pyramid"
          width={95}
          height={95}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Bottom-Right Zigzag  */}
      <div className="absolute right-[2%] lg:right-[2%] 2xl:right-[8.5%] bottom-[6%] sm:bottom-[8%] md:bottom-[3%] 2xl:bottom-[-1%] z-20 w-20 sm:w-28 md:w-36 lg:w-56 2xl:w-70 pointer-events-none select-none">
        <Image
          src="/images/Frame.png"
          alt="White zigzag large"
          width={175}
          height={175}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Inner COntainer */}
      <div className="relative z-10 w-10/12 max-w-[1360px] mt-10 mx-auto">
        {/* Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto pt-2 sm:pt-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl  lg:text-[68px] font-semibold font-poppins text-white  leading-[1.1]">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="mt-3.5 mb-14 text-sm sm:text-base md:text-lg text-white/85 font-satoshi max-w-4xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* Search Bar Form */}
          <form
            onSubmit={handleSearch}
            className="mt-6 sm:mt-8 mx-auto max-w-lg flex items-center bg-white rounded-full p-1 sm:p-1.5 shadow-2xl transition-shadow focus-within:ring-4 focus-within:ring-lime/40"
          >
            <div className="pl-3.5 sm:pl-4 text-zinc-400 flex items-center pointer-events-none">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="w-full bg-transparent px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 font-satoshi focus:outline-none"
              aria-label="Search courses, topics, or creators"
            />
            <button
              type="submit"
              className="min-h-[40px] sm:min-h-[44px] px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-lime text-black font-semibold font-poppins text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-md shrink-0"
            >
              Search
            </button>
          </form>
        </div>

        {/* Lime Arch + Student Photo + Floating Badges  */}
        <div className="relative mt-8 sm:mt-28 mx-auto max-w-3xl flex flex-col items-center justify-end">
          {/* Lime Hemisphere Dome Backdrop (Ellipse 7) */}
          <div className="absolute -bottom-[480px] w-[280px] h-[140px] sm:w-[440px] sm:h-[220px] md:w-[540px] md:h-[270px] lg:w-[1200px] lg:h-[900px] 2xl:w-[1400px] 2xl:h-[900px] rounded-t-full bg-lime z-0 shadow-2xl pointer-events-none flex items-center justify-center overflow-hidden">
            <Image
              src="/images/Ellipse 7.png"
              alt="Lime Arch Backdrop"
              width={620}
              height={310}
              className="w-full h-full object-cover object-top opacity-95"
            />
          </div>

          {/* Central Student Photo (Image.png) */}
          <div className="relative z-10 w-full max-w-[300px] ml-24 sm:max-w-[420px] md:max-w-[480px] lg:max-w-[530px] pt-2 scale-110 md:scale-120 lg:scale-[1.35] origin-bottom">
            <Image
              src="/images/Image.png"
              alt="Smiling student with headphones and laptop"
              width={530}
              height={470}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating Informational UI Badges */}

          {/* Badge 1: UI/UX Design  */}
          <div className="absolute left-0 sm:left-4 md:left-10 lg:left-14 top-14 sm:top-20 md:top-4 z-20 bg-white text-black rounded-2xl p-2.5 sm:px-5 sm:py-4 shadow-2xl border border-zinc-100 flex flex-col select-none transition-all duration-300 hover:scale-105">
            <span className="font-poppins font-medium text-[11px] sm:text-[xs] md:text-[16px] text-zinc-900 leading-tight">
              UI/UX Design
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs text-zinc-500 font-satoshi mt-0.5">
              200 Courses • 1000+ Students
            </span>
          </div>

          {/* Badge 2: Learning Progress  */}
          <div className="absolute right-0 sm:right-4 md:right-10 lg:right-8 top-16 sm:top-22 md:top-4 z-20 bg-white text-black rounded-2xl p-2.5 sm:p-3.5 shadow-2xl space-y-3 border border-zinc-100 min-w-[110px] sm:min-w-[140px] md:min-w-[230px] select-none transition-all duration-300 hover:scale-105">
            <span className="text-[9px] sm:text-[10px] md:text-[14px] text-zinc-500 font-satoshi block">
              Learning Progress
            </span>
            <span className="font-poppins font-semibold text-xl sm:text-2xl md:text-[48px] text-zinc-900 mt-0.5 block leading-none">
              55%
            </span>
            <div className="w-full bg-zinc-100 h-1.5 sm:h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-lime h-full rounded-full w-[55%]" />
            </div>
          </div>

          {/* Badge 3: Happy Students  */}
          <div className="absolute left-0 sm:left-2 md:left-6 lg:-left-8 bottom-4 sm:bottom-8 md:bottom-10 z-20 w-[170px] sm:w-[258px] bg-white text-black rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-zinc-100 select-none transition-all duration-300 hover:scale-105 flex flex-col items-start text-left">
            <span className="font-poppins font-medium text-xs sm:text-sm text-zinc-900 block leading-tight">
              Happy Students
            </span>
            <div className="flex items-center justify-start gap-1 text-[11px] sm:text-xs text-zinc-600 mt-1">
              <span className="font-medium text-zinc-900">4.5</span>
              <span className="text-zinc-400 font-normal">(240)</span>
              <span className="text-[#D4FB20] font-bold">★</span>
            </div>

            {/* Avatars Image  */}
            <div className="relative mt-2.5 w-full">
              <Image
                src="/images/people.png"
                alt="Happy students avatars"
                width={190}
                height={36}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
