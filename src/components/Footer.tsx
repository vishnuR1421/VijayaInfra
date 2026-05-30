"use client";

import { ShieldCheck, ArrowUpCircle, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-20 pb-12 overflow-hidden">
      {/* Subtle bottom grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo lightText={true} iconSize={34} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Vijaya Infrastructures Private Limited is a specialized turnkey engineering and interior execution company handling civil block erections, high-street showroom fit-outs, and custom home claddings across South India.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800 w-fit text-[10px] text-slate-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-accent shrink-0" />
              <span>CIN: U43299TS2025PTC208519</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Navigation</h4>
            <nav className="flex flex-col gap-2">
              <a href="#services" className="text-xs text-slate-400 hover:text-gold-accent transition-colors">Core Services</a>
              <a href="#portfolio" className="text-xs text-slate-400 hover:text-gold-accent transition-colors">Turnkey Portfolio</a>
              <a href="#estimator" className="text-xs text-slate-400 hover:text-gold-accent transition-colors">Smart Estimator</a>
            </nav>
          </div>

          {/* Group Division Col */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Board & Directors</h4>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-200 font-bold">Ramya Sree Devireddy</span>
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Managing Director</span>
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-xs text-slate-200 font-bold">Vishnuvardhan Reddy Palagiri</span>
                <span className="text-[9px] text-slate-500 font-semibold uppercase">Director & Co-founder</span>
              </div>
              <div className="flex flex-col mt-2 pt-2 border-t border-slate-900">
                <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
                  Active South India Operations <ExternalLink className="w-3 h-3 text-slate-600" />
                </span>
                <span className="text-[9px] text-slate-500 mt-0.5">Telangana • Andhra Pradesh • Karnataka • Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Legal / Coverage Col */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Corporate Credentials</h4>
            <div className="flex flex-col gap-2.5 text-xs text-slate-400 leading-relaxed">
              <p>
                Originated from <span className="text-slate-200 font-semibold">Vijaya Constructions</span> (Active since 2015), our structure handles large-scale brand contracts and rapid commercial rollouts.
              </p>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col gap-1">
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider leading-none">GSTIN Registry</span>
                <span className="text-[11px] text-slate-300 font-bold leading-normal uppercase">GST Registered Firm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-8 text-[11px] text-slate-500 font-medium">
          <div>
            © {new Date().getFullYear()} Vijaya Infrastructures Private Limited. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-accent transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-[10px] uppercase font-bold text-slate-400 border border-slate-800 rounded-full px-3 py-1.5 bg-slate-900/40"
            >
              <span>Back to Top</span>
              <ArrowUpCircle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
