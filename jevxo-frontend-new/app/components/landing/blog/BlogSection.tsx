"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionContainer from "@/app/components/ui/SectionContainer";
import { blogApi } from "@/api/blogApi";

interface BlogCardItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  image: string;
  alt: string;
}

const DEFAULT_BLOGS: BlogCardItem[] = [
  {
    id: "1",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever",
    title: "The Future of Branding Why Design Quality Matters More Than Ever.",
    date: "July 31, 2025",
    image: "/blogInsight/first.png",
    alt: "Doing Things brand tote bag showcase",
  },
  {
    id: "2",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever-2",
    title: "The Future of Branding Why Design Quality Matters More Than Ever.",
    date: "July 31, 2025",
    image: "/blogInsight/second.png",
    alt: "Digital data and binary depth perspective",
  },
  {
    id: "3",
    slug: "the-future-of-branding-why-design-quality-matters-more-than-ever-3",
    title: "The Future of Branding Why Design Quality Matters More Than Ever.",
    date: "July 31, 2025",
    image: "/blogInsight/thired.png",
    alt: "Pack mockup packaging and branding design",
  },
];

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogCardItem[]>(DEFAULT_BLOGS);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogApi.getAllBlogs();
        const blogList = Array.isArray(data) ? data : data?.data || [];
        if (blogList.length > 0) {
          setBlogs((prev) =>
            prev.map((fallback, idx) => {
              const apiItem = blogList[idx];
              if (!apiItem) return fallback;
              return {
                id: apiItem.id || fallback.id,
                slug: apiItem.slug || fallback.slug,
                title: apiItem.title || fallback.title,
                date: apiItem.createdAt
                  ? new Date(apiItem.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : fallback.date,
                image: fallback.image, // strictly loaded from /public/blogInsight/
                alt: fallback.alt,
              };
            })
          );
        }
      } catch {
        // Keep DEFAULT_BLOGS if api is empty or offline
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {/* 1. Header & Typography */}
      <motion.div
        id="blog"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <span className="text-primary text-sm md:text-[20px] text-center mb-3">
          [ Our Latest Blog ]
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-header-text text-center tracking-tight">
          Where Creativity Meets
          <span
            className="font-serif italic font-normal text-foreground text-center text-3xl sm:text-4xl md:text-5xl mt-1 block"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Intelligent Design.
          </span>
        </h2>
      </motion.div>

      {/* 2. Blog Cards Grid */}
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full"
      >
        {blogs.map((card, idx) => {
          // Card 2 (idx === 1) is active by default, or the card currently hovered
          const isActive =
            hoveredIndex !== null ? hoveredIndex === idx : idx === 1;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="bg-nav rounded-xl p-3 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Top Area: Thumbnail, Date, Headline */}
              <div>
                {/* 1. Featured Thumbnail */}
                <div className="rounded-xl overflow-hidden aspect-[16/10] bg-black/40 border border-white/5 relative">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* 2. Date Tag */}
                <span className="text-primary-text text-xs font-normal mt-4 block">
                  {card.date}
                </span>

                {/* 3. Article Headline */}
                <h3 className="text-primary-text font-medium text-base md:text-lg leading-snug mt-2 mb-6 line-clamp-2 group-hover:text-foreground transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Area: 4. Interactive CTA Button */}
              <div className="my-2">
                <Link
                  href={`/blog/${card.slug}`}
                  className={`rounded-full px-4 pr-2 py-2 flex items-center justify-between w-fit gap-3 transition-all duration-300 group/btn ${
                    isActive
                      ? "bg-primary text-foreground text-sm md:text-base font-semibold shadow-[0_0_30px_rgba(248,88,0,0.45)]"
                      : "bg-[#202020] text-header-text text-sm md:text-base font-medium border border-white/10 hover:bg-zinc-800"
                  }`}
                >
                  <span>Open Article</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-transform duration-300 group-hover/btn:rotate-45 ${
                      isActive
                        ? "bg-white text-primary"
                        : "bg-primary text-foreground"
                    }`}
                  >
                    <ArrowUpRight className="w-6 h-6 stroke-[2]" />
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
