import React from 'react';
import Image from 'next/image';
import { Gem } from 'lucide-react';

const Feature = () => {
  return (
    <section className="bg-[#111111] py-20 px-4 md:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 bg-[#FF6200]">
          
          {/* Subtle Background Waves / Concentric Circles Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <div className="absolute w-[150%] h-[150%] top-[-25%] right-[-25%] opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <g stroke="#ffffff" strokeWidth="0.5" fill="none">
                    <circle cx="100" cy="0" r="10"/>
                    <circle cx="100" cy="0" r="20"/>
                    <circle cx="100" cy="0" r="30"/>
                    <circle cx="100" cy="0" r="40"/>
                    <circle cx="100" cy="0" r="50"/>
                    <circle cx="100" cy="0" r="60"/>
                    <circle cx="100" cy="0" r="70"/>
                    <circle cx="100" cy="0" r="80"/>
                    <circle cx="100" cy="0" r="90"/>
                    <circle cx="100" cy="0" r="100"/>
                    <circle cx="100" cy="0" r="110"/>
                    <circle cx="100" cy="0" r="120"/>
                    <circle cx="100" cy="0" r="130"/>
                    <circle cx="100" cy="0" r="140"/>
                 </g>
              </svg>
            </div>
          </div>

          <div className="relative z-10 w-full lg:w-1/2 text-white mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <Gem size={16} className="text-white" />
              <span className="text-sm font-medium">Powerfull Features</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.1] mb-6">
              Start Your Project With Confidence.
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-[500px] leading-relaxed font-light">
              Creatibuz Studio is your trusted technology partner - A full-service 
              UI/UX and development agency helping startups and businesses 
              create fast, scalable, and user-focused digital products.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="Email Address .." 
                className="w-full sm:flex-1 bg-white text-gray-900 px-6 py-4 rounded-[14px] outline-none placeholder:text-gray-400 font-medium focus:ring-4 focus:ring-white/30 transition-all"
              />
              <button className="w-full sm:w-auto bg-[#333333] hover:bg-[#111111] text-white px-8 py-4 rounded-[14px] font-semibold transition-all shadow-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px] aspect-[16/10] lg:scale-110 lg:translate-x-8 origin-right">
              <Image 
                src="/mockups/Mockup 15.png"
                alt="Dashboard Mockup"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Feature;
