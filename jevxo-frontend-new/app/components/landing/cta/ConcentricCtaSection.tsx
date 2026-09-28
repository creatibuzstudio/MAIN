"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionContainer from "@/app/components/ui/SectionContainer";

interface FloatingIconConfig {
  name: string;
  src: string;
  // Offset coordinates relative to center (0,0) in px
  // Negative X is Left, Positive X is Right
  // Negative Y is Up, Positive Y is Down
  xOffset: number;
  yOffset: number;
  size?: number; // size in px
  jellyFactor: number; // sensitivity multiplier for spring motion
}

// 8 icons distributed across 3 orbits:
// 1st Orbit (Inner, r=350px): 1 Left, 1 Right
// 2nd Orbit (Middle, r=450px): 2 Left (top & bottom), 2 Right (top & bottom)
// 3rd Orbit (Outer, r=550px): 1 Left, 1 Right
const JELLY_ICONS: FloatingIconConfig[] = [
  // 1st Orbit (Inner Ring, diameter 700px, radius 350px)
  {
    name: "Miro",
    src: "/animatedSection/6a58a6a2cb044ee3817c8f32_Frame 2147238892 1.png",
    xOffset: -350,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.2,
  },
  {
    name: "Sketch",
    src: "/animatedSection/Group 1707480799.png",
    xOffset: 350,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.2,
  },

  // 2nd Orbit (Middle Ring, diameter 900px, radius 450px)
  // Left: Upper & Lower
  {
    name: "Framer",
    src: "/animatedSection/Group 1707480794.png",
    xOffset: -390,
    yOffset: -225,
    size: 50,
    jellyFactor: 1.05,
  },
  {
    name: "Anthropic",
    src: "/animatedSection/Group 1707480800.png",
    xOffset: -390,
    yOffset: 225,
    size: 50,
    jellyFactor: 1.15,
  },
  // Right: Upper & Lower
  {
    name: "Webflow",
    src: "/animatedSection/Group 1707480801.png",
    xOffset: 390,
    yOffset: -225,
    size: 50,
    jellyFactor: 1.1,
  },
  {
    name: "Figma",
    src: "/animatedSection/6a58a73bd7b7e03d4a590269_Frame 2147238891 1.png",
    xOffset: 390,
    yOffset: 225,
    size: 50,
    jellyFactor: 1.05,
  },

  // 3rd Orbit (Outer Ring, diameter 1100px, radius 550px)
  {
    name: "Fi",
    src: "/animatedSection/6a58a76f75452fd285b8ab73_Frame 2147238888 (1) 1.png",
    xOffset: -550,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.25,
  },
  {
    name: "Supabase",
    src: "/animatedSection/6a58a80e4ee26d41bf4dd8a6_Frame 2147238892 (2) 1.png",
    xOffset: 550,
    yOffset: 0,
    size: 50,
    jellyFactor: 1.1,
  },
];

// Single Jelly Item with proximity-based magnetic jelly physics
function JellyIconItem({
  icon,
  mouseX,
  mouseY,
}: {
  icon: FloatingIconConfig;
  mouseX: any;
  mouseY: any;
}) {
  // Proximity-based calculation: ONLY moves when cursor is near this specific icon/area
  const targetOffset = useTransform([mouseX, mouseY], ([mx, my]: [number, number]) => {
    // If cursor is outside container
    if (mx > 50000) return { x: 0, y: 0 };

    const dx = mx - icon.xOffset;
    const dy = my - icon.yOffset;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Proximity radius: icons only react within this distance (270px)
    const PROXIMITY_RADIUS = 270;

    if (dist < PROXIMITY_RADIUS) {
      const ratio = 1 - dist / PROXIMITY_RADIUS;
      // Smooth organic falloff
      const smoothFactor = Math.sin((ratio * Math.PI) / 2);
      // Gentle jelly pull towards cursor (max ~28px)
      const maxDisplacement = 28 * icon.jellyFactor;
      const angle = Math.atan2(dy, dx);
      return {
        x: Math.cos(angle) * smoothFactor * maxDisplacement,
        y: Math.sin(angle) * smoothFactor * maxDisplacement,
      };
    }

    return { x: 0, y: 0 };
  });

  const rawX = useTransform(targetOffset, (val) => val.x);
  const rawY = useTransform(targetOffset, (val) => val.y);

  // Elastic jelly spring physics
  const springConfig = { damping: 11, stiffness: 160, mass: 0.65 };
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Subtle organic tilt as it stretches
  const rotateSpring = useTransform(springX, [-30, 30], [-8, 8]);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 pointer-events-auto select-none"
      style={{
        x: springX,
        y: springY,
        rotate: rotateSpring,
        translateX: `calc(-50% + ${icon.xOffset}px)`,
        translateY: `calc(-50% + ${icon.yOffset}px)`,
      }}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 350, damping: 14 }}
    >
        <Image
          src={icon.src}
          alt={icon.name}
          width={icon.size}
          height={icon.size}
          className="w-full h-full object-contain pointer-events-none select-none"
        />
    </motion.div>
  );
}

export default function ConcentricCtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values to track cursor pixel coordinates relative to center (0, 0)
  // Default to 99999 so icons rest calmly when cursor is not hovering
  const mouseX = useMotionValue(99999);
  const mouseY = useMotionValue(99999);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Mouse coordinates in pixels relative to center of container
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Put coordinates far away so all icons gently spring back to rest
    mouseX.set(99999);
    mouseY.set(99999);
  };

  return (
    <SectionContainer
      id="cta"
      showTopBorder={false}
      showBottomBorder={false}
      crossMarkers={false}
      className="!p-0 !py-0 !px-0 w-full"
      containerClassName="relative w-full overflow-hidden bg-black"
    >
      {/* Interactive Container tracking mouse movement */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] bg-black flex items-center justify-center overflow-hidden cursor-default"
      >
        {/* 1. Atmospheric Glow Background */}
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

        {/* 2. Static Concentric Dashed Orbit Rings */}
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
          {/* Inner Ring (700px diameter -> radius 350px) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "700px", height: "700px" }}
          />
          {/* Middle Ring (900px diameter -> radius 450px) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "900px", height: "900px" }}
          />
          {/* Outer Ring (1100px diameter -> radius 550px) */}
          <div
            className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
            style={{ width: "1100px", height: "1100px" }}
          />

          {/* 3. The 8 Jelly Floating Icons precisely positioned on the 3 orbits */}
          <div className="absolute inset-0 pointer-events-none scale-[0.62] sm:scale-[0.80] md:scale-[0.92] lg:scale-100 origin-center">
            {JELLY_ICONS.map((icon) => (
              <JellyIconItem
                key={icon.name}
                icon={icon}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </div>
        </div>

        {/* 4. Center Stationary CTA Content (Z-Index 20) */}
        <div className="relative z-20 max-w-2xl mx-auto px-4 text-center pointer-events-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-white text-3xl md:text-4xl lg:text-[42px] text-center leading-[1.18] tracking-tight max-w-3xl mx-auto"
          >
            Ready to build something
            <br className="hidden sm:inline" /> that actually converts?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-300/90 text-sm sm:text-base text-center max-w-lg mx-auto mt-4 leading-relaxed font-normal"
          >
            Stop waiting weeks for design feedback. Get your first draft in 48
            hours and launch your product before your competitors even finish
            planning.
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
              className="group inline-flex items-center gap-5 rounded-full bg-white text-black font-semibold text-sm sm:text-base px-6 pr-1.5 py-1.5 hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl"
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
