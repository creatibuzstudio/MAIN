"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { motion, animate } from "framer-motion";
import SectionContainer from "@/app/components/ui/SectionContainer";
import { packageBookingApi } from "../../../../api/packageBookingApi";

interface PlanItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  period: string;
  isPopular: boolean;
  features: string[];
  buttonText: string;
}

interface CategoryData {
  id: string;
  name: string;
  plans: PlanItem[];
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    id: "website-design",
    name: "Website Design",
    plans: [
      {
        id: "starter-web",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 700,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "growth-web",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 1500,
        period: "/ per month",
        isPopular: true,
        features: [
          "Everything in Starter Plan",
          "Advanced Budgeting Tools",
          "Customizable Dashboards",
          "Transaction Insights",
          "Enhanced Security",
          "Customizable Dashboards",
          "Customizable Dashboards",
          "Customizable Dashboards",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "business-web",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 4000,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
    ],
  },
  {
    id: "web-app",
    name: "Web App",
    plans: [
      {
        id: "starter-webapp",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 1200,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "growth-webapp",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 2500,
        period: "/ per month",
        isPopular: true,
        features: [
          "Everything in Starter Plan",
          "Advanced Budgeting Tools",
          "Customizable Dashboards",
          "Transaction Insights",
          "Enhanced Security",
          "Customizable Dashboards",
          "Customizable Dashboards",
          "Customizable Dashboards",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "business-webapp",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 5500,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
    ],
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    plans: [
      {
        id: "starter-mobile",
        name: "Starter Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 1500,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "growth-mobile",
        name: "Growth Plan",
        subtitle: "Ideal for growing startups and mid-sized companies",
        price: 3200,
        period: "/ per month",
        isPopular: true,
        features: [
          "Everything in Starter Plan",
          "Advanced Budgeting Tools",
          "Customizable Dashboards",
          "Transaction Insights",
          "Enhanced Security",
          "Customizable Dashboards",
          "Customizable Dashboards",
          "Customizable Dashboards",
        ],
        buttonText: "Select This Plan",
      },
      {
        id: "business-mobile",
        name: "Business Plan",
        subtitle: "Perfect for larger organizations with advanced needs",
        price: 6800,
        period: "/ per month",
        isPopular: false,
        features: [
          "Everything in Growth Plan",
          "Investment Tracking",
          "Integration Services",
          "24/7 VIP Support",
          "Premium Security",
          "Premium Security",
          "Premium Security",
          "Premium Security",
        ],
        buttonText: "Select This Plan",
      },
    ],
  },
];

// Smooth Spring Counter Component for dynamic price changes
function AnimatedPrice({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  const prevValue = useRef(value);

  useEffect(() => {
    const controls = animate(prevValue.current, value, {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });
    prevValue.current = value;
    return () => controls.stop();
  }, [value]);

  return <span>${displayValue.toLocaleString()}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function PricingSection() {
  const [activeTabId, setActiveTabId] = useState<string>("website-design");

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    userEmail: "",
    companyName: "",
    companyEmail: "",
  });

  const activeCategory = CATEGORIES_DATA.find((c) => c.id === activeTabId) || CATEGORIES_DATA[0];

  return (
    <div id="pricing" className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Figma Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/grid-bg.png"
          alt="Pricing Grid Background"
          fill
          className="object-cover object-top -translate-y-3"
        />
      </div>

      {/* Section Container Border & Margin Lines (rendered above grid-bg to prevent being covered) */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.12] pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.12] pointer-events-none z-10" />

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Tag */}
        <span className="text-primary text-sm md:text-[20px] text-center mb-3 block font-sans">
          [ Pricing Plan ]
        </span>

        {/* Main Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-foreground text-center tracking-tight leading-[1.18] max-w-3xl mx-auto font-sans mb-8">
          Customize your plan to{" "}
          <span className="font-serif italic font-normal text-foreground">
            match your
          </span>
          <br className="hidden sm:inline" />{" "}
          <span className="font-serif italic font-normal text-foreground">
            goals,
          </span>{" "}
          scale, and business needs.
        </h2>

        {/* Category Switcher Tabs */}
        <div className="rounded-full p-1.5 bg-zinc-900/90 border border-white/10 w-fit mx-auto mb-14 sm:mb-16 flex items-center gap-1 shadow-xl backdrop-blur-md">
          {CATEGORIES_DATA.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`transition-all duration-300 rounded-full text-sm font-medium ${
                  isActive
                    ? "bg-primary text-foreground px-6 py-2 shadow-md shadow-[#F85800]/25"
                    : "text-primary-text hover:text-foreground px-5 py-2"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {activeCategory.plans.map((plan, idx) => {
            const isPopular = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#232528] border-2 border-white/30 shadow-2xl z-10"
                    : "bg-[#0F0F0F] border border-white/10 shadow-xl z-0"
                }`}
              >
                {/* Most Popular Top Floating Badge */}
                {isPopular && (
                  <div className="bg-primary text-foreground text-xs font-semibold px-4 py-1 rounded-full absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-lg shadow-[#F85800]/30 tracking-wide">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Card Title */}
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2 font-sans">
                    {plan.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-primary-text text-sm font-normal min-h-[42px] leading-relaxed font-sans mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight font-sans">
                      <AnimatedPrice value={plan.price} />
                    </span>
                    <span className="text-primary-text text-sm font-normal font-sans">
                      {plan.period}
                    </span>
                  </div>

                  {/* Deliverables Box */}
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/5 space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            isPopular
                              ? "bg-primary text-foreground shadow-[0_0_8px_rgba(248,88,0,0.4)]"
                              : "bg-zinc-800 text-primary-text"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className="text-sm text-zinc-300 font-normal font-sans">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedPlan(plan);
                    setIsModalOpen(true);
                  }}
                  className={`w-full py-3.5 rounded-full font-medium text-center text-sm transition-all duration-300 ${
                    isPopular
                      ? "bg-primary text-foreground font-semibold shadow-[0_0_35px_rgba(248,88,0,0.8)] hover:brightness-110 active:scale-[0.98]"
                      : "bg-zinc-800/80 hover:bg-zinc-700/80 text-foreground font-medium border border-white/10 active:scale-[0.98]"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#111622] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-lg shadow-2xl relative text-left">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">
              Book {selectedPlan.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-sans">
              ${selectedPlan.price.toLocaleString()} {selectedPlan.period}. Fill
              out the form below and we'll get in touch with you shortly.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                try {
                  await packageBookingApi.createBooking({
                    ...formData,
                    billingCycle:
                      selectedPlan.period
                        .replace("/", "")
                        .replace("per", "")
                        .trim() || "month",
                    packageId: selectedPlan.id,
                  });
                  alert("Booking successful! We will contact you soon.");
                  setIsModalOpen(false);
                  setFormData({
                    name: "",
                    userEmail: "",
                    companyName: "",
                    companyEmail: "",
                  });
                } catch (error) {
                  console.error("Booking failed:", error);
                  alert("Booking failed. Please try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-[#F85800] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.userEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      userEmail: e.target.value,
                    }))
                  }
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-[#F85800] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
                  Company Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      companyName: e.target.value,
                    }))
                  }
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-[#F85800] transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1 font-sans">
                  Company Email
                </label>
                <input
                  required
                  type="email"
                  value={formData.companyEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      companyEmail: e.target.value,
                    }))
                  }
                  className="w-full bg-[#0b101d] border border-gray-700 rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-[#F85800] transition-colors"
                  placeholder="contact@acme.com"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-3.5 bg-primary hover:brightness-110 disabled:opacity-50 text-foreground rounded-lg font-medium transition-all mt-6 shadow-[0_0_20px_rgba(248,88,0,0.35)]"
              >
                {isSubmitting ? "Booking..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}