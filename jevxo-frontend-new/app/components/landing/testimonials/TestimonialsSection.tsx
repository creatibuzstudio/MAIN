"use client";

import { useEffect, useState } from "react";
import { Star, Play, User as UserIcon, X } from "lucide-react";
import { reviewApi, Review } from "../../../../api/reviewApi";
import { GridSpark } from "../../ui/SectionContainer";

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c1",
    createdAt: "",
    updatedAt: "",
    client: { id: "c1", name: "Bonnie M. Pattison", email: "bonnie@example.com", role: "Happy mom from New York" },
  },
  {
    id: "rev-2",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/44.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c2",
    createdAt: "",
    updatedAt: "",
    client: { id: "c2", name: "Bonnie M. Pattison", email: "sarah@example.com", role: "Happy mom from New York" },
  },
  {
    id: "rev-3",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c3",
    createdAt: "",
    updatedAt: "",
    client: { id: "c3", name: "Bonnie M. Pattison", email: "marcus@example.com", role: "Happy mom from New York" },
  },
  {
    id: "rev-4",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/68.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c4",
    createdAt: "",
    updatedAt: "",
    client: { id: "c4", name: "Bonnie M. Pattison", email: "elena@example.com", role: "Happy mom from New York" },
  },
  {
    id: "rev-5",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/women/75.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c5",
    createdAt: "",
    updatedAt: "",
    client: { id: "c5", name: "Bonnie M. Pattison", email: "alex@example.com", role: "Happy mom from New York" },
  },
  {
    id: "rev-6",
    reviewText: "Thanks to the personalized attention and guidance provided by the Prenatal Center. I highly recommend them to any Quisque faucibus quam justo, sit amet fermentum...",
    rating: 5,
    thumbUrl: "https://randomuser.me/api/portraits/men/86.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    clientId: "c6",
    createdAt: "",
    updatedAt: "",
    client: { id: "c6", name: "Bonnie M. Pattison", email: "robert@example.com", role: "Happy mom from New York" },
  },
];

export default function TestimonialsSection() {
  const [playingVideoUrl, setPlayingVideoUrl] = useState<string | null>(null);
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [isLoading, setIsLoading] = useState(true);

  const getEmbedUrl = (url: string | undefined | null) => {
    if (!url) return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return url;
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewApi.getAllReviews();
        const reviewList = Array.isArray(data) ? data : data?.data || [];
        if (reviewList && reviewList.length > 0) {
          setReviews(reviewList);
        } else {
          setReviews(DEFAULT_REVIEWS);
        }
      } catch (error) {
        console.error("Failed to fetch reviews, using fallback data:", error);
        setReviews(DEFAULT_REVIEWS);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderCard = (item: Review, keySuffix: string) => {
    const cardKey = `${item.id}-${keySuffix}`;
    const rating = Math.min(Math.max(item.rating || 5, 1), 5);

    return (
      <div
        key={cardKey}
        className="w-[440px] sm:w-[500px] shrink-0 bg-card rounded-xl p-3 sm:p-4 border border-white/5 flex items-stretch gap-5 group transition-colors hover:border-white/10"
      >
        {/* Left Side: Image Thumbnail Container with Play Overlay */}
        <div
          className={`w-[140px] sm:w-[160px] aspect-square rounded-xl relative overflow-hidden bg-gray-900 shrink-0 ${item.videoUrl ? "cursor-pointer" : ""}`}
          onClick={() =>
            item.videoUrl ? setPlayingVideoUrl(item.videoUrl) : undefined
          }
        >
          <div className="w-full h-full relative flex items-center justify-center bg-gray-800 transition-transform duration-500 group-hover:scale-105">
            {item.thumbUrl ? (
              <img
                src={item.thumbUrl}
                alt="Thumbnail"
                className="w-full h-full object-cover"
              />
            ) : (
              <UserIcon className="w-16 h-16 text-gray-600" />
            )}
          </div>

          {/* Corner Play Button Overlay */}
          {item.videoUrl && (
            <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 z-20">
              <Play className="w-3.5 h-3.5 fill-[#5D5FEF] text-[#5D5FEF] ml-0.5" />
            </div>
          )}
        </div>

        {/* Right Side: Rating, Quote, Client Info */}
        <div className="flex flex-col justify-between h-full py-1 pr-1 w-full flex-1">
          <div>
            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-3 text-[#F59E0B]">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F59E0B] stroke-none" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Star
                  key={`empty-${i}`}
                  className="w-4 h-4 text-gray-700 stroke-none"
                />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-primary-text text-[13.5px] leading-relaxed mb-4 font-normal line-clamp-3">
              {item.reviewText}
            </p>
          </div>

          {/* Author Name & Subtitle */}
          <div>
            <h4 className="font-semibold text-primary-text text-[15px] md:text-lg tracking-tight mb-0.5">
              {item.client?.name || "Anonymous Client"}
            </h4>
            <p className="text-[13px] text-primary-text font-normal">
              {item.client?.role || "Client"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Divide reviews into 2 rows for the marquee
  const getRowData = (rowNumber: number) => {
    const list = reviews && reviews.length > 0 ? reviews : DEFAULT_REVIEWS;
    const perRow = Math.ceil(list.length / 2);
    const startIdx = (rowNumber - 1) * perRow;
    const endIdx = startIdx + perRow;

    let rowReviews = list.slice(startIdx, endIdx);
    if (rowReviews.length === 0) {
      rowReviews = [...list];
    }

    // Ensure at least 8 items in the base set so it spans past any screen width
    let baseSet = [...rowReviews];
    while (baseSet.length < 8) {
      baseSet = [...baseSet, ...rowReviews];
    }

    // Duplicate baseSet exactly once for a seamless 50% infinite marquee loop (16+ cards, 8,500px+)
    return [...baseSet, ...baseSet];
  };

  const row1 = getRowData(1);
  const row2 = getRowData(2);

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 select-none"
    >
      {/* 1. Full-width top horizontal divider line */}
      <div className="w-full h-px bg-white/[0.12] absolute top-0 inset-x-0 pointer-events-none z-0" />

      {/* 2. Background Grid: max-w-7xl vertical lines & cross markers behind the cards */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-0">
        {/* Left vertical border line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.12]" />
        {/* Right vertical border line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/[0.12]" />

        {/* Top Diamond Cross Marks */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-primary-text" />
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-primary-text" />
        </div>

        {/* Bottom Diamond Cross Marks */}
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-primary-text" />
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10">
          <GridSpark className="w-5 h-5 sm:w-6 sm:h-6 text-primary-text" />
        </div>
      </div>

      {/* 3. Header Container */}
      <div className="max-w-4xl w-full mx-auto px-6 flex flex-col items-center text-center mb-14 md:mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight flex flex-col items-center gap-2">
          <span>What SaaS Teams Say About Working</span>
          <span className="font-serif italic font-normal text-white mt-1 text-3xl md:text-4xl lg:text-[42px]">
            with Creatibuz Studio
          </span>
        </h2>
      </div>

      {/* 4. Infinite Marquee Rows - Edge-to-Edge Full Screen Width (Zero Gap on Both Sides) */}
      {reviews.length > 0 && (
        <div className="w-full overflow-hidden space-y-6 py-2 relative z-10">
          {/* Row 1: Marquee Left */}
          <div className="flex animate-marquee gap-6 will-change-transform">
            {row1.map((item, idx) => renderCard(item, `r1-${idx}`))}
          </div>

          {/* Row 2: Marquee Right */}
          <div className="flex animate-marquee-reverse gap-6 will-change-transform">
            {row2.map((item, idx) => renderCard(item, `r2-${idx}`))}
          </div>
        </div>
      )}

      {/* 5. Full-width bottom horizontal divider line */}
      <div className="w-full h-px bg-white/[0.12] absolute bottom-0 inset-x-0 pointer-events-none z-0" />

      {/* Video Modal */}
      {playingVideoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setPlayingVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all cursor-pointer"
              onClick={() => setPlayingVideoUrl(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={getEmbedUrl(playingVideoUrl)}
              title="Client Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
