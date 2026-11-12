import React from 'react';
import {
  ShieldCheck,
  Gem,
  UserCheck,
  Luggage,
  MapPinned,
  HeartHandshake,
  CalendarClock,
  Globe2,
  LucideIcon
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WhyKesariSection: React.FC = () => {
  const FEATURES: FeatureItem[] = [
    {
      id: 'trusted-reliable',
      title: 'Trusted & Reliable Travel',
      description: 'Delivering safe, seamless, and joyful travel experiences across 200+ destinations with complete peace of mind.',
      icon: ShieldCheck
    },
    {
      id: 'all-inclusive',
      title: 'All-Inclusive Packages',
      description: 'Flights, hotels, meals, sightseeing, visa – all included with no hidden costs.',
      icon: Gem
    },
    {
      id: 'tour-leaders',
      title: 'Expert Tour Leaders',
      description: 'Full-time, multilingual tour leaders who guide and assist you throughout your journey.',
      icon: UserCheck
    },
    {
      id: 'one-stop',
      title: 'One Stop for All Travel Needs',
      description: 'From group tours and custom holidays to visas, forex, travel essentials and flights—everything under one roof.',
      icon: Luggage
    },
    {
      id: 'itineraries',
      title: 'Thoughtfully Crafted Itineraries',
      description: 'Value-added tours with a blend of iconic attractions and hidden gems—for a deeper travel experience.',
      icon: MapPinned
    },
    {
      id: 'specialty-tours',
      title: 'Specialty Tours for Every Traveller',
      description: 'Women-only, senior citizen, student, honeymoon, and spiritual tours designed with care.',
      icon: HeartHandshake
    },
    {
      id: 'flexible-departures',
      title: 'Flexible Group Departures',
      description: 'Thousands of group departures throughout the year to suit every season, holiday, and festival.',
      icon: CalendarClock
    },
    {
      id: 'pan-india',
      title: 'Global & Pan India Presence',
      description: 'Alps Hotels and Travels has luxury hospitality consultants and booking hubs worldwide – making dream holidays accessible wherever you are.',
      icon: Globe2
    }
  ];

  return (
    <section id="why-alps" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none scroll-mt-20">
      <div id="why-alps-section" className="sr-only">Why Alps Hotels and Travels</div>
      {/* Title Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-display tracking-tight leading-tight">
          Why Alps Hotels and Travels?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
          Travel with Trust. Travel with Alps Hotels and Travels.
        </p>
      </div>

      {/* 2 Rows x 4 Columns Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-14">
        {FEATURES.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Premium Icon Badge */}
              <div className="flex items-center justify-center h-18 w-18 sm:h-20 sm:w-20 mb-3.5 rounded-2xl sm:rounded-3xl bg-[#EDF5FD] group-hover:bg-[#0057B5] text-[#0057B5] group-hover:text-white border border-[#0057B5]/15 group-hover:border-[#0057B5] shadow-xs group-hover:shadow-md transition-all duration-300">
                <IconComp className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.8} />
              </div>

              {/* Feature Title */}
              <h3 className="text-lg sm:text-[19px] font-bold text-slate-900 font-display tracking-tight mt-1 mb-2 group-hover:text-[#0057B5] transition-colors leading-snug">
                {item.title}
              </h3>

              {/* Feature Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-[270px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
