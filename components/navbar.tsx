"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "#courses" },
    { label: "Creators", href: "#creators" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-30 w-full bg-transparent">
      {/* 10/12 width container as requested */}
      <div className="w-10/12 max-w-[1360px] mx-auto h-20 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label="ByteSpace Home"
        >
          <Image
            src="/images/Header_Logo.png"
            alt="ByteSpace Logo"
            width={140}
            height={34}
            className="h-7 sm:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Desktop Navigation"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-white/90 hover:text-white font-satoshi text-sm sm:text-lg font-normal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth and Actions */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href="/signin"
            className="text-white/90 hover:text-white font-satoshi text-sm sm:text-lg font-normal transition-colors min-h-[44px] inline-flex items-center"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-white/90 hover:text-white font-satoshi text-sm sm:text-lg font-normal transition-colors min-h-[44px] inline-flex items-center"
          >
            Join Us
          </Link>
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 text-white hover:opacity-80 transition-opacity"
            aria-label="View Shopping Cart"
          >
            <Image
              src="/images/cart.png"
              alt="Cart"
              width={20}
              height={20}
              className="w-7 h-7 object-contain  brightness-200"
            />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-2 text-white"
            aria-label="View Shopping Cart"
          >
            <Image
              src="/images/cart.png"
              alt="Cart"
              width={20}
              height={20}
              className="w-6 h-6 object-contain  brightness-200"
            />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-white p-2"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-persian-blue/95 border-t border-white/10 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-md">
          <nav
            aria-label="Mobile Navigation"
            className="flex flex-col space-y-3"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-base font-satoshi py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
              <Link
                href="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white font-satoshi py-2"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-lime text-black font-poppins font-semibold text-center rounded-full py-3"
              >
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
