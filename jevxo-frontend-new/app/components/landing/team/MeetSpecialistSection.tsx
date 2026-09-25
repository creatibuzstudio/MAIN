"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User as UserIcon } from "lucide-react";
import { userApi, User } from "../../../../api/userApi";

const defaultBgClasses = [
  "bg-[#F7E19C]", // Soft Yellow
  "bg-[#A7F3D8]", // Soft Mint
  "bg-[#DFEFF8]", // Soft Light Blue
  "bg-[#A7C898]", // Soft Olive Green
  "bg-[#FED7AA]", // Soft Peach
  "bg-[#FBCFE8]", // Soft Pink
];

export default function MeetSpecialistSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [specialists, setSpecialists] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await userApi.getAllUsers();
        if (Array.isArray(data)) {
          setSpecialists(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setSpecialists(data.data);
        } else {
          setSpecialists(data);
        }
      } catch (error) {
        console.error("Failed to fetch team:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeam();
  }, []);

  useEffect(() => {
    if (isLoading || specialists.length === 0) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const getScrollAmount = () => {
        const trackWidth = trackRef.current?.scrollWidth || 0;
        const containerWidth = trackRef.current?.parentElement?.offsetWidth || window.innerWidth;
        return Math.max(0, trackWidth - containerWidth + 60);
      };

      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [isLoading, specialists.length]);

  const displaySpecialists = specialists.length > 0 ? specialists : [];

  return (
    <section
      ref={sectionRef}
      id="specialist"
      className="relative z-10 w-full py-20 md:py-28 flex flex-col justify-center items-center bg-[#0a0a0a] border-t border-gray-900 overflow-hidden"
    >
      {/* Subtle Background Grid Lines mimicking the Figma design */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[10%] bottom-0 border-l border-white/20"></div>
        <div className="absolute top-0 right-[10%] bottom-0 border-r border-white/20"></div>
        <div className="absolute top-[20%] left-0 right-0 border-t border-white/20"></div>
      </div>

      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative z-10">

        {/* Header Row: Title */}
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-16 md:mb-20 w-full">
          <span className="text-[#FF6B00] font-medium text-[15px]">
            [ Our Expertize ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold text-gray-300 tracking-tight leading-tight">
            Meet Our Specialist
          </h2>
        </div>

        {/* GSAP Horizontal Scroll Track */}
        <div className="w-full">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 w-max will-change-transform pb-4"
          >
            {!isLoading && displaySpecialists.map((member, index) => {
              const bgClass = defaultBgClasses[index % defaultBgClasses.length];
              return (
                <div
                  key={member.id || index}
                  className={`w-[290px] sm:w-[310px] h-[400px] sm:h-[440px] rounded-[24px] ${bgClass} relative overflow-hidden flex flex-col justify-end group cursor-pointer`}
                >
                  {/* Specialist Portrait Image */}
                  {member.picture ? (
                    <Image
                      src={member.picture}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600/30 pb-20">
                      <UserIcon className="w-24 h-24 mb-4" />
                    </div>
                  )}

                  {/* Strong Orange Bottom Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#FF6B00] via-[#FF6B00]/80 to-transparent pointer-events-none z-20" />

                  {/* Text Info Overlay */}
                  <div className="relative z-30 p-6 sm:p-7 text-white flex flex-col space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm font-medium">
                      {member.designation?.title || member.role || "Specialist"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
