"use client";

import React from "react";
import Image from "next/image";

const TEXT_ITEMS_ROW1 = [
  "Branding Design",
  "Logo Design",
  "UI UX Design",
  "UX Strategy",
  "UX Research",
  "SaaS Product",
  "Website Design",
  "Mobile App Design",
  "Dashboard Design",
  "Product Design",
  "Landing Page Design",
];

const TEXT_ITEMS_ROW2 = [
  "UX Strategy",
  "UX Research",
  "SaaS Product",
  "Website Design",
  "Mobile App Design",
  "Dashboard Design",
  "Product Design",
  "Landing Page Design",
  "Branding Design",
  "Logo Design",
  "UI UX Design",
];

// Row 1 Image Showcase (moving Right to Left)
const ROW1_IMAGES = [
  {
    src: "/marquee/ashray-dashboard.png",
    alt: "Ashray SaaS Dashboard",
  },
  {
    src: "/marquee/row1-2.png",
    alt: "Fitness Activity Mobile App",
  },
  {
    src: "/mockups/Mockup 15.png",
    alt: "MacBook Pro Product Showcase",
  },
  {
    src: "/marquee/row2-2.png",
    alt: "Job Board Analytics Dashboard",
  },
  {
    src: "/featureWorks/04 1.png",
    alt: "Food Delivery Mobile Experience",
  },
  {
    src: "/mockups/Jul 21, 2026, 03_47_59 PM 1.png",
    alt: "Studio Display Humanitarian Dashboard",
  },
];

// Row 2 Image Showcase (moving Left to Right)
const ROW2_IMAGES = [
  {
    src: "/marquee/row2-1.png",
    alt: "Villa House Green Laptop Mockup",
  },
  {
    src: "/marquee/row2-2.png",
    alt: "Job Board Dashboard Platform",
  },
  {
    src: "/mockups/Mobile app 04 1.png",
    alt: "Headset eCommerce Mobile App",
  },
  {
    src: "/featureWorks/Mockup 01 1.png",
    alt: "MacBook Industrial Grid Showcase",
  },
  {
    src: "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png",
    alt: "Digital Finance Planner Mobile UI",
  },
  {
    src: "/marquee/ashray-dashboard.png",
    alt: "Ashray Foundation Operating System",
  },
];

export default function WorkMarqueeSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden sm:py-8 flex flex-col gap-5 sm:gap-6 py-16 md:py-24 lg:py-32 select-none">
      <style>{`
        @keyframes marqueeLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marqueeRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 38s linear infinite;
        }

        .animate-marquee-left-fast {
          display: flex;
          width: max-content;
          animation: marqueeLeft 28s linear infinite;
        }

        .animate-marquee-right-fast {
          display: flex;
          width: max-content;
          animation: marqueeRight 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. TOP ORANGE TEXT MARQUEE (Right to Left) */}
      <div className="w-full bg-primary py-3 md:py-3.5 overflow-hidden shadow-md">
        <div className="animate-marquee-left flex items-center">
          {/* Double list for seamless 100% infinite loop */}
          {[...TEXT_ITEMS_ROW1, ...TEXT_ITEMS_ROW1, ...TEXT_ITEMS_ROW1, ...TEXT_ITEMS_ROW1].map(
            (item, idx) => (
              <div
                key={idx}
                className="flex items-center text-white text-sm sm:text-base tracking-wide shrink-0"
              >
                <span>{item}</span>
                <span className="mx-4 sm:mx-6 text-white/90 text-sm font-black">•</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* 2. UPPER IMAGE MARQUEE (Right to Left - Same as top text) */}
      <div className="w-full overflow-hidden py-1">
        <div className="animate-marquee-left marquee-track flex items-center gap-5 sm:gap-6 will-change-transform">
          {/* Duplicated list for seamless infinite loop */}
          {[...ROW1_IMAGES, ...ROW1_IMAGES].map((img, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[400px] md:w-[460px] lg:w-[490px] h-[230px] sm:h-[270px] md:h-[300px] lg:h-[315px] shrink-0 rounded-lg overflow-hidden bg-[#161616] border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 340px, 490px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. LOWER IMAGE MARQUEE (Left to Right - Opposite direction) */}
      <div className="w-full overflow-hidden py-1">
        <div className="animate-marquee-right marquee-track flex items-center gap-5 sm:gap-6 will-change-transform">
          {/* Duplicated list for seamless infinite loop */}
          {[...ROW2_IMAGES, ...ROW2_IMAGES].map((img, idx) => (
            <div
              key={idx}
              className="relative w-[340px] sm:w-[400px] md:w-[460px] lg:w-[490px] h-[230px] sm:h-[270px] md:h-[300px] lg:h-[315px] shrink-0 rounded-lg overflow-hidden bg-[#161616] border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 340px, 490px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 4. BOTTOM ORANGE TEXT MARQUEE (Left to Right - Same as bottom images) */}
      <div className="w-full bg-primary py-3 md:py-3.5 overflow-hidden shadow-md">
        <div className="animate-marquee-right flex items-center">
          {/* Double list for seamless 100% infinite loop */}
          {[...TEXT_ITEMS_ROW2, ...TEXT_ITEMS_ROW2, ...TEXT_ITEMS_ROW2, ...TEXT_ITEMS_ROW2].map(
            (item, idx) => (
              <div
                key={idx}
                className="flex items-center text-white text-sm sm:text-base tracking-wide shrink-0"
              >
                <span>{item}</span>
                <span className="mx-4 sm:mx-6 text-white/90 text-sm font-black">•</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
