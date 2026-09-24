"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  link: string;
  tag?: string;
  images: {
    hero: string;
    rightTop: string;
    rightBottom: string;
  };
  metrics: ProjectMetric[];
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "dignity-health",
    title: "Dignity Health – A Modern Healthcare & Telemedicine Experience",
    description:
      "An intuitive web & mobile platform built for seamless patient appointments, remote consultations, and rapid health record access with HIPAA compliance.",
    link: "https://dignityhealth.org",
    tag: "Healthcare & Telemedicine",
    images: {
      hero: "/featureWorks/Mockup 14.png",
      rightTop: "/featureWorks/Hand and iPhone 16 Pro.png",
      rightBottom: "/featureWorks/iPad Pro.png",
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
  {
    id: "ashray-green",
    title: "Ashray – Empowering Humanitarian & NGO Operations Platform",
    description:
      "Comprehensive cloud ERP tailored for non-profit governance, real-time donation allocation, volunteer coordination, and emergency response management.",
    link: "#contact",
    tag: "NGO & Humanitarian ERP",
    images: {
      hero: "/featureWorks/Mockup 02 1.png",
      rightTop: "/featureWorks/Mockup 01 1.png",
      rightBottom: "/featureWorks/Mockup 08 1.png",
    },
    metrics: [
      { value: "4.8x", label: "Faster Relief Delivery" },
      { value: "65%", label: "Reduction in Admin Overhead" },
      { value: "850K+", label: "Lives Positively Impacted" },
    ],
  },
  {
    id: "crave-habit",
    title: "Crave – A Habit Tracking & Mood Support Experience",
    description:
      "Interactive mobile and web ecosystem providing micro-habit streaks, behavioral wellness analytics, and community-driven motivational journeys.",
    link: "#contact",
    tag: "Habit Tracker & Wellness App",
    images: {
      hero: "/featureWorks/05 5.png",
      rightTop: "/featureWorks/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png",
      rightBottom: "/featureWorks/04 1.png",
    },
    metrics: [
      { value: "84%", label: "User Habit Retention (30-Day)" },
      { value: "3.5x", label: "Daily Engagement Increase" },
      { value: "500K+", label: "Milestones Accomplished" },
    ],
  },
];

interface CardItemProps {
  project: FeaturedProject;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function ProjectCard({ project, index, total, progress }: CardItemProps) {
  const isLast = index === total - 1;

  // Staggered scroll range for the card scale and darkening overlay
  // Card 0 scales down as Card 1 stacks (progress 0.1 -> 0.5)
  // Card 1 scales down as Card 2 stacks (progress 0.5 -> 0.9)
  // Card 2 remains at 100% scale
  const startProgress = (index * 0.4) + 0.1;
  const endProgress = ((index + 1) * 0.4) + 0.1;

  const targetScale = 1 - (total - 1 - index) * 0.04; // 0.92, 0.96, 1.0

  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [startProgress, endProgress],
    isLast ? [1, 1] : [1, targetScale]
  );

  const overlayOpacity = useTransform(
    progress,
    isLast ? [0, 1] : [startProgress, endProgress],
    isLast ? [0, 0] : [0, 0.45]
  );

  // Progressive sticky top offset creating the physical deck stack effect
  const stickyTop = `calc(4.5rem + ${index * 24}px)`;

  return (
    <div
      className="sticky w-full mb-16 sm:mb-24 lg:mb-32 last:mb-0"
      style={{
        top: stickyTop,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className="relative w-full bg-[#0E0E12] rounded-[24px] sm:rounded-[32px] border border-white/10 p-5 sm:p-7 md:p-8 lg:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Dimming overlay as subsequent cards stack on top */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black/60 pointer-events-none rounded-[24px] sm:rounded-[32px] z-30 transition-opacity duration-300"
        />

        {/* Visual Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-6 sm:mb-8">
          {/* Left Column: Hero Mockup (~65% / 8 cols) */}
          <div className="lg:col-span-8 relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141418] group/hero">
            <Image
              src={project.images.hero}
              alt={`${project.title} - Main Display`}
              fill
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover/hero:scale-[1.02]"
              priority={index === 0}
            />
            {/* Subtle inner gloss gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: 2 Stacked Secondary Mockups (~35% / 4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {/* Top Right Mockup */}
            <div className="relative w-full h-[120px] sm:h-[160px] md:h-[190px] lg:h-[218px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141418] group/top">
              <Image
                src={project.images.rightTop}
                alt={`${project.title} - Mobile Preview`}
                fill
                sizes="(max-width: 1024px) 50vw, 384px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover/top:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Right Mockup */}
            <div className="relative w-full h-[120px] sm:h-[160px] md:h-[190px] lg:h-[218px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141418] group/bot">
              <Image
                src={project.images.rightBottom}
                alt={`${project.title} - Tablet Preview`}
                fill
                sizes="(max-width: 1024px) 50vw, 384px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover/bot:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Project Info & CTA Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug font-sans">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed mt-2 font-sans">
              {project.description}
            </p>
          </div>

          {/* View Project Button */}
          <Link
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-between sm:justify-start gap-4 bg-[#F85800] hover:bg-[#ff6914] text-white font-medium text-sm sm:text-base pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(248,88,0,0.45)] hover:shadow-[0_0_45px_rgba(248,88,0,0.65)] hover:-translate-y-0.5 group/btn shrink-0"
          >
            <span>View Project</span>
            <div className="w-8 h-8 rounded-full bg-white text-[#F85800] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45 shadow-sm">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-5 mt-6 border-t border-white/10">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-white font-mono font-medium text-sm sm:text-base md:text-lg tracking-tight bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md shrink-0">
                [ {metric.value} ]
              </span>
              <span className="text-zinc-400 text-xs sm:text-sm font-medium leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function FeatureWorks({
  projects = FEATURED_PROJECTS,
  className = "",
}: {
  projects?: FeaturedProject[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div id="feature-works" className={`relative w-full ${className}`}>
      {/* Header Area */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
        <span className="text-[#F85800] text-sm sm:text-base font-semibold tracking-wider font-sans mb-3 block">
          [ Feature Work ]
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.18] max-w-2xl mx-auto font-sans">
          Explore my projects to experience innovative{" "}
          <span className="inline md:block">design and uncover creative solution</span>
        </h2>
      </div>

      {/* Scroll Stacking Cards Container */}
      <div ref={containerRef} className="relative w-full flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
