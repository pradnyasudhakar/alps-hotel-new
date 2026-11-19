import React, { useState } from 'react';
import { Car, Bus, Ship, CalendarCheck, ArrowRight, Layers } from 'lucide-react';
import { CarRentalsModal } from './CarRentalsModal';

interface AlpsServicesSectionProps {
  onEnquireService: (serviceName: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  badge: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'car-rentals',
    title: 'Car Rentals',
    subtitle: 'Luxury Sedans, SUVs & VIP MPVs',
    description: 'Experience seamless mobility with our premium fleet of Mercedes sedans, Toyota Vellfire luxury MPVs, and rugged SUVs with uniformed chauffeurs.',
    icon: Car,
    image: '/assets/aistudio/Mercede.webp',
    badge: 'Fleet Showcase'
  },
  {
    id: 'bus-coach',
    title: 'Bus & Coach Bookings',
    subtitle: 'Luxury Volvo & Mercedes Coaches',
    description: 'Comfortable group travel solutions with air-conditioned Volvo and Mercedes-Benz luxury buses, ideal for corporate retreats, family unions, and large pilgrimages.',
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badge: 'Group Travel'
  },
  {
    id: 'cruise-packages',
    title: 'Cruise Packages',
    subtitle: 'Global Ocean & River Liners',
    description: 'Sail the azure waters with all-inclusive luxury cruise bookings on world-class liners featuring gourmet dining, entertainment, and exotic island stops.',
    icon: Ship,
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80',
    badge: 'All-Inclusive'
  },
  {
    id: 'event-management',
    title: 'Event Management',
    subtitle: 'Destination Weddings & Corporate Galas',
    description: 'From dream destination weddings in royal palaces to high-profile corporate conferences and anniversary celebrations, we handle every intricate detail to perfection.',
    icon: CalendarCheck,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    badge: 'End-to-End'
  }
];

export const AlpsServicesSection: React.FC<AlpsServicesSectionProps> = ({ onEnquireService }) => {
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);

  return (
    <>
      <section id="alps-services" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto bg-slate-50/70 rounded-3xl my-8 select-none scroll-mt-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight">
            Our Comprehensive Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Beyond escorted holiday tours, Alps Hotels and Travels delivers exceptional bespoke travel and event services.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;
            const isCarRental = service.id === 'car-rentals';

            return (
              <div
                key={service.id}
                onClick={() => {
                  if (isCarRental) {
                    setIsCarModalOpen(true);
                  }
                }}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between border border-slate-100 group-hover:-translate-y-2 ${
                  isCarRental ? 'cursor-pointer ring-1 ring-[#0057B5]/20 hover:ring-2 hover:ring-[#0057B5]' : ''
                }`}
              >
                <div>
                  {/* Service Full-Width Image Banner without borders */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0057B5] text-[10px] font-bold tracking-wide shadow-sm">
                        {service.badge}
                      </span>
                    </div>

                    {isCarRental && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black tracking-wide shadow-sm flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>View Segments</span>
                        </span>
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 z-10 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#0057B5] flex items-center justify-center shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-slate-900 font-display tracking-tight group-hover:text-[#0057B5] transition-colors mb-1">
                      {service.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#0057B5] mb-2.5">
                      {service.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {isCarRental && (
                      <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">Mercedes Sedans</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800">Toyota Vellfire</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">Luxury SUVs</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 group-hover:text-[#0057B5] transition-colors">
                    {isCarRental ? 'View Fleet & Segments' : 'Enquire Service'}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isCarRental) {
                        setIsCarModalOpen(true);
                      } else {
                        onEnquireService(service.title);
                      }
                    }}
                    className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#0057B5] text-slate-700 group-hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                    aria-label={isCarRental ? 'View Car Rental fleet segments' : `Enquire about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Car Rentals Fleet Showcase Modal */}
      <CarRentalsModal
        isOpen={isCarModalOpen}
        onClose={() => setIsCarModalOpen(false)}
        onEnquireSegment={(segmentName) => {
          setIsCarModalOpen(false);
          onEnquireService(`Car Rental - ${segmentName}`);
        }}
      />
    </>
  );
};
