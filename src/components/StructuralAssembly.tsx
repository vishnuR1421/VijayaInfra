"use client";

import { useEffect, useRef, useState } from "react";
import { Hammer, ShieldCheck, ChevronDown, Sparkles, Paintbrush, Layers, Edit } from "lucide-react";

export default function StructuralAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate scroll progress based on viewport height and short 120vh parent track
      const scrollTop = -rect.top;
      const scrollHeight = rect.height - window.innerHeight;
      
      if (scrollHeight > 0) {
        let progress = scrollTop / scrollHeight;
        progress = Math.max(0, Math.min(1, progress)); // clamp between 0 and 1
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine active stage based on scroll progress (0 to 1)
  const getActiveStage = () => {
    if (scrollProgress < 0.15) return 0; // Stage 1: Plan 1st
    if (scrollProgress < 0.35) return 1; // Stage 2: Base Setup
    if (scrollProgress < 0.55) return 2; // Stage 3: Pillers
    if (scrollProgress < 0.70) return 3; // Stage 4: Concretes
    if (scrollProgress < 0.85) return 4; // Stage 5: Painting
    return 5; // Stage 6: Finishing
  };

  const activeStageIdx = getActiveStage();

  const stages = [
    {
      num: "01",
      title: "PLAN 1ST: ARCHITECTURAL BLUEPRINTS",
      subtitle: "3D CAD Drafting & Site Layout",
      tagline: "Plotting structural wireframes",
      description: "Generating precision digital blueprints and layout configurations. Establishes core dimensions, load tolerances, and spatial planning skeletons in 3D space.",
      icon: <Edit className="w-4 h-4 text-cyan-400" />,
      color: "text-cyan-400",
    },
    {
      num: "02",
      title: "BASE SETUP: FOUNDATION BEDROCK",
      subtitle: "RCC Concrete Slab Casting",
      tagline: "Securing Ground Bedrocks",
      description: "Pouring double-layered reinforced concrete foundation slabs. Distributes building weight and anchors the structure against horizontal seismic shifts.",
      icon: <Hammer className="w-4 h-4 text-amber-500" />,
      color: "text-amber-400",
    },
    {
      num: "03",
      title: "PILLERS: HIGH-TENSILE COLUMNS",
      subtitle: "Skeletal Column Configurations",
      tagline: "Erecting Vertical Column Skeletals",
      description: "Raising high-tensile steel support columns and horizontal girder skeletons to support loading points, leaving wide open spans for commercial layouts.",
      icon: <Layers className="w-4 h-4 text-sky-400" />,
      color: "text-sky-400",
    },
    {
      num: "04",
      title: "CONCRETES: FLOOR DECKS & WALLS",
      subtitle: "Multi-Story Concrete Castings",
      tagline: "Stacking Concrete Slabs",
      description: "Laying metal profile decks and casting concrete floor plates and internal block walls to create insulated, fireproof modular structures.",
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      color: "text-indigo-400",
    },
    {
      num: "05",
      title: "PAINTING: ACP COLOR COATS",
      subtitle: "Polishing Outer ACP Skins",
      tagline: "Applying Color & Cladding Coats",
      description: "Applying fire-retardant exterior ACP cladding sweeps and structural primer paint layers. Changes raw industrial steel into sleek brand textures.",
      icon: <Paintbrush className="w-4 h-4 text-violet-400" />,
      color: "text-violet-400",
    },
    {
      num: "06",
      title: "FINISHING: TURNKEY LIGHT & CABINETS",
      subtitle: "Storefront Glazing & Woodwork",
      tagline: "Illuminating Finished Interiors",
      description: "Fitting double-glazed reflective storefront glass panels, activating internal warm spotlights, and snapping custom modular oak wardrobes into position.",
      icon: <Sparkles className="w-4 h-4 text-gold-accent" />,
      color: "text-gold-accent",
    },
  ];

  // Helper values to interpolate positions based on scrollProgress (0 to 1)

  // 1. PLAN 1ST: Cyan Blueprint Wireframe Outline (appears first, fades to background later)
  const blueprintOpacity = scrollProgress < 0.15 ? 1 : Math.max(0.2, 1 - (scrollProgress - 0.15) * 4);
  const blueprintScale = scrollProgress < 0.10 ? 1 : Math.max(0.95, 1 - (scrollProgress - 0.10) * 0.5);

  // 2. BASE SETUP: RCC Concrete Slab rises from below
  const concreteY = scrollProgress < 0.15 ? 300 : Math.max(0, 300 - (scrollProgress - 0.15) * 1500);
  const concreteOpacity = scrollProgress < 0.15 ? 0 : Math.min(1, (scrollProgress - 0.15) * 5);

  // 3. PILLERS: Steel Columns rise upright from sides
  const leftPillarX = scrollProgress < 0.35 ? -300 : Math.min(0, -300 + (scrollProgress - 0.35) * 1500);
  const rightPillarX = scrollProgress < 0.35 ? 300 : Math.max(0, 300 - (scrollProgress - 0.35) * 1500);
  const pillarOpacity = scrollProgress < 0.35 ? 0 : Math.min(1, (scrollProgress - 0.35) * 5);

  // 4. CONCRETES: Intermediate Slab Deck drops from top
  const deckZ = scrollProgress < 0.55 ? 350 : Math.max(25, 350 - (scrollProgress - 0.55) * 2000);
  const deckOpacity = scrollProgress < 0.55 ? 0 : Math.min(1, (scrollProgress - 0.55) * 6);

  // 5. PAINTING: Color transition percentage (from industrial slate to premium bronze-gold)
  const paintTransition = scrollProgress < 0.70 ? 0 : Math.min(1, (scrollProgress - 0.70) * 6.6); // fully bronze at 0.85

  // 6. FINISHING: Casing and Spire drop, interior lights up
  const casingY = scrollProgress < 0.85 ? -450 : Math.min(0, -450 + (scrollProgress - 0.85) * 3000);
  const casingOpacity = scrollProgress < 0.85 ? 0 : Math.min(0.9, (scrollProgress - 0.85) * 6);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[110vh] bg-slate-950 border-t border-slate-900 scroll-mt-20 overflow-visible animate-fade-in-up"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-accent/5 blur-[130px] pointer-events-none" />

      {/* Sticky execution arena (Full Viewport h-screen top-0) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Drafting drafting grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(197,163,88,0.015)_1px,transparent_1px)] bg-[size:30px_30px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
          
          {/* LEFT: Dynamic Text Information */}
          <div className="lg:col-span-5 flex flex-col justify-center items-start gap-4 relative z-20">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-accent animate-ping" />
              <span>Scroll-Reactive On-Site Assembly</span>
            </div>

            {/* Stage text content wrapper */}
            <div className="h-[210px] flex flex-col justify-start items-start gap-3 w-full">
              
              <div 
                key={activeStageIdx} // Re-render to animate on swap
                className="animate-fade-in-up flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-3.5xl font-black text-gold-accent opacity-20 select-none">
                    {stages[activeStageIdx].num}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black tracking-widest text-gold-accent uppercase leading-none">
                      {stages[activeStageIdx].tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-1 leading-tight">
                      {stages[activeStageIdx].title}
                    </h3>
                  </div>
                </div>
                
                <span className="text-[10px] text-slate-400 font-bold tracking-wide uppercase mt-0.5 flex items-center gap-1.5">
                  {stages[activeStageIdx].icon}
                  <span>{stages[activeStageIdx].subtitle}</span>
                </span>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mt-2">
                  {stages[activeStageIdx].description}
                </p>
              </div>

            </div>

            {/* Custom Progress Grid (Visual progress markers) */}
            <div className="flex flex-col gap-2 w-full max-w-xs mt-1">
              <div className="flex gap-1.5 w-full">
                {stages.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      i <= activeStageIdx ? "bg-gold-accent" : "bg-slate-900"
                    }`} 
                  />
                ))}
              </div>
              <div className="flex justify-between items-center text-[7.5px] text-slate-550 font-mono font-bold tracking-wider uppercase">
                <span>DRAFT PLAN 1ST</span>
                <span>FINISH HANDOVER</span>
              </div>
            </div>

            {/* Scrolling helper */}
            {scrollProgress < 0.95 && (
              <div className="flex items-center gap-2 text-slate-500 font-mono text-[9px] uppercase tracking-widest mt-1">
                <span>Keep scrolling to build</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </div>
            )}

            {/* Finished tag */}
            {scrollProgress >= 0.95 && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase tracking-wider animate-pulse mt-1">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Structural Handover Ready</span>
              </div>
            )}

            {/* --- Animated Site Labor Monitor (Visual Illustrators Video) --- */}
            <div className="bg-slate-950/80 border border-slate-850 rounded-2xl p-3 w-full max-w-sm mt-2 flex items-center gap-3.5 overflow-hidden relative shadow-lg">
              
              {/* Active green monitor dot */}
              <div className="absolute top-2.5 right-3.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-mono text-[6.5px] text-emerald-500 font-bold uppercase tracking-wider">Live Site Feed</span>
              </div>

              {/* Looping vector SVG animator */}
              <div className="w-20 h-16 shrink-0 bg-slate-900/50 rounded-xl border border-slate-800/80 flex items-center justify-center p-1 overflow-hidden">
                <svg viewBox="0 0 200 100" className="w-full h-full text-slate-500">
                  {/* Ground base & structural frames */}
                  <line x1="10" y1="85" x2="190" y2="85" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
                  <line x1="45" y1="85" x2="45" y2="15" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  <line x1="155" y1="85" x2="155" y2="15" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

                  {/* Looping Rigging Crane */}
                  <g className="opacity-40">
                    <path d="M 20,85 L 20,25 L 30,15 L 85,15" fill="none" stroke="#F37021" strokeWidth="1.5" />
                    <line x1="85" y1="15" x2="85" y2="35" stroke="#F37021" strokeWidth="1" className="animate-[bounce_3s_infinite]" />
                    <rect x="80" y="35" width="10" height="5" fill="#F37021" className="animate-[bounce_3s_infinite]" />
                  </g>

                  {/* Welder Laborer */}
                  <g transform="translate(100, 35)">
                    <path d="M 10,50 L 12,30 L 20,25 L 25,30 L 22,50 Z" fill="#475569" />
                    <circle cx="18" cy="18" r="5" fill="#334155" />
                    <rect x="14" y="16" width="5" height="4" fill="#FDB813" className="animate-pulse" /> 
                    <path d="M 12,30 L 4,33 L -1,27" fill="none" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
                    <line x1="-1" y1="27" x2="-8" y2="25" stroke="#1e293b" strokeWidth="1.5" />

                    {/* Sparks */}
                    <g transform="translate(-8, 25)">
                      <circle cx="0" cy="0" r="3" fill="#FFE082" className="animate-ping" />
                      <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                      <circle cx="-3" cy="-4" r="0.8" fill="#F37021" className="animate-[ping_0.6s_infinite]" />
                      <circle cx="-5" cy="2" r="0.6" fill="#F37021" className="animate-[ping_0.9s_infinite]" />
                      <circle cx="-2" cy="5" r="1" fill="#F37021" className="animate-[ping_0.4s_infinite]" />
                    </g>
                  </g>

                  {/* Porter Laborer */}
                  <g transform="translate(35, 35)" className="animate-[pulse_1.8s_infinite]">
                    <path d="M 10,50 L 14,30 L 22,28 L 24,50 Z" fill="#475569" />
                    <circle cx="17" cy="20" r="4.5" fill="#334155" />
                    <path d="M 12,18 L 22,18 L 19,15 Z" fill="#006EA6" />
                    <rect x="-6" y="27" width="28" height="4.5" fill="#64748b" transform="rotate(-12)" />
                  </g>
                </svg>
              </div>

              {/* Status Metadata Feed */}
              <div className="flex flex-col gap-0.5 text-left">
                <span className="font-mono text-[8px] text-slate-550 font-bold uppercase tracking-wider">
                  Active Execution Force
                </span>
                
                <span className="text-[10px] font-bold text-white leading-normal uppercase">
                  {scrollProgress < 0.15 && "01. Plotting Wireframes"}
                  {scrollProgress >= 0.15 && scrollProgress < 0.35 && "02. Foundations Cast Force"}
                  {scrollProgress >= 0.35 && scrollProgress < 0.55 && "03. Pillar Skeletal Welds"}
                  {scrollProgress >= 0.55 && scrollProgress < 0.70 && "04. Deck Concrete Casting"}
                  {scrollProgress >= 0.70 && scrollProgress < 0.85 && "05. ACP Painting Sweeps"}
                  {scrollProgress >= 0.85 && "06. Interior Woods Snaps"}
                </span>

                <div className="flex items-center gap-1 mt-0.5 font-mono text-[8px] text-slate-400 font-bold">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {scrollProgress < 0.35 && "12 Technicians Active"}
                    {scrollProgress >= 0.35 && scrollProgress < 0.70 && "18 Welders & Riggers"}
                    {scrollProgress >= 0.70 && scrollProgress < 0.85 && "10 Painters Active"}
                    {scrollProgress >= 0.85 && "15 Finish Carpenters"}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Visual 3D Construction Arena */}
          <div className="lg:col-span-7 h-[45vh] lg:h-[60vh] w-full flex items-center justify-center relative z-10 [perspective:1300px]">
            
            {/* Ground alignment platform */}
            <div className="absolute w-64 h-64 border border-slate-900/50 rounded-full [transform:rotateX(60deg)_rotateZ(-45deg)] flex items-center justify-center pointer-events-none">
              <div className="absolute w-44 h-44 border border-dashed border-slate-900/25 rounded-full animate-spin-slow" />
              <div className="absolute w-24 h-24 border border-slate-900/10 rounded-full" />
            </div>

            {/* --- 3D CONSTRUCTION OBJECT --- */}
            <div className="relative w-64 h-64 [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-40deg)] transition-transform duration-300">

              {/* STAGE 1: PLAN 1ST — Glowing Cyan blueprint wireframe box */}
              <div 
                className="absolute inset-x-8 bottom-8 top-12 rounded-2xl border border-dashed border-cyan-400/40 [transform-style:preserve-3d] transition-all duration-300 pointer-events-none"
                style={{
                  transform: `translateZ(0px) scale(${blueprintScale})`,
                  opacity: blueprintOpacity,
                  height: "190px",
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.08), inset 0 0 10px rgba(34, 211, 238, 0.04)"
                }}
              >
                {/* 3D Blueprint Corner drafting ticks */}
                <div className="absolute top-1.5 left-2.5 font-mono text-[7px] text-cyan-400/35">DRAFT_A-1</div>
                <div className="absolute bottom-1.5 right-2.5 font-mono text-[7px] text-cyan-400/35">PLAN_Z-10</div>
                <div className="absolute inset-x-4 top-1/2 h-[1px] border-t border-dashed border-cyan-400/5" />
                <div className="absolute inset-y-4 left-1/2 w-[1px] border-l border-dashed border-cyan-400/5" />
              </div>

              {/* STAGE 2: BASE SETUP — Heavy RCC foundation slab rises and anchors inside wireframe */}
              <div 
                className="absolute inset-x-8 bottom-8 top-12 rounded-2xl bg-slate-900 border-2 border-slate-800 flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.8)] [transform-style:preserve-3d]"
                style={{
                  transform: `translateZ(${-40 + concreteY}px)`,
                  opacity: concreteOpacity,
                  willChange: "transform, opacity",
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
                }}
              >
                {/* Foundation rod meshes */}
                <div className="absolute inset-3 border border-dashed border-slate-700/20 rounded-xl bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                {/* Extruded blocks helper depth */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-950/80 [transform:rotateX(-90deg)_translateZ(8px)] border-t border-slate-800" />
                
                <span className="font-bold text-[7.5px] tracking-widest text-slate-500 uppercase">RCC BEDROCK FOUNDATION</span>
              </div>

              {/* STAGE 3: PILLERS — Vertical high-tensile steel columns rise from sides */}
              {/* Left Pillar */}
              <div 
                className="absolute left-8 bottom-8 top-12 w-2 rounded-md [transform-style:preserve-3d] transition-all"
                style={{
                  transform: `translateZ(20px) translateX(${leftPillarX}px)`,
                  opacity: pillarOpacity,
                  height: "172px",
                  // Transition from gray slate steel to warm premium brand-orange cladding upon PAINTING progress
                  backgroundColor: `rgba(${120 + 123 * paintTransition}, ${120 - 8 * paintTransition}, ${120 - 87 * paintTransition}, 1)`,
                  border: `1px solid rgba(${150 + 94 * paintTransition}, ${150 - 19 * paintTransition}, ${150 - 89 * paintTransition}, 0.6)`,
                  boxShadow: scrollProgress >= 0.70 ? "0 0 10px rgba(243, 112, 33, 0.4)" : "none",
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out, background-color 0.4s ease, border-color 0.4s ease"
                }}
              />
              {/* Right Pillar */}
              <div 
                className="absolute right-8 bottom-8 top-12 w-2 rounded-md [transform-style:preserve-3d] transition-all"
                style={{
                  transform: `translateZ(20px) translateX(${rightPillarX}px)`,
                  opacity: pillarOpacity,
                  height: "172px",
                  // Transition from gray slate steel to warm premium brand-orange cladding upon PAINTING progress
                  backgroundColor: `rgba(${120 + 123 * paintTransition}, ${120 - 8 * paintTransition}, ${120 - 87 * paintTransition}, 1)`,
                  border: `1px solid rgba(${150 + 94 * paintTransition}, ${150 - 19 * paintTransition}, ${150 - 89 * paintTransition}, 0.6)`,
                  boxShadow: scrollProgress >= 0.70 ? "0 0 10px rgba(243, 112, 33, 0.4)" : "none",
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out, background-color 0.4s ease, border-color 0.4s ease"
                }}
              />

              {/* Cross connection framing girders */}
              <div 
                className="absolute left-8 right-8 top-12 h-1.5 [transform-style:preserve-3d]"
                style={{
                  transform: `translateZ(165px) translateY(${scrollProgress < 0.45 ? -50 : 0}px)`,
                  opacity: scrollProgress < 0.45 ? 0 : Math.min(1, (scrollProgress - 0.45) * 8),
                  backgroundColor: `rgba(${120 + 123 * paintTransition}, ${120 - 8 * paintTransition}, ${120 - 87 * paintTransition}, 1)`,
                  border: `1px solid rgba(${150 + 94 * paintTransition}, ${150 - 19 * paintTransition}, ${150 - 89 * paintTransition}, 0.6)`,
                  transition: "transform 0.15s ease-out, opacity 0.15s ease-out, background-color 0.4s ease"
                }}
              />

              {/* STAGE 4: CONCRETES — Multi-story Intermediate floor concrete decks stack from top */}
              <div 
                className="absolute inset-x-10 bottom-10 top-14 rounded-xl border flex items-center justify-center [transform-style:preserve-3d]"
                style={{
                  transform: `translateZ(${deckZ}px)`,
                  opacity: deckOpacity,
                  // Color transitions from rough gray concrete to custom corporate-blue floor coatings upon PAINTING progress
                  backgroundColor: `rgba(${30 - 30 * paintTransition}, ${41 + 69 * paintTransition}, ${59 + 107 * paintTransition}, 0.85)`,
                  borderColor: `rgba(${51 + 192 * paintTransition}, ${65 + 47 * paintTransition}, ${85 - 52 * paintTransition}, 0.3)`,
                  boxShadow: scrollProgress >= 0.70 ? "0 0 15px rgba(243, 112, 33, 0.25)" : "0 5px 10px rgba(0,0,0,0.5)",
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out, background-color 0.4s ease, border-color 0.4s ease"
                }}
              >
                <div className="absolute inset-1.5 border border-dashed border-slate-700/20 rounded-lg" />
                <span className="font-mono text-[7px] text-slate-550 font-bold select-none uppercase">CONCRETE slab DECK</span>
              </div>

              {/* STAGE 5: PAINTING COLOR WAVE GLIDE (Glowing laser vertical scanner) */}
              {scrollProgress >= 0.70 && scrollProgress < 0.85 && (
                <div className="absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-gold-accent to-transparent shadow-[0_0_15px_#F37021] [transform-style:preserve-3d] pointer-events-none animate-scan-y" />
              )}

              {/* STAGE 6: FINISHING — 3D Glass cladding shield slides down at the very end */}
              <div 
                className="absolute inset-x-9 bottom-9 top-13 border-2 border-sky-400/40 rounded-2xl [transform-style:preserve-3d] pointer-events-none"
                style={{
                  transform: `translateZ(${casingY}px)`,
                  opacity: casingOpacity,
                  height: "190px",
                  background: "linear-gradient(to top, rgba(56, 189, 248, 0.06) 0%, rgba(56, 189, 248, 0.01) 100%)",
                  boxShadow: "0 0 20px rgba(56, 189, 248, 0.12), inset 0 0 12px rgba(56, 189, 248, 0.04)",
                  transition: "transform 0.12s ease-out, opacity 0.12s ease-out"
                }}
              >
                {/* Glazing specular reflections */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(56,189,248,0.15)_50%,transparent_55%)] bg-[size:200%_200%] animate-pulse" />
                
                {/* Storefront divisions */}
                <div className="absolute top-0 bottom-0 left-[33%] w-[1px] bg-sky-400/10" />
                <div className="absolute top-0 bottom-0 right-[33%] w-[1px] bg-sky-400/10" />
              </div>

              {/* STAGE 6: FINISHING — Dynamic Brand Seal snaps in and interior spotlight glows */}
              <div 
                className="absolute inset-x-20 bottom-20 top-24 bg-gradient-to-tr from-gold-accent to-gold-hover rounded-xl flex flex-col items-center justify-center border border-white/20 shadow-[0_0_25px_#F37021] [transform-style:preserve-3d]"
                style={{
                  transform: `translateZ(90px) scale(${scrollProgress < 0.85 ? 1.8 : 1})`,
                  opacity: scrollProgress < 0.85 ? 0 : Math.min(1, (scrollProgress - 0.85) * 8),
                  transition: "transform 0.1s ease-out, opacity 0.1s ease-out"
                }}
              >
                <span className="text-dark-obsidian font-black text-lg tracking-tighter leading-none">VI</span>
                <span className="text-[5px] font-black uppercase text-dark-obsidian tracking-widest leading-none mt-0.5">READY</span>

                {/* Topped out safety check badge */}
                <div className="absolute -top-1.5 -right-1.5 p-0.5 rounded-full bg-emerald-500 border border-white text-white">
                  <ShieldCheck className="w-2 h-2" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
