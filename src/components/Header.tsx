"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import { CORE_SERVICES, COMPANY_DETAILS } from "@/data/company";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Residential Interiors", href: "/services/residential-interiors" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3.5 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 rounded-2xl pointer-events-auto transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? "floating-glass-nav-scrolled py-2 sm:py-2.5 shadow-xl"
            : "floating-glass-nav py-3 sm:py-3.5 shadow-lg"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="group block focus:outline-none shrink-0">
          <Logo variant="dark" iconSize={38} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesDropdown(true)}
                  onMouseLeave={() => setServicesDropdown(false)}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-semibold flex items-center gap-1 py-1.5 transition-colors duration-150 ${
                      isActive ? "text-[#006997]" : "text-[#373435] hover:text-[#006997]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        servicesDropdown ? "rotate-180 text-[#006997]" : "text-slate-400"
                      }`}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdown && (
                    <div className="absolute top-full left-0 w-72 pt-2 z-50">
                      <div className="bg-white/85 backdrop-blur-2xl rounded-xl shadow-2xl border border-white/80 py-2 overflow-hidden animate-in fade-in-50 duration-150">
                        <div className="px-4 py-2 border-b border-slate-100/80 bg-white/40">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#01477A]">
                            Core Capabilities
                          </span>
                        </div>
                        {CORE_SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2.5 text-xs text-slate-700 hover:bg-white/60 hover:text-[#006997] transition-colors"
                          >
                            <span className="font-semibold block text-slate-900">
                              {service.shortTitle}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-1">
                              {service.tagline}
                            </span>
                          </Link>
                        ))}
                        <div className="p-2 border-t border-slate-100/80 bg-white/30">
                          <Link
                            href="/services"
                            className="flex items-center justify-between text-xs font-bold text-[#006997] px-2 py-1 hover:underline"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 relative py-1.5 ${
                  isActive ? "text-[#006997]" : "text-[#373435] hover:text-[#006997]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#006997] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-primary text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#01477A] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-x-3 sm:inset-x-6 top-20 bg-white/85 backdrop-blur-2xl rounded-2xl z-40 lg:hidden overflow-y-auto max-h-[80vh] pb-8 border border-white/80 shadow-2xl pointer-events-auto">
          <nav className="flex flex-col px-6 py-6 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.name} className="flex flex-col border-b border-slate-100 pb-2">
                  <Link
                    href={link.href}
                    className={`text-base font-bold py-2 flex items-center justify-between ${
                      isActive ? "text-[#006997]" : "text-[#373435]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </Link>

                  {link.hasDropdown && (
                    <div className="pl-4 py-1 flex flex-col gap-2 bg-slate-50 rounded-md my-1">
                      {CORE_SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className="text-xs font-semibold text-slate-600 hover:text-[#006997] py-1"
                        >
                          • {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm uppercase tracking-wider font-bold"
              >
                Discuss Your Project
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phones[0]}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-[#006997]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.phones[0]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Corporate HQ
                </span>
                <span className="text-xs text-slate-700 mt-1 block">
                  Nizampet, Hyderabad • South India Operations
                </span>
                <span className="text-[10px] text-slate-500 mt-1 block font-mono">
                  CIN: {COMPANY_DETAILS.cin}
                </span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
