import React from "react";

export function GridSpark({ className = "w-6 h-6 text-zinc-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M12 0 C12 7 7 12 0 12 C7 12 12 17 12 24 C12 17 17 12 24 12 C17 12 12 7 12 0 Z" />
    </svg>
  );
}

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  crossMarkers?: boolean;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
}

export default function SectionContainer({
  children,
  id,
  className = "",
  containerClassName = "",
  crossMarkers = true,
  showTopBorder = true,
  showBottomBorder = true,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative w-full max-w-[1440px] mx-auto overflow-visible ${containerClassName}`}
    >
      {/* Full width top divider line */}
      {showTopBorder && (
        <div className="w-full h-px bg-white/[0.12] absolute top-0 inset-x-0 pointer-events-none z-0" />
      )}

      {/* Vertical boundary lines positioned at 10% and 90% (framing the central 80% container) */}
      <div className="absolute -top-20 bottom-0 left-[10%] w-px bg-white/[0.12] z-0 pointer-events-none" />
      <div className="absolute -top-20 bottom-0 right-[10%] w-px bg-white/[0.12] z-0 pointer-events-none" />

      {/* Corner 4-point concave diamond sparks at the top intersections */}
      {crossMarkers && showTopBorder && (
        <>
          <div className="absolute top-0 left-[10%] -translate-x-1/2 -translate-y-1/2 z-10">
            <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
          </div>
          <div className="absolute top-0 right-[10%] translate-x-1/2 -translate-y-1/2 z-10">
            <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
          </div>
        </>
      )}

      {/* Inner content container: Strict 80% width centered block */}
      <div className="w-full max-w-[80%] mx-auto relative z-[1] px-4 sm:px-6 md:px-8">
        <div className={className}>
          {children}
        </div>
      </div>

      {/* Corner 4-point concave diamond sparks at the bottom intersections */}
      {crossMarkers && showBottomBorder && (
        <>
          <div className="absolute bottom-0 left-[10%] -translate-x-1/2 translate-y-1/2 z-10">
            <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
          </div>
          <div className="absolute bottom-0 right-[10%] translate-x-1/2 translate-y-1/2 z-10">
            <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
          </div>
        </>
      )}

      {/* Full width bottom divider line */}
      {showBottomBorder && (
        <div className="w-full h-px bg-white/[0.12] absolute bottom-0 inset-x-0 pointer-events-none z-0" />
      )}
    </section>
  );
}
