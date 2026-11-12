import React, { useState } from 'react';
import { Hotel, Utensils, Users, MapPin, Check, ArrowRight, Star } from 'lucide-react';
import { TourPackage, DepartureDate } from '../data/toursData';

interface TourCardProps {
  tour: TourPackage;
  onViewItinerary: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage, selectedDate?: DepartureDate) => void;
  onDownloadBrochure: (tour: TourPackage) => void;
  currency: string;
}

export const TourCard: React.FC<TourCardProps> = ({
  tour,
  onViewItinerary,
  onBookTour,
  onDownloadBrochure,
  currency
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Format currency
  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      const usdAmount = Math.round(amount / 86);
      return `$${usdAmount.toLocaleString('en-US')}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Card Header & Image */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
        {/* Background Image with Fallback */}
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!imageLoaded && (
          <div className={`absolute inset-0 bg-gradient-to-br ${tour.bgFallback} flex items-center justify-center p-6 text-white text-center`}>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-amber-300 mb-2 opacity-80" />
              <span className="text-base font-bold">{tour.title}</span>
            </div>
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            {tour.featuredBadge && (
              <span
                className={`px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide rounded-md text-white shadow-xs ${
                  tour.featuredBadge === 'Bestseller'
                    ? 'bg-[#0057B5]'
                    : tour.featuredBadge === 'Guaranteed Departure'
                    ? 'bg-[#183B30]'
                    : 'bg-[#2D6A4F]'
                }`}
              >
                {tour.featuredBadge}
              </span>
            )}
            <span className="px-2 py-0.5 text-[10px] font-bold bg-[#183B30]/90 backdrop-blur-md text-white rounded">
              {tour.code}
            </span>
          </div>

          <div className="px-2.5 py-1 bg-[#183B30]/90 backdrop-blur-xs text-white rounded-md font-bold text-xs shadow-xs flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{tour.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Cities Route Pill in Image Bottom */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <div className="text-[11px] font-semibold text-amber-300 flex items-center gap-1.5 line-clamp-1">
            <MapPin className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span className="truncate">{tour.cities.join(' · ')}</span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Specialty Category Badge */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
            <span className="flex items-center gap-0.5 bg-amber-50 border border-amber-200 text-amber-800 px-1.5 py-0.5 rounded text-[11px] font-bold">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              {tour.rating.toFixed(1)}
            </span>
            <span className="text-xs font-semibold text-[#0C3C78]">
              {tour.specialtyType}
            </span>
          </div>

          {/* Tour Title */}
          <h2
            onClick={() => onViewItinerary(tour)}
            className="text-base sm:text-lg font-bold text-slate-900 hover:text-[#0057B5] transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {tour.title}
          </h2>

          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {tour.subtitle}
          </p>

          {/* Inclusions Icon Strip (Without flight number) */}
          <div className="mt-3 py-2 px-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-[11px] text-slate-700">
            <div className="flex items-center gap-1" title="4-Star Deluxe Accommodations">
              <Hotel className="w-3.5 h-3.5 text-indigo-600" />
              <span>4★ Hotel</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1" title="Indian Pure Veg & Jain Meals by Maharaj">
              <Utensils className="w-3.5 h-3.5 text-amber-600" />
              <span>All Meals</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1" title="Caring Indian Tour Escort">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tour Leader</span>
            </div>
          </div>

          {/* Key Highlights preview */}
          <div className="mt-3 space-y-1.5">
            {tour.highlights.slice(0, 2).map((h, i) => (
              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions Footer */}
        <div className="mt-5 pt-3.5 border-t border-slate-100">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 line-through">
                  {formatPrice(tour.originalPrice)}
                </span>
                <span className="text-[10px] font-bold text-[#0057B5] bg-[#EDF5FD] px-1.5 py-0.5 rounded">
                  {tour.discountLabel}
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-xl sm:text-2xl font-black text-[#183B30] font-display">
                  {formatPrice(tour.price)}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">/ person</span>
              </div>
              <p className="text-[10px] text-slate-400">All taxes & GST included</p>
            </div>
          </div>

          {/* Action CTA: Enquire Now */}
          <div>
            <button
              onClick={() => onBookTour(tour, tour.departureDates[0])}
              className="w-full py-3 px-4 bg-[#0057B5] hover:bg-[#004694] text-white font-bold text-xs sm:text-sm rounded-full shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
