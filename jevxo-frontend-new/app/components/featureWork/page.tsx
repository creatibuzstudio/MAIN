"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/app/components/ui/ScrollStack";

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
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
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
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "#contact",
    tag: "NGO & Humanitarian ERP",
    images: {
      hero: "/featureWorks/Mockup 02 1.png",
      rightTop: "/featureWorks/Mockup 01 1.png",
      rightBottom: "/featureWorks/Mockup 08 1.png",
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
  {
    id: "crave-habit",
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "#contact",
    tag: "Habit Tracker & Wellness App",
    images: {
      hero: "/featureWorks/05 5.png",
      rightTop: "/featureWorks/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png",
      rightBottom: "/featureWorks/04 1.png",
    },
    metrics: [
      { value: "92%", label: "Workflow Efficiency" },
      { value: "78%", label: "Team Productivity" },
      { value: "1.2M+", label: "Client Workflows Optimized" },
    ],
  },
];

export default function FeatureWorksPage({
  projects = FEATURED_PROJECTS,
  className = "",
}: {
  projects?: FeaturedProject[];
  className?: string;
}) {
  return (
    <div
      id="feature-works"
      className={`relative py-16 md:py-24 lg:py-32 ${className}`}
    >
      {/* Header Area */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">
        <span className="text-primary text-lg md:text-xl mb-3">
          [ Feature Work ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-primary-text tracking-tight leading-[1.18] max-w-5xl mx-auto">
          Explore my projects to experience innovative{" "}
          <span className="inline md:block">
            design and uncover creative solution
          </span>
        </h2>
      </div>

      {/* ReactBits ScrollStack Animation */}
      <ScrollStack
        className="w-full"
        innerClassName="pt-2 sm:pt-4"
        itemDistance={750}
        itemScale={0.05}
        itemStackDistance={22}
        stackPosition="70px"
        useWindowScroll={true}
        bottomOffset={60}
      >
        {projects.map((project, index) => (
          <ScrollStackItem
            key={project.id}
            itemClassName="!h-auto !p-0 !my-0 !rounded-none !shadow-none bg-transparent"
          >
            <div className="relative w-full bg-nav rounded-lg px-4 py-10 md:px-8 md:py-16 mb-10 md:mb-14 lg:mb-16">
              {/* Visual Showcase Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-6 sm:mb-8 max-w-7xl mx-auto">
                {/* Left Column: Hero Mockup (~65% / 8 cols) */}
                <div className="lg:col-span-8 relative w-full rounded-lg overflow-hidden border border-white/[0.08] bg-background group/hero">
                  <Image
                    src={project.images.hero}
                    alt="Main Project Display"
                    fill
                    sizes="(max-width: 1024px) 100vw, 768px"
                    className="object-contain transition-transform duration-700 ease-out group-hover/hero:scale-[1.02]"
                    priority={index === 0}
                  />
                  {/* Subtle inner gloss gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right Column: 2 Stacked Secondary Mockups (~35% / 4 cols) */}
                <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
                  {/* Top Right Mockup */}
                  <div className="relative w-full h-[110px] sm:h-[150px] md:h-[185px] lg:h-[210px] rounded-lg overflow-hidden border border-white/[0.08] bg-[#141418] group/top">
                    <Image
                      src={project.images.rightTop}
                      alt="Mobile Preview"
                      fill
                      sizes="(max-width: 1024px) 50vw, 384px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/top:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom Right Mockup */}
                  <div className="relative w-full h-[110px] sm:h-[150px] md:h-[185px] lg:h-[210px] rounded-lg overflow-hidden border border-white/[0.08] bg-[#141418] group/bot">
                    <Image
                      src={project.images.rightBottom}
                      alt="Tablet Preview"
                      fill
                      sizes="(max-width: 1024px) 50vw, 384px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover/bot:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Project Info & CTA Row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto">
                {/* Left: Title & Description */}
                <div className="flex flex-col max-w-5xl">
                  <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary-text tracking-tight leading-[1.2] font-sans whitespace-pre-line">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-2xl text-primary-text -leading-[1] mt-6 md:mt-9">
                    {project.description}
                  </p>
                </div>

                {/* Right: View Project Button */}
                <div className="shrink-0 pt-1">
                  <Link
                    href={project.link}
                    target={
                      project.link.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-3.5 bg-primary hover:bg-primary text-foreground font-medium text-sm sm:text-base pl-6 pr-1 py-1 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(254,90,0,0.55)] hover:shadow-[0_0_45px_rgba(254,90,0,0.8)] hover:-translate-y-0.5 group/btn"
                  >
                    <span className="text-sm sm:text-base tracking-wide">
                      View Project
                    </span>
                    <div className="w-9 h-9 rounded-full bg-foreground text-[#FE5A00] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45 shadow-sm">
                      <ArrowUpRight className="w-6 h-6 stroke-[1.5]" />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Metrics Row (3 columns: Big number on top, label below) */}
              <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 lg:mt-20 max-w-7xl mx-auto">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col items-start">
                    <span className="text-xl md:text-2xl lg:text-[28px] text-primary-text tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-lg md:text-xl lg:text-2xl text-primary-text font-normal tracking-tight leading-tight mt-1.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
