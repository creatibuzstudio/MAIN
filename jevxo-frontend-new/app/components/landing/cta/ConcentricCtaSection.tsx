"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionContainer from "@/app/components/ui/SectionContainer";

interface OrbitIcon {
  name: string;
  src: string;
  angle: number; // degrees (0 is 3 o'clock, 90 is 6 o'clock, 180 is 9 o'clock, 270 is 12 o'clock)
}

interface OrbitRingConfig {
  id: string;
  diameter: number; // diameter in pixels (user custom settings: 650, 850, 1050)
  duration?: number; // legacy speed alias
  ringDuration: number; // ring rotation speed in seconds (user setting: 555s)
  iconDuration: number; // icons orbital rotation speed in seconds (faster, e.g. 32s, 42s, 52s)
  direction: "clockwise" | "counter-clockwise";
  strokeColor: string;
  strokeWidth: number;
  dashArray: string;
  icons: OrbitIcon[];
}

const ORBIT_RINGS: OrbitRingConfig[] = [
  {
    id: "inner",
    diameter: 650,
    ringDuration: 555,
    iconDuration: 60, // faster independent orbital rotation for icons
    direction: "clockwise",
    strokeColor: "rgba(255, 255, 255, 0.32)",
    strokeWidth: 1.5,
    dashArray: "8 14",
    icons: [
      {
        name: "Miro",
        src: "/animatedSection/6a58a6a2cb044ee3817c8f32_Frame 2147238892 1.png",
        angle: 185, // Left side
      },
      {
        name: "Sketch",
        src: "/animatedSection/Group 1707480799.png",
        angle: 10, // Right side
      },
    ],
  },
  {
    id: "middle",
    diameter: 850,
    ringDuration: 555,
    iconDuration: 50, // faster independent orbital rotation for icons
    direction: "counter-clockwise",
    strokeColor: "rgba(255, 255, 255, 0.22)",
    strokeWidth: 1.5,
    dashArray: "9 16",
    icons: [
      {
        name: "Framer",
        src: "/animatedSection/Group 1707480794.png",
        angle: 230, // Top-left
      },
      {
        name: "Anthropic",
        src: "/animatedSection/Group 1707480800.png",
        angle: 125, // Bottom-left
      },
      {
        name: "Webflow",
        src: "/animatedSection/Group 1707480801.png",
        angle: 315, // Top-right
      },
    ],
  },
  {
    id: "outer",
    diameter: 1100,
    ringDuration: 555,
    iconDuration: 45, // faster independent orbital rotation for icons
    direction: "clockwise",
    strokeColor: "rgba(255, 255, 255, 0.16)",
    strokeWidth: 1.5,
    dashArray: "10 18",
    icons: [
      {
        name: "Fi",
        src: "/animatedSection/6a58a76f75452fd285b8ab73_Frame 2147238888 (1) 1.png",
        angle: 180, // Far left
      },
      {
        name: "Supabase",
        src: "/animatedSection/6a58a80e4ee26d41bf4dd8a6_Frame 2147238892 (2) 1.png",
        angle: 0, // Far right
      },
      {
        name: "Figma",
        src: "/animatedSection/6a58a73bd7b7e03d4a590269_Frame 2147238891 1.png",
        angle: 55, // Bottom right
      },
    ],
  },
];

export default function ConcentricCtaSection() {
  return (
    <SectionContainer
      id="cta"
      showTopBorder={false}
      showBottomBorder={false}
      crossMarkers={false}
      className="!p-0 !py-0 !px-0 w-full"
      containerClassName="relative w-full overflow-hidden bg-black"
    >
      {/* Inline styles for continuous orbital rotation and counter-rotation */}
      <style>{`
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>

      {/* Main Bounded Container with explicit overflow-hidden and defined height */}
      <div
        className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] bg-black flex items-center justify-center"
        style={{ overflow: "hidden" }}
      >
        {/* 1. Pure CSS Atmospheric Gradient Background (No image asset) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 68% 54% at 50% 50%, #FD5A00 0%, rgba(253, 90, 0, 0.8) 18%, rgba(215, 75, 0, 0.5) 38%, rgba(130, 42, 0, 0.22) 60%, rgba(40, 12, 0, 0.06) 80%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 120, 20, 0.22) 0%, transparent 45%)",
          }}
        />

        {/* 2. Concentric Orbit System strictly bounded to the background height with vertical fade mask */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            overflow: "hidden",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="relative flex items-center justify-center scale-[0.52] sm:scale-[0.72] md:scale-[0.88] lg:scale-100 origin-center pointer-events-none">
            {ORBIT_RINGS.map((ring) => {
              const radius = ring.diameter / 2;
              const isClockwise = ring.direction === "clockwise";
              const ringSpeed = ring.ringDuration || ring.duration || 555;
              const iconSpeed = ring.iconDuration || 35;

              return (
                <div
                  key={ring.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: `${ring.diameter}px`,
                    height: `${ring.diameter}px`,
                  }}
                >
                  {/* 1. Ring SVG Container (Rotates at ringSpeed = 555s) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      animation: `${isClockwise ? "orbitClockwise" : "orbitCounterClockwise"} ${ringSpeed}s linear infinite`,
                    }}
                  >
                    <svg
                      className="w-full h-full pointer-events-none"
                      viewBox={`0 0 ${ring.diameter} ${ring.diameter}`}
                    >
                      <circle
                        cx={radius}
                        cy={radius}
                        r={radius - 1}
                        fill="none"
                        stroke={ring.strokeColor}
                        strokeWidth={ring.strokeWidth}
                        strokeDasharray={ring.dashArray}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* 2. Icons Orbit Container (Rotates at iconSpeed = faster independent orbital revolution) */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      animation: `${isClockwise ? "orbitClockwise" : "orbitCounterClockwise"} ${iconSpeed}s linear infinite`,
                    }}
                  >
                    {ring.icons.map((icon) => {
                      const rad = (icon.angle * Math.PI) / 180;
                      const x = Math.round(radius * Math.cos(rad));
                      const y = Math.round(radius * Math.sin(rad));

                      return (
                        <div
                          key={icon.name}
                          className="absolute pointer-events-auto"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {/* Counter-rotating badge keeping the tool upright at iconSpeed */}
                          <div
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-zinc-900/90 border border-white/15 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-115 cursor-pointer backdrop-blur-sm"
                            style={{
                              animation: `${isClockwise ? "orbitCounterClockwise" : "orbitClockwise"} ${iconSpeed}s linear infinite`,
                            }}
                          >
                            <Image
                              src={icon.src}
                              alt={icon.name}
                              width={50}
                              height={50}
                              className="w-full h-full object-contain pointer-events-none select-none"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Center CTA Content (Static Overlay - Z-Index 20) */}
        <div className="relative z-20 max-w-2xl mx-auto px-4 text-center pointer-events-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-foreground text-3xl md:text-4xl lg:text-[40px] text-center leading-[1.18] tracking-tight max-w-3xl mx-auto"
          >
            Ready to build something<br className="hidden sm:inline" /> that actually converts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-300/90 text-sm sm:text-base text-center max-w-lg mx-auto mt-4 leading-relaxed font-normal"
          >
            Stop waiting weeks for design feedback. Get your first draft in 48 hours and launch your product before your competitors even finish planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-5 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-5 pr-1 py-1 hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span>Request Free Audit</span>
              <span className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 stroke-[2]" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
