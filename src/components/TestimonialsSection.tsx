import React from 'react';
import { Star, Quote, Award, Heart, CheckCircle2 } from 'lucide-react';
import { GUEST_TESTIMONIALS } from '../data/toursData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 px-4 sm:px-6 lg:px-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-xs font-bold mb-2">
            <Heart className="w-3.5 h-3.5 text-[#D9480F]" />
            <span>Real Guests · Real Stories</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
            Loved By Over 15 Lakh Travelers
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Read heartwarming stories from families, couples, and seniors who made cherished memories with Alps Hotels and Travels.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUEST_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Guest
                  </span>
                </div>

                {/* Tour Name */}
                <div className="text-xs font-bold text-[#0C3C78] mb-2">
                  Tour: {t.tour}
                </div>

                {/* Feedback Quote */}
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{t.feedback}"
                </p>
              </div>

              {/* Guest Profile Lockup */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-200"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{t.name}</h4>
                  <div className="text-[11px] text-slate-500">{t.city} · Traveled {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Manager Spotlight Banner */}
        <div className="mt-10 p-5 sm:p-6 bg-gradient-to-r from-[#0C3C78] to-[#072249] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-display">
                The Alps Tour Manager Difference
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 max-w-xl leading-relaxed">
                Our Indian Tour Managers are not just guides—they are your elder brothers, caring guardians, and multilingual friends who ensure every family member is looked after with affection.
              </p>
            </div>
          </div>

          <a
            href="tel:1800229575"
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            Talk to a Tour Leader
          </a>
        </div>
      </div>
    </section>
  );
};
