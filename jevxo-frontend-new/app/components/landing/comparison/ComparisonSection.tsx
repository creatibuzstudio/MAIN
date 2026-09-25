"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, MoreVertical } from "lucide-react";

export default function ComparisonSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "annually">("monthly");

  return (
    <div id="why-choose-us" className="w-full flex flex-col items-center">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <span className="text-primary text-base md:text-xl text-center mb-3">
          [ Why Choose Us ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground tracking-tight leading-[1.15] text-center">
          Creatibuz Studio Alternative?
          <br />
          <span>Think </span>
          <span className="talic font-normal text-foreground">
            One More Time!
          </span>
        </h2>
      </div>

      {/* Bento Grid: 8-Column Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-8 gap-6 items-stretch">
        {/* CARD 1: Flexible Payment Plans (col-span-3) */}
        <div className="md:col-span-3 relative p-[1px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
          <div className="w-full h-full rounded-[27px] overflow-hidden p-6 sm:p-7 relative flex flex-col justify-between min-h-[440px] md:min-h-[470px] bg-gradient-to-br from-[#191919] via-[#090909] to-primary">
            {/* Ambient warm glow at bottom right */}
            <div className="absolute -bottom-14 -right-14 w-72 h-72 rounded-full bg-[#FE5A00]/25 blur-[75px] pointer-events-none" />

            {/* Top Content */}
            <div className="relative z-10">
              <h3 className="text-primary-text text-xl sm:text-2xl font-bold font-sans tracking-tight">
                Flexible Payment Plans
              </h3>
              <p className="text-primary-text text-xs sm:text-sm font-sans mt-1 mb-8">
                Pay your way
              </p>

              {/* Switcher pills */}
              <div className="flex items-center gap-2 mb-8">
                {/* <button
                  type="button"
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    billingCycle === "monthly"
                      ? "bg-[#2A2A2A] text-white border border-white/20 shadow-sm"
                      : "bg-[#141414] text-white/50 border border-white/10 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("quarterly")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    billingCycle === "quarterly"
                      ? "bg-[#2A2A2A] text-white border border-white/20 shadow-sm"
                      : "bg-[#141414] text-white/50 border border-white/10 hover:text-white"
                  }`}
                >
                  Quarterly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle("annually")}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    billingCycle === "annually"
                      ? "bg-[#2A2A2A] text-white border border-white/20 shadow-sm"
                      : "bg-[#141414] text-white/50 border border-white/10 hover:text-white"
                  }`}
                >
                  Annually
                </button> */}
                <div className="bg-card text-primary-text rounded-sm py-2 px-4 text-sm">
                  Monthly
                </div>
                <div className="bg-card text-primary-text rounded-sm py-2 px-4 text-sm">
                  Quarterly
                </div>
                <div className="bg-card text-primary-text rounded-sm py-2 px-4 text-sm">
                  Annually
                </div>
              </div>

              {/* Bullet points */}
              <div className="space-y-1.5 text-xs sm:text-sm text-white/50 font-sans">
                <p>• No commitment</p>
                <p>• Cancel anytime</p>
                <p>• No Extra Fees</p>
              </div>
            </div>

            {/* VISA Cards visual at bottom right */}
            <div className="absolute -bottom-20 -right-55 w-[320px] sm:w-[350px] md:w-[550px] h-[230px] sm:h-[450px] pointer-events-none z-10">
              <Image
                src="/whyChooseUs/Card Image.png"
                alt="Payment Cards"
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>

        {/* CARD 2: Visual Center Showcase - Cap (col-span-2) */}
        <div className="md:col-span-2 relative p-[1px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col min-h-[440px] md:min-h-[470px]">
          <div className="w-full h-full rounded-[27px] overflow-hidden relative group bg-[#0B0B0B]">
            <Image
              src="/whyChooseUs/Card 02.png"
              alt="Creatibuz Studio Cap"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* CARD 3: Unlimited revision (col-span-3) */}
        <div className="md:col-span-3 relative p-[1px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
          <div className="w-full h-full rounded-[27px] overflow-hidden p-6 sm:p-7 relative flex flex-col justify-between min-h-[440px] md:min-h-[470px] bg-[#0E0E0E]">
            {/* Subtle ambient amber warmth */}
            <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Content Top */}
            <div className="relative z-10 mb-3">
              <h3 className="text-primary-text text-xl sm:text-2xl font-bold font-sans tracking-tight">
                Unlimited revision
              </h3>
              <p className="text-primary-text text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                Enjoy unlimited revisions and lifetime support, ensuring your
                satisfaction at every stage.
              </p>
            </div>

            {/* Chat Box Widget */}
            <div className="relative z-10 bg-[#141414] border border-white/[0.08] rounded-2xl p-4 sm:p-4.5 flex flex-col gap-3.5 shadow-xl mt-auto">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="text-xs sm:text-sm font-semibold text-white/90 font-sans flex items-center gap-1.5">
                  # Landing Animation Feedback
                </span>
                <div className="flex items-center gap-2">
                  {/* Avatar stack */}
                  <div className="flex items-center">
                    <Image
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Avatar 1"
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-full border border-[#121212] object-cover"
                    />
                    <Image
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Avatar 2"
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-full border border-[#121212] object-cover -ml-1.5"
                    />
                    <Image
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Avatar 3"
                      width={20}
                      height={20}
                      className="w-5 h-5 rounded-full border border-[#121212] object-cover -ml-1.5"
                    />
                    <div className="w-5 h-5 rounded-full bg-primary border border-[#121212] flex items-center justify-center -ml-1.5 shrink-0">
                      <Image
                        src="/creatibuz-symbol.png"
                        alt="Creatibuz"
                        width={10}
                        height={10}
                        className="w-2.5 h-2.5 object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-white ml-1.5">
                      5+
                    </span>
                  </div>
                  <MoreVertical className="w-4 h-4 text-white/40 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-3 font-sans">
                {/* Message 1 */}
                <div className="flex items-start gap-2.5">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Abdul Ahad"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-white/10 shrink-0 object-cover mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-white">
                        Abdul Ahad
                      </span>
                      <span className="text-[10px] text-white/40">
                        — Today at 2:47 PM
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-0.5 leading-snug">
                      Hey Team, is the landing feedback finalized?
                    </p>
                  </div>
                  <MoreVertical className="w-3.5 h-3.5 text-white/30 shrink-0 mt-1" />
                </div>

                {/* Message 2 */}
                <div className="flex items-start gap-2.5">
                  <Image
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    alt="Abdur Rahman"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-white/10 shrink-0 object-cover mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-white">
                        Abdur Rahman
                      </span>
                      <span className="text-[10px] text-white/40">
                        — Today at 2:47 PM
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-0.5 leading-snug">
                      Yep, all set up read for{" "}
                      <span className="text-[#3B82F6] font-medium">
                        @Rubendao
                      </span>
                    </p>
                  </div>
                  <MoreVertical className="w-3.5 h-3.5 text-white/30 shrink-0 mt-1" />
                </div>

                {/* Message 3 */}
                <div className="flex items-start gap-2.5">
                  <Image
                    src="https://randomuser.me/api/portraits/men/62.jpg"
                    alt="Rifat Hasan"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-white/10 shrink-0 object-cover mt-0.5"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-semibold text-white">
                        Rifat Hasan
                      </span>
                      <span className="text-[10px] text-white/40">
                        Today at 2:47 PM
                      </span>
                    </div>
                    <p className="text-xs text-white/50 mt-0.5 leading-snug">
                      Very Exited to see the rolled out.
                    </p>
                  </div>
                  <MoreVertical className="w-3.5 h-3.5 text-white/30 shrink-0 mt-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 4: Lifetime Support (col-span-3) */}
        <div className="md:col-span-3 relative p-[1px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
          <div className="w-full h-full rounded-[27px] overflow-hidden p-6 sm:p-7 relative flex flex-col justify-between min-h-[440px] md:min-h-[470px] bg-[#0E0E0E]">
            {/* Content Top */}
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold font-sans tracking-tight">
                Lifetime Support
              </h3>
              <p className="text-white/50 text-xs sm:text-sm font-sans mt-1.5 leading-relaxed">
                Enjoy unlimited revisions and lifetime support, ensuring your
                satisfaction at every stage.
              </p>
            </div>

            {/* List Container with Avatar Stack Header */}
            <div className="bg-[#141414] border border-white/[0.08] rounded-2xl p-4 sm:p-5 mt-5 flex flex-col gap-3 shadow-xl">
              {/* Header Avatar Stack */}
              <div className="flex items-center gap-1.5 mb-1">
                <div className="flex items-center">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Avatar 1"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full border-2 border-[#121212] object-cover"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Avatar 2"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full border-2 border-[#121212] object-cover -ml-2"
                  />
                  <Image
                    src="https://randomuser.me/api/portraits/men/45.jpg"
                    alt="Avatar 3"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full border-2 border-[#121212] object-cover -ml-2"
                  />
                  <div className="w-6 h-6 rounded-full bg-primary border-2 border-[#121212] flex items-center justify-center -ml-2 shrink-0">
                    <Image
                      src="/creatibuz-symbol.png"
                      alt="Creatibuz"
                      width={12}
                      height={12}
                      className="w-3 h-3 object-contain"
                    />
                  </div>
                </div>
                <span className="text-xs font-bold text-white ml-1">5+</span>
              </div>

              {/* Feature 1 */}
              <div className="bg-[#181818] border border-white/[0.06] rounded-xl px-4 py-3 flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#00E676]/15 border border-[#00E676]/60 flex items-center justify-center text-[#00E676] shrink-0 shadow-[0_0_8px_rgba(0,230,118,0.25)]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 font-sans">
                  Ongoing updates
                </span>
              </div>

              {/* Feature 2 */}
              <div className="bg-[#181818] border border-white/[0.06] rounded-xl px-4 py-3 flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#00E676]/15 border border-[#00E676]/60 flex items-center justify-center text-[#00E676] shrink-0 shadow-[0_0_8px_rgba(0,230,118,0.25)]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 font-sans">
                  Priority Response Handing
                </span>
              </div>

              {/* Feature 3 */}
              <div className="bg-[#181818] border border-white/[0.06] rounded-xl px-4 py-3 flex items-center gap-3.5">
                <div className="w-5 h-5 rounded-[5px] bg-[#00E676]/15 border border-[#00E676]/60 flex items-center justify-center text-[#00E676] shrink-0 shadow-[0_0_8px_rgba(0,230,118,0.25)]">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/90 font-sans">
                  24/7 expert assistance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 5: Diverse Skill Set & AI-Assisted Launches (col-span-5) */}
        <div className="md:col-span-5 relative p-[1px] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#FE5A00]/85 via-white/10 to-white/[0.04] shadow-sm flex flex-col">
          <div className="w-full h-full rounded-[27px] overflow-hidden relative min-h-[440px] md:min-h-[470px] bg-gradient-to-br from-[#191919] via-[#1a0c03] to-[#FE5A00]/65">
            {/* Warm rich radial gradient glow matching Figma screenshot */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#FE5A00]/45 blur-[85px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FE5A00]/20 blur-[70px] pointer-events-none" />

            {/* Inner Panes Grid: Left (Diverse Skill Set) and Right (AI-Assisted Launches) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-7 relative z-10 h-full items-stretch">
              {/* Left Pane: Diverse Skill Set */}
              <div className="lg:col-span-7 bg-[#121212]/90 border border-white/[0.08] rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xl">
                <h4 className="text-white text-lg sm:text-xl font-semibold font-sans tracking-tight mb-4">
                  Diverse Skill Set
                </h4>

                {/* Team Members List */}
                <div className="space-y-3.5 font-sans">
                  {/* Member 1 */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Image
                        src="https://randomuser.me/api/portraits/men/33.jpg"
                        alt="Sourov Dhali"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full border border-white/10 shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">
                          Sourov Dhali
                        </p>
                        <p className="text-[11px] text-white/40 truncate">
                          Product Designer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        UX Specialist
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        Design System
                      </span>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Image
                        src="https://randomuser.me/api/portraits/men/36.jpg"
                        alt="Tanvir Ahmed"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full border border-white/10 shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">
                          Tanvir Ahmed
                        </p>
                        <p className="text-[11px] text-white/40 truncate">
                          Creative Director
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        Brand Design
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        Design Direction
                      </span>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Image
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        alt="Azaz Ahamed"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full border border-white/10 shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">
                          Azaz Ahamed
                        </p>
                        <p className="text-[11px] text-white/40 truncate">
                          Sr Product Designer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        UX Consultant
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        SaaS Product Design
                      </span>
                    </div>
                  </div>

                  {/* Member 4 */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Image
                        src="https://randomuser.me/api/portraits/men/52.jpg"
                        alt="Azaz Ahamed"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full border border-white/10 shrink-0 object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-white truncate">
                          Azaz Ahamed
                        </p>
                        <p className="text-[11px] text-white/40 truncate">
                          Sr Product Designer
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end shrink-0 gap-1">
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        Growth Marketing
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-md bg-[#1C1C1C] border border-white/10 text-white/60 whitespace-nowrap">
                        SEO Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Pane: AI-Assisted Launches */}
              <div className="lg:col-span-5 flex flex-col justify-between py-1">
                {/* Content Top */}
                <div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold font-sans tracking-tight">
                    AI-Assisted Launches
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 font-sans mt-2.5 leading-relaxed">
                    Product launches with AI-assisted workflows that Reduce
                    repetitive tasks and launch digital products more
                    efficiently with faster execution.
                  </p>
                </div>

                {/* 8 AI Logos Grid (4x2) in exact Figma order */}
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3 mt-6 sm:mt-8">
                  {[
                    "/whyChooseUs/aiLogo/08.png",
                    "/whyChooseUs/aiLogo/01.png",
                    "/whyChooseUs/aiLogo/06.png",
                    "/whyChooseUs/aiLogo/07.png",
                    "/whyChooseUs/aiLogo/02.png",
                    "/whyChooseUs/aiLogo/05.png",
                    "/whyChooseUs/aiLogo/04.png",
                    "/whyChooseUs/aiLogo/03.png",
                  ].map((logoSrc, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200"
                    >
                      <Image
                        src={logoSrc}
                        alt={`AI Tool Logo ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
