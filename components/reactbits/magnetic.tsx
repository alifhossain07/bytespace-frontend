"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: React.ReactElement<{ className?: string; ref?: React.Ref<HTMLElement> }>;
  strength?: number;
  className?: string;
}

export const Magnetic = ({
  children,
  strength = 0.35,
  className,
}: MagneticProps) => {
  const magneticRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = magneticRef.current;
      if (!el) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;

        gsap.to(el, {
          x,
          y,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.3)",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: magneticRef },
  );

  return (
    <div ref={magneticRef} className={cn("inline-block", className)}>
      {children}
    </div>
  );
};
