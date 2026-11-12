import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerSectionProps {
  onDiscoverClick: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onDiscoverClick }) => {
  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-[#0057B5] min-h-[340px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Alpine Lake Landscape with Pines and Sunlit Mountains */}
        <div className="relative w-full lg:w-1/2 min-h-[260px] sm:min-h-[300px] lg:min-h-full overflow-hidden shrink-0 bg-slate-800">
          <img
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1400&q=85"
            alt="Pristine Alpine Mountain Lake with Lush Pine Forests"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />

          {/* Organic Curved Wave Divider Overlay transitioning into the blue right side */}
          <div className="hidden lg:block absolute top-0 bottom-0 right-0 w-28 h-full pointer-events-none">
            <svg
              viewBox="0 0 100 400"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M0 0C60 80 20 180 80 280C110 330 90 380 100 400H100V0H0Z"
                fill="#0057B5"
              />
            </svg>
          </div>

          {/* Mobile Bottom Wave Transition */}
          <div className="lg:hidden absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
            <svg
              viewBox="0 0 400 60"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
            >
              <path
                d="M0 60C120 20 280 50 400 10V60H0Z"
                fill="#0057B5"
              />
            </svg>
          </div>
        </div>

        {/* Right Side: Blue Card Content (#0057B5) */}
        <div className="relative z-10 w-full lg:w-1/2 p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-white bg-[#0057B5]">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Kicker: SPECIAL OFFER */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-100">
              SPECIAL OFFER
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight leading-tight text-balance">
            Your Next Adventure Starts Here
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-slate-100/90 leading-relaxed max-w-md">
            Exclusive packages. Flexible bookings. Memories that last a lifetime.
          </p>

          {/* CTA Button (White background with blue text) */}
          <div className="mt-6 sm:mt-8">
            <button
              onClick={onDiscoverClick}
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#0057B5] bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Discover Packages</span>
              <ArrowRight className="w-4 h-4 text-[#0057B5]" />
            </button>
          </div>

          {/* Bottom-Right Botanical Flower Illustration */}
          <div className="absolute bottom-0 right-0 w-44 sm:w-56 h-40 sm:h-48 pointer-events-none select-none z-10 overflow-hidden">
            <svg
              viewBox="0 0 200 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transform translate-x-2 translate-y-2 opacity-95"
            >
              <defs>
                <linearGradient id="lily_gradient_1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>
                <linearGradient id="lily_gradient_2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93C5FD" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="stem_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34D399" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>

              {/* Decorative Stems & Leaves */}
              <path d="M140 160C140 120 120 90 90 60" stroke="url(#stem_gradient)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M110 160C110 130 95 105 70 80" stroke="url(#stem_gradient)" strokeWidth="3" strokeLinecap="round" />
              <path d="M170 160C170 135 150 110 120 85" stroke="url(#stem_gradient)" strokeWidth="3" strokeLinecap="round" />

              {/* Water Lily / Lotus Petals */}
              <path d="M90 60C85 45 70 30 50 35C40 38 35 48 42 58C50 68 70 75 90 60Z" fill="url(#lily_gradient_1)" />
              <path d="M90 60C100 48 115 35 135 42C145 46 148 56 140 64C132 72 112 75 90 60Z" fill="url(#lily_gradient_2)" />
              <path d="M70 80C60 70 45 60 25 68C15 72 12 82 20 90C28 98 48 100 70 80Z" fill="url(#lily_gradient_1)" opacity="0.9" />
              <path d="M120 85C130 75 145 65 165 74C175 78 178 88 170 96C162 104 142 105 120 85Z" fill="url(#lily_gradient_2)" opacity="0.9" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};
