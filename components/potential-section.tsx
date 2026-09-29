"use client";

import React from "react";
import Image from "next/image";
import { ShapeGrid } from "@/components/reactbits/shape-grid";

export const PotentialSection = () => {
  return (
    <section
      id="creator-potential"
      aria-label="Unlock Your Potential as a Creator"
      className="relative w-full bg-persian-blue text-white h-[488px] flex items-center justify-center overflow-hidden select-none"
    >
      {/* 1. Background Interactive ShapeGrid  */}
      <div
        className="absolute inset-0 z-0 pointer-events-auto"
        aria-hidden="true"
      >
        <ShapeGrid
          speed={0}
          maxCols={12}
          squareSize={4}
          borderColor="rgba(255, 255, 255, 0.12)"
          hoverFillColor="rgba(203, 252, 1, 0.15)"
          shape="square"
          hoverTrailAmount={4}
          className="w-full h-full opacity-90"
        />
      </div>

      {/* Top-Left: Lime Zigzag Spring  */}
      <div className="absolute -top-3 sm:top-0 -left-3 sm:left-0 z-10 w-24 sm:w-36 md:w-44 lg:w-56 xl:w-64 pointer-events-none select-none">
        <Image
          src="/images/potentialzigzag.png"
          alt=""
          width={267}
          height={225}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Upper-Left: White Zigzag Spring  */}
      <div className="absolute top-[12%] sm:top-[2%] left-[10%] sm:left-[12%] md:left-[13%] xl:left-[11%] z-10 w-12 sm:w-16 md:w-20 lg:w-44  pointer-events-none select-none">
        <Image
          src="/images/potentialwhitezigzag.png"
          alt=""
          width={177}
          height={176}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Bottom-Left: White Cone  */}
      <div className="absolute bottom-[8%] sm:bottom-[15%] -left-1 sm:left-0 md:left-[0%] z-10 w-14 sm:w-20 md:w-26 lg:w-32 xl:w-36 pointer-events-none select-none">
        <Image
          src="/images/potentialconewhite.png"
          alt=""
          width={140}
          height={189}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      {/* Bottom-Left: Lime Doughnut / Torus  */}
      <div className="absolute -bottom-8 sm:-bottom-12 md:bottom-0 left-[4%] sm:left-[5%] md:left-[6%] xl:left-[1%] z-10 w-28 sm:w-40 md:w-52 lg:w-[345px]  pointer-events-none select-none">
        <Image
          src="/images/potentialdoughnut.png"
          alt=""
          width={346}
          height={190}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Top-Right: Lime Pyramid / Cone */}
      <div className="absolute top-[8%] sm:top-[2%] right-[16%] sm:right-[18%] md:right-[19%] xl:right-[12%] z-10 w-14 sm:w-18 md:w-24 lg:w-44  pointer-events-none select-none">
        <Image
          src="/images/potentialcone.png"
          alt=""
          width={190}
          height={189}
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Far Top-Right: White Cylinder / Truncated Cone  */}
      <div className="absolute -top-4 sm:-top-6 md:-top-0 right-[-2%] sm:right-[-3%] md:right-[-0%] z-10 w-24 sm:w-36 md:w-48 lg:w-52  pointer-events-none select-none">
        <Image
          src="/images/potentialcone3.png"
          alt=""
          width={218}
          height={372}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Bottom-Right: Lime Zigzag Spring  */}
      <div className="absolute -bottom-6 sm:-bottom-8 md:bottom-0 right-[1%] sm:right-[2%] md:right-[3%] xl:right-[0%] z-10 w-24 sm:w-36 md:w-48 lg:w-80 pointer-events-none select-none">
        <Image
          src="/images/potentialzigzag2.png"
          alt=""
          width={334}
          height={199}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* 3. Center Content Container */}
      <div className="relative z-20 w-11/12 max-w-[860px] xl:max-w-[920px] mx-auto space-y-3 text-center flex flex-col items-center justify-center">
        {/* Main Headline */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px]  font-semibold font-poppins text-white  leading-[1.18]">
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[14px] lg:text-[18px] text-white font-satoshi font-light leading-relaxed max-w-[975px] mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* CTA Button */}
        <div className="mt-6 sm:mt-7">
          <button
            type="button"
            className="inline-flex items-center justify-center min-h-[44px] px-8 sm:px-8 py-2.5 sm:py-3 rounded-full bg-lime text-zinc-950 font-poppins font-medium text-xs sm:text-sm hover:brightness-105 active:scale-95 transition-all shadow-[0_10px_25px_rgba(0,0,0,0.18)] cursor-pointer"
          >
            Join as Creator
          </button>
        </div>
      </div>
    </section>
  );
};
