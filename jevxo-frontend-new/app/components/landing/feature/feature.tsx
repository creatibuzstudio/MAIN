import React from 'react';
import Image from 'next/image';
import { Gem } from 'lucide-react';

const Feature = () => {
  return (
    <div className="w-full">
      <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row items-stretch lg:items-center justify-between px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-0 min-h-[440px] shadow-2xl bg-primary">
        {/* Background Image: /newsletter-bg.png */}
        <Image
          src="/newsletter-bg.png"
          alt="Newsletter Background"
          fill
          className="object-cover object-center pointer-events-none select-none z-0"
          priority
        />

        {/* Left Side Content */}
        <div className="relative z-10 w-full lg:w-[48%] text-white pb-10 lg:pb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-6 text-white text-[13px] font-medium shadow-xs">
            <Gem size={14} className="text-white fill-white" />
            <span>Powerfull Features</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.15] mb-5">
            Start Your Project With<br className="hidden sm:inline" /> Confidence.
          </h2>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-white/95 max-w-lg leading-relaxed mb-8 sm:mb-10 font-normal">
            Creatibuz Studio is your trusted technology partner – A full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.
          </p>

          {/* Newsletter Input + Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[460px]">
            <input
              type="email"
              placeholder="Email Address .."
              className="w-full sm:flex-1 bg-white text-[#18191D] placeholder:text-[#94A3B8] px-5 py-3.5 rounded-[12px] text-[14px] font-normal outline-none shadow-sm focus:ring-2 focus:ring-black/20"
            />
            <button className="w-full sm:w-auto bg-[#2D2E30] hover:bg-[#1E1F21] text-white text-[14px] font-semibold px-7 py-3.5 rounded-[12px] shadow-md transition-all cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Side: Laptop Mockup resting flush on the bottom edge */}
        <div className="relative z-10 w-full lg:w-[50%] flex items-end justify-center lg:justify-end self-end mt-4 lg:mt-0">
          <div className="relative w-full max-w-[580px] aspect-[1318/965] scale-120 translate-y-2 lg:translate-y-4 lg:translate-x-4">
            <Image
              src="/laptopFeatured.png"
              alt="Dashboard Mockup"
              fill
              className="object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
