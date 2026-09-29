import React from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/sarah.png",
    review:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/james.png",
    review:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/alex.png",
    review:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      aria-label="Community Testimonials"
      className="relative w-full bg-[#FAFAFA] text-zinc-900 py-16 sm:py-20 lg:py-0 lg:h-[784px] flex flex-col justify-center overflow-hidden select-none"
    >
      {/* Background Gradient Eclipses (as per Figma specification: 784px height) */}

      {/* 1. Top-Center Green Glow */}
      <div className="absolute -top-32 sm:top-[-6%] left-[30%] sm:left-[25%] pointer-events-none select-none z-0 opacity-80 sm:opacity-90 max-w-none">
        <Image
          src="/images/top-center-eclipse-green.png"
          alt=""
          width={752}
          height={574}
          priority={false}
          className="w-[500px] sm:w-[650px] lg:w-[752px] h-auto object-contain"
        />
      </div>

      {/* 2. Right-Center Green Glow (784px height matching section) */}
      <div className="absolute top-0 -right-24 sm:-right-5 pointer-events-none select-none z-0  max-w-none h-full">
        <Image
          src="/images/right-center-eclipse-green.png"
          alt=""
          width={638}
          height={784}
          priority={false}
          className="w-[450px] sm:w-[580px] lg:w-[638px] h-full object-contain"
        />
      </div>

      {/* 3. Bottom-Left Blue Glow */}
      <div className="absolute -bottom-28 sm:-bottom-0 -left-28 sm:-left-0 pointer-events-none select-none z-0 max-w-none">
        <Image
          src="/images/bottom-left-eclipse-blue.png"
          alt=""
          width={735}
          height={675}
          priority={false}
          className="w-[500px] sm:w-[650px] lg:w-[735px] h-auto object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-11/12 max-w-[1170px] mx-auto">
        {/* Header: Title (44px) & Subtitle (18px) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-end justify-between">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold font-poppins text-zinc-900 tracking-tight leading-[1.16]">
              Discover What Our
              <br className="hidden sm:inline" /> Community Is Saying
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-base sm:text-[18px] text-zinc-500 font-satoshi font-normal leading-relaxed">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid (Gap between header and cards is controlled here via mt-10 / mt-12) */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-[24px]  p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 w-full max-w-[374px] lg:w-[374px] h-auto lg:h-[432px] flex flex-col justify-start"
            >
              {/* Reviewer Avatar */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0 select-none">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Reviewer Name (20px) & Designation (18px) */}
              <div className="mt-4">
                <h3 className="text-[20px] font-semibold font-poppins text-zinc-900 leading-snug">
                  {item.name}
                </h3>
                <p className="text-base sm:text-[18px] text-persian-blue font-satoshi font-normal mt-0.5">
                  {item.role}
                </p>
              </div>

              {/* Review Quote (18px) */}
              <p className="mt-6 text-sm sm:text-base lg:text-[18px] text-zinc-600 font-satoshi font-normal leading-relaxed">
                {item.review}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
