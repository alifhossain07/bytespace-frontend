"use client";

import React from "react";
import Image from "next/image";
import { FoldText } from "@/components/reactbits/fold-text";

interface Category {
  title: string;
  icon: string;
}

const categories: Category[] = [
  {
    title: "Design",
    icon: "/images/design.png",
  },
  {
    title: "Development",
    icon: "/images/development.png",
  },
  {
    title: "IT & Software",
    icon: "/images/itsoftware.png",
  },
  {
    title: "Business",
    icon: "/images/business.png",
  },
  {
    title: "Marketing",
    icon: "/images/marketing.png",
  },
  {
    title: "Photography",
    icon: "/images/photography.png",
  },
];

export const LearningPaths = () => {
  return (
    <section
      id="learning-paths"
      aria-labelledby="learning-paths-heading"
      className="w-full bg-white text-zinc-900 py-16 sm:py-20 md:py-2 md:pb-24"
    >
      <div className="w-11/12 max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto">
          <h2
            id="learning-paths-heading"
            className="text-3xl sm:text-4xl md:text-4xl font-semibold font-poppins text-zinc-900 tracking-tight leading-[1.15]"
          >
            <FoldText
              text="Explore Diverse Learning Paths at Bytespace"
              splitBy="char"
              hinge="top"
              trigger="scroll"
              duration={0.65}
              stagger={0.02}
              ease="power3.out"
            />
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500  font-satoshi max-w-4xl mx-auto font-normal leading-relaxed">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring theres something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* Categories 6 Boxes  */}
        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="group w-[167px] h-[167px] rounded-[24px] border border-zinc-200 bg-white flex flex-col items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-md transition-all duration-300 cursor-pointer select-none"
            >
              {/* Icon (60x60px) */}
              <div className="relative w-[60px] h-[60px] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={cat.icon}
                  alt={`${cat.title} category icon`}
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>

              {/* Title below icon (20px) */}
              <h3 className="mt-3.5 text-[18px] font-normal font-poppins text-zinc-900 leading-snug group-hover:text-persian-blue transition-colors text-center px-2">
                {cat.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
