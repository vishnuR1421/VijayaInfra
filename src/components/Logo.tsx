import React from "react";

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
  variant?: "dark" | "light"; // dark = for light backgrounds (dark text), light = for dark blue backgrounds (white text)
}

export default function Logo({
  showText = true,
  className = "",
  iconSize = 42,
  variant = "dark",
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* High-Fidelity Brand SVG Icon matching the supplied logo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-200"
        aria-label="Vijaya Infrastructures Logo"
      >
        {/* Tiered Building Silhouette - Primary Blue & Deep Blue */}
        {/* Left tier */}
        <path d="M22 80 L22 46 L28 40 L28 80 Z" fill="#01477A" />
        {/* Middle tier */}
        <path d="M28 80 L28 32 L36 24 L36 80 Z" fill="#006997" />
        {/* Main Skyscraper Tower */}
        <path d="M36 80 L36 14 L46 6 L46 80 Z" fill="#0098DA" />

        {/* Windows inside the main tower */}
        <rect x="39" y="22" width="3" height="5" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="34" width="3" height="5" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="46" width="3" height="5" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="58" width="3" height="5" fill="#FFFFFF" opacity="0.9" />

        {/* Ground foundation lines */}
        <path d="M12 84 L46 84 L40 82 L15 82 Z" fill="#F96A02" />
        <path d="M46 84 L88 84 L80 82 L50 82 Z" fill="#006997" />

        {/* Left blue arm of the 'V' */}
        <path d="M15 54 L39 82 L47 82 L21 50 Z" fill="#006997" />

        {/* Inner Golden Arrow of the right arm */}
        <path d="M39 82 L65 42 L69 46 L43 85 Z" fill="#FFCC29" />

        {/* Main Vibrant Brand Orange Arrow */}
        <path
          d="M43 83 L76 34 L71 29 L87 28 L85 44 L80 39 L47 86 Z"
          fill="#F96A02"
        />
      </svg>

      {/* Corporate Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`text-xl font-black tracking-tight leading-none font-manrope ${
              isLight ? "text-white" : "text-[#01477A]"
            }`}
          >
            VIJAYA
          </span>
          <span
            className={`text-[9px] tracking-[0.22em] font-extrabold uppercase leading-none mt-1 ${
              isLight ? "text-slate-200" : "text-[#1E293B]"
            }`}
          >
            INFRASTRUCTURES
          </span>
          <span
            className={`text-[7.5px] tracking-[0.26em] font-bold uppercase leading-none mt-0.5 ${
              isLight ? "text-slate-300" : "text-slate-600"
            }`}
          >
            PRIVATE LIMITED
          </span>
        </div>
      )}
    </div>
  );
}
