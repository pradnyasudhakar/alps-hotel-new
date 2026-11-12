import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface DiwaliSpecialPackagesProps {
  onExploreTour?: (tourTitle: string) => void;
  onEnquireTour: (tourTitle: string) => void;
  currency: string;
}

export interface DiwaliPackageItem {
  id: string;
  title: string;
  subtitle: string;
  priceUSD: number;
  priceINR: number;
  duration: string;
  tag: string;
  rating: number;
  image: string;
  festiveHighlight: string;
}

export const DIWALI_PACKAGES: DiwaliPackageItem[] = [
  {
    id: 'diwali-kashmir',
    title: 'Kashmir Autumn Paradise',
    subtitle: 'Golden Chinar trees, Dal Lake Shikara ride with festive floating lanterns, and fresh snow fun in Gulmarg.',
    priceUSD: 310,
    priceINR: 26500,
    duration: '7 Days',
    tag: 'Popular',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Special Diwali Dal Lake Shikara Aarti & Wazwan Feast'
  },
  {
    id: 'diwali-dubai',
    title: 'Dubai Festive Shopping Tour',
    subtitle: 'Celebrate Diwali amidst illuminated futuristic skyscrapers, Red Dune Desert Safari, and Dubai Mall fountain shows.',
    priceUSD: 920,
    priceINR: 79900,
    duration: '6 Days',
    tag: 'Bestseller',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Burj Khalifa Special Diwali Light Show & Marina Cruise'
  },
  {
    id: 'diwali-jaipur',
    title: 'Royal Rajasthan Lights',
    subtitle: 'Witness Jaipur and Udaipur brilliantly illuminated with thousands of earthen diyas, royal palace heritage walks, and folk dances.',
    priceUSD: 285,
    priceINR: 24500,
    duration: '6 Days',
    tag: 'Heritage',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Exclusive Palace Gala Dinner & Traditional Fireworks'
  },
  {
    id: 'diwali-singapore',
    title: 'Singapore & Malaysia Fest',
    subtitle: 'Experience dazzling Deepavali street lights in Little India, Gardens by the Bay, and Genting Highlands cable car.',
    priceUSD: 1040,
    priceINR: 89500,
    duration: '7 Days',
    tag: 'Family Special',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Little India Diwali Festive Arch Walk & Universal Studios'
  },
  {
    id: 'diwali-kerala',
    title: 'Kerala Backwater Serenity',
    subtitle: 'Peaceful backwater cruise on an authentic Alleppey houseboat, misty tea hills of Munnar, and festive temple oil lamps.',
    priceUSD: 300,
    priceINR: 25500,
    duration: '6 Days',
    tag: 'Relax',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Deluxe Houseboat Diwali Feast & Traditional Kathakali'
  },
  {
    id: 'diwali-swiss',
    title: 'Swiss Alps Golden Holiday',
    subtitle: 'Snow peaks of Mt. Titlis and Jungfraujoch with warm Indian meals prepared fresh by our dedicated traveling Maharaj.',
    priceUSD: 2500,
    priceINR: 215000,
    duration: '8 Days',
    tag: 'Signature',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=85',
    festiveHighlight: 'Diwali Celebration at 10,000 ft with Sweets & Indian Chef'
  }
];

export const DiwaliSpecialPackages: React.FC<DiwaliSpecialPackagesProps> = ({
  onExploreTour,
  onEnquireTour,
  currency
}) => {
  const [activeIndex, setActiveIndex] = useState(2); // start with middle card active
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const total = DIWALI_PACKAGES.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    const threshold = 40; // min swipe distance
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const formatPrice = (usd: number, inr: number) => {
    if (currency === 'USD') {
      return `$${usd}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#112A22] font-display tracking-tight text-balance">
          Diwali Special Packages
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Celebrate the Festival of Lights in unforgettable destinations with gourmet Indian festive meals, family bonding, and 100% guaranteed departures.
        </p>
      </div>

      {/* Infinite Looped 3D Coverflow-style Card Deck with Touch Swipe Support */}
      <div
        className="relative w-full py-4 sm:py-8 flex items-center justify-center min-h-[460px] sm:min-h-[500px] touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full flex items-center justify-center">
          {DIWALI_PACKAGES.map((pkg, idx) => {
            // Infinite circular wrapped offset math
            let offset = (idx - activeIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            // Only show the 5 cards around the center
            if (Math.abs(offset) > 2) return null;

            // Positioning, scaling, opacity, and z-index calculation
            let transformClass = 'scale-90 opacity-60 z-10 translate-x-0';
            if (isCenter) {
              transformClass = 'scale-105 sm:scale-110 z-30 opacity-100 shadow-2xl translate-x-0';
            } else if (isLeft) {
              transformClass = 'scale-95 sm:scale-98 z-20 opacity-85 -translate-x-[55%] sm:-translate-x-[68%] lg:-translate-x-[85%]';
            } else if (isRight) {
              transformClass = 'scale-95 sm:scale-98 z-20 opacity-85 translate-x-[55%] sm:translate-x-[68%] lg:translate-x-[85%]';
            } else if (isFarLeft) {
              transformClass = 'hidden sm:block scale-85 z-10 opacity-50 -translate-x-[110%] sm:-translate-x-[135%] lg:-translate-x-[165%]';
            } else if (isFarRight) {
              transformClass = 'hidden sm:block scale-85 z-10 opacity-50 translate-x-[110%] sm:translate-x-[135%] lg:translate-x-[165%]';
            }

            return (
              <div
                key={pkg.id}
                onClick={() => setActiveIndex(idx)}
                className={`absolute w-[270px] sm:w-[310px] lg:w-[330px] h-[410px] sm:h-[440px] rounded-3xl overflow-hidden transition-all duration-500 ease-out cursor-pointer select-none border ${
                  isCenter ? 'border-amber-400/40 ring-4 ring-amber-400/20' : 'border-slate-200/60'
                } ${transformClass}`}
              >
                {/* Background Full Card Image */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Top Subtle Scrim */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                {/* Festive Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white bg-[#0057B5] shadow-sm">
                    {pkg.tag}
                  </span>
                </div>

                {/* Bottom Frosted Glass Gradient Panel */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 via-black/80 to-black/30 backdrop-blur-md text-white flex flex-col justify-end">
                  {/* Title & Price Pill Row */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white font-display tracking-tight leading-snug truncate">
                      {pkg.title}
                    </h3>

                    {/* Price in dark rounded pill */}
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black text-amber-300 bg-black/60 border border-amber-400/30 whitespace-nowrap">
                      {formatPrice(pkg.priceUSD, pkg.priceINR)}
                    </span>
                  </div>

                  {/* 2-line Subtitle */}
                  <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                    {pkg.subtitle}
                  </p>

                  {/* Mini Tags Row: Category & Duration */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-semibold text-slate-200">
                      {pkg.tag}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-[10px] font-semibold text-slate-200">
                      {pkg.duration}
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 flex items-center gap-0.5 ml-auto">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {pkg.rating}
                    </span>
                  </div>

                  {/* White Pill Enquire Now Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onEnquireTour(pkg.title);
                    }}
                    className="w-full py-2.5 rounded-full bg-white hover:bg-[#EDF5FD] text-slate-900 hover:text-[#0057B5] font-bold text-xs sm:text-sm text-center shadow-md transition-all cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Carousel Controls: Hidden on mobile */}
      <div className="hidden sm:flex mt-8 items-center justify-center gap-5">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0057B5] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
          aria-label="Previous tour"
          title="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => onExploreTour?.('all')}
          className="text-xs sm:text-sm font-bold text-slate-700 hover:text-[#0057B5] transition-colors cursor-pointer"
        >
          View More Tours
        </button>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0057B5] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
          aria-label="Next tour"
          title="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
