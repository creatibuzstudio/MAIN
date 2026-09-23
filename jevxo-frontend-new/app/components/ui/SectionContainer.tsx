import React from "react";

export function GridSpark({
  className = "w-6 h-6 text-zinc-500",
}: {
  className?: string;
}) {
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
  extendTopBorder?: boolean; // Collaborator section-er jonno vertical line upore extend korar prop
}

export default function SectionContainer({
  children,
  id,
  className = "",
  containerClassName = "",
  crossMarkers = true,
  showTopBorder = true,
  showBottomBorder = true,
  extendTopBorder = false, // default false thakbe
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-visible ${containerClassName}`}
    >
      {/* Full width top horizontal divider line */}
      {showTopBorder && (
        <div className="w-full h-px bg-white/[0.12] absolute top-0 inset-x-0 pointer-events-none z-0" />
      )}

      {/* Main max-w-7xl container without default border-x */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Left vertical border line: extends up into marquee if extendTopBorder is true */}
        <div
          className={`absolute left-0 w-px bg-white/[0.12] pointer-events-none z-0 ${
            extendTopBorder
              ? "-top-36 sm:-top-44 md:-top-52 bottom-0"
              : "top-0 bottom-0"
          }`}
        />

        {/* Right vertical border line: extends up into marquee if extendTopBorder is true */}
        <div
          className={`absolute right-0 w-px bg-white/[0.12] pointer-events-none z-0 ${
            extendTopBorder
              ? "-top-36 sm:-top-44 md:-top-52 bottom-0"
              : "top-0 bottom-0"
          }`}
        />

        {/* Corner 4-point concave diamond sparks at the top intersections */}
        {crossMarkers && showTopBorder && (
          <>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
              <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
            </div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10">
              <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
            </div>
          </>
        )}

        {/* Content area */}
        <div className={`relative px-4 sm:px-6 md:px-8 ${className}`}>
          {children}
        </div>

        {/* Corner 4-point concave diamond sparks at the bottom intersections */}
        {crossMarkers && showBottomBorder && (
          <>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10">
              <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10">
              <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
            </div>
          </>
        )}
      </div>

      {/* Full width bottom horizontal divider line */}
      {showBottomBorder && (
        <div className="w-full h-px bg-white/[0.12] absolute bottom-0 inset-x-0 pointer-events-none z-0" />
      )}
    </section>
  );
}
