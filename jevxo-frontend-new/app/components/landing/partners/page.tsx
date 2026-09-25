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

// 12 Brand logos matching Figma (6 per row in a 6-column grid)
const collaboratorLogos = [
  // Row 1
  { name: "WCSP", src: "/collaborators/wcsp 1.png" },
  { name: "Zefiro", src: "/collaborators/zefiro-1 1.png" },
  { name: "AEROPACT", src: "/collaborators/aeropact.svg" },
  { name: "Naranj Capital", src: "/collaborators/naranj-capital 1.png" },
  { name: "Earthtones", src: "/collaborators/eathtones 1.png" },
  { name: "Skitter", src: "/collaborators/logo-4 (1) 1.png" },
  // Row 2
  { name: "Samcart", src: "/collaborators/logo-3 (1) 1.png" },
  { name: "Blipay", src: "/collaborators/logo-11 (1) 1.png" },
  { name: "Fanlock", src: "/collaborators/logo-6 (1) 1.png" },
  { name: "QUANTEX", src: "/collaborators/logo-8 (1) 1.png" },
  { name: "Byzfunder", src: "/collaborators/logo-15 (1) 1.png" },
  { name: "Absolute Physiocare", src: "/collaborators/physiocare 1.png" },
];

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



  return (
    <main id="collaborators" className="lg:px-24">
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
          <h2 className="text-primary-text font-medium text-lg md:text-xl lg:text-2xl leading-[1.35] tracking-tight font-sans">
            Collaborated With 100+ Founders Worldwide
            <br />
            <span className="text-primary-text font-sans">
              &amp; Completed 700+ Global Project.
            </span>
          </h2>
        </motion.div>

        {/* Right Side: Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 self-start md:self-auto"
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
            <div className="flex justify-center items-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary shadow-[0_0_50px_rgba(248,88,0,150)] -ml-2.5 z-30">
              <Image
                src="/creatibuz-symbol.png"
                alt="logo skeleton"
                width={20}
                height={10}
              />
            </div>
          </div>

          {/* Social Proof Text & 5 Stars */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-[11px] sm:text-xs text-[#D9D9D9] font-medium tracking-tight">
              90% Customer Satisfactions
            </span>
            <div className="flex items-center gap-1 mt-0.5 text-[#F85800]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-[#FEB821] text-[#FEB821]"
                />
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
        className="mt-8 sm:mt-10 md:mt-12"
      >
        {dynamicPartners.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-6 sm:gap-y-8 items-center justify-between">
            {dynamicPartners.slice(0, 12).map((partner) => (
              <div
                key={partner.id}
                className="w-full flex items-center justify-center h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-7 sm:max-h-8 max-w-[120px] object-contain filter grayscale brightness-125"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 gap-y-6 sm:gap-y-8 items-center w-full">
            {collaboratorLogos.map((logo, index) => (
              <div
                key={logo.name}
                className={`w-full flex items-center justify-center h-10 sm:h-12 ${
                  index % 6 === 0
                    ? "md:justify-start"
                    : index % 6 === 5
                      ? "md:justify-end"
                      : "md:justify-center"
                } opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-6 sm:h-7 md:h-8 w-auto object-contain filter brightness-125 hover:brightness-200 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </main>
  );
}