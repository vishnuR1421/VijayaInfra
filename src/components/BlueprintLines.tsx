"use client";

export default function BlueprintLines() {
  return (
    <div className="fixed inset-y-0 left-0 right-0 pointer-events-none z-30 select-none overflow-hidden">
      
      {/* BACKGROUND CORNER CROSSHAIRS ('+') representing coordinate design grids */}
      <div className="absolute top-24 left-1/4 text-slate-850/40 font-mono text-[10px] hidden lg:block">
        +
      </div>
      <div className="absolute top-1/3 right-1/4 text-slate-850/40 font-mono text-[10px] hidden lg:block">
        +
      </div>
      <div className="absolute bottom-1/3 left-1/3 text-slate-850/40 font-mono text-[10px] hidden lg:block">
        +
      </div>
      <div className="absolute bottom-24 right-1/3 text-slate-850/40 font-mono text-[10px] hidden lg:block">
        +
      </div>

    </div>
  );
}
