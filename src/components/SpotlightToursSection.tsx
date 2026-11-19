import React, { useState } from 'react';
import { Sparkles, ArrowRight, MapPin, Calendar } from 'lucide-react';

interface SpotlightToursSectionProps {
  currency: 'INR' | 'USD';
  onSelectTour: (query: string) => void;
}

interface SpotlightTour {
  id: string;
  category: string;
  code: string;
  duration: string;
  departures: string;
  title: string;
  priceInr: string;
  priceUsd: string;
  image: string;
}

const SPOTLIGHT_CATEGORIES = [
  'Northern Lights',
  'Autumn Special',
  'Beach Tours',
  'Cruise Special',
  'Safari Tours'
];

const SPOTLIGHT_TOURS: SpotlightTour[] = [
  {
    id: 's1',
    category: 'Northern Lights',
    code: 'PR',
    duration: '8 Days',
    departures: '4 Dep',
    title: 'Russia & Murmansk Aurora Expedition',
    priceInr: '₹2,67,115*',
    priceUsd: '$3,250*',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    category: 'Northern Lights',
    code: 'EO',
    duration: '9 Days',
    departures: '2 Dep',
    title: 'Northern Lights With Iceland Glaciers',
    priceInr: '₹4,71,800*',
    priceUsd: '$5,790*',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    category: 'Northern Lights',
    code: 'EN',
    duration: '8 Days',
    departures: '1 Dep',
    title: 'Best Of Iceland Aurora Magic',
    priceInr: '₹4,83,580*',
    priceUsd: '$5,920*',
    image: 'https://images.unsplash.com/photo-1504893524553-eef45d1350c2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's4',
    category: 'Autumn Special',
    code: 'AS',
    duration: '10 Days',
    departures: '3 Dep',
    title: 'Swiss Alps Autumn Foliage Express',
    priceInr: '₹3,45,000*',
    priceUsd: '$4,190*',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's5',
    category: 'Beach Tours',
    code: 'BT',
    duration: '7 Days',
    departures: '5 Dep',
    title: 'Maldives Overwater Lagoon Retreat',
    priceInr: '₹1,89,500*',
    priceUsd: '$2,290*',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's6',
    category: 'Cruise Special',
    code: 'CS',
    duration: '12 Days',
    departures: '2 Dep',
    title: 'Mediterranean Luxury Cruise & Coast',
    priceInr: '₹3,98,000*',
    priceUsd: '$4,850*',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's7',
    category: 'Safari Tours',
    code: 'ST',
    duration: '6 Days',
    departures: '4 Dep',
    title: 'Masai Mara Wildlife Safari & Lodge',
    priceInr: '₹2,35,000*',
    priceUsd: '$2,850*',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
  }
];

export const SpotlightToursSection: React.FC<SpotlightToursSectionProps> = ({ currency, onSelectTour }) => {
  const [activeCategory, setActiveCategory] = useState('Northern Lights');

  const filteredTours = SPOTLIGHT_TOURS.filter(t => t.category === activeCategory);

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto select-none">
      {/* Title Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
          Alps Spotlight Tours
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
          Explore our experts' handpicked journeys for the season's BEST experiences!
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
          {SPOTLIGHT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#0057B5] text-white shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tour Cards Grid (3 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            onClick={() => onSelectTour(tour.title)}
            className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-[380px] sm:h-[420px] flex flex-col justify-between p-5 border border-slate-100 group-hover:-translate-y-2 bg-slate-900"
          >
            {/* Background Image with Zoom */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            </div>

            {/* Top Tag Badges */}
            <div className="relative z-20 flex items-center justify-between text-white text-xs font-bold">
              <span className="px-2.5 py-1 rounded-md bg-[#0057B5] text-white text-[10px] uppercase tracking-wider shadow-sm">
                {tour.code}
              </span>
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[11px]">
                <span>{tour.duration}</span>
                <span>·</span>
                <span>{tour.departures}</span>
              </div>
            </div>

            {/* Bottom Tour Info & Price */}
            <div className="relative z-20 text-white space-y-3">
              <h3 className="text-lg sm:text-xl font-black font-display tracking-tight text-white group-hover:text-sky-300 transition-colors leading-snug line-clamp-2">
                {tour.title}
              </h3>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Start From</span>
                  <span className="text-base sm:text-lg font-black text-white font-display">
                    {currency === 'INR' ? tour.priceInr : tour.priceUsd}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Does not open anything as requested
                  }}
                  className="px-4 py-2 rounded-full text-xs font-bold text-[#0057B5] bg-white hover:bg-slate-100 shadow-sm transition-all cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => onSelectTour('all')}
          className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0057B5] hover:bg-[#004694] shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
        >
          <span>View All Spotlight Tours</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
