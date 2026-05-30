import React from "react";

interface LogoProps {
  showText?: boolean;
  className?: string;
  iconSize?: number;
  lightText?: boolean;
}

export default function Logo({ 
  showText = true, 
  className = "", 
  iconSize = 38,
  lightText = true
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* High-Fidelity Brand SVG Icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md hover:scale-105 transition-transform duration-300"
      >
        {/* Tiered Building Silhouette - Blue & White */}
        {/* Left tier */}
        <path d="M22 80 L22 46 L28 40 L28 80 Z" fill="#005B8F" opacity="0.85" />
        {/* Middle tier */}
        <path d="M28 80 L28 32 L36 24 L36 80 Z" fill="#006EA6" opacity="0.9" />
        {/* Main Skyscraper Tower */}
        <path d="M36 80 L36 16 L46 8 L46 80 Z" fill="#006EA6" />
        
        {/* Windows inside the main tower */}
        <rect x="39" y="24" width="3" height="6" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="36" width="3" height="6" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="48" width="3" height="6" fill="#FFFFFF" opacity="0.9" />
        <rect x="39" y="60" width="3" height="6" fill="#FFFFFF" opacity="0.9" />

        {/* The Stylized "V" Chevron Base (Bottom arrows/slopes) */}
        <path d="M12 84 L46 84 L40 82 L15 82 Z" fill="#F37021" />
        <path d="M46 84 L88 84 L80 82 L50 82 Z" fill="#006EA6" />

        {/* Left blue arm of the "V" */}
        <path 
          d="M15 54 L39 82 L47 82 L21 50 Z" 
          fill="#006EA6" 
          className="drop-shadow-sm" 
        />
        
        {/* Inner Golden Arrow of the right arm */}
        <path 
          d="M39 82 L65 42 L69 46 L43 85 Z" 
          fill="#FDB813" 
        />

        {/* Main Vibrant Orange Arrow (Right arm of the V) */}
        {/* Shaft & Head of the arrow pointing top-right */}
        <path 
          d="M43 83 L76 34 L71 29 L86 28 L84 43 L79 38 L47 86 Z" 
          fill="#F37021" 
          className="drop-shadow-md"
        />
      </svg>

      {/* Corporate Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <span 
            className={`text-lg font-black tracking-tight leading-none transition-colors duration-300 font-sans ${
              lightText ? "text-white hover:text-brand-orange" : "text-slate-900 hover:text-brand-blue"
            }`}
          >
            VIJAYA
          </span>
          <span 
            className={`text-[9px] tracking-widest font-black uppercase leading-none mt-1 ${
              lightText ? "text-slate-400" : "text-slate-650"
            }`}
          >
            Infrastructures
          </span>
        </div>
      )}
    </div>
  );
}
