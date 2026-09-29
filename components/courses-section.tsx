"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Signal } from "lucide-react";

export const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const row1 = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ];

  const row2 = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ];

  const row3 = ["Productivity", "Web Development", "Data Science", "Cooking"];

  const courses = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      image: "/images/card1.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
    {
      id: 2,
      title: "Build Digital Asset",
      author: "purepearl studio",
      image: "/images/card2.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
    {
      id: 3,
      title: "the Power of Big Data",
      author: "purepearl studio",
      image: "/images/card3.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
    {
      id: 4,
      title: "Balancing Productivity an...",
      author: "purepearl studio",
      image: "/images/card4.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
    {
      id: 5,
      title: "Mastering Money Manage...",
      author: "purepearl studio",
      image: "/images/card5.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
    {
      id: 6,
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      image: "/images/card6.jpg",
      rating: "4.5",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      price: "$25",
      billing: "/lifetime",
    },
  ];

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="w-full bg-white text-zinc-900 py-16 sm:py-20 md:py-24"
    >
      <div className="w-11/12 max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="courses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins text-zinc-900 tracking-tight leading-[1.15]"
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 font-satoshi max-w-2xl mx-auto font-normal leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Filter Badges Pill Row (Exactly as in Figma) */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3 select-none">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {row1.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-lime text-black font-semibold font-poppins shadow-sm"
                      : "bg-[#F5F5F6] text-zinc-700 font-satoshi hover:bg-zinc-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {row2.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-lime text-black font-semibold font-poppins shadow-sm"
                      : "bg-[#F5F5F6] text-zinc-700 font-satoshi hover:bg-zinc-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Row 3 with + More */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {row3.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[40px] px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-lime text-black font-semibold font-poppins shadow-sm"
                      : "bg-[#F5F5F6] text-zinc-700 font-satoshi hover:bg-zinc-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
            <button
              type="button"
              className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold font-poppins text-persian-blue hover:underline cursor-pointer"
            >
              + More
            </button>
          </div>
        </div>

        {/* 6 Course Cards Grid with Figma Specs (Width: 373px, Height: 384px, Radius: 24px, Border: 1px) */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 justify-items-center max-w-[1170px] mx-auto">
          {courses.map((course) => (
            <article
              key={course.id}
              className="group bg-white rounded-[24px] border border-zinc-200 p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 w-full max-w-[373px] lg:w-[373px] h-[384px] flex flex-col justify-between mx-auto"
            >
              <div>
                {/* Card Image Wrapper with Frosted Badges Overlay */}
                <div className="relative w-full h-[212px] rounded-[16px] overflow-hidden bg-zinc-100 shrink-0">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 373px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Frosted Badges Overlaid at Bottom of Image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 z-10 pointer-events-none">
                    <span className="bg-white/70 backdrop-blur-md text-zinc-800 text-[10px] sm:text-[11px] font-satoshi font-normal px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                      {course.lessons}
                    </span>
                    <span className="bg-white/70 backdrop-blur-md text-zinc-800 text-[10px] sm:text-[11px] font-satoshi font-normal px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                      {course.duration}
                    </span>
                    <span className="bg-white/70 backdrop-blur-md text-zinc-800 text-[10px] sm:text-[11px] font-satoshi font-normal px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Card Title & Rating */}
                <div className="flex items-center justify-between mt-3 gap-2">
                  <h3 className="font-poppins font-semibold text-xl text-zinc-900 leading-snug group-hover:text-persian-blue transition-colors truncate">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-lg text-zinc-500 shrink-0 font-satoshi">
                    <span className="font-medium text-[#4F4F4F]">
                      {course.rating}
                    </span>
                    <span className="text-zinc-300 text-lg">★</span>
                  </div>
                </div>

                {/* Author Subtitle */}
                <p className="text-sm text-zinc-500 font-satoshi -mt-0.5">
                  by{" "}
                  <span className="text-persian-blue hover:underline cursor-pointer">
                    {course.author}
                  </span>
                </p>

                {/* Level Badge & Students Avatar Stack */}
                <div className="flex items-center justify-start gap-4 mt-3 pt-0.5">
                  {/* Level Pill */}
                  <div className="inline-flex items-center gap-1.5 bg-[#F5F5F6] text-zinc-600 px-4 py-2 rounded-full text-xs font-satoshi">
                    <Signal className="w-4 h-4 text-zinc-500" />
                    <span>{course.level}</span>
                  </div>

                  {/* Avatars from Figma (people.png) */}
                  <div className="relative select-none flex items-center">
                    <Image
                      src="/images/people2.png"
                      alt="Enrolled students"
                      width={124}
                      height={24}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Price Line (no top border, matching Figma) */}
              <div className=" mt-2  flex items-baseline gap-1">
                <span className="font-poppins font-semibold text-xl sm:text-xl text-persian-blue">
                  {course.price}
                </span>
                <span className="text-xs text-zinc-500 font-satoshi">
                  {course.billing}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
