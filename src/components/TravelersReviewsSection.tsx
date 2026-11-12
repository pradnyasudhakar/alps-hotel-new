import React, { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ReviewItem {
  id: string;
  rating: number;
  quote: string;
  authorName: string;
  authorLocation: string;
  authorAvatar: string;
}

export const TravelersReviewsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const REVIEWS: ReviewItem[] = [
    {
      id: 'rev-1',
      rating: 5,
      quote: '"Alps Hotels and Travels made our honeymoon absolutely magical. Every detail was perfectly planned!"',
      authorName: 'Sophia Martinez',
      authorLocation: 'New York, USA',
      authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'rev-2',
      rating: 5,
      quote: '"Best travel experience ever! The guides were amazing and the places were beyond beautiful."',
      authorName: 'James Wilson',
      authorLocation: 'London, UK',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'rev-3',
      rating: 5,
      quote: '"Excellent service from start to finish. Highly recommend Alps Hotels and Travels for any holiday and luxury stay!"',
      authorName: 'Emily Johnson',
      authorLocation: 'Sydney, Australia',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'rev-4',
      rating: 5,
      quote: '"Traveling with our elderly parents was completely hassle-free. The caring tour managers and fresh dining were extraordinary!"',
      authorName: 'Rajesh & Anjali Patel',
      authorLocation: 'Mumbai, India',
      authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'rev-5',
      rating: 5,
      quote: '"The cherry blossom tour across Tokyo and Kyoto exceeded every dream. Flawless hotel choices and pacing throughout."',
      authorName: 'Clara & David Laurent',
      authorLocation: 'Paris, France',
      authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 'rev-6',
      rating: 5,
      quote: '"Our coastal cruise and island explorations were pure paradise. Knowledgeable, warm leaders from airport departure to return."',
      authorName: 'Michael Chang',
      authorLocation: 'San Francisco, USA',
      authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80'
    }
  ];

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth > 768 
      ? scrollContainerRef.current.clientWidth / 3 
      : scrollContainerRef.current.clientWidth * 0.85;
    
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    setTimeout(checkScrollability, 350);
  };

  return (
    <section id="travelers-reviews" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none scroll-mt-20">
      {/* 1. Header with Eyebrow, Title and View All Reviews */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
        <div>
          {/* Eyebrow */}
          <span className="block text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-1.5">
            TRAVELERS LOVE US
          </span>
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-display tracking-tight leading-tight">
            What Our Travelers Say
          </h2>
        </div>

        {/* Top-Right "View All Reviews →" */}
        <button
          onClick={() => {
            const el = document.getElementById('explore-guided-tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0057B5] transition-colors self-start sm:self-end cursor-pointer"
        >
          <span>View All Reviews</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* 2. Carousel Track with Floating Left and Right Navigation Buttons */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          disabled={!canScrollLeft}
          aria-label="Previous reviews"
          className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer ${
            canScrollLeft
              ? 'hover:bg-slate-50 hover:shadow-lg hover:scale-105 opacity-100'
              : 'opacity-40 cursor-not-allowed pointer-events-none'
          }`}
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          disabled={!canScrollRight}
          aria-label="Next reviews"
          className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200/90 shadow-md flex items-center justify-center text-slate-700 transition-all duration-200 cursor-pointer ${
            canScrollRight
              ? 'hover:bg-slate-50 hover:shadow-lg hover:scale-105 opacity-100'
              : 'opacity-40 cursor-not-allowed pointer-events-none'
          }`}
        >
          <ChevronRight className="w-5 h-5 stroke-[2.2]" />
        </button>

        {/* Scrollable Container with exact 3-card desktop distribution and hidden scrollbar */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollability}
          className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[86%] sm:w-[48%] lg:w-[calc(33.333%-16px)] rounded-3xl border border-slate-200/70 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div>
                {/* 5 Golden Amber Stars */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Feedback Quote */}
                <p className="text-sm sm:text-[15px] text-slate-700 font-normal leading-relaxed font-sans mb-6">
                  {review.quote}
                </p>
              </div>

              {/* Author Info with circular avatar */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <img
                  src={review.authorAvatar}
                  alt={review.authorName}
                  className="w-11 h-11 rounded-full object-cover shadow-xs border border-slate-100"
                />
                <div>
                  <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 font-display leading-tight">
                    {review.authorName}
                  </h4>
                  <p className="text-xs text-slate-500 font-normal mt-0.5">
                    {review.authorLocation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
