"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { contactApi } from "@/api/contactApi";

const budgetOptions = [
  "Less than $500",
  "$3K - $5K",
  "$5K - $10K",
  "10k - 20k",
  "20k - 50k",
  "50k - 100k",
];

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState("Less than $500");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    productDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactApi.createContact({ ...formData, budget: selectedBudget });
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        productDetails: "",
      });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("Failed to submit form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-10 md:py-16 flex justify-center bg-[#0a0a0a]"
    >
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Dark Floating Card Container with subtle Orange top-left border */}
        <div 
          className="w-full bg-[#121316] text-white rounded-[24px] p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative overflow-hidden"
          style={{
            boxShadow: 'inset 1px 1px 0px rgba(255, 107, 0, 0.4), 0 20px 50px rgba(0,0,0,0.5)',
          }}
        >
          {/* Subtle Orange Glow behind the card left corner */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* Left Column: Headline, Photo, Profile Info */}
          <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-[1.2] mb-10 text-white">
              Enhance Your Brand <br className="hidden sm:inline" />
              Potential <span className="font-serif italic font-medium text-[#FF6B00]">At No Cost!</span>
            </h2>

            {/* Hakim Photo Container */}
            <div className="w-full max-w-[320px] aspect-[4/4.5] rounded-[16px] overflow-hidden relative mb-8 shadow-2xl bg-gray-900 border border-white/5">
              <Image
                src="/hakim.png"
                alt="Md Abdul Hakim"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Profile Name & Title */}
            <h3 className="text-3xl font-bold text-white tracking-tight mb-2">
              Md Abdul Hakim
            </h3>
            <p className="text-[15px] text-[#A1A1AA] font-normal leading-snug mb-8">
              Founder & CEO -<br />Creatibuz Studio - Agency
            </p>

            {/* WhatsApp Contact */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <span>++880 1968657353</span>
              </div>
              <Link
                href="https://wa.me/+8801968657353"
                target="_blank"
                className="text-[#FF6B00] font-semibold text-[17px] hover:text-[#E65C00] transition-colors mt-2"
              >
                Book a Call Directly
              </Link>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="w-full lg:w-7/12 relative z-10 mt-4 lg:mt-0">
            {submitted ? (
              <div className="py-32 text-center flex flex-col items-center space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <h3 className="text-3xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400 max-w-md font-medium text-base">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[13px] font-normal text-white block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-transparent border border-[#2A2D35] focus:border-[#FF6B00] rounded-[10px] px-4 py-3.5 text-white placeholder-[#52525B] text-[15px] font-normal transition-all outline-none"
                  />
                </div>

                {/* Email & WhatsApp Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[13px] font-normal text-white block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Info@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border border-[#2A2D35] focus:border-[#FF6B00] rounded-[10px] px-4 py-3.5 text-white placeholder-[#52525B] text-[15px] font-normal transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-normal text-white block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1254 21578 7845"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full bg-transparent border border-[#2A2D35] focus:border-[#FF6B00] rounded-[10px] px-4 py-3.5 text-white placeholder-[#52525B] text-[15px] font-normal transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Budget Setup Pills */}
                <div className="space-y-3 pt-2">
                  <label className="text-[13px] font-normal text-white block mb-4">
                    Budget Setup
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {budgetOptions.map((option) => {
                      const isSelected = selectedBudget === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setSelectedBudget(option)}
                          className={`px-5 py-2.5 rounded-[8px] text-[13px] sm:text-[14px] font-normal transition-all cursor-pointer border ${isSelected
                            ? "bg-transparent text-white border-white/30"
                            : "bg-transparent text-gray-400 border-[#2A2D35] hover:text-white hover:border-[#3A3D45]"
                            }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-2 pt-2">
                  <label className="text-[13px] font-normal text-white block">
                    Product Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder=""
                    value={formData.productDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productDetails: e.target.value,
                      })
                    }
                    className="w-full bg-transparent border border-[#2A2D35] focus:border-[#FF6B00] rounded-[10px] px-4 py-3.5 text-white placeholder-[#52525B] text-[15px] font-normal transition-all outline-none resize-none"
                  />
                </div>

                {/* Free Booking Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center gap-3 bg-[#FF6B00] hover:bg-[#E65C00] text-white rounded-full pl-6 pr-1.5 py-1.5 text-[15px] font-semibold transition-all cursor-pointer shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_40px_rgba(255,107,0,0.6)] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Free Booking"}</span>
                    <div className="w-8 h-8 rounded-full bg-white text-[#FF6B00] flex items-center justify-center font-bold group-hover:-rotate-12 transition-transform duration-300">
                      {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpRight className="w-4 h-4" />}
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
