import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/company";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 luminous-hero-bg text-white relative overflow-hidden border-t border-white/10">
      {/* Luminous Ambient Light Orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#00B4D8]/22 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-[500px] h-[500px] rounded-full bg-[#F96A02]/18 blur-[140px] pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 engineering-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold uppercase tracking-wider text-[#F96A02] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>START A COMMERCIAL DISCUSSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 drop-shadow-md">
            <span className="text-white block">Planning Your Next</span>
            <span className="text-[#F96A02] block mt-1">Commercial Project?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8">
            Share your project scope, location and timeline with our team. We deliver turnkey
            clarity, fast-track scheduling, and certified engineering execution across South India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="btn-primary text-sm uppercase tracking-wider font-bold px-8 py-4 w-full sm:w-auto shadow-lg"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${COMPANY_DETAILS.phones[0]}`}
              className="btn-secondary-white text-sm uppercase tracking-wider font-bold px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>+91 {COMPANY_DETAILS.phones[0]}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-8 border-t border-white/15 text-xs text-slate-200">
            <div className="flex items-center justify-center gap-2 glass-pill px-4 py-3 rounded-xl">
              <Mail className="w-4 h-4 text-[#F96A02]" />
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white font-medium">
                {COMPANY_DETAILS.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 glass-pill px-4 py-3 rounded-xl font-medium">
              <MapPin className="w-4 h-4 text-[#F96A02]" />
              <span>Nizampet, Hyderabad</span>
            </div>
            <div className="flex items-center justify-center gap-2 glass-pill px-4 py-3 rounded-xl font-medium">
              <ShieldCheck className="w-4 h-4 text-[#F96A02]" />
              <span>South India Turnkey Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
