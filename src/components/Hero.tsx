"use" + " client";

import { ArrowRight, Shield, Award, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-dark-obsidian">
      {/* Background Image with Premium Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-[10000ms] ease-out animate-pulse-slow"
          style={{ backgroundImage: "url('/hero_building.png')" }}
        />
        {/* Obsidian Glass Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-obsidian via-dark-obsidian/80 to-dark-obsidian/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-obsidian via-dark-obsidian/60 to-transparent" />
        
        {/* Subtle grid lines for high-tech construction vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
        {/* Text Block */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-[11px] font-bold uppercase tracking-wider text-gold-accent shadow-sm shadow-gold-accent/10 border-gold-accent/20">
            <Award className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Interiors</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Constructing Legacies. <br />
            <span className="text-gradient-gold">Crafting Spaces.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
            Vijaya Infrastructures is South India’s premier turnkey contracting partner. 
            We specialize in ultra-fast, high-precision retail rollouts, robust civil construction, 
            and premium interior architectures built on a solid decade of engineering mastery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
            <a
              href="#estimator"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold-accent text-dark-obsidian font-bold text-base hover:bg-white transition-all duration-300 shadow-xl shadow-gold-accent/10 hover:shadow-white/10 group"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-white font-medium text-base hover:bg-slate-800 transition-all duration-300 glass-panel"
            >
              Explore Our Work
            </a>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-800/80 w-full text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold-accent" />
              <span>Headquartered in Hyderabad</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <span>Serving All South India</span>
          </div>

        </div>

        {/* Floating Interactive Widget Column */}
        <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 relative">
          
          {/* Main Floating Card */}
          <div className="glass-panel p-6 rounded-2xl border-white/5 relative z-10 shadow-2xl shadow-black/40 hover:-translate-y-1 transition-all duration-500 group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold-accent/5 to-transparent rounded-tr-2xl pointer-events-none" />
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gold-accent/10 border border-gold-accent/20 text-gold-accent group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg mb-1">Elite Execution Standards</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every project adheres strictly to mall compliance guidelines, strict structural standards, and brand identity specifications.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800/60">
              <div>
                <span className="block text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-300">20+</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Stores Delivered</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white group-hover:text-gold-accent transition-colors duration-300">30 Days</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Avg. Completion Time</span>
              </div>
            </div>
          </div>

          {/* Decorative mini cards to stack depth */}
          <div className="glass-panel py-3 px-5 rounded-xl border-white/5 flex items-center justify-between shadow-xl self-end -mr-6 w-72 hover:-translate-y-0.5 transition-transform duration-300">
            <span className="text-xs font-semibold text-slate-400">Fastest Turnkey Delivery</span>
            <span className="text-xs font-bold text-gold-accent px-2 py-0.5 rounded-full bg-gold-accent/10 border border-gold-accent/20">23 Days</span>
          </div>

          <div className="glass-panel py-3 px-5 rounded-xl border-white/5 flex items-center justify-between shadow-xl self-start -ml-6 w-72 hover:-translate-y-0.5 transition-transform duration-300">
            <span className="text-xs font-semibold text-slate-400">Single Largest Store Executed</span>
            <span className="text-xs font-bold text-brand-blue px-2 py-0.5 rounded-full bg-brand-blue/10 border border-brand-blue/20">~14,000 Sq Ft</span>
          </div>

        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-gold-accent transition-colors duration-300 pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest font-bold">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border border-slate-700 flex justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-gold-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
