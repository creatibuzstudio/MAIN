"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ConcentricCtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-24 sm:py-32 flex items-center justify-center min-h-[500px] sm:min-h-[600px] border-t border-gray-900">
      
      {/* Background Radial Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: "radial-gradient(circle at 50% 50%, #C04500 0%, #0a0a0a 60%)",
          opacity: 0.6
        }}
      />
      
      {/* Scaled Container for Rings & Icons (Ensures perfect mobile responsiveness) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-[0.6] sm:scale-[0.8] lg:scale-100">
        
        {/* Concentric Dashed Rings */}
        <svg className="absolute w-[800px] h-[800px] animate-[spin_60s_linear_infinite]" viewBox="0 0 800 800">
          <circle cx="400" cy="400" r="398" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeDasharray="8 16" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-[1000px] h-[1000px] animate-[spin_80s_linear_infinite_reverse]" viewBox="0 0 1000 1000">
          <circle cx="500" cy="500" r="498" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" strokeDasharray="8 16" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-[1200px] h-[1200px] animate-[spin_100s_linear_infinite]" viewBox="0 0 1200 1200">
          <circle cx="600" cy="600" r="598" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" strokeDasharray="8 16" strokeLinecap="round" />
        </svg>
        <svg className="absolute w-[1400px] h-[1400px] animate-[spin_120s_linear_infinite_reverse]" viewBox="0 0 1400 1400">
          <circle cx="700" cy="700" r="698" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.5" strokeDasharray="8 16" strokeLinecap="round" />
        </svg>

        {/* Floating Brand Icons */}
        {/* Ring 1 (Inner) */}
        <div className="absolute w-[800px] h-[800px] animate-[spin_60s_linear_infinite]">
          {/* Sketch */}
          <div className="absolute right-10 bottom-16 w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_60s_linear_infinite_reverse]">
             <div className="w-5 h-5 bg-[#FFC700] rounded-sm transform rotate-45" />
          </div>
          {/* Framer */}
          <div className="absolute left-0 top-1/3 w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_60s_linear_infinite_reverse]">
             <span className="text-[#00AEFF] font-black text-xl">F</span>
          </div>
        </div>

        {/* Ring 2 */}
        <div className="absolute w-[1000px] h-[1000px] animate-[spin_80s_linear_infinite_reverse]">
          {/* Webflow */}
          <div className="absolute right-20 top-32 w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_80s_linear_infinite]">
             <span className="text-[#4353FF] font-bold text-3xl font-serif">W</span>
          </div>
          {/* Miro */}
          <div className="absolute bottom-24 left-24 w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_80s_linear_infinite]">
             <span className="text-[#FFC700] font-black text-2xl tracking-tighter italic">M</span>
          </div>
        </div>
        
        {/* Ring 3 */}
        <div className="absolute w-[1200px] h-[1200px] animate-[spin_100s_linear_infinite]">
          {/* Figma */}
          <div className="absolute left-32 top-1/3 w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_100s_linear_infinite_reverse]">
             <span className="text-[#F24E1E] font-bold text-xl">Fi</span>
          </div>
          {/* Lightning / Supabase like */}
          <div className="absolute right-32 bottom-1/3 w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center shadow-lg shadow-black/50 animate-[spin_100s_linear_infinite_reverse]">
             <span className="text-[#3ECF8E] font-bold text-2xl">⚡</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-[52px] font-bold text-white tracking-tight mb-5 leading-[1.15]"
        >
          Ready to build something<br className="hidden sm:block" /> that actually converts?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          Stop waiting weeks for design feedback. Get your first draft in 48 hours and 
          launch your product before your competitors even finish planning.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-black pl-7 pr-2 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-[#FF6B00]/40"
          >
            <span>Request Free Audit</span>
            <div className="bg-black text-white p-2.5 rounded-full">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
