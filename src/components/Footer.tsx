"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { COMPANY_DETAILS, CORE_SERVICES } from "@/data/company";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#01477A] text-white pt-16 pb-12 border-t border-[#006997]/40 relative overflow-hidden">
      {/* Subtle blueprint grid overlay */}
      <div className="absolute inset-0 engineering-grid-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Corporate Overview (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Logo variant="light" iconSize={38} />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Vijaya Infrastructures Private Limited is a turnkey contracting company specializing in
              commercial fit-outs, retail store execution, electrical installations, ACP & glass facade
              works, and residential interiors across South India.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">Origin:</span>
                <span className="text-white font-medium">Vijaya Constructions (Since 2015)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">CIN:</span>
                <span className="font-mono text-white">{COMPANY_DETAILS.cin}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-semibold">GSTIN:</span>
                <span className="font-mono text-white">{COMPANY_DETAILS.gstin}</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F96A02]">
              Site Navigation
            </h4>
            <nav className="flex flex-col gap-2.5 text-xs text-slate-300">
              <Link href="/" className="hover:text-white hover:underline transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-white hover:underline transition-colors">
                About Company
              </Link>
              <Link href="/services" className="hover:text-white hover:underline transition-colors">
                Core Services
              </Link>
              <Link href="/projects" className="hover:text-white hover:underline transition-colors">
                Projects Portfolio
              </Link>
              <Link href="/capabilities" className="hover:text-white hover:underline transition-colors">
                Capabilities
              </Link>
              <Link href="/design-nest" className="hover:text-white hover:underline transition-colors">
                Design Nest Interiors
              </Link>
              <a
                href={COMPANY_DETAILS.designNestWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-[#F96A02]"
              >
                <span>designnestinteriors.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={COMPANY_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline transition-colors flex items-center gap-1 text-[#F96A02]"
              >
                <span>{COMPANY_DETAILS.instagram}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                Contact & Enquiries
              </Link>
            </nav>
          </div>

          {/* Services Links (Col 7-9) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F96A02]">
              Core Disciplines
            </h4>
            <nav className="flex flex-col gap-2 text-xs text-slate-300">
              {CORE_SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="hover:text-white hover:underline transition-colors flex items-start gap-1.5"
                >
                  <span className="text-[#0098DA] mt-0.5">•</span>
                  <span>{service.shortTitle}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-2 pt-3 border-t border-white/10">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                Regional Coverage
              </span>
              <span className="text-xs text-white font-medium">
                Telangana • Andhra Pradesh • Karnataka • Tamil Nadu
              </span>
            </div>
          </div>

          {/* Registered Office & Contact (Col 10-12) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F96A02]">
              Registered Office
            </h4>
            <div className="flex flex-col gap-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F96A02] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_DETAILS.address.line1},<br />
                  {COMPANY_DETAILS.address.area}, {COMPANY_DETAILS.address.city},<br />
                  {COMPANY_DETAILS.address.district},<br />
                  {COMPANY_DETAILS.address.state} – {COMPANY_DETAILS.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#F96A02] shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${COMPANY_DETAILS.phones[0]}`} className="hover:text-white">
                    +91 {COMPANY_DETAILS.phones[0]}
                  </a>
                  <a href={`tel:${COMPANY_DETAILS.phones[1]}`} className="hover:text-white">
                    +91 {COMPANY_DETAILS.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F96A02] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Vijaya Infrastructures Private Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F96A02]" />
              <span>Registered Corporate Entity</span>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer bg-white/10 px-3 py-1.5 rounded"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
