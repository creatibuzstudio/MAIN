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
      className="w-full flex justify-center"
    >
      <div className="w-full max-w-[95%] lg:max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Dark Floating Card Container with prominent Orange border matching Figma */}
        <div 
          className="w-full bg-card text-foreground rounded-2xl p-8 sm:p-10 md:p-12 shadow-2xl flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 relative overflow-hidden border border-[#FF6B00]/40 shadow-[0_0_35px_rgba(255,107,0,0.12)]"
        >
          {/* Subtle Orange Glow behind the card left corner */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#FF6B00]/15 rounded-full blur-[90px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

          {/* Left Column: Headline, Photo, Profile Info */}
          <div className="w-full lg:w-5/12 flex flex-col items-start relative z-10">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-[1.2] mb-8 text-white">
              Enhance Your Brand <br className="hidden sm:inline" />
              Potential <span className=" italic font-medium text-primary">At No Cost!</span>
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
            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              Md Abdul Hakim
            </h3>
            <p className="text-[15px] md:text-[20px] text-foreground font-normal leading-snug mb-8">
              Founder & CEO -<br />Creatibuz Studio - Agency
            </p>

            {/* WhatsApp Contact */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-3 text-[15px] md:text-[20px] font-medium text-white/90">
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
                className="text-primary font-semibold text-[17px] md:text-[22px] hover:text-[#E65C00] transition-colors mt-1"
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
                  <label className="text-[13px] md:text-base font-normal text-white/90 block">
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
                    className="w-full bg-[#18191D] border border-white/10 focus:border-[#FF6B00] rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
                  />
                </div>

                {/* Email & WhatsApp Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[13px] md:text-base font-normal text-white/90 block">
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
                      className="w-full bg-[#18191D] border border-white/10 focus:border-[#FF6B00] rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] md:text-base font-normal text-white/90 block">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1254 21578 7845"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="w-full bg-[#18191D] border border-white/10 focus:border-[#FF6B00] rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Budget Setup Pills */}
                <div className="space-y-3 pt-2">
                  <label className="text-[13px] md:text-base font-normal text-white/90 block mb-4">
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
                          className={`px-8 py-4 rounded-[10px] text-[13px] sm:text-[14px] font-normal transition-all cursor-pointer border ${isSelected
                            ? "bg-[#24262E] text-white border-white/30 shadow-xs"
                            : "bg-[#18191D] text-gray-400 border-white/10 hover:text-white hover:border-white/20"
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
                  <label className="text-[13px] md:text-base font-normal text-white/90 block">
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
                    className="w-full bg-[#18191D] border border-white/10 focus:border-[#FF6B00] rounded-[12px] px-4 py-3.5 text-white placeholder-[#5A5D66] text-[15px] font-normal transition-all outline-none resize-none min-h-[140px]"
                  />
                </div>

                {/* Free Booking Button */}
                <div className="pt-6 flex justify-start relative">
                  <div className="relative group inline-block">
                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-primary blur-xl opacity-60 rounded-full scale-105 pointer-events-none group-hover:opacity-85 group-hover:scale-110 transition-all duration-300" />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative inline-flex items-center gap-3.5 bg-gradient-to-r from-[#FF5500] to-[#FF4500] hover:from-[#FF6000] hover:to-[#FF5000] text-white rounded-full pl-7 pr-1.5 py-1.5 text-[15px] sm:text-[16px] font-semibold tracking-wide transition-all cursor-pointer shadow-[0_10px_35px_rgba(255,85,0,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? "Submitting..." : "Free Booking"}</span>
                      <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold group-hover:-rotate-12 transition-transform duration-300">
                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUpRight className="w-6 h-6 stroke-[2]" />}
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
