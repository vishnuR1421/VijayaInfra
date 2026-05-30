"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import Logo from "@/components/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Cost Estimator", href: "#estimator" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-navbar py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group block">
          <Logo lightText={true} iconSize={36} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold-accent transition-colors duration-300 relative py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#estimator"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-transparent border border-gold-accent/30 text-gold-accent text-sm font-semibold hover:bg-gold-accent hover:text-dark-obsidian hover:border-gold-accent transition-all duration-300 group shadow-lg shadow-gold-accent/5"
          >
            Get Free Quote
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] bg-dark-obsidian/95 backdrop-blur-lg z-40 md:hidden animate-fade-in-up">
          <nav className="flex flex-col items-center justify-center h-[calc(100vh-120px)] gap-8 px-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-slate-200 hover:text-gold-accent transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#estimator"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center gap-1.5 px-8 py-3.5 rounded-full bg-gold-accent text-dark-obsidian font-bold text-lg hover:bg-white hover:text-dark-obsidian transition-all duration-300 group"
            >
              Get Free Quote
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            
            <div className="absolute bottom-10 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-accent" />
              <span>CIN: U43299TS2025PTC208519</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
