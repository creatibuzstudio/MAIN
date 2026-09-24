"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GridSpark } from "@/app/components/ui/SectionContainer";

interface ServiceData {
  id: string;
  index: string;
  displayTitle: string;
  title: string;
  description: string;
  tags: string[];
  img: string;
}

const services: ServiceData[] = [
  {
    id: "branding",
    index: "01",
    displayTitle: "Branding Design",
    title: "Branding",
    description:
      "Strategic brand identities that help businesses establish credibility, differentiate themselves, and create lasting impressions.",
    tags: [
      "Brand Strategy",
      "Visual Identity",
      "Logo Design",
      "Creative Direction",
      "Strategy",
    ],
    img: "/services/01.png",
  },
  {
    id: "uiux",
    index: "02",
    displayTitle: "UI/UX Design",
    title: "UI/UX Design",
    description:
      "User-centric interfaces and intuitive digital experiences engineered for maximum engagement and seamless usability.",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design System",
    ],
    img: "/Jevxo/13.png",
  },
  {
    id: "research",
    index: "03",
    displayTitle: "UX Research & Strategy",
    title: "UX Research & Strategy",
    description:
      "Deep-dive user interviews, competitor auditing, and heuristic analysis to validate digital product decisions.",
    tags: [
      "Auditing",
      "User Journey",
      "Market Research",
      "Product Strategy",
    ],
    img: "/mockups/Mockup 15.png",
  },
  {
    id: "saas",
    index: "04",
    displayTitle: "SaaS Product Design",
    title: "SaaS Product Design",
    description:
      "High-converting dashboards, complex data visualizations, and scalable SaaS workflows crafted for growth.",
    tags: [
      "B2B SaaS",
      "Design Systems",
      "Web App UI",
      "Analytics UI",
    ],
    img: "/Jevxo/09.png",
  },
  {
    id: "app",
    index: "05",
    displayTitle: "App Development",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications engineered with high performance, fluid animations, and robust code.",
    tags: [
      "React Native",
      "iOS & Android",
      "API Integration",
      "Performance",
    ],
    img: "/mockups/Mobile app 04 1.png",
  },
  {
    id: "web",
    index: "06",
    displayTitle: "Web Development",
    title: "Web Development",
    description:
      "Pixel-perfect, ultra-fast Jamstack and full-stack web applications built with Next.js, Tailwind, and cutting-edge tech.",
    tags: [
      "Next.js",
      "Full Stack",
      "Framer Motion",
      "SEO & Speed",
    ],
    img: "/Jevxo/04.png",
  },
];

export default function OurService() {
  const [activeService, setActiveService] = useState<number>(0);

  const current = services[activeService];

  return (
    <div id="service">
      {/* Middle Divider: Static & perfectly anchored from top-0 to bottom-0 of the section */}
      <div className="hidden lg:block absolute left-[35%] top-0 bottom-0 w-px bg-white/[0.12] pointer-events-none z-10">
        {/* Top intersection spark: Centered directly on top-0, aligned with top section divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
        </div>
        {/* Bottom intersection spark: Centered directly on bottom-0, aligned with bottom section divider */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-500 hover:text-[#F85800] transition-colors" />
        </div>
      </div>

      <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
        {/* Left Column: Dynamic Preview Area (lg:col-span-5) */}
        <div className="relative lg:col-span-4 lg:pr-5">
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                {/* Image Container: Aspect ratio ~ 4:3 with rounded corners and border */}
                <div className="relative w-full aspect-[5/3] rounded-xl overflow-hidden border border-white/10 bg-background shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Title */}
                <h3 className="text-primary-text font-semibold text-xl sm:text-2xl mt-13 font-sans">
                  {current.title}
                </h3>

                {/* Description */}
                <p className="text-primary-text text-sm sm:text-base leading-relaxed max-w-md mt-3 font-sans min-h-[48px]">
                  {current.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-card text-primary-text text-xs px-3.5 py-1.5 rounded-full font-medium font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Section Header & Service List (lg:col-span-7) */}
        <div className="lg:col-span-7 lg:pl-10 xl:pl-14 flex flex-col justify-center">
          {/* Section Pill */}
          <div className="mb-6 sm:mb-8">
            <span className="text-[#F85800] text-lg md:text-xl lg:text-2xl font-semibold tracking-wide font-sans inline-block">
              [ Our Services ]
            </span>
          </div>

          {/* Service List */}
          <div className="flex flex-col w-full">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className="group cursor-pointer py-2 md:py-4 transition-colors duration-200"
                >
                  <div className="flex items-baseline gap-3.5 sm:gap-5">
                    <span
                      className={`font-mono text-sm sm:text-base md:text-lg font-medium transition-colors duration-200 shrink-0 ${
                        isActive
                          ? "text-[#F85800]"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      [{service.index}]
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[50px] font-bold tracking-tight font-sans transition-colors duration-200 ${
                        isActive
                          ? "text-[#F85800]"
                          : "text-zinc-600 group-hover:text-zinc-400"
                      }`}
                    >
                      {service.displayTitle}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}