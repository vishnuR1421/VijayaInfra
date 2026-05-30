"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-up" | "beam-rise" | "facade-slide" | "blueprint-draw";
  delay?: number; // millisecond delay
  duration?: number; // millisecond duration
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 1000,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Keep revealed so animation doesn't jitter on reverse scroll
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -60px 0px", // Trigger slightly before it rolls fully in
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getVariantStyles = () => {
    switch (variant) {
      case "fade-up":
        return {
          initial: "opacity-0 translate-y-12 scale-[0.985] blur-[1px]",
          revealed: "opacity-100 translate-y-0 scale-100 blur-0",
        };
      case "beam-rise":
        return {
          initial: "opacity-0 translate-y-24 skew-y-2 origin-bottom",
          revealed: "opacity-100 translate-y-0 skew-y-0 origin-bottom",
        };
      case "facade-slide":
        return {
          initial: "opacity-0 [clip-path:inset(100%_0_0_0)] scale-102",
          revealed: "opacity-100 [clip-path:inset(0_0_0_0)] scale-100",
        };
      case "blueprint-draw":
        return {
          initial: "opacity-0 [clip-path:inset(0_100%_0_0)]",
          revealed: "opacity-100 [clip-path:inset(0_0_0_0)]",
        };
      default:
        return {
          initial: "opacity-0 translate-y-8",
          revealed: "opacity-100 translate-y-0",
        };
    }
  };

  const { initial, revealed } = getVariantStyles();

  return (
    <div
      ref={ref}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${
        isRevealed ? revealed : initial
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: "transform, opacity, clip-path",
      }}
    >
      {children}
    </div>
  );
}
