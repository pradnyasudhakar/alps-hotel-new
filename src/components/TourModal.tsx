import React, { useState } from 'react';
import { X, Calendar, MapPin, Check, Plane, Hotel, Utensils, Users, Shield, ArrowRight, Clock, Star, AlertCircle, FileText } from 'lucide-react';
import { TourPackage, DepartureDate } from '../data/toursData';

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onBookNow: (tour: TourPackage, selectedDate?: DepartureDate) => void;
  currency: string;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose, onBookNow, currency }) => {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'inclusions' | 'dates'>('itinerary');
  const [selectedDate, setSelectedDate] = useState<DepartureDate | null>(
    tour ? tour.departureDates[0] : null
  );

  if (!tour) return null;

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      const usdAmount = Math.round(amount / 86);
      return `$${usdAmount.toLocaleString('en-US')}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="relative h-44 sm:h-52 bg-slate-900 shrink-0">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tour Meta in Header */}
          <div className="absolute bottom-3 left-4 right-4 sm:left-6 sm:right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-[#D9480F] text-white rounded">
                {tour.code}
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold bg-white/20 backdrop-blur-md rounded">
                {tour.duration.days} Days / {tour.duration.nights} Nights
              </span>
              <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {tour.rating} ({tour.reviews.toLocaleString()} reviews)
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white font-display line-clamp-1">
              {tour.title}
            </h1>
            <div className="text-xs text-slate-300 flex items-center gap-1 mt-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{tour.cities.join(' -> ')}</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 px-4 sm:px-6 bg-slate-50 shrink-0">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'itinerary'
                ? 'border-[#D9480F] text-[#D9480F]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Day-by-Day Itinerary ({tour.itinerary.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'inclusions'
                ? 'border-[#D9480F] text-[#D9480F]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            What is Included & Meals
          </button>
          <button
            onClick={() => setActiveTab('dates')}
            className={`py-3 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'dates'
                ? 'border-[#D9480F] text-[#D9480F]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Departures & Pricing ({tour.departureDates.length} Dates)
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: ITINERARY */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="bg-blue-50/70 border border-blue-200 p-3.5 rounded-xl text-xs text-blue-900 flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Alps Hospitality Promise:</strong> Freshly prepared hot Indian Breakfast, Lunch, and Dinner cooked daily with special consideration for Pure Vegetarian & Jain dietary guidelines.
                </span>
              </div>

              {/* Day-by-Day Timeline */}
              <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-9">
                    {/* Circle marker */}
                    <div className="absolute left-1.5 top-1 w-5 h-5 rounded-full bg-[#0C3C78] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                      {day.day}
                    </div>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="text-sm font-bold text-slate-900">
                          Day {day.day}: {day.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-slate-500">
                          Route: {day.route}
                        </span>
                      </div>

                      <ul className="space-y-1 mb-3">
                        {day.activities.map((act, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                        <div className="flex items-center gap-1">
                          <Hotel className="w-3.5 h-3.5 text-slate-400" />
                          <span>Night Stay: <strong className="text-slate-700">{day.stay}</strong></span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-800">
                          <Utensils className="w-3.5 h-3.5 text-amber-600" />
                          <span>Meals: <strong>{day.meals}</strong></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: INCLUSIONS */}
          {activeTab === 'inclusions' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-emerald-900 flex items-center gap-2 mb-3">
                    <Check className="w-4 h-4 text-emerald-600" />
                    All-Inclusive What's Covered
                  </h4>
                  <ul className="space-y-2 text-xs text-emerald-800">
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> Return economy airfare on full-service carrier
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> Accommodations in {tour.inclusions.hotelRating}
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> {tour.inclusions.meals}
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> Dedicated experienced Alps Tour Manager & Director
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> All sightseeing entry tickets specified in itinerary
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> Travel insurance and tourist visa assistance
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="font-bold">✓</span> All driver tips and local city taxes
                    </li>
                  </ul>
                </div>

                <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-slate-500" />
                    What is Not Included (Exclusions)
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li>• Personal expenses such as room service, laundry, telephone calls</li>
                    <li>• Optional adventure activities and watersports not mentioned</li>
                    <li>• Excess baggage charges levied by airlines beyond 20kg/25kg</li>
                    <li>• Mandatory government GST & TCS as applicable per RBI guidelines</li>
                  </ul>
                </div>
              </div>

              {/* Major Sightseeing Included Highlights */}
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Sightseeing & Excursion Tickets Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-slate-50 rounded-md">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DATES & PRICING */}
          {activeTab === 'dates' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Choose an upcoming departure date below to lock in early bird discounts. All departures are 100% guaranteed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.departureDates.map((date) => (
                  <div
                    key={date.id}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selectedDate?.id === date.id
                        ? 'border-[#D9480F] bg-amber-50/70 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{date.formatted}</span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            date.status === 'Last 4 Seats'
                              ? 'bg-red-100 text-red-700'
                              : date.status === 'Filling Fast'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          {date.seatsLeft} seats left
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">Departure Hub: Ex {date.hub}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-extrabold text-slate-900 font-display">
                        {formatPrice(tour.price)}
                      </span>
                      <span className="block text-[10px] text-slate-400">per adult</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:px-6 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <div className="text-xs text-slate-500">
              Selected Departure: <strong className="text-slate-800">{selectedDate?.formatted || 'Choose Date'}</strong>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                {formatPrice(tour.price)}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(tour.originalPrice)}
              </span>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                {tour.discountLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(tour, selectedDate || undefined);
              }}
              className="flex-1 sm:flex-none py-2.5 px-6 bg-[#0057B5] hover:bg-[#004694] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book This Tour</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
