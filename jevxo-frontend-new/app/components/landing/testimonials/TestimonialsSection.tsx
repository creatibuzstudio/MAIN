"use client";

import { useEffect, useState } from "react";
import { Star, Play, User as UserIcon, X } from "lucide-react";
import { reviewApi, Review } from "../../../../api/reviewApi";

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
        className="w-[450px] md:w-[520px] shrink-0 bg-[#16181A] rounded-[24px] p-5 border border-white/5 flex items-stretch gap-6 group"
      >
        {/* Left Side: Image Thumbnail Container with Play Overlay */}
        <div 
          className={`w-[170px] md:w-[200px] rounded-[16px] relative overflow-hidden bg-gray-900 shrink-0 ${item.videoUrl ? 'cursor-pointer' : ''}`}
          onClick={() => item.videoUrl ? setPlayingVideoUrl(item.videoUrl) : undefined}
        >
          <div className="w-full h-full relative flex items-center justify-center bg-gray-800 transition-transform duration-500 group-hover:scale-105">
            {item.thumbUrl ? (
              <img src={item.thumbUrl} alt="Thumbnail" className="w-full h-full object-cover" />
            ) : (
              <UserIcon className="w-16 h-16 text-gray-600" />
            )}
          </div>

          {/* Corner Play Button Overlay */}
          {item.videoUrl && (
            <div className="absolute bottom-4 left-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 z-20">
              <Play className="w-4 h-4 fill-[#2E5CFF] text-[#2E5CFF] ml-0.5" />
            </div>
          )}
        </div>

        {/* Right Side: Rating, Quote, Client Info */}
        <div className="flex flex-col justify-between h-full py-1 pr-1 w-full flex-1">
          <div>
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-4 text-[#fbbf24]">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#fbbf24] stroke-none" />
              ))}
              {[...Array(5 - rating)].map((_, i) => (
                <Star key={`empty-${i}`} className="w-4 h-4 text-gray-700 stroke-none" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="text-[#8B9197] text-[14px] leading-[1.6] mb-4 font-normal">
              {item.reviewText}
            </p>
          </div>

          {/* Author Name & Subtitle */}
          <div>
            <h4 className="font-medium text-white/90 text-[16px] tracking-tight mb-0.5">
              {item.client?.name || "Anonymous Client"}
            </h4>
            <p className="text-[13px] text-[#697077] font-normal">
              {item.client?.role || "Client"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Divide reviews into 2 rows for the marquee
  const getRowData = (rowNumber: number) => {
    if (reviews.length === 0) return [];

    const perRow = Math.ceil(reviews.length / 2);
    const startIdx = (rowNumber - 1) * perRow;
    const endIdx = startIdx + perRow;

    let rowReviews = reviews.slice(startIdx, endIdx);

    if (rowReviews.length === 0) {
      rowReviews = [...reviews];
    }

    const duplicated = [...rowReviews, ...rowReviews, ...rowReviews];
    return duplicated;
  };

  const row1 = getRowData(1);
  const row2 = getRowData(2);

  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center border-t border-gray-900"
    >
      {/* Side Fade Gradient Overlays (Dark Theme) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20" />

      {/* Header Container */}
      <div className="max-w-4xl w-full px-6 flex flex-col items-center text-center mb-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-tight flex flex-col items-center gap-2">
          <span>What SaaS Teams Say About Working</span>
          <span className="font-serif italic font-medium text-white/90 mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
            with Creatibuz Studio
          </span>
        </h2>
      </div>

      {/* Infinite Marquee Rows */}
      {reviews.length > 0 && (
        <div className="w-full space-y-6 relative z-10 overflow-hidden py-2">
          {/* Row 1: Marquee Left */}
          <div className="flex animate-marquee gap-6">
            {row1.map((item, idx) => renderCard(item, `r1-${idx}`))}
          </div>

          {/* Row 2: Marquee Right */}
          <div className="flex animate-marquee-reverse gap-6">
            {row2.map((item, idx) => renderCard(item, `r2-${idx}`))}
          </div>
        </div>
      )}

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
