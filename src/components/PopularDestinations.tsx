import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TourPackage } from '../data/toursData';

interface PopularDestinationsProps {
  onSelectDestination: (destinationName: string) => void;
  currency: string;
}

export interface DestinationCardItem {
  id: string;
  name: string;
  subtitle: string;
  rating: number;
  priceUSD: number;
  priceINR: number;
  image: string;
  query: string;
}

export const POPULAR_DESTINATIONS: DestinationCardItem[] = [
  {
    id: 'kashmir',
    name: 'Kashmir, India',
    subtitle: 'Majestic Lakes & Mountains',
    rating: 4.9,
    priceUSD: 320,
    priceINR: 27500,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=85',
    query: 'Kashmir'
  },
  {
    id: 'maldives',
    name: 'Maldives',
    subtitle: 'Tropical Paradise',
    rating: 4.7,
    priceUSD: 899,
    priceINR: 74500,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85',
    query: 'Kerala'
  },
  {
    id: 'kerala',
    name: 'Kerala, India',
    subtitle: 'Backwaters & Spice Hills',
    rating: 4.8,
    priceUSD: 290,
    priceINR: 24500,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=85',
    query: 'Kerala'
  },
  {
    id: 'kyoto',
    name: 'Kyoto, Japan',
    subtitle: 'Timeless Culture',
    rating: 4.9,
    priceUSD: 799,
    priceINR: 68500,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85',
    query: 'Japan'
  }
];

export const PopularDestinations: React.FC<PopularDestinationsProps> = ({
  onSelectDestination,
  currency
}) => {
  const formatPrice = (usd: number, inr: number) => {
    if (currency === 'USD') {
      return `$${usd}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  return (
    <section id="popular-destinations" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto scroll-mt-20">
      {/* Header Row: "Popular Destinations" and "View All Destinations →" */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-black text-[#112A22] font-display tracking-tight">
            Popular Destinations
          </h2>
        </div>

        <button
          onClick={() => onSelectDestination('all')}
          className="group flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#0057B5] transition-colors cursor-pointer"
        >
          <span>View All Destinations</span>
          <div className="w-7 h-7 rounded-full border border-slate-200 group-hover:border-[#0057B5] group-hover:bg-[#0057B5] text-slate-600 group-hover:text-white flex items-center justify-center transition-all">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

      {/* 4 Cards Grid - Exactly matching the UI layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {POPULAR_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest.query)}
            className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer h-[340px] sm:h-[380px] flex flex-col justify-between p-5 bg-slate-900"
          >
            {/* Background Image with Zoom */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
            </div>

            {/* Top Rating Badge */}
            <div className="relative z-20 flex items-center justify-end">
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-300 border border-white/20">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>{dest.rating}</span>
              </div>
            </div>

            {/* Bottom Content & Price */}
            <div className="relative z-20 text-white space-y-2">
              <h3 className="text-xl sm:text-2xl font-black font-display tracking-tight group-hover:text-amber-200 transition-colors">
                {dest.name}
              </h3>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                {dest.subtitle}
              </p>

              <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Starts From</span>
                  <span className="text-base sm:text-lg font-black text-amber-300 font-display">
                    {formatPrice(dest.priceUSD, dest.priceINR)}
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-[#0057B5] backdrop-blur-md flex items-center justify-center text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
