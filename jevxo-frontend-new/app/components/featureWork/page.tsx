"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/app/components/ui/ScrollStack";
import SectionContainer from "@/app/components/ui/SectionContainer";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  link: string;
  tag?: string;
  images: {
    hero: ProjectImage;
    rightTop: ProjectImage;
    rightBottom: ProjectImage;
  };
  metrics: ProjectMetric[];
}

export const CARD_BG_COLORS = [
  "#1D050F", // 1st card: deep wine / dark crimson
  "#051D1B", // 2nd card: deep emerald / dark teal
  "#281B06", // 3rd card: deep amber / warm dark brown
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "dignity-health",
    title: "Crave – A Habit Tracking &\nMood Support Experience",
    description:
      "Crave Is A Habit-Tracking And Mood-Support App Designed To Help Users Break Unhealthy Habits And Build Healthier Ones Through Mindful Actions. It Combines Mood Tracking, Guided Activities, AI Support, And Habit-Building Tools To Create A Supportive Journey Toward Positive Change.",
    link: "https://dignityhealth.org",
    tag: "Healthcare & Telemedicine",
    images: {
      hero: {
        src: "/featureWorks/Mockup 14.png",
        width: 2079,
        height: 1608,
      },
      rightTop: {
        src: "/featureWorks/Hand and iPhone 16 Pro.png",
        width: 999,
        height: 774,
      },
      rightBottom: {
        src: "/featureWorks/iPad Pro.png",
        width: 999,
        height: 777,
      },
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
      hero: {
        src: "/featureWorks/Mockup 02 1.png",
        width: 2052,
        height: 1539,
      },
      rightTop: {
        src: "/featureWorks/Mockup 01 1.png",
        width: 1008,
        height: 756,
      },
      rightBottom: {
        src: "/featureWorks/Mockup 08 1.png",
        width: 1008,
        height: 729,
      },
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
      hero: {
        src: "/featureWorks/05 5.png",
        width: 2055,
        height: 1542,
      },
      rightTop: {
        src: "/featureWorks/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png",
        width: 996,
        height: 747,
      },
      rightBottom: {
        src: "/featureWorks/04 1.png",
        width: 999,
        height: 747,
      },
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
      className={`relative w-full ${className}`}
    >

      {/* ReactBits ScrollStack Animation */}
      <ScrollStack
        className="w-full"
        itemDistance={750}
        itemScale={0.05}
        itemStackDistance={22}
        stackPosition="70px"
        useWindowScroll={true}
        bottomOffset={60}
      >
        {projects.map((project, index) => {
          const bgColor = CARD_BG_COLORS[index % CARD_BG_COLORS.length];

          return (
            <ScrollStackItem
              key={project.id}
              itemClassName="!h-auto !p-0 !my-0 !rounded-none !shadow-none bg-transparent"
            >
              {/* Full-width screen background color */}
              <div
                className="w-full relative transition-colors duration-300"
                style={{ backgroundColor: bgColor }}
              >
                {/* SectionContainer with max-w-7xl framing */}
                <SectionContainer
                  showTopBorder={true}
                  showBottomBorder={true}
                  crossMarkers={true}
                  className="!p-0 !py-0 !px-0"
                  containerClassName="w-full overflow-visible"
                >
                  <div
                    className={`relative w-full px-5 sm:px-8 md:px-12 py-16 md:py-24 lg:py-32`}
                  >
                    {/* Header Area ONLY on First Card */}
                    {index === 0 && (
                      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                        <span className="text-primary text-base md:text-xl font-medium mb-3">
                          [ Feature Work ]
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.18] max-w-5xl mx-auto">
                          Explore my projects to experience innovative{" "}
                          <span className="inline md:block">
                            design and uncover creative solution
                          </span>
                        </h2>
                      </div>
                    )}

                    {/* Visual Showcase Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 w-full items-stretch">
                      {/* Left Column: Hero Mockup (8 cols) */}
                      <div className="lg:col-span-8 flex flex-col justify-center">
                        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group/hero">
                          <Image
                            src={project.images.hero.src}
                            alt="Main Project Display"
                            width={project.images.hero.width}
                            height={project.images.hero.height}
                            priority={index === 0}
                            className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/hero:scale-[1.01]"
                            sizes="(max-width: 1024px) 100vw, 850px"
                          />
                        </div>
                      </div>

                      {/* Right Column: 2 Stacked Secondary Mockups (4 cols) */}
                      <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col lg:justify-between gap-4 sm:gap-5 lg:gap-6">
                        {/* Top Right Mockup */}
                        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl group/top">
                          <Image
                            src={project.images.rightTop.src}
                            alt="Secondary Preview Top"
                            width={project.images.rightTop.width}
                            height={project.images.rightTop.height}
                            className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/top:scale-[1.02]"
                            sizes="(max-width: 1024px) 50vw, 420px"
                          />
                        </div>

                        {/* Bottom Right Mockup */}
                        <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl group/bot">
                          <Image
                            src={project.images.rightBottom.src}
                            alt="Secondary Preview Bottom"
                            width={project.images.rightBottom.width}
                            height={project.images.rightBottom.height}
                            className="w-full h-auto block object-contain select-none transition-transform duration-700 ease-out group-hover/bot:scale-[1.02]"
                            sizes="(max-width: 1024px) 50vw, 420px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Info & CTA Row */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mt-10 md:mt-14 lg:mt-16 w-full">
                      {/* Left: Title & Description */}
                      <div className="flex flex-col max-w-4xl">
                        <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.2] font-sans whitespace-pre-line">
                          {project.title}
                        </h3>
                        <p className="text-base md:text-xl text-primary-text leading-relaxed mt-4 md:mt-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Right: View Project Button */}
                      <div className="shrink-0 pt-1">
                        <Link
                          href={project.link}
                          target={
                            project.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            project.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-flex items-center gap-3.5 bg-primary hover:bg-primary/90 text-white font-medium text-sm sm:text-base pl-6 pr-1.5 py-1.5 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(254,90,0,0.55)] hover:shadow-[0_0_45px_rgba(254,90,0,0.8)] hover:-translate-y-0.5 group/btn"
                        >
                          <span className="text-sm sm:text-base tracking-wide">
                            View Project
                          </span>
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-[#FE5A00] flex items-center justify-center transition-transform duration-300 group-hover/btn:rotate-45 shadow-sm">
                            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10 md:mt-14 lg:mt-16 w-full">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col items-start">
                          <span className="text-xl md:text-2xl lg:text-[28px] font-bold text-foreground tracking-tight">
                            {metric.value}
                          </span>
                          <span className="text-sm md:text-base lg:text-lg text-primary-text font-normal tracking-tight leading-tight mt-1.5">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionContainer>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}
