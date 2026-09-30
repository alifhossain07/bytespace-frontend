"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ShapeGrid from "@/components/reactbits/shape-grid";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="relative w-full min-h-screen bg-persian-blue text-white overflow-x-clip flex flex-col justify-between">
      {/* 12 Columns ShapeGrid Background across entire section */}
      <div
        className="absolute inset-0 z-0 pointer-events-auto"
        aria-hidden="true"
      >
        <ShapeGrid
          numCols={12}
          speed={0}
          borderColor="rgba(255, 255, 255, 0.12)"
          hoverFillColor="rgba(203, 252, 1, 0.14)"
          shape="square"
          hoverTrailAmount={4}
          className="w-full h-full"
        />
      </div>

      {/* Top Header with ByteSpace Logo Vector */}
      <header className="relative z-20 w-11/12 max-w-[1170px] mx-auto pt-6 sm:pt-8 md:pt-10 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center transition-transform hover:scale-105 active:scale-95"
          aria-label="ByteSpace Home"
        >
          <Image
            src="/images/login-vector.png"
            alt="ByteSpace Logo Mark"
            width={48}
            height={56}
            className="w-10 h-12 sm:w-12 sm:h-14 md:w-10 md:h-10 object-contain"
            priority
          />
        </Link>
      </header>

      {/* Main Two-Column Content */}
      <section className="relative z-10 w-11/12 max-w-[1170px] mx-auto my-auto py-8 sm:py-12 lg:py-9 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* Left Column: Heading, Subtitle & Interactive 3D Card Showcase */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          {/* Section Titles */}
          <div className="max-w-[480px] mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-[20px] font-medium font-poppins text-white leading-[1.15] tracking-tight">
              Sign in with ease
            </h1>
            <p className="mt-3.5 text-sm sm:text-[18px] text-white/80 font-satoshi font-light leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you
              instant access to a world of knowledge.
            </p>
          </div>

          {/* Floating Cards & 3D Shapes Showcase Container */}
          <div className="relative mt-4 sm:mt-8 w-full max-w-[500px] lg:max-w-[530px] h-[530px] sm:h-[560px] flex items-center justify-center select-none">
            {/* Top-Left 3D Lime Doughnut */}
            <motion.div
              animate={{
                y: [0, -8, 2, 0],
                rotate: [0, 2, -2, 0],
                scale: [1, 1.03, 0.98, 1],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 left-4 sm:top-3 sm:left-3 z-30 w-24 sm:w-36 pointer-events-none"
            >
              <Image
                src="/images/login-doughnut.png"
                alt="Floating Lime Doughnut 3D Shape"
                width={120}
                height={120}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            {/* Behind Card ("Build Digital Asset") - 373px x 384px */}
            <div
              className="absolute -left-2 sm:left-0 top-16 sm:top-20 z-10 w-[300px] sm:w-[373px] h-[350px] sm:h-[384px] bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 shadow-xl border border-white/60 pointer-events-none flex flex-col justify-between transition-transform"
              aria-hidden="true"
            >
              <div>
                <div className="relative w-full h-[155px] sm:h-[184px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-zinc-100 shrink-0">
                  <Image
                    src="/images/card2.jpg"
                    alt="Build Digital Asset Preview"
                    fill
                    sizes="373px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2.5 left-2.5 z-10">
                    <span className="bg-black/35 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-satoshi px-3 py-1 rounded-full whitespace-nowrap shadow-sm border border-white/10">
                      17 Lessons
                    </span>
                  </div>
                </div>

                <div className="mt-3 sm:mt-3.5">
                  <h3 className="font-poppins font-bold text-base sm:text-lg text-zinc-900 truncate">
                    Build Digit...
                  </h3>
                  <p className="text-xs text-zinc-500 font-satoshi mt-0.5">
                    by{" "}
                    <span className="text-persian-blue font-medium">
                      purepearl studio
                    </span>
                  </p>
                </div>

                <div className="flex items-center justify-start gap-3 mt-3 pt-0.5">
                  <div className="inline-flex items-center gap-1.5 bg-[#F4F4F6] text-zinc-700 px-3 py-1.5 rounded-full text-xs font-satoshi font-medium">
                    <Image
                      src="/images/Vector.png"
                      alt="Level indicator"
                      width={12}
                      height={13}
                      className="w-3 h-3 object-contain"
                    />
                    <span>Beginner</span>
                  </div>

                  <div className="relative inline-flex items-center">
                    <Image
                      src="/images/people2.png"
                      alt="Students stack"
                      width={90}
                      height={20}
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                    <span className="absolute -right-0.5 w-[19px] sm:w-[22px] h-[19px] sm:h-[22px] rounded-full bg-black text-white text-[9px] sm:text-[10px] font-poppins font-bold flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-2.5 flex items-baseline gap-1">
                <span className="font-poppins font-medium text-xl sm:text-2xl text-persian-blue">
                  $25
                </span>
                <span className="text-xs text-zinc-400 font-satoshi">
                  /lifetime
                </span>
              </div>
            </div>

            {/* Front Center Card ("the Power of Big Data") - 373px x 384px */}
            <motion.article
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="absolute z-20 left-10 sm:left-24 top-0 sm:-top-8 w-[300px] sm:w-[373px] h-[350px] sm:h-[384px] bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 shadow-[0_22px_55px_rgba(0,0,0,0.22)] border border-zinc-100 flex flex-col justify-between"
            >
              <div>
                {/* Course Image Wrapper with Frosted Badges Overlay */}
                <div className="relative w-full h-[155px] sm:h-[184px] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-zinc-900 shrink-0">
                  <Image
                    src="/images/card3.jpg"
                    alt="the Power of Big Data course cover"
                    fill
                    sizes="373px"
                    className="object-cover"
                    priority
                  />
                  {/* Frosted Badges Overlaid at Bottom */}
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-1 z-10 pointer-events-none">
                    <span className="bg-black/35 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-satoshi px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-white/10">
                      17 Lessons
                    </span>
                    <span className="bg-black/35 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-satoshi px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-white/10">
                      2 hours 16 mins
                    </span>
                    <span className="bg-black/35 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-satoshi px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-white/10">
                      59 Comments
                    </span>
                  </div>
                </div>

                {/* Card Title & Rating */}
                <div className="flex items-center justify-between mt-3 sm:mt-3.5 gap-2">
                  <h3 className="font-poppins font-bold text-lg sm:text-[19px] text-zinc-900 leading-snug truncate">
                    the Power of Big Data
                  </h3>
                  <div className="flex items-center gap-1 text-sm font-satoshi shrink-0">
                    <span className="font-semibold text-zinc-900">4.5</span>
                    <span className="text-lime text-base leading-none">★</span>
                  </div>
                </div>

                {/* Author Subtitle */}
                <p className="text-xs text-zinc-500 font-satoshi mt-0.5">
                  by{" "}
                  <span className="text-persian-blue font-medium hover:underline cursor-pointer">
                    purepearl studio
                  </span>
                </p>

                {/* Level Badge & Students Avatar Stack */}
                <div className="flex items-center justify-start gap-6 mt-3 pt-0.5">
                  <div className="inline-flex items-center gap-1.5 bg-[#F4F4F6] text-zinc-700 px-3 py-1.5 rounded-full text-xs font-satoshi font-medium">
                    <Image
                      src="/images/Vector.png"
                      alt="Beginner Level icon"
                      width={12}
                      height={13}
                      className="w-3 h-3 object-contain"
                    />
                    <span>Beginner</span>
                  </div>

                  <div className="relative inline-flex items-center">
                    <Image
                      src="/images/people2.png"
                      alt="Enrolled students"
                      width={90}
                      height={20}
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                    <span className="absolute -right-0.5 w-[19px] sm:w-[22px] h-[19px] sm:h-[22px] rounded-full bg-black text-white text-[9px] sm:text-[10px] font-poppins font-bold flex items-center justify-center border-2 border-white">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Line */}
              <div className="mt-2.5 flex items-baseline gap-1">
                <span className="font-poppins font-medium text-xl sm:text-2xl text-persian-blue">
                  $25
                </span>
                <span className="text-xs text-zinc-400 font-satoshi">
                  /lifetime
                </span>
              </div>
            </motion.article>

            {/* Bottom-Left 3D Lime Cone */}
            <motion.div
              animate={{
                y: [0, 8, -2, 0],
                rotate: [0, -2, 1.5, 0],
                scale: [1, 0.98, 1.03, 1],
              }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 sm:bottom-8 sm:left-3 z-30 w-28 sm:w-40 pointer-events-none"
            >
              <Image
                src="/images/login-cone.png"
                alt="Floating Lime Cone 3D Shape"
                width={130}
                height={130}
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Happy Students Floating Lime Card */}
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 right-2 sm:bottom-5 sm:right-16 z-25 bg-lime text-black rounded-[24px] p-4 sm:py-4.5 sm:px-7 shadow-[0_18px_45px_rgba(0,0,0,0.22)] border border-lime/80 min-w-[220px] sm:min-w-[240px]"
            >
              <p className="font-poppins font-normal text-sm sm:text-[15px] text-zinc-950 leading-tight">
                Happy Students
              </p>
              <div className="flex items-center gap-1 text-xs font-satoshi text-zinc-900 font-semibold mt-1">
                <span>4.5</span>
                <span className="text-zinc-700 font-normal">(240)</span>
                <span className="text-persian-blue font-bold text-xs">★</span>
              </div>

              {/* Student Avatars Stack with 2K+ Black Circle */}
              <div className="relative inline-flex items-center mt-3">
                <Image
                  src="/images/people.png"
                  alt="Happy Students Avatars"
                  width={170}
                  height={24}
                  className="h-6 sm:h-10 w-auto object-contain"
                />
                <span className="absolute -right-0.5 w-[22px] sm:w-[26px] h-[22px] sm:h-[26px] rounded-full bg-black text-white text-[9px] sm:text-[10px] font-poppins font-bold flex items-center justify-center border-2 border-lime shadow-sm">
                  2K+
                </span>
              </div>
            </motion.div>

            {/* Mid-Right 3D White Zigzag */}
            <motion.div
              animate={{
                y: [0, -10, 2, 0],
                rotate: [0, -2, 2, 0],
                scale: [1, 1.04, 0.98, 1],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-5 sm:right-7 top-[67%] -translate-y-1/2 z-30 w-16 sm:w-40 pointer-events-none"
            >
              <Image
                src="/images/login-zigzag.png"
                alt="Floating White Zigzag 3D Shape"
                width={90}
                height={90}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Login Form Card exactly matching Figma */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[490px] sm:max-w-[520px] bg-white text-zinc-900 rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.22)] border border-white/60 flex flex-col justify-between">
            <div>
              {/* Card Subheader */}
              <span className="text-persian-blue font-satoshi font-normal text-xs sm:text-sm tracking-wide block">
                Sign In
              </span>

              {/* Main Heading */}
              <h2 className="font-poppins font-semibold text-3xl sm:text-4xl text-zinc-900 mt-2 leading-[1.18] tracking-tight">
                Welcome Back
              </h2>

              {/* Interactive Login Form */}
              <form onSubmit={handleSubmit} className="mt-8 sm:mt-9 space-y-4 sm:space-y-5">
                {/* Email Address Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-satoshi font-medium text-zinc-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="designer@example.com"
                    className="w-full h-11 sm:h-12 px-4 rounded-xl border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-persian-blue/20 focus:border-persian-blue transition-all"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xs sm:text-sm font-satoshi font-medium text-zinc-700 mb-1.5"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="********"
                    className="w-full h-11 sm:h-12 px-4 rounded-xl border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-persian-blue/20 focus:border-persian-blue transition-all"
                  />
                </div>

                {/* Sign In Button Aligned to Right */}
                <div className="flex justify-end pt-2 sm:pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-h-[44px] px-8 sm:px-8 py-2.5 sm:py-3 rounded-full bg-lime hover:brightness-105 active:scale-95 text-black font-poppins font-medium text-sm sm:text-base transition-all shadow-md cursor-pointer flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </form>

              {/* Divider with 'or' */}
              <div className="relative my-7 sm:my-8 flex items-center justify-center">
                <div className="border-t border-zinc-200 w-full" />
                <span className="absolute bg-white px-4 text-xs sm:text-sm font-satoshi text-zinc-400">
                  or
                </span>
              </div>

              {/* Social Login Buttons (Facebook & Google) */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[18px] border border-zinc-200 hover:border-zinc-400 bg-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-[16px] sm:rounded-[18px] border border-zinc-200 hover:border-zinc-400 bg-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Bottom Footer New User Link */}
            <div className="text-center pt-8 sm:pt-10">
              <p className="text-xs sm:text-sm text-zinc-500 font-satoshi">
                New user?{" "}
                <Link
                  href="/signup"
                  className="text-persian-blue hover:underline font-medium min-h-[44px] inline-flex items-center"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacer for balance */}
      <footer className="relative z-10 w-full py-4 text-center text-xs text-white/40 pointer-events-none">
        © {new Date().getFullYear()} ByteSpace. All rights reserved.
      </footer>
    </main>
  );
};

export default LoginPage;
