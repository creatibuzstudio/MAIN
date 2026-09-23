"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { partnerApi } from "@/api/partnerApi";
import SectionContainer from "@/app/components/ui/SectionContainer";

export interface PartnerItem {
  id: string;
  name: string;
  logo: string;
}

// 12 Partner SVG Logos matching the Figma design screenshot
function LogoWCSP() {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none">
      <span className="font-black text-xl sm:text-2xl tracking-tighter text-white font-sans leading-none">
        WCSP
      </span>
      <span className="text-[6.5px] sm:text-[7.5px] font-medium tracking-[0.22em] text-zinc-300 uppercase mt-1">
        WEST COAST SECURITY PATROL
      </span>
    </div>
  );
}

function LogoZefiro() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M12 2v10" />
      </svg>
      <div className="flex flex-col">
        <span className="font-bold text-sm sm:text-base tracking-wider text-white uppercase leading-none">
          ZEFIRO
        </span>
        <span className="text-[6px] sm:text-[7px] tracking-[0.25em] text-zinc-300 uppercase mt-0.5">
          RENEWABLES
        </span>
      </div>
    </div>
  );
}

function LogoAeroPact() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <span className="font-black text-sm sm:text-base tracking-widest text-white uppercase font-sans">
        AER
      </span>
      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
      <span className="font-black text-sm sm:text-base tracking-widest text-white uppercase font-sans">
        PACT
      </span>
    </div>
  );
}

function LogoNaranj() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5a5 5 0 1 1-5 5 5 5 0 0 1 5-5z" strokeDasharray="3 3"/>
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="font-black text-xs sm:text-sm tracking-wider text-white uppercase leading-none">
          NARANJ
        </span>
        <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.2em] text-zinc-300 uppercase mt-0.5">
          CAPITAL
        </span>
      </div>
    </div>
  );
}

function LogoEarthtones() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/60 flex items-center justify-center shrink-0">
        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v18M8 8l4-5 4 5M7 14l5-4 5 4" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif italic font-bold text-sm sm:text-base text-white tracking-tight leading-none">
          Earthtones
        </span>
        <span className="text-[6px] tracking-[0.18em] text-zinc-300 uppercase mt-0.5 font-sans">
          LANDSCAPING
        </span>
      </div>
    </div>
  );
}

function LogoSkitter() {
  return (
    <div className="select-none">
      <span className="font-black text-lg sm:text-xl md:text-2xl tracking-tight text-white font-sans">
        Skitter
      </span>
    </div>
  );
}

function LogoSamcart() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="19" cy="20" r="1.5" />
        <path d="M2.5 3.5h3l2.6 11.5a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8l1.8-8H6.5" />
      </svg>
      <span className="font-bold text-sm sm:text-base tracking-tight text-white">
        samcart
      </span>
    </div>
  );
}

function LogoBlipay() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-white flex items-center justify-center shrink-0">
        <span className="text-[#080808] font-black text-xs">b</span>
      </div>
      <span className="font-bold text-sm sm:text-base tracking-tight text-white">
        Blipay
      </span>
    </div>
  );
}

function LogoFanlock() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h10v4H8v4h5v4H4z" />
        <circle cx="17" cy="15" r="2.5" />
      </svg>
      <span className="font-black text-sm sm:text-base tracking-tight text-white">
        Fanlock
      </span>
    </div>
  );
}

function LogoQuantex() {
  return (
    <div className="flex items-center gap-1.5 select-none">
      <span className="font-black text-sm sm:text-base tracking-widest text-white uppercase font-mono">
        QUANTEX
      </span>
    </div>
  );
}

function LogoByzfunder() {
  return (
    <div className="select-none">
      <span className="font-bold italic text-base sm:text-lg tracking-tight text-white">
        byzfunder
      </span>
    </div>
  );
}

function LogoPhysiocare() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a4 4 0 0 0-4 4c0 3 4 7 4 7s4-4 4-7a4 4 0 0 0-4-4z" />
        <path d="M5 14c0 4 3.5 7 7 7s7-3 7-7" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="font-bold text-[10px] sm:text-xs tracking-wider text-white uppercase leading-none">
          ABSOLUTE
        </span>
        <span className="font-extrabold text-xs sm:text-sm tracking-tight text-white uppercase leading-none mt-0.5">
          PHYSIOCARE
        </span>
      </div>
    </div>
  );
}

export default function Partners() {
  const [dynamicPartners, setDynamicPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const data = await partnerApi.getAllPartners();

        let fetched: any[] = [];
        if (Array.isArray(data)) {
          fetched = data;
        } else if (data && Array.isArray(data.data)) {
          fetched = data.data;
        }

        if (fetched.length > 0) {
          setDynamicPartners(
            fetched.map((p: any) => ({
              id: p.id || p._id,
              name: p.name,
              logo: p.logo || p.imageUrl || p.image,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const showcaseLogos = [
    { id: "wcsp", component: <LogoWCSP /> },
    { id: "zefiro", component: <LogoZefiro /> },
    { id: "aeropact", component: <LogoAeroPact /> },
    { id: "naranj", component: <LogoNaranj /> },
    { id: "earthtones", component: <LogoEarthtones /> },
    { id: "skitter", component: <LogoSkitter /> },
    { id: "samcart", component: <LogoSamcart /> },
    { id: "blipay", component: <LogoBlipay /> },
    { id: "fanlock", component: <LogoFanlock /> },
    { id: "quantex", component: <LogoQuantex /> },
    { id: "byzfunder", component: <LogoByzfunder /> },
    { id: "physiocare", component: <LogoPhysiocare /> },
  ];

  return (
    <SectionContainer
      id="collaborators"
      className="py-16 sm:py-20 md:py-24"
      containerClassName="bg-background"
    >
      {/* Top Flex Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4">
        {/* Left Side: Collaborated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-zinc-400 font-medium text-lg sm:text-xl lg:text-[22px] leading-[1.35] tracking-tight font-sans">
            Collaborated With 100+ Founders Worldwide
            <br />
            <span className="text-zinc-300 font-sans">&amp; Completed 700+ Global Project.</span>
          </h2>
        </motion.div>

        {/* Right Side: Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3.5 self-start md:self-auto"
        >
          {/* Overlapping circular avatar cluster */}
          <div className="flex items-center">
            {/* Avatar 1 */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#080808] z-0">
              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client avatar"
                fill
                className="object-cover"
              />
            </div>

            {/* Avatar 2 */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#080808] -ml-2.5 z-10">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Client avatar"
                fill
                className="object-cover"
              />
            </div>

            {/* Avatar 3 */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-[#080808] -ml-2.5 z-20">
              <Image
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Client avatar"
                fill
                className="object-cover"
              />
            </div>

            {/* Avatar 4: Glowing Brand Orange Avatar */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FF6B26] to-[#E04800] ring-2 ring-[#F85800] flex items-center justify-center shadow-[0_0_15px_rgba(248,88,0,0.55)] -ml-2.5 z-30">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.5 7.5C16.1 5.4 13.7 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.2 20 17 18.1 18.2 15.5"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <circle cx="15.5" cy="10" r="1.5" fill="white" />
              </svg>
            </div>
          </div>

          {/* Social Proof Text & 5 Stars */}
          <div className="flex flex-col text-left">
            <span className="text-[11px] sm:text-xs text-zinc-400 font-medium tracking-tight">
              90% Customer Satisfactions
            </span>
            <div className="flex items-center gap-0.5 mt-0.5 text-[#F85800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#F85800] text-[#F85800]" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner / Client Logo Grid */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-14 sm:mt-16 md:mt-20"
      >
        {dynamicPartners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10 items-center justify-items-center">
            {dynamicPartners.slice(0, 12).map((partner) => (
              <div
                key={partner.id}
                className="w-full flex items-center justify-center h-12 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 max-w-[120px] object-contain filter grayscale brightness-200"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10 sm:gap-y-12 items-center justify-items-center">
            {showcaseLogos.map((item) => (
              <div
                key={item.id}
                className="w-full flex items-center justify-center h-12 opacity-40 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {item.component}
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </SectionContainer>
  );
}