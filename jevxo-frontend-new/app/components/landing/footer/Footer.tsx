"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-white pt-16 md:pt-20 relative overflow-hidden z-10 border-t border-gray-900">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* Column 1: Brand Info & Social Icons (Col Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-2">
              <Image
                src="/creatibuz-symbol.png"
                alt="Creatibuz Symbol"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl object-contain"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[22px] font-bold text-white leading-tight">Creatibuz <span className="font-normal">Studio</span></span>
                <span className="text-[9px] font-medium tracking-[0.25em] text-primary-text mt-0.5">DESIGN. DEVELOP. TRANSFORM.</span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-primary-text text-sm leading-relaxed max-w-xs font-normal">
              A full-service UI/UX and development agency helping startups and businesses create fast, scalable, and user-focused digital products.
            </p>

            {/* Social Media Rounded Buttons with Inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <Link
                href="#"
                target="_blank"
                aria-label="Facebook"
                className="w-10 h-10 rounded-[10px] bg-[#0c0704] border border-primary/40 flex items-center justify-center text-primary/90 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.1)] hover:shadow-[0_0_20px_rgba(254,90,0,0.3)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                className="w-10 h-10 rounded-[10px] bg-[#0c0704] border border-primary/40 flex items-center justify-center text-primary/90 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.1)] hover:shadow-[0_0_20px_rgba(254,90,0,0.3)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-[10px] bg-[#0c0704] border border-primary/40 flex items-center justify-center text-primary/90 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.1)] hover:shadow-[0_0_20px_rgba(254,90,0,0.3)]"
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
                className="w-10 h-10 rounded-[10px] bg-[#0c0704] border border-primary/40 flex items-center justify-center text-primary/90 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.1)] hover:shadow-[0_0_20px_rgba(254,90,0,0.3)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-15.154h6.54c2.905 0 4.737 1.409 4.737 3.981 0 1.458-.812 2.615-2.185 3.199 1.626.319 2.477 1.701 2.477 3.468 0 2.868-2.228 4.506-5.103 4.506zm-3.864-7.234h2.899c1.64 0 2.613-.673 2.613-2.072 0-1.456-.998-1.92-2.585-1.92h-2.927v3.992zm0 4.776h3.234c2.061 0 3.111-.861 3.111-2.463 0-1.62-1.077-2.316-3.083-2.316h-3.262v4.779z" />
                </svg>
              </Link>

              {/* Dribbble */}
              <Link
                href="#"
                aria-label="Dribbble"
                className="w-10 h-10 rounded-[10px] bg-[#0c0704] border border-primary/40 flex items-center justify-center text-primary/90 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(254,90,0,0.1)] hover:shadow-[0_0_20px_rgba(254,90,0,0.3)]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm8.396-8.243c-1.344-1.229-3.791-2.593-6.529-2.966-.192 1.488-.501 2.94-1.042 4.417 2.915 1.054 5.253 1.258 6.012 1.206 1.025-1.637 1.545-3.136 1.559-2.657zm-14.881-4.04c2.457-1.01 5.309-1.254 7.502-1.233.914-1.745 1.761-3.69 2.454-5.619-3.102-.924-6.425-.632-9.011.667-.367.653-.872 1.94-.945 6.185zm2.112 5.225c1.442-.907 3.901-2.072 6.551-2.458.553 1.253 1.034 2.502 1.464 3.639-3.415 1.558-6.19 1.155-7.147.962-.432-1.056-.71-2.193-.868-2.143zm10.603 2.128c-.808.57-3.298 1.93-6.326.685.256-1.127.51-2.17.76-3.224 2.883.332 5.485 1.776 6.505 2.871-.161.942-.485 1.742-.939 2.668zm-5.454-15.688c-.689 1.83-1.468 3.642-2.316 5.367-2.285-.028-5.068.324-7.443 1.346.069-1.282.493-4.293 2.217-6.275 2.127-1.396 4.962-1.309 7.542-.438zm5.545 3.328c-.876.549-3.535 2.016-6.444 2.898-.564-1.89-1.341-3.619-2.261-5.111 2.378-1.237 5.244-1.213 6.945-.296.953.945 1.424 2.148 1.76 2.509z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Link (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Quick Link</h4>
            <ul className="space-y-3 text-sm text-primary-text font-normal">
              <li><Link href="#service" className="hover:text-white transition-colors duration-200">Service</Link></li>
              <li><Link href="#case-studies" className="hover:text-white transition-colors duration-200">Case Studies</Link></li>
              <li><Link href="#design-process" className="hover:text-white transition-colors duration-200">Design Process</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link href="#blog" className="hover:text-white transition-colors duration-200">Latest Blog</Link></li>
              <li><Link href="#career" className="hover:text-white transition-colors duration-200">Career</Link></li>
            </ul>
          </div>

          {/* Column 3: Service (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Service</h4>
            <ul className="space-y-3 text-sm text-primary-text font-normal">
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
            <h4 className="text-base font-semibold text-white mb-5 tracking-tight">Contact Us</h4>
            <div className="space-y-4 text-sm text-primary-text">

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#25D366] mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">WhatsApp</div>
                  <div className="text-primary-text text-xs sm:text-sm mt-0.5">+880 1968 657353</div>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">Email Address</div>
                  <div className="text-primary-text text-xs sm:text-sm mt-0.5">Info@creatibuzstudio.com</div>
                </div>
              </div>

              {/* Working Hour */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-300 mt-1 shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm">Working Hour :</div>
                  <div className="text-primary-text text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Mon - Fri 10.00 AM -<br />08.00 PM (GMT+6)
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-gray-800/80 my-6" />

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-text font-normal pb-6">
          <p>© 2026 Copyright By - Creatibuz Studio</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms &amp; Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookies Policy</Link>
          </div>
        </div>

      </div>

      {/* Giant Glowing Watermark "CREATIBUZ" Section at the very bottom */}
      <div className="relative w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[380px] flex items-end justify-center pb-4 sm:pb-8 md:pb-12 select-none overflow-hidden mt-4">
        
        {/* Deep Orange Glow from Bottom */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-primary blur-[120px] opacity-20 pointer-events-none z-0" />

        {/* Solid Gradient Text */}
        <h1 className="relative z-10 text-[100px] sm:text-[160px] md:text-[220px] lg:text-[280px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-t from-primary via-primary/80 to-transparent">
          CREATIBUZ
        </h1>

        {/* Thick Horizontal Scanlines matching the image */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none opacity-80" 
          style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 4px, #0C0E12 4px, #0C0E12 8px)' }} 
        />
      </div>

    </footer>
  );
}

