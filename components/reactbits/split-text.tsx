"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

export const SplitText = ({
  text,
  className = "",
  delay = 50,
  animationFrom = { opacity: 0, transform: "translate3d(0,40px,0)" },
  animationTo = { opacity: 1, transform: "translate3d(0,0,0)" },
  textAlign = "center",
}: SplitTextProps) => {
  const words = text.split(" ");

  return (
    <p
      className={cn("inline-block overflow-hidden", className)}
      style={{ textAlign, whiteSpace: "normal", wordWrap: "break-word" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.25em]"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={animationFrom}
              animate={animationTo}
              transition={{
                duration: 0.5,
                delay: (wordIndex * 5 + charIndex) * (delay / 1000),
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </p>
  );
};
