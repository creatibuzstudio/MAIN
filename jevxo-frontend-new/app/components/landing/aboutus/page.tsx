"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statsApi } from "@/api/statsApi";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [countDeliveries, setCountDeliveries] = useState(0);
  const [countExperts, setCountExperts] = useState(0);
  const [countClients, setCountClients] = useState(0);
  const [countPartners, setCountPartners] = useState(0);

  const [targetStats, setTargetStats] = useState({
    projectDeliveries: 700,
    inHouseExperts: 15,
    satisfiedClients: 90,
    businessPartners: 50
  });

  useEffect(() => {
    statsApi.getStats().then((data) => {
      if (data) setTargetStats(data);
    }).catch(console.error);
  }, []);

  const fullText =
    "Creatibuz Studio helps founders turn ideas into products people love to use. From strategy and UX to design and development, we work as an extension of your team to launch faster, reduce costly iterations, and create products built for growth. Trusted by SaaS, Fintech, B2B & Healthcare companies worldwide, we deliver experiences that attract users, increase conversions, & scale with your business from day one.";

  const words = fullText.split(" ");

  // GSAP Bi-directional Scroll Animation for Cards, Dividers and Stats
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission & Vision Cards Bi-directional GSAP Timeline (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 25, scale: 0.98, filter: "blur(2px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-cards-grid",
            start: "top 92%",
            end: "bottom 8%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Stats Items Bi-directional GSAP Timeline (Ultra-fast 0.2s blur clear)
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 20, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Divider lines — grow in on the same trigger/timing as the stats,
      // so the whole row (numbers + lines) reveals together
      gsap.fromTo(
        ".about-divider",
        { scaleY: 0, opacity: 0 },
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          transformOrigin: "center",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 95%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll reveal progress calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / (start - end))
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Re-trigger counter animation whenever stats element enters viewport (top or bottom)
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (timer) clearInterval(timer);

          setCountDeliveries(0);
          setCountExperts(0);
          setCountClients(0);
          setCountPartners(0);

          const duration = 1800;
          const steps = 50;
          const intervalTime = duration / steps;
          let step = 0;

          timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCountDeliveries(Math.floor(easeProgress * targetStats.projectDeliveries));
            setCountExperts(Math.floor(easeProgress * targetStats.inHouseExperts));
            setCountClients(Math.floor(easeProgress * targetStats.satisfiedClients));
            setCountPartners(Math.floor(easeProgress * targetStats.businessPartners));

            if (step >= steps) {
              if (timer) clearInterval(timer);
              setCountDeliveries(targetStats.projectDeliveries);
              setCountExperts(targetStats.inHouseExperts);
              setCountClients(targetStats.satisfiedClients);
              setCountPartners(targetStats.businessPartners);
            }
          }, intervalTime);
        } else {
          if (timer) clearInterval(timer);
          setCountDeliveries(0);
          setCountExperts(0);
          setCountClients(0);
          setCountPartners(0);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, [targetStats]);

  return (
    <section ref={sectionRef} className="w-full bg-background flex justify-center">
      {/* Self-contained gradient border animation — doesn't depend on whatever
          "animate-border-spin" is defined as globally, so it renders the same
          smooth blue -> indigo -> pink loop everywhere, every time */}
      <style>{`
        .jevxo-gradient-border {
          background: conic-gradient(from 0deg, #2846F6, #EE4857, #FFFFFF, #003FEA);
          animation: jevxo-border-spin 6s linear infinite;
        }
        @keyframes jevxo-border-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-start">
        {/* About Us Pill */}
        <h1 className="text-primary text-2xl mb-8">[About Us]</h1>

        {/* Scroll Reveal Main Paragraph — premium blur + lift reveal per word */}
        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-[32px] -leading-[2.5] tracking-[-1px] text-primary-text text-justify hyphens-auto"
        >
          {words.map((word, i) => {
            const targetProgress = (i + 1) / words.length;
            const isRevealed = scrollProgress >= targetProgress;
            return (
              <span
                key={i}
                style={{
                  transitionDelay: `${Math.min(i * 6, 200)}ms`,
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`inline-block mr-[0.25em] transition-all duration-500 ${isRevealed
                  ? "text-primary-text font-light opacity-100 blur-none translate-y-0"
                  : "text-gray-400 font-light opacity-40 blur-[3px] translate-y-1"
                  }`}
              >
                {word}
              </span>
            );
          })}
        </p>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center justify-between w-full pt-16 md:pt-20 lg:pt-24"
        >
          {/* Stat 1 */}
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl md:text-[80px] font-light font-helvetica text-primary-text leading-[100px]">
              {countDeliveries}+
            </span>
            <span className="text-primary-text font-helvetica text-[20px] font-normal leading-[38px]">
              Project Deliveries
            </span>
          </div>

          {/* Stat 2 */}
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl md:text-[80px] font-light font-helvetica text-primary-text leading-[100px]">
              {countExperts}+
            </span>
            <span className="text-primary-text font-helvetica text-[20px] font-normal leading-[38px]">
              In-House Experts
            </span>
          </div>

          {/* Stat 3 */}
          <div className="about-stat flex flex-col items-center text-center relative py-2 px-4">
            <span className="text-5xl md:text-[80px] font-light font-helvetica text-primary-text leading-[100px]">
              {countClients}%
            </span>
            <span className="text-primary-text font-helvetica text-[20px] font-normal leading-[38px]">
              Satisfied Clients
            </span>
          </div>

          {/* Stat 4 */}
          <div className="about-stat flex flex-col items-center text-center py-2 px-4">
            <span className="text-5xl md:text-[80px] font-light font-helvetica text-primary-text leading-[100px]">
              {countPartners}+
            </span>
            <span className="text-primary-text font-helvetica text-[20px] font-normal leading-[38px]">
              Business Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}