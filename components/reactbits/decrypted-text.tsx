"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover";
  revealDirection?: "start" | "end" | "center";
}

export const DecryptedText = ({
  text,
  speed = 40,
  maxIterations = 10,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-[#CBFC01]",
  animateOn = "hover",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    let iteration = 0;
    setIsScrambling(true);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (iteration > index * (maxIterations / text.length)) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join(""),
      );

      iteration += 1;

      if (iteration >= maxIterations + text.length) {
        setIsScrambling(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, speed);
  }, [text, speed, maxIterations, characters]);

  const stopScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsScrambling(false);
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (animateOn === "view") {
      timer = setTimeout(() => {
        startScramble();
      }, 50);
    }
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [animateOn, startScramble]);

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      startScramble();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      stopScramble();
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("inline-block cursor-pointer", parentClassName)}
    >
      <span className={cn(className, isScrambling && encryptedClassName)}>
        {displayText}
      </span>
    </span>
  );
};
