"use client";

import React, { useState } from "react";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "919908942120";
  const defaultMessage = encodeURIComponent(
    "Hello Vijaya Infrastructures, I would like to inquire about a project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Tooltip / Label */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-xs font-semibold text-slate-800 transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vijaya Infrastructures on WhatsApp Business (+91 99089 42120)"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/40 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        {/* Subtle Ambient Pulse Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <span className="absolute -inset-2 rounded-full bg-[#25D366]/20 animate-pulse pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 relative z-10 fill-current drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.216 8.216 0 0 1-1.26-4.47c0-4.54 3.7-8.24 8.24-8.24zm-3.53 4.4c-.19 0-.42.07-.64.32-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.13.17 1.72 2.68 4.23 3.74.6.25 1.07.4 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.17-.49-.3-.26-.13-1.49-.74-1.72-.82-.23-.09-.4-.13-.57.13-.17.26-.66.82-.81.99-.15.17-.3.19-.56.07-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.28-1.53-1.43-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.57-1.37-.78-1.88-.2-.49-.4-.43-.57-.44l-.49-.01z" />
        </svg>
      </a>
    </aside>
  );
}
