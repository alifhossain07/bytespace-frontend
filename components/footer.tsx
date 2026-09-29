"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const col1 = [
    { label: "Featured Courses", href: "#courses" },
    { label: "Featured Categories", href: "#learning-paths" },
    { label: "Business", href: "#" },
    { label: "IT", href: "#" },
    { label: "Design", href: "#" },
  ];

  const col2 = [
    { label: "Development", href: "#" },
    { label: "Marketing", href: "#" },
    { label: "Photography", href: "#" },
    { label: "Finance", href: "#" },
    { label: "Sport", href: "#" },
  ];

  const col3 = [
    { label: "Become a Creator", href: "#" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ];

  return (
    <footer className="w-full bg-white text-zinc-900 pt-16 sm:pt-20 pb-10">
      <div className="w-11/12 max-w-[1360px] mx-auto">
        {/* Top Section: Newsletter (Left) & Nav Links (Right) */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="max-w-md">
            {/* Footer Logo (Lime icon + Black ByteSpace text) */}
            <Link href="/" className="inline-block" aria-label="ByteSpace Home">
              <Image
                src="/images/Footer_Logo.png"
                alt="ByteSpace Logo"
                width={140}
                height={34}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm sm:text-base text-zinc-600 font-satoshi leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email form pill + Search button pill */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-row items-center gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email for newsletter"
                className="w-full sm:w-[280px] h-[48px] px-6 rounded-full border border-zinc-200 text-sm font-satoshi text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
              />
              <button
                type="submit"
                className="h-[48px] px-7 rounded-full bg-lime text-black font-semibold font-poppins text-sm hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap shadow-sm shrink-0"
              >
                Search
              </button>
            </form>

            <p className="mt-3 text-[11px] sm:text-xs text-zinc-500 font-satoshi leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Navigation Link Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-24">
            {/* Column 1 */}
            <ul className="flex flex-col space-y-3.5 sm:space-y-4">
              {col1.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-zinc-700 font-satoshi hover:text-persian-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="flex flex-col space-y-3.5 sm:space-y-4">
              {col2.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-zinc-700 font-satoshi hover:text-persian-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="flex flex-col space-y-3.5 sm:space-y-4">
              {col3.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-zinc-700 font-satoshi hover:text-persian-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full border-t border-zinc-200 mt-14 sm:mt-20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs sm:text-sm text-zinc-500 font-satoshi">
            @ 2023 ByteSpace. All rights reserved.
          </p>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-500 font-satoshi">
            <Link href="/privacy" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">
              Terms of Service
            </Link>
            <button
              type="button"
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Cookies Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
