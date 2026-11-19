import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NotSureWhereToGoProps {
  onSelectCategory: (categoryName: string) => void;
}

interface SpecialtyCard {
  id: string;
  title: string;
  subtitle: string;
  searchQuery: string;
  bgImage: string;
  badge: string;
}

const SPECIALTY_CARDS: SpecialtyCard[] = [
  {
    id: 'honeymoon',
    title: 'Honeymoon Special',
    subtitle: 'Romantic Escapes & Beaches',
    searchQuery: 'Honeymoon',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badge: 'Most Popular'
  },
  {
    id: 'chhota-break',
    title: 'Chhota Break',
    subtitle: 'Weekend Getaways',
    searchQuery: 'Weekend',
    bgImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80',
    badge: 'Quick Trips'
  },
  {
    id: 'super-economy',
    title: 'Super Economy',
    subtitle: 'Budget Friendly Holidays',
    searchQuery: 'Marigold Economy',
    bgImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    badge: 'Great Value'
  },
  {
    id: 'alps-cruises',
    title: 'Alps Cruises',
    subtitle: 'Luxury Sailing & Rivers',
    searchQuery: 'Cruise',
    bgImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    badge: 'All-Inclusive'
  },
  {
    id: 'my-fair-lady',
    title: 'My Fair Lady',
    subtitle: 'Women-Only Special Tours',
    searchQuery: 'Womens Special',
    bgImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    badge: 'Ladies Special'
  }
];

export const NotSureWhereToGo: React.FC<NotSureWhereToGoProps> = ({ onSelectCategory }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto select-none">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
            Not sure where to go?
          </h2>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            Explore our handpicked specialty holiday themes crafted for every travel mood.
          </p>
        </div>

        {/* Carousel Arrow Controls (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll('left')}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0057B5] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll('right')}
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-[#0057B5] text-slate-700 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Carousel Track */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center gap-6 w-full overflow-x-auto py-4 px-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {SPECIALTY_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectCategory(card.searchQuery)}
              className="group shrink-0 relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer w-[260px] sm:w-[280px] h-[360px] flex flex-col justify-end p-6 border border-slate-100 group-hover:-translate-y-2"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full bg-slate-950">
                <img
                  src={card.bgImage}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Natural Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>

              {/* Top Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wide border border-white/25">
                  {card.badge}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-20 text-white space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight group-hover:text-sky-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium leading-relaxed">
                  {card.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-sky-300 group-hover:translate-x-1 transition-transform">
                  <span>Explore Tours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
