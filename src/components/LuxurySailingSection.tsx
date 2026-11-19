import React from 'react';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface LuxurySailingSectionProps {
  onExploreExperience?: (experienceTitle: string) => void;
  onEnquire?: (experienceTitle: string) => void;
}

interface SailingPillar {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

const SAILING_PILLARS: SailingPillar[] = [
  {
    id: 'pillar-1',
    title: 'Vela - The Ultimate Yachting Experience',
    description: 'Charter private luxury yachts across crystal azure waters with personalized butler service, sunset gourmet dining, and absolute privacy.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    alt: 'Luxury Yacht Sailing',
    badge: 'Private Yacht'
  },
  {
    id: 'pillar-2',
    title: 'Private Island Escapes',
    description: 'Exclusive hideaways in remote tropical sanctuaries with pristine white sand beaches and tailor-made wellness programs.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Private Tropical Island',
    badge: 'Island Sanctuary'
  },
  {
    id: 'pillar-3',
    title: 'Helicopter Glacier Expeditions',
    description: 'Soar above towering alpine crests and land directly on untouched snow glaciers with expert mountain guides.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85',
    alt: 'Helicopter Alpine Tour',
    badge: 'Glacier Flight'
  },
  {
    id: 'pillar-4',
    title: 'Royal Palace Buyouts',
    description: 'Exclusive heritage estate and royal palace buyouts for momentous milestone celebrations and once-in-a-lifetime galas.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    alt: 'Royal Heritage Palace',
    badge: 'Palace Buyout'
  }
];

export const LuxurySailingSection: React.FC<LuxurySailingSectionProps> = ({
  onExploreExperience,
  onEnquire
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto bg-[#071310] text-white rounded-3xl sm:rounded-[32px] my-10 relative overflow-hidden select-none">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 text-xs font-bold tracking-wider uppercase mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Luxury Collection</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
          Vela & Exclusive Experiences
        </h2>

        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
          Immerse yourself in supreme indulgence with private yacht charters, helicopter glacier hops, and royal palace buyouts crafted exclusively for discerning travelers.
        </p>
      </div>

      {/* 4 Pillars Grid (Vela & Exclusive Experiences) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {SAILING_PILLARS.map((pillar) => {
          return (
            <div
              key={pillar.id}
              onClick={() => {
                if (onExploreExperience) {
                  onExploreExperience(pillar.title);
                } else if (onEnquire) {
                  onEnquire(pillar.title);
                }
              }}
              className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden flex flex-col justify-between p-6 cursor-pointer transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:-translate-y-2 border border-white/15 hover:border-amber-400/50 bg-slate-900"
            >
              {/* Full Background Photography with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Layered Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
              </div>

              {/* Top Tag Badges & Icon */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-amber-300 text-[11px] font-bold tracking-wide shadow-sm">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{pillar.badge}</span>
                </span>

                <span className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-[#0057B5] text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-20 space-y-2.5">
                <h3 className="text-lg sm:text-xl font-bold font-display leading-snug text-white group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-200/90 leading-relaxed font-normal font-sans line-clamp-3">
                  {pillar.description}
                </p>

                {/* View Journey Accent */}
                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-amber-300 group-hover:text-amber-200 transition-colors">
                  <span>View Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
