"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { bannerApi } from "@/api/bannerApi";

const GRID_COLS = 24;
const GRID_ROWS = 16;
const gridCells = Array.from({ length: GRID_COLS * GRID_ROWS });

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: i * 0.14, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    },
  }),
};

export default function Hero() {
  const defaultRow1 = [
    "/Jevxo/01.png",
    "/Jevxo/02.png",
    "/Jevxo/03.png",
    "/Jevxo/04.png",
    "/Jevxo/05.png",
  ];

  const defaultRow2 = [
    "/Jevxo/06.png",
    "/Jevxo/07.png",
    "/Jevxo/08.png",
    "/Jevxo/09.png",
    "/Jevxo/10.png",
  ];

  const [row1, setRow1] = useState<string[]>(defaultRow1);
  const [row2, setRow2] = useState<string[]>(defaultRow2);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await bannerApi.getAllBanners();

        let fetchedBanners: any[] = [];
        if (Array.isArray(data)) {
          fetchedBanners = data;
        } else if (data && Array.isArray(data.data)) {
          fetchedBanners = data.data;
        }

        if (fetchedBanners.length > 0) {
          fetchedBanners.sort((a, b) => (a.order || 0) - (b.order || 0));
          const activeBanners = fetchedBanners.filter(b => b.isActive !== false);
          const urls = activeBanners.map(b => b.photoUrl || b.image || b.url).filter(Boolean);

          if (urls.length > 0) {
            const half = Math.ceil(urls.length / 2);
            setRow1(urls.slice(0, half));
            setRow2(urls.slice(half));
          }
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };
    fetchBanners();
  }, []);

  // Triplicating arrays to ensure a smooth, unbroken infinite marquee animation
  const row1List = [...row1, ...row1, ...row1];
  const row2List = [...row2, ...row2, ...row2];

  return (
    <div className="w-full flex flex-col bg-[#080808]">
      {/* Hero + Marquee wrapped together with seamless dark background & grid */}
      <div className="relative w-full overflow-hidden bg-[#080808]">

        {/* Subtle Tinted Grid Tiles matching Figma aesthetic */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_40%,transparent_95%)]">
          <div className="absolute top-[160px] left-[15%] w-[80px] h-[80px] bg-white/[0.02]" />
          <div className="absolute top-[240px] left-[22%] w-[80px] h-[80px] bg-white/[0.03]" />
          <div className="absolute top-[320px] left-[10%] w-[80px] h-[80px] bg-white/[0.015]" />
          <div className="absolute top-[160px] right-[18%] w-[80px] h-[80px] bg-white/[0.02]" />
          <div className="absolute top-[240px] right-[12%] w-[80px] h-[80px] bg-white/[0.035]" />
          <div className="absolute top-[400px] right-[20%] w-[80px] h-[80px] bg-white/[0.02]" />
          <div className="absolute top-[480px] left-[25%] w-[80px] h-[80px] bg-white/[0.025]" />
          <div className="absolute top-[560px] right-[28%] w-[80px] h-[80px] bg-white/[0.018]" />
        </div>

        {/* Dark Grid Background Pattern with subtle radial mask */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none z-[1] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_45%,transparent_95%)] bg-[length:75px_75px] sm:bg-[length:80px_80px]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          }}
        />

        {/* Interactive grid cells with soft warm hover blooms */}
        <div
          className="absolute inset-0 z-[2] grid pointer-events-none grid-cols-[repeat(24,75px)] auto-rows-[75px] sm:grid-cols-[repeat(24,80px)] sm:auto-rows-[80px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,black_40%,transparent_95%)]"
        >
          {gridCells.map((_, i) => (
            <div
              key={i}
              className="pointer-events-auto transition-[background-size] duration-500 ease-out [background-repeat:no-repeat] [background-position:center] [background-size:0%_0%] hover:[background-size:160%_160%]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(248,88,0,0.18) 0%, rgba(255,255,255,0.03) 50%, transparent 75%)",
              }}
            />
          ))}
        </div>

        {/* Subtle center ambient radial light */}
        <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_900px_450px_at_50%_35%,rgba(255,255,255,0.035)_0%,rgba(8,8,8,0)_80%)] pointer-events-none z-0" />

        {/* Top Hero Section */}
        <section className="relative z-10 w-full">
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-24 w-full max-w-[95%] lg:max-w-6xl mx-auto">
            
            {/* Top Social Proof Pill Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-md px-3.5 sm:px-4 py-1.5 mb-8 sm:mb-10 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] group transition-all duration-300 hover:border-white/20"
            >
              <Image
                src="/hero1.png"
                alt="SaaS Tool Stack"
                width={100}
                height={22}
                className="h-4 sm:h-[18px] w-auto object-contain shrink-0 brightness-95"
              />
              <span className="text-[12px] sm:text-[13px] font-normal text-gray-300 tracking-tight">
                Helped 50+ SaaS founders &amp; startup
              </span>
            </motion.div>

            {/* Main Headline (H1) */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl sm:text-5xl md:text-[64px] lg:text-[74px] font-bold text-white text-center leading-[1.12] sm:leading-[1.14] tracking-[-0.03em] max-w-4xl mx-auto"
            >
              We Are UI/UX Design{" "}
              <span className="font-serif italic font-normal text-white">&amp;</span>
              <br />
              Development Partner For SaaS
              <br />
              Founders{" "}
              <span className="font-serif italic font-normal text-white">&amp;</span>{" "}
              Startups
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-gray-400 text-center font-normal text-sm sm:text-base md:text-[18px] lg:text-[19px] leading-[1.6] max-w-2xl mx-auto"
            >
              A full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.
            </motion.p>

            {/* Primary CTA Button */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-10 sm:mt-12 flex justify-center w-full"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative group"
              >
                {/* Ambient luminous glow halo behind CTA matching Figma */}
                <div className="absolute -inset-3 sm:-inset-4 bg-[#F85800]/45 rounded-full blur-2xl group-hover:bg-[#F85800]/70 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

                <Link
                  href="https://calendly.com/jevxo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-3.5 bg-[#F85800] hover:bg-[#ff6814] text-white pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-3 sm:py-3.5 rounded-full font-medium text-[15px] sm:text-[16px] shadow-[0_0_30px_rgba(248,88,0,0.35)] transition-all duration-300"
                >
                  <span className="tracking-tight">Schedule a Meeting</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-[#F85800] shrink-0 shadow-sm group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </main>
        </section>

        {/* Hero Bottom Showcase Marquee Section - Dual Infinite Marquee */}
        <section className="relative z-10 w-full pt-4 pb-16 sm:pb-20 overflow-hidden">
          {/* Edge fade gradient mask for ultra smooth seamless scrolling */}
          <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              {/* Row 1: Right to Left (animate-marquee) */}
              <div className="overflow-hidden w-full flex group">
                <div className="flex items-center gap-4 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
                  {row1List.map((src, index) => (
                    <div
                      key={`row1-${index}`}
                      className="relative flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[200px] sm:h-[270px] md:h-[310px] lg:h-[330px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                    >
                      <Image
                        src={src}
                        alt={`Portfolio showcase ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 420px, 520px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: Left to Right (animate-marquee-reverse) */}
              <div className="overflow-hidden w-full flex group">
                <div className="flex items-center gap-4 sm:gap-5 animate-marquee-reverse group-hover:[animation-play-state:paused] will-change-transform">
                  {row2List.map((src, index) => (
                    <div
                      key={`row2-${index}`}
                      className="relative flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[200px] sm:h-[270px] md:h-[310px] lg:h-[330px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
                    >
                      <Image
                        src={src}
                        alt={`Portfolio showcase ${index + 6}`}
                        fill
                        sizes="(max-width: 768px) 420px, 520px"
                        className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}