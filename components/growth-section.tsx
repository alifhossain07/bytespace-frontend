"use client";

import React from "react";
import Image from "next/image";
import { Signal } from "lucide-react";
import { FoldText } from "@/components/reactbits/fold-text";

export const GrowthSection = () => {
  return (
    <section
      id="growth-section"
      aria-label="Professional Growth & Course Management"
      className="relative w-full bg-[#FAFAFA] text-zinc-900 py-16 sm:py-24 md:py-32 overflow-hidden"
    >
      {/* Background Gradient Eclipses (as per Figma specification) */}
      {/* 1. Top Green Glow (topgreen-eclispe.png on top) */}
      <div className="absolute -top-24 sm:-top-36 right-0 sm:right-[10%] lg:right-[30%] pointer-events-none select-none z-0 opacity-80 sm:opacity-90 max-w-none">
        <Image
          src="/images/topgreen-eclispe.png"
          alt=""
          width={1025}
          height={711}
          priority={false}
          className="w-[600px] sm:w-[850px] lg:w-[1025px] h-auto object-contain"
        />
      </div>

      {/* 2. Left Green Glow (leftgreen-eclispe.png on left) */}
      <div className="absolute -bottom-8 sm:bottom-1 -left-12 sm:left-0 pointer-events-none select-none z-0 opacity-85 sm:opacity-95 max-w-none">
        <Image
          src="/images/leftgreen-eclispe.png"
          alt=""
          width={425}
          height={554}
          priority={false}
          className="w-[320px] sm:w-[425px] lg:w-[480px] h-auto object-contain"
        />
      </div>

      {/* 3. Bottom/Right Blue Glow (bottomrightblue-eclipse.png on right) */}
      <div className="absolute top-[32%] sm:top-[50%] -right-16 sm:-right-24 pointer-events-none select-none z-0 opacity-80 sm:opacity-90 max-w-none">
        <Image
          src="/images/bottomrightblue-eclipse.png"
          alt=""
          width={758}
          height={712}
          priority={false}
          className="w-[520px] sm:w-[720px] lg:w-[850px] h-auto object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-10/12 max-w-[1170px] mx-auto flex flex-col gap-24 sm:gap-32 lg:gap-36">
        {/* ========================================================= */}
        {/* ROW 1: Your Path to Professional Growth Starts Here!       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & Metrics (col-span-7 for wider 2-line heading) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[46px] font-semibold font-poppins text-zinc-900 tracking-tight leading-[1.16]">
              <FoldText
                text={"Your Path to Professional\nGrowth Starts Here!"}
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.025}
                ease="power3.out"
              />
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-[18px] text-zinc-500 font-satoshi font-normal leading-relaxed w-[71%]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics Row (12K Students, 70+ Courses, 16 Creators) */}
            <div className="mt-8 sm:mt-10 flex items-center gap-8 sm:gap-12">
              <div>
                <p className="text-3xl sm:text-4xl font-medium font-poppins text-persian-blue tracking-tight">
                  12K
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 font-satoshi mt-1 font-normal">
                  Students
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-medium font-poppins text-persian-blue tracking-tight">
                  70+
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 font-satoshi mt-1 font-normal">
                  Courses
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-medium font-poppins text-persian-blue tracking-tight">
                  16
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 font-satoshi mt-1 font-normal">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Male Visual Showcase (col-span-5 to stay on the right) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[450px] xl:max-w-[480px] h-[430px] sm:h-[480px] lg:h-[490px] xl:h-[510px] select-none">
              {/* 1. Behind Card: Learn Figma Course Card (Figma Specs: Width 373px, Height 384px, Radius 24px, Border 1px) */}
              <article className="absolute top-2 sm:-top-7 left-0 sm:-left-20 z-10 w-[240px] sm:w-[280px] lg:w-[270px] xl:w-[373px] h-auto xl:h-[384px] bg-white rounded-[24px] border border-zinc-200 p-3 sm:p-3.5 xl:p-4 shadow-[0_12px_35px_rgba(0,0,0,0.06)] flex flex-col justify-between">
                <div>
                  {/* Course Thumbnail with Frosted Badges Overlay (Figma Image Height: 212px) */}
                  <div className="relative w-full h-[125px] sm:h-[150px] lg:h-[145px] xl:h-[212px] rounded-[16px] overflow-hidden bg-zinc-100 shrink-0">
                    <Image
                      src="/images/card1.jpg"
                      alt="Learn Figma from Basic"
                      fill
                      sizes="(max-width: 768px) 280px, 373px"
                      className="object-cover"
                    />
                    {/* Badges Overlaid at Bottom of Image */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 z-10 pointer-events-none">
                      <span className="bg-white/75 backdrop-blur-md text-zinc-800 text-[9px] sm:text-[10px] xl:text-[11px] font-satoshi font-normal px-2 sm:px-2.5 py-0.5 xl:py-1 rounded-full shadow-xs whitespace-nowrap">
                        17 Lessons
                      </span>
                      <span className="bg-white/75 backdrop-blur-md text-zinc-800 text-[9px] sm:text-[10px] xl:text-[11px] font-satoshi font-normal px-2 sm:px-2.5 py-0.5 xl:py-1 rounded-full shadow-xs whitespace-nowrap">
                        2 hours 16 mins
                      </span>
                      <span className="hidden xl:inline-block bg-white/75 backdrop-blur-md text-zinc-800 text-[11px] font-satoshi font-normal px-2.5 py-1 rounded-full shadow-xs whitespace-nowrap">
                        59 Comments
                      </span>
                    </div>
                  </div>

                  {/* Course Title & Rating */}
                  <div className="flex items-center justify-between mt-2.5 xl:mt-3 gap-2">
                    <h3 className="font-poppins font-semibold text-sm sm:text-base xl:text-xl text-zinc-900 leading-snug truncate">
                      Learn Figma from Basic
                    </h3>
                    <div className="flex items-center gap-1 text-xs sm:text-sm xl:text-lg text-zinc-500 shrink-0 font-satoshi">
                      <span className="font-medium text-[#4F4F4F]">4.5</span>
                      <span className="text-zinc-300">★</span>
                    </div>
                  </div>

                  {/* Author */}
                  <p className="text-[11px] sm:text-xs xl:text-sm text-zinc-500 font-satoshi -mt-0.5">
                    by{" "}
                    <span className="text-persian-blue">purepearl studio</span>
                  </p>

                  {/* Level Badge & Students Avatar Stack */}
                  <div className="flex items-center justify-start gap-2.5 sm:gap-3 xl:gap-4 mt-2 xl:mt-3 pt-0.5">
                    <div className="inline-flex items-center gap-1 xl:gap-1.5 bg-[#F5F5F6] text-zinc-600 px-2.5 sm:px-3 xl:px-4 py-1 xl:py-2 rounded-full text-[10px] sm:text-[11px] xl:text-xs font-satoshi">
                      <Signal className="w-3 h-3 xl:w-4 xl:h-4 text-zinc-500" />
                      <span>Beginner</span>
                    </div>

                    {/* Enrolled Students Avatar Stack */}
                    <div className="relative select-none flex items-center">
                      <Image
                        src="/images/people2.png"
                        alt="Enrolled students"
                        width={124}
                        height={24}
                        className="h-5 sm:h-6 xl:h-7 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Price Line */}
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-poppins font-semibold text-base sm:text-lg xl:text-xl text-persian-blue">
                    $25
                  </span>
                  <span className="text-[10px] sm:text-xs text-zinc-500 font-satoshi">
                    /lifetime
                  </span>
                </div>
              </article>

              {/* 2. Squiggle Ribbon behind male (malemask.png) */}
              <div className="absolute top-4 sm:top-12 right-6 sm:-right-14 z-40 w-[100px] sm:w-[130px] md:w-[220px] pointer-events-none">
                <Image
                  src="/images/malemask.png"
                  alt=""
                  width={216}
                  height={216}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* 3. Male Cutout (male.png) */}
              <div className="absolute -bottom-32 right-1 sm:right-5 md:-right-24 z-20 w-[285px] sm:w-[345px] md:w-[645px] pointer-events-none">
                <Image
                  src="/images/male.png"
                  alt="Student learning on ByteSpace"
                  width={703}
                  height={688}
                  priority={false}
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* 4. Floating Badge: Learning Progress 55% */}
              <div className="absolute top-36 sm:top-48 right-0 sm:-right-2 md:-right-3 z-30 bg-white rounded-[20px] p-3.5 sm:p-4 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-zinc-100 space-y-4 min-w-[160px] sm:min-w-[220px]">
                <p className="text-[11px] sm:text-xs font-satoshi text-zinc-500 font-medium">
                  Learning Progress
                </p>
                <p className="text-2xl sm:text-5xl font-poppins font-medium text-zinc-900 mt-0.5 tracking-tight">
                  55%
                </p>
                <div className="w-full h-1.5 sm:h-2 bg-zinc-100 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-lime rounded-full w-[55%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* ROW 2: Create & Manage Courses Easily.                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Female Visual Showcase (col-span-5) */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[470px] xl:max-w-[500px] h-[460px] sm:h-[510px] md:h-[550px] select-none">
              {/* 1. Floating Card: Total Revenue (July 1-28, $120.29) */}
              <div className="absolute top-2 sm:top-8 left-0 sm:-left-4 z-10 bg-persian-blue text-white rounded-[20px] p-3.5 sm:px-4 sm:py-3 shadow-[0_12px_30px_rgba(0,59,226,0.28)] min-w-[165px] sm:min-w-[220px]">
                <p className="text-[11px] sm:text-[16px] font-satoshi text-white/90 font-medium">
                  Total Revenue
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/60 font-satoshi -mt-0.5">
                  July 1-28
                </p>
                <p className="text-xl sm:text-[24px] font-poppins font-medium text-white mt-1 tracking-tight">
                  $120.29
                </p>
                <div className="w-full h-2 bg-white rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-lime rounded-full w-[65%]" />
                </div>
              </div>

              {/* 2. Floating Card: Year to Date (2023, $1,200.38, +12%) */}
              <div className="absolute top-36 sm:top-42 left-0 sm:-left-4 z-10 bg-persian-blue text-white rounded-[20px] p-3.5 sm:p-4 shadow-[0_12px_30px_rgba(0,59,226,0.28)] min-w-[150px] sm:min-w-[135px]">
                <p className="text-[11px] sm:text-[16px] font-satoshi text-white/90 font-medium">
                  Year to Date
                </p>
                <p className="text-[9px] sm:text-[10px] text-white/60 font-satoshi -mt-0.5">
                  2023
                </p>
                <p className="text-lg sm:text-[22px] font-poppins font-medium text-white mt-1 tracking-tight">
                  $1,200.38
                </p>
                <div className="mt-1.5">
                  <span className="inline-block bg-lime text-black font-poppins font-normal text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full">
                    +12%
                  </span>
                </div>
              </div>

              {/* 3. Squiggle Ribbon behind female (femalemask.png) */}
              <div className="absolute top-16 sm:top-24 right-6 sm:-right-7 z-30 w-[105px] sm:w-[135px] md:w-[215px] pointer-events-none">
                <Image
                  src="/images/femalemask.png"
                  alt=""
                  width={217}
                  height={216}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* 4. Female Cutout (female.png) */}
              <div className="relative z-20 w-[280px] bottom-10 sm:w-[340px] md:w-[550px] mx-auto pt-6 pointer-events-none">
                <Image
                  src="/images/female2.png"
                  alt="Course instructor on ByteSpace"
                  width={500}
                  height={500}
                  priority={false}
                  className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* 5. Floating Card: Happy Students (4.6, people2.png) */}
              <div className="absolute bottom-2 sm:bottom-4 right-1 sm:right-5 md:right-8 z-30 bg-white rounded-[20px] p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-zinc-100 min-w-[180px] sm:min-w-[200px]">
                <p className="text-xs sm:text-sm font-poppins font-semibold text-zinc-900">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-zinc-500 font-satoshi mt-0.5">
                  <span className="font-medium text-zinc-700">4.6</span>
                  <span>(240)</span>
                  <span className="text-amber-400">★</span>
                </div>
                <div className="relative select-none flex items-center mt-2">
                  <Image
                    src="/images/people2.png"
                    alt="Happy students avatars"
                    width={128}
                    height={32}
                    className="h-6 sm:h-7 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Feature Checklist (col-span-7 for wider text area) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-4 order-1 lg:order-2 lg:pl-6 xl:pl-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[44px] font-semibold font-poppins text-zinc-900 tracking-tight leading-[1.16]">
              <FoldText
                text={"Create & Manage\nCourses Easily."}
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.65}
                stagger={0.025}
                ease="power3.out"
              />
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base xl:text-[18px] text-zinc-500 font-satoshi font-normal leading-relaxed max-w-xl">
              <strong className="text-zinc-900 font-semibold">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Checklist items with blue circle checkmarks */}
            <ul className="mt-7 sm:mt-8 space-y-3.5 sm:space-y-4">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-persian-blue flex items-center justify-center shrink-0 shadow-xs">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="font-satoshi font-medium text-sm sm:text-base text-zinc-900">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
