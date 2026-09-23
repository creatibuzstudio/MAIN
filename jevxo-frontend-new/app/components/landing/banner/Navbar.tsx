"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ArrowUpRight, Code2, Layers, Cpu, CreditCard, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const smoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    let startTime: number | null = null;

    // Premium cubic easing function for an ultra-smooth glide
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + difference * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      if (elem) {
        // Add an 80px offset so the sticky navbar doesn't cover the section header
        const headerOffset = 90;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        // 1200ms duration for a very smooth and elegant feel
        smoothScrollTo(offsetPosition, 1200);
      }
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { 
      name: "Service", 
      href: "#service", 
      desc: "UI/UX, Next.js & Full-Stack Development",
      icon: Code2 
    },
    { 
      name: "Case Study", 
      href: "#case-study", 
      desc: "50+ Shipped Web & Mobile Apps",
      icon: Layers 
    },
    { 
      name: "Process", 
      href: "#process", 
      desc: "Agile 6-Step Engineering Workflow",
      icon: Cpu 
    },
    { 
      name: "Pricing", 
      href: "#pricing", 
      desc: "Flexible Retainer & Build Plans",
      icon: CreditCard 
    },
    { 
      name: "Portfolio", 
      href: "#case-study", 
      desc: "Explore Featured Case Studies & Builds",
      icon: Layers 
    },
  ];

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto w-full max-w-[1040px] rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 ${
          isScrolled
            ? "bg-[#121214]/90 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
            : "bg-[#121214]/80 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        }`}
      >
        {/* Left: Creatibuz Studio Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center justify-center">
            {/* Ambient orange glow behind the logo */}
            <div className="absolute -inset-2 bg-[#F85800]/40 rounded-2xl blur-md pointer-events-none group-hover:bg-[#F85800]/60 transition-all duration-300" />
            
            {/* Orange squircle icon container */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF6B26] via-[#F85800] to-[#DF4500] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/20 shrink-0">
              <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Stylized circular arc "C" */}
                <path
                  d="M17.5 7.5C16.1 5.4 13.7 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.2 20 17 18.1 18.2 15.5"
                  stroke="white"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                {/* 4-point sparkle inside */}
                <path
                  d="M16 8C16 9.3 17 10 18.5 10C17 10 16 10.7 16 12C16 10.7 15 10 13.5 10C15 10 16 9.3 16 8Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Logo Typography */}
          <div className="flex flex-col text-left">
            <span className="text-white font-semibold text-[15px] sm:text-[16px] tracking-tight leading-tight">
              Creatibuz Studio
            </span>
            <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.2em] text-gray-400 uppercase leading-none mt-0.5">
              DESIGN, DEVELOP, TRANSFORM.
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-[#9CA3AF] hover:text-white transition-colors duration-200 font-normal text-[14px] xl:text-[15px] tracking-tight relative py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Free Audit CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="https://calendly.com/jevxo-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 sm:gap-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 transition-all duration-300 group"
          >
            <span className="text-white text-[13px] sm:text-[14px] font-medium tracking-tight">
              Free Audit
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F85800] group-hover:bg-[#ff6914] flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(248,88,0,0.4)] group-hover:shadow-[0_0_20px_rgba(248,88,0,0.6)] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white stroke-[2.5] group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4.5 h-4.5 text-white" />
            ) : (
              <Menu className="w-4.5 h-4.5 text-white" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Premium Glassmorphic Mobile Navigation Modal Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
            />

            {/* Mobile Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-4 inset-x-4 z-50 lg:hidden pointer-events-auto bg-[#121214]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_24px_70px_rgba(0,0,0,0.8)] flex flex-col gap-4 max-h-[90vh] overflow-y-auto"
            >
              {/* Header inside Menu Drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F85800] flex items-center justify-center">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.5 7.5C16.1 5.4 13.7 4 11 4C6.58172 4 3 7.58172 3 12C3 16.4183 6.58172 20 11 20C14.2 20 17 18.1 18.2 15.5"
                        stroke="white"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-semibold text-sm">Creatibuz Studio</span>
                    <span className="text-[8px] tracking-[0.16em] text-gray-400">DESIGN, DEVELOP, TRANSFORM</span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1.5 py-1">
                {navLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-[#F85800] transition-colors shrink-0">
                            <Icon className="w-4 h-4" strokeWidth={2} />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] font-medium text-white group-hover:text-[#F85800] transition-colors leading-tight">
                              {link.name}
                            </span>
                            <span className="text-[11px] text-gray-400 font-normal mt-0.5">
                              {link.desc}
                            </span>
                          </div>
                        </div>

                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  href="https://calendly.com/jevxo-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-between bg-[#F85800] hover:bg-[#ff6914] text-white p-2.5 pl-4 rounded-2xl shadow-[0_0_20px_rgba(248,88,0,0.35)] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="font-semibold text-sm tracking-wide">
                      Free UI/UX Audit
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#F85800]">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </Link>

                <div className="flex items-center justify-between px-2 text-[11px] text-gray-400 font-normal">
                  <span>⚡ 20-Min Build Scope Call</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Engineers Online
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}