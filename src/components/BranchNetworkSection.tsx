import React from 'react';
import { MapPin, Phone, Clock, Navigation, Building2 } from 'lucide-react';
import { BRANCH_OFFICES } from '../data/toursData';

export const BranchNetworkSection: React.FC = () => {
  return (
    <section id="branches" className="py-14 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-[#0C3C78] rounded-md text-xs font-bold mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Pan-India Presence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              Visit Our Nearest Branch Office
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-2xl">
              Walk in for a cup of tea with our destination experts, view physical brochures, and get personalized advice for your family holiday.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Over 50+ Preferred Sales Agents across India
          </div>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRANCH_OFFICES.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#D9480F]" />
                  <span>{branch.city}</span>
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Open Today
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed min-h-[38px] mb-3">
                {branch.address}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#0C3C78] hover:underline">
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{branch.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
