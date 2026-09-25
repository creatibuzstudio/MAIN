"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  Sparkles,
  PencilRuler,
  FileText,
  UserCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import SectionContainer, { GridSpark } from "@/app/components/ui/SectionContainer";

interface AiFeatureCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const LEFT_CARDS: AiFeatureCard[] = [
  {
    id: "workflows",
    title: "Agent-Powered Workflows",
    description:
      "Turn repetitive tasks into autonomous flows: agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans.",
    icon: Workflow,
  },
  {
    id: "visual-direction",
    title: "AI Visual Direction",
    description:
      "Visual direction using AI-generated imagery, refined color palettes, clean compositions, and consistent visual elements.",
    icon: Sparkles,
  },
  {
    id: "wireframing",
    title: "Faster Wireframing",
    description:
      "Wireframing process with AI-assisted ideas, layouts, and user flows. Quickly turn concepts into clear, structured wireframes.",
    icon: PencilRuler,
  },
];

const RIGHT_CARDS: AiFeatureCard[] = [
  {
    id: "ux-copy",
    title: "UX Copy That Converts",
    description:
      "Generate strategic UX copy, Craft clear, and user-focused copy, and messaging designed to improve clarity and engagement.",
    icon: FileText,
  },
  {
    id: "human-ux",
    title: "Human-Centered AI UX",
    description:
      "Use AI-powered insights to understand user behavior, identify friction points, and uncover opportunities for improvement.",
    icon: UserCheck,
  },
  {
    id: "launches",
    title: "AI-Assisted Launches",
    description:
      "Product launches with AI-assisted workflows that Reduce repetitive tasks and launch digital products more efficiently with faster execution.",
    icon: Rocket,
  },
];

export default function AiSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [paths, setPaths] = useState<string[]>([]);
  const [junctions, setJunctions] = useState<{
    left: { x: number; y: number };
    right: { x: number; y: number };
  } | null>(null);

  const [pulseActive, setPulseActive] = useState(false);
  const [isEnergized, setIsEnergized] = useState(false);

  // Dynamic layout & SVG connector calculation
  const updatePaths = useCallback(() => {
    if (!containerRef.current || !hubRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    const hRect = hubRef.current.getBoundingClientRect();

    const hubCenterY = hRect.top + hRect.height / 2 - cRect.top;
    const hubLeft = hRect.left - cRect.left;
    const hubRight = hRect.right - cRect.left;

    // Get 6 card edge attachment coordinates
    // Indices 0, 1, 2 are Left cards -> attach to their right edge
    // Indices 3, 4, 5 are Right cards -> attach to their left edge
    const points = cardRefs.current.map((card, i) => {
      if (!card) return null;
      const rect = card.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2 - cRect.top;
      const edgeX = i < 3 ? rect.right - cRect.left : rect.left - cRect.left;
      return { x: edgeX, y: centerY };
    });

    if (points.some((p) => p === null)) return;

    // Junctions halfway between hub and middle cards
    const p1 = points[1]!;
    const p4 = points[4]!;
    const junctionLeftX = (hubLeft + p1.x) / 2;
    const junctionRightX = (hubRight + p4.x) / 2;

    setJunctions({
      left: { x: junctionLeftX, y: hubCenterY },
      right: { x: junctionRightX, y: hubCenterY },
    });

    const r = 16; // corner radius for orthogonal routing

    const newPaths: string[] = [
      // Card 1 (Top Left)
      `M ${hubLeft} ${hubCenterY} L ${junctionLeftX} ${hubCenterY} L ${junctionLeftX} ${points[0]!.y + r} Q ${junctionLeftX} ${points[0]!.y} ${junctionLeftX - r} ${points[0]!.y} L ${points[0]!.x} ${points[0]!.y}`,
      // Card 2 (Middle Left)
      `M ${hubLeft} ${hubCenterY} L ${points[1]!.x} ${hubCenterY}`,
      // Card 3 (Bottom Left)
      `M ${hubLeft} ${hubCenterY} L ${junctionLeftX} ${hubCenterY} L ${junctionLeftX} ${points[2]!.y - r} Q ${junctionLeftX} ${points[2]!.y} ${junctionLeftX - r} ${points[2]!.y} L ${points[2]!.x} ${points[2]!.y}`,
      // Card 4 (Top Right)
      `M ${hubRight} ${hubCenterY} L ${junctionRightX} ${hubCenterY} L ${junctionRightX} ${points[3]!.y + r} Q ${junctionRightX} ${points[3]!.y} ${junctionRightX + r} ${points[3]!.y} L ${points[3]!.x} ${points[3]!.y}`,
      // Card 5 (Middle Right)
      `M ${hubRight} ${hubCenterY} L ${points[4]!.x} ${hubCenterY}`,
      // Card 6 (Bottom Right)
      `M ${hubRight} ${hubCenterY} L ${junctionRightX} ${hubCenterY} L ${junctionRightX} ${points[5]!.y - r} Q ${junctionRightX} ${points[5]!.y} ${junctionRightX + r} ${points[5]!.y} L ${points[5]!.x} ${points[5]!.y}`,
    ];

    setPaths(newPaths);
  }, []);

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    const ro = new ResizeObserver(updatePaths);
    if (containerRef.current) ro.observe(containerRef.current);

    const timer1 = setTimeout(updatePaths, 300);
    const timer2 = setTimeout(updatePaths, 1000);

    return () => {
      window.removeEventListener("resize", updatePaths);
      ro.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [updatePaths]);

  // Automated 4-second pulse cycle
  useEffect(() => {
    let isMounted = true;

    const triggerCycle = () => {
      if (!isMounted) return;
      // 1. Fire energetic pulse from center orb
      setPulseActive(true);

      // 2. Pulse travels along connector lines and reaches cards at 800ms
      const t1 = setTimeout(() => {
        if (isMounted) setIsEnergized(true);
      }, 800);

      // 3. Cards hold glow for ~1.1s, then smoothly transition back
      const t2 = setTimeout(() => {
        if (isMounted) {
          setIsEnergized(false);
          setPulseActive(false);
        }
      }, 1900);
    };

    const initialTimer = setTimeout(triggerCycle, 600);
    const interval = setInterval(triggerCycle, 4000);

    return () => {
      isMounted = false;
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
      <div id="ai-section" className="w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wide mb-3 block font-sans">
            [ AI Powered Design ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15] text-center font-sans">
            Smarter Design,{" "}
            <span className="font-serif italic font-normal text-white">
              Supercharged by AI.
            </span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base text-center max-w-xl mx-auto mt-4 font-sans leading-relaxed">
            From wireframes to launch, we blend AI tools with strategy to
            deliver faster, sharper, and data-led design results.
          </p>
        </div>

        {/* Relative Canvas Area (6 Cards + Center Hub + Circuit) */}
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto">
          {/* Dynamic SVG Connector Lines Overlay (Desktop) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block overflow-visible">
            <defs>
              <filter
                id="ai-pulse-glow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Base Connector Lines */}
            {paths.map((p, idx) => (
              <path
                key={`base-${idx}`}
                d={p}
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
              />
            ))}

            {/* Energetic Outward Traveling Pulse Beams */}
            {pulseActive &&
              paths.map((p, idx) => (
                <motion.path
                  key={`pulse-${idx}`}
                  d={p}
                  fill="none"
                  stroke="#FE5A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#ai-pulse-glow)"
                  initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 0.32, 0.32, 0],
                    pathOffset: [0, 0.2, 0.75, 1],
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 0.82,
                    ease: "easeInOut",
                  }}
                />
              ))}
          </svg>

          {/* Branch Junction Diamond Sparks */}
          {junctions && (
            <div className="hidden lg:block pointer-events-none">
              {/* Left Junction Spark */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                style={{ left: junctions.left.x, top: junctions.left.y }}
              >
                <motion.div
                  animate={
                    pulseActive
                      ? {
                          scale: [1, 1.45, 1],
                          filter: [
                            "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                            "drop-shadow(0 0 10px rgba(248,88,0,1))",
                            "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                          ],
                        }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.45, delay: 0.35 }}
                >
                  <GridSpark className="w-3.5 h-3.5 text-primary" />
                </motion.div>
              </div>

              {/* Right Junction Spark */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                style={{ left: junctions.right.x, top: junctions.right.y }}
              >
                <motion.div
                  animate={
                    pulseActive
                      ? {
                          scale: [1, 1.45, 1],
                          filter: [
                            "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                            "drop-shadow(0 0 10px rgba(248,88,0,1))",
                            "drop-shadow(0 0 2px rgba(248,88,0,0.4))",
                          ],
                        }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.45, delay: 0.35 }}
                >
                  <GridSpark className="w-3.5 h-3.5 text-primary" />
                </motion.div>
              </div>
            </div>
          )}

          {/* Responsive Layout: 3 Columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            {/* Left Column: 3 Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 z-20">
              {LEFT_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  animate={{
                    borderColor: isEnergized
                      ? "var(--color-primary, #FE5A00)"
                      : "rgba(255, 255, 255, 0.1)",
                    boxShadow: isEnergized
                      ? "0 0 32px rgba(248, 88, 0, 0.28)"
                      : "0 0 0px rgba(0, 0, 0, 0)",
                  }}
                  transition={{ duration: 0.45 }}
                  className="bg-card rounded-2xl p-6 border border-border transition-colors duration-500 relative flex flex-col justify-center min-h-[160px] sm:min-h-[175px]"
                >
                  {/* Badge Icon */}
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(248,88,0,0.35)]">
                    <card.icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg sm:text-xl font-sans mt-4 mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans font-normal">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Center Column: Glowing Central Hub */}
            <div className="lg:col-span-2 flex items-center justify-center py-8 lg:py-0 z-30">
              <div
                ref={hubRef}
                className="relative flex items-center justify-center"
              >
                {/* Outward Expanding Energy Ripple Ring */}
                <AnimatePresence>
                  {pulseActive && (
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0.9 }}
                      animate={{ scale: 1.55, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.85, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full border-2 border-primary pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                {/* Soft Outer Ambient Glow */}
                <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl pointer-events-none scale-125" />

                {/* Central Orb with Creatibuz Symbol */}
                <motion.div
                  animate={
                    pulseActive
                      ? {
                          scale: [1, 1.08, 1],
                          boxShadow: [
                            "0 0 50px rgba(248,88,0,0.55)",
                            "0 0 90px rgba(248,88,0,0.9)",
                            "0 0 50px rgba(248,88,0,0.55)",
                          ],
                        }
                      : {
                          scale: 1,
                          boxShadow: "0 0 50px rgba(248,88,0,0.55)",
                        }
                  }
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-38 lg:h-38 rounded-full bg-primary flex items-center justify-center p-6 shadow-[0_0_60px_rgba(248,88,0,0.55)] cursor-pointer select-none"
                >
                  <Image
                    src="/creatibuz-symbol.png"
                    alt="Creatibuz Studio"
                    width={84}
                    height={84}
                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Right Column: 3 Cards */}
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 z-20">
              {RIGHT_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[idx + 3] = el;
                  }}
                  animate={{
                    borderColor: isEnergized
                      ? "var(--color-primary, #FE5A00)"
                      : "rgba(255, 255, 255, 0.1)",
                    boxShadow: isEnergized
                      ? "0 0 32px rgba(248, 88, 0, 0.28)"
                      : "0 0 0px rgba(0, 0, 0, 0)",
                  }}
                  transition={{ duration: 0.45 }}
                  className="bg-card rounded-2xl p-6 border border-border transition-colors duration-500 relative flex flex-col justify-center min-h-[160px] sm:min-h-[175px]"
                >
                  {/* Badge Icon */}
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(248,88,0,0.35)]">
                    <card.icon className="w-5 h-5 stroke-[2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg sm:text-xl font-sans mt-4 mb-2 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-sans font-normal">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
