"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Clock, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-16 md:pt-20 relative overflow-hidden z-10 border-t border-gray-900">
      <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Column 1: Brand Info & Social Icons (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-flex flex-row items-center gap-4">
              {/* Logo Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF8C00] to-[#E65C00] rounded-[14px] flex items-center justify-center shadow-lg">
                <Image
                  src="/creatibuz-symbol.png"
                  alt="Creatibuz Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback CSS shape if image is missing */}
                <div className="absolute w-6 h-6 border-[3px] border-white rounded-full border-t-transparent -rotate-45" style={{ zIndex: -1 }}></div>
              </div>
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-[22px] font-semibold tracking-tight text-white leading-none mb-1">
                  Creatibuz Studio
                </span>
                <span className="text-[9px] tracking-[0.2em] text-gray-400 font-medium">
                  DESIGN. DEVELOP. TRANSFORM.
                </span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-[300px] font-normal">
              A full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.
            </p>

            {/* Social Media Rounded Buttons with Inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-black border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-black border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-black border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>

              {/* Behance */}
              <Link
                href="#"
                aria-label="Behance"
                className="w-10 h-10 rounded-xl bg-black border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 shadow-xs"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8.22 17.024c-2.22 0-3.89-.551-3.89-2.923v-4.103c0-2.217 1.62-3.045 3.73-3.045 2.11 0 3.76.818 3.76 2.946v.835H9.51v-.735c0-1.127-.58-1.428-1.39-1.428-1.03 0-1.57.51-1.57 1.543v3.834c0 1.258.64 1.57 1.65 1.57.94 0 1.58-.337 1.58-1.532h2.24c0 2.227-1.44 3.038-3.8 3.038zm3.9-10.024h4.86v1.442h-4.86V7zM18.82 17.135c-2.31 0-4.06-1.12-4.06-3.856 0-2.88 1.96-3.924 4.09-3.924 2.27 0 4.15 1.107 4.15 3.864v.538h-5.99v.15c0 1.233.6 1.768 1.93 1.768 1.09 0 1.57-.454 1.76-1.07h2.09c-.27 1.664-1.63 2.53-3.97 2.53zm-1.85-4.23h3.89v-.11c0-1.155-.54-1.65-1.93-1.65-1.32 0-1.92.515-1.96 1.76z" />
                </svg>
              </Link>
              
              {/* Dribbble */}
              <Link
                href="#"
                aria-label="Dribbble"
                className="w-10 h-10 rounded-xl bg-black border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] hover:text-white hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                   <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.562-12.012c-.08-.035-1.85-1.07-3.96-.282.164.55.308 1.107.426 1.666 2.45.698 3.486 2.054 3.542 2.136.634-1.05.994-2.268.994-3.553 0-.022 0-.044-.002-.066l-1.002.099zm-2.025 5.534c-.056-.076-1.04-1.38-3.344-2.055-.916 2.55-1.97 4.887-2.062 5.083C14.73 20.355 16.275 19.38 17.55 17.93l.987-.408zM10.158 21.65c.092-.195 1.166-2.553 2.1-5.115-2.036-.59-4.32-.596-4.464-.595-.01.004-.02.008-.03.013C7.45 19.006 8.71 20.655 10.158 21.65zM5.586 14.398c.15-.003 2.61.002 4.757.653-.135-.615-.292-1.23-.466-1.842-3.15-.992-6.196-.92-6.39-.913-.198.795-.306 1.623-.306 2.476 0 1.545.42 3.012 1.155 4.29 0 .002.003.003.005.006 1.11-2.905 1.252-4.665 1.245-4.67zM4.17 9.873c.198-.007 3.035-.078 6.09.84-.96-1.745-2.022-3.415-2.115-3.56-2.502 1.12-4.148 3.51-4.223 6.304l.248-.052v.002l.002-.002zm5.72-4.23c.094.144 1.135 1.787 2.08 3.492 1.83-1.05 3.328-2.316 3.42-2.4-.95-1.1-2.22-1.89-3.66-2.27-.47-.123-.97-.19-1.48-.19-.125 0-.25.006-.374.016l.015.352zm6.276-.798c-.1.085-1.577 1.332-3.385 2.378 1.996.864 3.655 1.928 3.765 2 1.134-1.393 1.826-3.16 1.87-5.07l-2.25.692z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Link (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-[17px] font-semibold text-white mb-6 tracking-tight">Quick Link</h4>
            <ul className="space-y-4 text-[15px] text-[#94a3b8] font-normal">
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Service</Link></li>
              <li><Link href="#case-studies" className="hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors duration-200">Design Process</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors duration-200">Latest Blog</Link></li>
              <li><Link href="#careers" className="hover:text-white transition-colors duration-200">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: Service (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[17px] font-semibold text-white mb-6 tracking-tight">Service</h4>
            <ul className="space-y-4 text-[15px] text-[#94a3b8] font-normal">
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Product Design</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Web &amp; App Design</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Web Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">App Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">SaaS Development</Link></li>
              <li><Link href="#ourservice" className="hover:text-white transition-colors duration-200">Branding Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-[17px] font-semibold text-white mb-6 tracking-tight">Contact Us</h4>
            <div className="space-y-6 text-[15px] text-[#94a3b8]">

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-white font-medium text-[15px]">WhatsApp</div>
                  <div className="text-[#94a3b8] text-[15px]">+880 1968 657353</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <div className="text-white font-medium text-[15px]">Email Address</div>
                  <div className="text-[#94a3b8] text-[15px]">Info@creatibuzstudio.com</div>
                </div>
              </div>

              {/* Working Hour */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gray-400 mt-1 shrink-0" />
                <div className="flex flex-col gap-1">
                  <div className="text-white font-medium text-[15px]">Working Hour :</div>
                  <div className="text-[#94a3b8] text-[15px] leading-relaxed">
                    Mon - Fri 10.00 AM -<br />08.00 PM (GMT+6)
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-800/80 my-2" />

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#94a3b8] font-normal py-6">
          <p>© 2026 Copyright By - Creatibuz Studio</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookies Policy</Link>
          </div>
        </div>

      </div>

      {/* Giant Glowing Watermark "CREATIBUZ" Section at the very bottom */}
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] flex items-end justify-center pb-0 select-none z-0 overflow-hidden mt-0 border-none">
        {/* Strong Vibrant Orange Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00] via-[#FF6B00]/40 to-transparent opacity-80" />

        <h1 className="relative z-10 text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black tracking-tighter leading-none text-black/40 mix-blend-overlay -mb-8">
          CREATIBUZ
        </h1>

        {/* Horizontal Scanlines / Streaks over the text for that digital look */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_6px]" />
      </div>

    </footer>
  );
}
