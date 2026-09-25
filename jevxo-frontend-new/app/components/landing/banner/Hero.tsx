"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { bannerApi } from "@/api/bannerApi";

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
    "/mockups/Mockup Ribbon 1.png",
    "/mockups/ChatGPT Image Aug 23, 2026, 06_06_54 PM 1.png",
    "/mockups/Mockup 15.png",
    "/mockups/Mockup 3 1.png",
  ];

  const defaultRow2 = [
    "/mockups/Mobile app 04 1.png",
    "/mockups/ChatGPT Image Aug 22, 2026, 10_11_18 PM 1.png",
    "/mockups/Jul 21, 2026, 03_47_59 PM 1.png",
    "/mockups/ChatGPT Image Aug 22, 2026, 08_54_48 PM 1.png",
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
    <div className="w-full flex flex-col bg-background">
      {/* Hero Container */}
      <div className="relative w-full overflow-hidden bg-background">
        {/* Responsive 75px x 75px Gridlines with Tinted Accent Cells */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none [mask-image:radial-gradient(ellipse_80%_70%_at_50%_42%,black_40%,transparent_90%)]">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundSize: "75px 75px",
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              /* Perfectly aligns grid intersection to screen center horizontal axis */
              backgroundPosition: "center top",
            }}
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[75px] left-[calc(50%-487.5px)] w-[75px] h-[75px] bg-white/[0.04]" />{" "}
              <div className="absolute top-[150px] left-[calc(50%-262.5px)] w-[75px] h-[75px] bg-white/[0.025]" />{" "}
              <div className="absolute top-[225px] left-[calc(50%-562.5px)] w-[75px] h-[75px] bg-white/[0.05]" />{" "}
              <div className="absolute top-[225px] left-[calc(50%-112.5px)] w-[75px] h-[75px] bg-white/[0.02]" />{" "}
              <div className="absolute top-[300px] left-[calc(50%-412.5px)] w-[75px] h-[75px] bg-white/[0.035]" />{" "}
              <div className="absolute top-[375px] left-[calc(50%-487.5px)] w-[75px] h-[75px] bg-white/[0.045]" />{" "}
              <div className="absolute top-[450px] left-[calc(50%-187.5px)] w-[75px] h-[75px] bg-white/[0.025]" />{" "}
              <div className="absolute top-[525px] left-[calc(50%-337.5px)] w-[75px] h-[75px] bg-white/[0.03]" />{" "}
              <div className="absolute top-[75px] left-[calc(50%+187.5px)] w-[75px] h-[75px] bg-white/[0.03]" />{" "}
              <div className="absolute top-[150px] left-[calc(50%+412.5px)] w-[75px] h-[75px] bg-white/[0.025]" />{" "}
              <div className="absolute top-[150px] left-[calc(50%+112.5px)] w-[75px] h-[75px] bg-white/[0.04]" />{" "}
              <div className="absolute top-[225px] left-[calc(50%+262.5px)] w-[75px] h-[75px] bg-white/[0.05]" />{" "}
              <div className="absolute top-[300px] left-[calc(50%+487.5px)] w-[75px] h-[75px] bg-white/[0.035]" />{" "}
              <div className="absolute top-[375px] left-[calc(50%+187.5px)] w-[75px] h-[75px] bg-white/[0.045]" />{" "}
              <div className="absolute top-[450px] left-[calc(50%+337.5px)] w-[75px] h-[75px] bg-white/[0.02]" />{" "}
              <div className="absolute top-[525px] left-[calc(50%+112.5px)] w-[75px] h-[75px] bg-white/[0.035]" />{" "}
            </div>
          </div>
        </div>

        {/* Center ambient radial light for depth */}
        <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_950px_500px_at_50%_40%,rgba(255,255,255,0.025)_0%,rgba(8,8,8,0)_80%)] pointer-events-none z-0" />

        {/* Main Hero Content */}
        <section className="relative z-10 w-full">
          <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-41.5 pb-16 md:pb-20 lg:pb-24 w-full max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              whileHover={{ scale: 1.04 }}
              className="relative p-[1px] inline-flex items-center justify-center overflow-hidden rounded-full mb-8 sm:mb-10 cursor-pointer group transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.05)] hover:shadow-[0_0_25px_rgba(254,90,0,0.35)]"
            >
              {/* 1. Continuous Spinning Brand Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5, 
                  ease: "linear",
                }}
                className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] origin-center bg-[conic-gradient(from_0deg,transparent_30%,#FE5A00_50%,transparent_70%,#FE5A00_100%)] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 bg-[#1F1F1F] hover:bg-[#141414] px-2.5  pr-4 py-2 rounded-full transition-colors duration-300">
                <Image
                  src="/hero1.png"
                  alt="SaaS Tool Stack"
                  width={150}
                  height={22}
                  className="h-4 sm:h-[25px] w-auto object-contain shrink-0 brightness-110"
                />
                <span className="text-[12px] sm:text-[13px] font-medium text-gray-200 tracking-tight font-sans">
                  Helped 50+ SaaS founders & startups
                </span>
              </div>
            </motion.div>

            {/* Main Headline (H1) - Medium Weight Typography with Italic Serif Ampersands */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal md:font-medium font-sans text-white text-center leading-[1.12] sm:leading-[1.14] tracking-[-0.03em] max-w-5xl mx-auto"
            >
              We Are UI/UX Design{" "}
              <span className="font-serif italic font-normal text-white">
                &amp;
              </span>
              <br />
              Development Partner For SaaS
              <br />
              Founders{" "}
              <span className="font-serif italic font-normal text-white">
                &amp;
              </span>{" "}
              Startups
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mt-6 text-zinc-400 text-center font-normal text-base sm:text-lg md:text-[18px] lg:text-[19px] leading-[1.6] max-w-2xl mx-auto font-sans"
            >
              A full-service UI/UX and development agency helping startups and
              businesses create fast, scalable, and user-focused digital
              products.
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
                className="relative group inline-flex items-center justify-center"
              >
                {/* Ambient luminous warm orange glow halo behind CTA matching Figma */}
                <div className="absolute -inset-3 sm:-inset-4 bg-[#F85800]/50 rounded-full blur-2xl group-hover:bg-[#F85800]/75 group-hover:blur-3xl transition-all duration-500 pointer-events-none" />

                <Link
                  href="https://calendly.com/jevxo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-3.5 bg-[#F85800] hover:bg-[#ff6814] text-white pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-3 sm:py-3.5 rounded-full font-medium text-[15px] sm:text-[16px] shadow-[0_0_30px_rgba(248,88,0,0.35)] transition-all duration-300 font-sans"
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
        <section className="relative z-10 w-full pt-8 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
          {/* Edge fade gradient mask for ultra smooth seamless scrolling */}
          <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              {/* Row 1: Right to Left (animate-marquee) */}
              <div className="overflow-hidden w-full flex group">
                <div className="flex items-center gap-4 sm:gap-5 animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
                  {row1List.map((src, index) => (
                    <div
                      key={`row1-${index}`}
                      className="relative flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[200px] sm:h-[270px] md:h-[310px] lg:h-[330px] rounded-lg overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
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
                      className="relative flex-shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[200px] sm:h-[270px] md:h-[310px] lg:h-[330px] rounded-lg overflow-hidden border border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.7)] bg-[#101012] transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_rgba(0,0,0,0.9)]"
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