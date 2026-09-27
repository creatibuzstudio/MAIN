"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import SectionContainer from "@/app/components/ui/SectionContainer";
import { userApi } from "@/api/userApi";

interface SocialLink {
  name: string;
  href: string;
  type: "facebook" | "linkedin" | "github" | "portfolio";
}

interface SpecialistItem {
  id: string;
  name: string;
  role: string;
  image: string;
  bgTint: string;
  socials: SocialLink[];
}

const DEFAULT_SPECIALISTS: SpecialistItem[] = [
  {
    id: "1",
    name: "Andriani Monlio",
    role: "UI UX Designer",
    image: "/specialist/specialist-1.png",
    bgTint: "bg-[#FAE297]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "2",
    name: "Andriani Monlio",
    role: "Full Stack Developer",
    image: "/specialist/specialist-2.png",
    bgTint: "bg-[#BDFDEB]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "3",
    name: "Andriani Monlio",
    role: "Branding Designer",
    image: "/specialist/specialist-3.png",
    bgTint: "bg-[#DFF6FF]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
  {
    id: "4",
    name: "Andriani Monlio",
    role: "Marketing Executive",
    image: "/specialist/specialist-4.png",
    bgTint: "bg-[#A0C599]",
    socials: [
      { name: "Facebook", href: "https://facebook.com", type: "facebook" },
      { name: "LinkedIn", href: "https://linkedin.com", type: "linkedin" },
      { name: "GitHub", href: "https://github.com", type: "github" },
      { name: "Portfolio", href: "https://creatibuz.com", type: "portfolio" },
    ],
  },
];

function renderSocialIcon(type: string) {
  switch (type) {
    case "facebook":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "github":
      return (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "portfolio":
    default:
      return <Globe className="w-3.5 h-3.5 stroke-[2]" />;
  }
}

export default function MeetSpecialistSection() {
  const [specialists, setSpecialists] = useState<SpecialistItem[]>(DEFAULT_SPECIALISTS);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await userApi.getAllUsers();
        const userList = Array.isArray(data) ? data : data?.data || [];
        if (userList.length > 0) {
          setSpecialists((prev) =>
            prev.map((fallback, idx) => {
              const apiUser = userList[idx];
              if (!apiUser) return fallback;
              return {
                ...fallback,
                name: apiUser.name || fallback.name,
                role: apiUser.designation?.title || apiUser.role || fallback.role,
                // Use apiUser.picture if explicitly provided, else fallback to specialist portrait
                image: apiUser.picture || fallback.image,
              };
            })
          );
        }
      } catch {
        // Silently preserve DEFAULT_SPECIALISTS
      }
    };

    fetchTeam();
  }, []);

  return (
    <div>
      {/* 1. Section Header */}
      <motion.div
        id="specialist"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary text-sm md:text-[20px] text-center">
          [ Our Expertize ]
        </span>
        <h2 className="font-bold text-header-text text-3xl md:text-4xl lg:text-[40px] text-center tracking-tight">
          Meet Our Specialist
        </h2>
      </motion.div>

      {/* 2. Specialist Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full">
        {specialists.map((specialist, idx) => {
          return (
            <motion.div
              key={specialist.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[3/4] bg-zinc-900 border border-white/10 hover:border-white/25 transition-all duration-300 shadow-lg hover:shadow-2xl select-none"
            >
              {/* Portrait Image with pastel background */}
              <div className="w-full h-full relative">
                <Image
                  src={specialist.image}
                  alt={specialist.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Gradient Scrim */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[bg-primary] via-[bg-primary]/80 to-transparent pointer-events-none z-10" />

              {/* Dynamic Info & Social Icons Container */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end z-20">
                {/* Name & Designation Text Block */}
                <div className="transition-transform duration-300 ease-out group-hover:-translate-y-9">
                  <h3 className="text-foreground font-bold text-lg md:text-xl tracking-tight font-sans">
                    {specialist.name}
                  </h3>
                  <p className="text-foreground/90 text-xs md:text-sm font-medium mt-0.5 font-sans">
                    {specialist.role}
                  </p>
                </div>

                {/* Social Links Row */}
                <div className="absolute inset-x-5 bottom-4 opacity-0 translate-y-4 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <div className="flex items-center justify-between w-full pt-3 mt-1 border-t border-white/20">
                    {specialist.socials.map((social, sIdx) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${specialist.name}'s ${social.name}`}
                        style={{ transitionDelay: `${sIdx * 50}ms` }}
                        className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-foreground hover:text-primary flex items-center justify-center backdrop-blur-sm transition-all duration-200 shadow-md transform hover:scale-110 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {renderSocialIcon(social.type)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
