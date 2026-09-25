"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionContainer from "@/app/components/ui/SectionContainer";

const steps = [
  {
    step: "Step 01",
    title: "Understand",
    description: "Business goals and strategy, persona and pinpoints, competitors analysis.",
    icon: "/designprocess/Understand.png",
  },
  {
    step: "Step 02",
    title: "Define",
    description: "UX Strategy, information architecture, userflows, moodboard, visual direction.",
    icon: "/designprocess/Define.png",
  },
  {
    step: "Step 03",
    title: "Ideate",
    description: "Brainstorming, problem solution propose, sketching, wireframing.",
    icon: "/designprocess/Ideate.png",
  },
  {
    step: "Step 04",
    title: "Design",
    description: "Brand Style guide, Final ui design, design system, interface design.",
    icon: "/designprocess/Design.png",
  },
  {
    step: "Step 05",
    title: "Testing",
    description: "Interactive Prototyping, Usability testing, feedback collection, and implementation.",
    icon: "/designprocess/Testing.png",
  },
  {
    step: "Step 06",
    title: "Approval",
    description: "Submission, Asset preparation, exports.",
    icon: "/designprocess/Approval.png",
  },
  {
    step: "Step 07",
    title: "Final Delivery",
    description: "Dev handoff, documentation, organize Figma file.",
    icon: "/designprocess/Final Delivery.png",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".process-card");
      if (cards.length === 0) return;

      const cardWidth = cards[0].offsetWidth;
      const gap = 24; // gap-6 in Tailwind = 24px
      // Exposed width of each card when stacked under the next card
      const visibleWidth = Math.max(85, Math.round(cardWidth * 0.33));
      const stepDistance = cardWidth + gap - visibleWidth;

      // Smooth Timeline for card sliding & stacking on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          pinSpacing: true,
          scrub: 2.5, // Smooth momentum
          start: "top top",
          end: () => `+=${(cards.length - 1) * 700}`, // Scroll distance for card stacking
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Slide each card smoothly over the previous card one by one
      for (let i = 1; i < cards.length; i++) {
        const targetX = -i * stepDistance;
        tl.to(
          cards[i],
          {
            x: targetX,
            ease: "power2.inOut",
            duration: 1,
          },
          (i - 1) * 0.4
        );
      }
    }, sectionRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 w-full overflow-hidden bg-background flex justify-center"
    >
      {/* Background Image Asset */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/designprocess/designProcess-bg.png"
          alt="Design Process Background"
          fill
          priority
          className="object-cover object-center select-none"
        />
      </div>

      {/* Local style for stacking hover priority */}
      <style>{`
        .process-card:hover {
          z-index: 50 !important;
        }
      `}</style>

      {/* SectionContainer Wrapper */}
      <div className="relative z-10 w-full max-w-[95%] lg:max-w-7xl mx-auto flex flex-col px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32">
        {/* Header Area (Split 2-Column) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 md:mb-16 w-full">
          {/* Left Column Headline */}
          <div className="flex flex-col items-start lg:w-1/2">
            <span className="text-[#F85800] text-base md:text-xl mb-4">
              [ Design Process ]
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15] font-sans max-w-lg">
              A Faster Way To Design <br className="hidden sm:block" />
              And Build{" "}
              <span className="font-serif italic font-normal text-foreground">
                SaaS Products.
              </span>
            </h2>
          </div>

          {/* Right Column Description */}
          <div className="lg:w-[45%] flex items-end">
            <p className="text-foreground text-sm md:text-base leading-relaxed font-sans max-w-md lg:ml-auto">
              We simplify the product creation process for SaaS companies by
              combining strategy, design, &amp; development into one efficient
              workflow focused on faster launches.
            </p>
          </div>
        </div>

        {/* Dynamic Horizontal Pinned Track — smooth 1/3 card stacking on scroll */}
        <div className="w-full py-4">
          <div
            ref={trackRef}
            className="flex flex-nowrap gap-6 w-max min-w-full"
          >
            {steps.map((item, index) => (
              <div
                key={index}
                style={{ zIndex: index + 1 }}
                className="process-card group relative flex w-70 shrink-0 flex-col items-start overflow-hidden rounded-2xl bg-white px-6 py-10 text-left shadow-[-16px_0_35px_rgba(0,0,0,0.12),0_20px_45px_rgba(0,0,0,0.22)] transition-all duration-300 will-change-transform hover:-translate-y-2 hover:shadow-[-20px_0_40px_rgba(0,0,0,0.16),0_30px_60px_rgba(0,0,0,0.3)] md:px-8 md:py-10
  after:absolute after:-bottom-16 after:-left-16 after:-z-10 after:h-50 after:w-50 after:rounded-full after:bg-primary after:opacity-0 after:blur-3xl after:transition-all after:duration-500
  hover:after:opacity-50 hover:after:scale-110"
              >
                {/* Content Wrapper to stay above the ambient glow */}
                <div className="relative z-10 w-full flex flex-col items-start">
                  {/* Icon Box */}
                  <div className="mb-10">
                    <div className="flex h-12 w-12 items-center justify-center bg-transparent">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Step Badge Pill */}
                  <span className="mb-4 inline-block rounded-full bg-[#F2F2F2] px-3.5 py-1 font-sans text-xs font-semibold text-zinc-600">
                    {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="mb-4 font-sans text-2xl font-bold tracking-tight text-zinc-950 lg:text-[28px]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm leading-relaxed text-zinc-800 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}