"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoMarquee = () => {
  const logos = [
    { src: "/images/logoipsum1.png", alt: "Logoipsum 1" },
    { src: "/images/logoipsum2.png", alt: "Logoipsum 2" },
    { src: "/images/logoipsum3.png", alt: "Logoipsum 3" },
    { src: "/images/logoipsum4.png", alt: "Logoipsum 4" },
  ];

  // Repeat the array 4 times to ensure seamless infinite looping across any wide screen
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section
      aria-label="Partner Brands"
      className="w-full bg-[#F5F5F6] py-8 sm:py-10 md:py-16 overflow-hidden border-y border-zinc-200/60"
    >
      <div className="relative w-11/12 mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex w-max items-center gap-12 sm:gap-20 md:gap-28"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 18,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center shrink-0 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={40}
                className="h-6 sm:h-7 md:h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
