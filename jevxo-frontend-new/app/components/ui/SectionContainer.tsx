import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  crossMarkers?: boolean;
  showTopBorder?: boolean;
  showBottomBorder?: boolean;
}

export function CornerCross({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 11 11"
      width="11"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute pointer-events-none select-none text-white/30 z-20 ${className}`}
    >
      <path
        d="M5.5 0V11M0 5.5H11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  );
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
      className={`relative w-full overflow-visible ${containerClassName}`}
    >
      {/* Full width top guideline */}
      {showTopBorder && (
        <div className="w-full h-px bg-white/[0.08] absolute top-0 inset-x-0 pointer-events-none" />
      )}

      {/* Main framed inner container */}
      <div className="relative w-full max-w-7xl mx-auto border-x border-white/[0.08]">
        {/* Corner markers on top */}
        {crossMarkers && showTopBorder && (
          <>
            <CornerCross className="-top-[5.5px] -left-[5.5px]" />
            <CornerCross className="-top-[5.5px] -right-[5.5px]" />
          </>
        )}

        {/* Content area */}
        <div className={`relative px-4 sm:px-8 md:px-12 ${className}`}>
          {children}
        </div>

        {/* Corner markers on bottom */}
        {crossMarkers && showBottomBorder && (
          <>
            <CornerCross className="-bottom-[5.5px] -left-[5.5px]" />
            <CornerCross className="-bottom-[5.5px] -right-[5.5px]" />
          </>
        )}
      </div>

      {/* Full width bottom guideline */}
      {showBottomBorder && (
        <div className="w-full h-px bg-white/[0.08] absolute bottom-0 inset-x-0 pointer-events-none" />
      )}
    </section>
  );
}
