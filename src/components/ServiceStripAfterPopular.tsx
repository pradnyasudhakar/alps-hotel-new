import React from 'react';
import { Plane, Building2, Map, Shield } from 'lucide-react';

export const ServiceStripAfterPopular: React.FC = () => {
  const services = [
    {
      icon: Plane,
      title: 'FLIGHT BOOKINGS',
      subtitle: 'Find the best flights'
    },
    {
      icon: Building2,
      title: 'HOTEL STAYS',
      subtitle: 'Comfortable stays'
    },
    {
      icon: Map,
      title: 'TOUR PACKAGES',
      subtitle: 'Curated experiences'
    },
    {
      icon: Shield,
      title: 'TRAVEL INSURANCE',
      subtitle: 'Travel with peace of mind'
    }
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#FAF7F2] rounded-3xl border border-amber-100/60 shadow-xs px-6 py-8 sm:px-10 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-amber-200/50">
        {services.map((service, index) => {
          const IconComp = service.icon;
          return (
            <div key={index} className={`flex items-center gap-4 px-2 ${index > 0 ? 'pt-6 sm:pt-0' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-amber-100 flex items-center justify-center text-[#183B30] shrink-0">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {service.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
