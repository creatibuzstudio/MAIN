"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects are completed within 5–10 business days, depending on the scope and complexity. Larger or custom requests may take a bit longer. A clear timeline is always shared before we get started."
  },
  {
    question: "What services do you offer?",
    answer: "We offer end-to-end digital product design including UI/UX design, Web App development, Mobile App development, Branding & Design Systems, and custom AI integration."
  },
  {
    question: "Can you work with existing branding?",
    answer: "Yes, absolutely! We can work seamlessly within your existing brand guidelines, color palettes, and typography while elevating the overall digital experience."
  },
  {
    question: "What if I need changes after the project is delivered?",
    answer: "We offer continuous post-delivery support and revision rounds to ensure everything functions perfectly and meets your expectations."
  },
  {
    question: "How does the monthly retainer work?",
    answer: "Our monthly retainer gives you dedicated design & development bandwidth with predictable costs, priority turnarounds, and zero long-term commitments."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-[#0a0a0a]">
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Titles & CTA */}
          <div className="w-full lg:w-4/12 flex flex-col items-start pt-2">
            <span className="text-[#FF6B00] font-medium text-[15px] mb-6">
              [ Ask Anything ]
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-semibold text-white/90 tracking-tight leading-[1.1] mb-6">
              Frequently <br />
              <span className="font-serif italic font-medium text-white/70">
                Asked Question
              </span>
            </h2>
            
            <p className="text-[#71717A] text-[15px] mb-10">
              Before You Ask — Here's the Answer
            </p>
            
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center gap-3 bg-[#FF6B00] hover:bg-[#E65C00] text-white rounded-full pl-6 pr-1.5 py-1.5 text-[15px] font-semibold transition-all cursor-pointer shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)]"
            >
              <span>Request Free Audit</span>
              <div className="w-8 h-8 rounded-full bg-white text-[#FF6B00] flex items-center justify-center font-bold group-hover:-rotate-12 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Right Column: FAQ Accordions */}
          <div className="w-full lg:w-8/12 flex flex-col space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="w-full bg-[#161618] border border-white/5 rounded-[12px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-[17px] font-medium text-white/80 pr-8">
                      {faq.question}
                    </span>
                    <span className="text-[#FF6B00] flex-shrink-0 ml-4">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pt-0 text-[15px] text-[#A1A1AA] leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
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
