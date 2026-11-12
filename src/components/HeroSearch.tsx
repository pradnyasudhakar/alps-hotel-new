import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, Tag, Headphones, ShieldCheck } from 'lucide-react';

interface HeroSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
  selectedDuration: string;
  setSelectedDuration: (duration: string) => void;
  selectedHub: string;
  setSelectedHub: (hub: string) => void;
  activeTab: 'all' | 'international' | 'domestic' | 'specialty';
  setActiveTab: (tab: 'all' | 'international' | 'domestic' | 'specialty') => void;
  onSearchSubmit: () => void;
  matchingCount: number;
}

const TOP_LOCATIONS = [
  {
    title1: "Discover.",
    title2: "Explore.",
    title3: "Live the Journey.",
    country: "Banff National Park, Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=2600&q=90",
    description: "Explore breathtaking destinations and create unforgettable memories.",
    searchQuery: "Banff"
  },
  {
    title: "Swiss Alps & Lucerne",
    subtitle: "Storybook Valleys",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2600&q=90",
    description: "Explore breathtaking destinations and create unforgettable memories.",
    searchQuery: "Switzerland"
  },
  {
    title: "Kyoto Cherry Blossom",
    subtitle: "Ancient Shrines",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2600&q=90",
    description: "Explore breathtaking destinations and create unforgettable memories.",
    searchQuery: "Japan"
  }
];

export const HeroSearch: React.FC<HeroSearchProps> = ({
  searchTerm,
  setSearchTerm,
  selectedMonth,
  setSelectedMonth,
  selectedDuration,
  setSelectedDuration,
  selectedHub,
  setSelectedHub,
  activeTab,
  setActiveTab,
  onSearchSubmit,
  matchingCount
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play Carousel
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TOP_LOCATIONS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section 
      className="relative w-full overflow-hidden scroll-animate bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Full-Bleed Immersive Hero Container */}
      <div className="relative w-full min-h-[600px] lg:min-h-[680px] flex flex-col justify-between pt-20 sm:pt-24 pb-0">
        
        {/* Background Mountain Lake Image with zero overlay */}
        <div className="absolute inset-0 w-full h-full bg-[#183B30]">
          {TOP_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={loc.image}
                alt={loc.country}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-7000 ease-out"
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'auto'}
              />
            </div>
          ))}
        </div>

        {/* Left-Aligned Headline Content with subtle entrance load animation */}
        <div className="relative z-30 max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-12 my-auto">
          <div className="max-w-2xl py-12 animate-[fadeInUp_0.8s_ease-out_forwards]">
            
            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-black text-white font-display tracking-tight leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Discover. <br />
              Explore. <br />
              <span className="font-normal italic text-sky-400 font-serif text-3xl sm:text-5xl lg:text-[64px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                Live the Journey.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-slate-100 leading-relaxed max-w-md font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Explore breathtaking destinations and create unforgettable memories.
            </p>

          </div>
        </div>

        {/* 3. Bottom Trust Bar Strip with entrance load animation */}
        <div className="relative z-30 w-full bg-black/30 backdrop-blur-sm border-t border-white/15 px-6 sm:px-10 lg:px-12 py-7 sm:py-8 mt-auto animate-[fadeInUp_1.2s_ease-out_forwards]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white items-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            
            <div className="flex items-center gap-4 px-2">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Top Destinations</h4>
                <p className="text-xs text-slate-300 mt-0.5">Curated places worth exploring</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 pt-3 sm:pt-0">
              <Tag className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Best Price Guarantee</h4>
                <p className="text-xs text-slate-300 mt-0.5">Get the best deals on every booking</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 pt-3 sm:pt-0">
              <Headphones className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">24/7 Support</h4>
                <p className="text-xs text-slate-300 mt-0.5">We're here you anytime</p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-2 pt-3 sm:pt-0">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Safe & Secure</h4>
                <p className="text-xs text-slate-300 mt-0.5">Your journey is our priority</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
