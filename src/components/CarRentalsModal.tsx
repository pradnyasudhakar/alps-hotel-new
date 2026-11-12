import React, { useState } from 'react';
import { X, Car, Shield, Users, Briefcase, Sparkles, Check, Phone, CheckCircle2 } from 'lucide-react';

export interface CarSegment {
  id: string;
  category: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  image: string;
  models: {
    name: string;
    tag?: string;
  }[];
  specs: {
    passengers: string;
    luggage: string;
    transmission: string;
    service: string;
  };
  features: string[];
  idealFor: string;
}

export const CAR_SEGMENTS: CarSegment[] = [
  {
    id: 'luxury-sedans',
    category: 'Luxury Sedans',
    tagline: 'Mercedes-Benz & German Flagship Sedans',
    badge: 'Mercedes Flagship',
    badgeColor: 'bg-[#0057B5] text-white',
    image: '/assets/aistudio/Mercede.webp',
    models: [
      { name: 'Mercedes-Benz S-Class', tag: 'Ultra Luxury' },
      { name: 'Mercedes-Benz E-Class', tag: 'Executive' },
      { name: 'BMW 7 Series & 5 Series', tag: 'Performance' },
      { name: 'Audi A6 & A8L', tag: 'Prestige' }
    ],
    specs: {
      passengers: 'Up to 3-4 Guests',
      luggage: '3 Large Bags',
      transmission: 'Automatic Transmission',
      service: 'Chauffeur Driven in Uniform'
    },
    features: [
      'First-Class Heated & Reclining Nappa Leather Seats',
      'Burmester® / Harman Kardon 3D Surround Audio',
      'Acoustic Noise-Canceling Executive Cabin',
      'Complimentary Bottled Mineral Water, Tissue & High-Speed Wi-Fi'
    ],
    idealFor: 'Diplomatic & VIP arrivals, corporate CXO transit, weddings & red-carpet arrivals'
  },
  {
    id: 'luxury-mpv-suv',
    category: 'Luxury SUV & VIP Lounge MPVs',
    tagline: 'Toyota Vellfire & Private Jet On Wheels',
    badge: 'Toyota Vellfire Featured',
    badgeColor: 'bg-amber-500 text-slate-950 font-bold',
    image: '/assets/aistudio/Toyota.webp',
    models: [
      { name: 'Toyota Vellfire Executive Lounge', tag: 'Flagship Recliner' },
      { name: 'Mercedes-Benz V-Class / Maybach V', tag: 'VIP Van' },
      { name: 'Toyota Alphard Royal Lounge', tag: 'Executive' }
    ],
    specs: {
      passengers: 'Up to 6-7 Guests',
      luggage: '5-6 Large Bags',
      transmission: 'Automatic / Hybrid',
      service: 'English-Speaking Tour Chauffeur'
    },
    features: [
      'Twin Ottoman Powered Captain Recliner Seats with Massage',
      'Dual Panoramic Glass Sunroofs & Ambient Mood Lighting',
      'Fold-out Executive Work Tables & 220V Laptop Charging',
      'Power-Sliding Passenger Doors & Privacy Sunshades'
    ],
    idealFor: 'Celebrities, VIP families, executive board delegations & ultra-luxury holiday road tours'
  },
  {
    id: 'premium-luxury-suvs',
    category: 'Full-Size Luxury SUVs',
    tagline: 'Mercedes GLS, Range Rover & BMW X7',
    badge: 'All-Terrain 4x4',
    badgeColor: 'bg-emerald-700 text-white',
    image: '/assets/aistudio/Luxury-SUVs.webp',
    models: [
      { name: 'Mercedes-Benz GLS & GLE', tag: 'Luxury 4x4' },
      { name: 'Range Rover & Land Rover Defender', tag: 'All-Terrain' },
      { name: 'BMW X7 & X5 xDrive', tag: 'Sport Luxury' },
      { name: 'Toyota Fortuner Legender', tag: 'Rugged Explorer' }
    ],
    specs: {
      passengers: 'Up to 5-7 Guests',
      luggage: '4-5 Large Bags',
      transmission: '4x4 All-Wheel Drive',
      service: 'Mountain-Trained Expert Driver'
    },
    features: [
      'Commanding High Seating with Expansive Scenic Visibility',
      'Adaptive Air Suspension for Blemish-Free Ride on Rugged Roads',
      'Generous Boot Capacity for Heavy Luggage & Expedition Kits',
      'Multi-Zone Climate Control & Panoramic Sky Roof'
    ],
    idealFor: 'Mountain getaways (Kashmir, Himachal, Nilgiris), royal palace trails & long-range touring'
  },
  {
    id: 'executive-sedans',
    category: 'Executive & Hybrid Sedans',
    tagline: 'Toyota Camry Hybrid & Premium Fleet',
    badge: 'Eco-Hybrid Luxury',
    badgeColor: 'bg-sky-600 text-white',
    image: '/assets/aistudio/Eco-Hybrid.webp',
    models: [
      { name: 'Toyota Camry Hybrid Electric', tag: 'Whisper Silent' },
      { name: 'Skoda Superb Laurin & Klement', tag: 'Rear Legroom King' },
      { name: 'Mercedes-Benz C-Class', tag: 'Executive' }
    ],
    specs: {
      passengers: 'Up to 4 Guests',
      luggage: '3 Large Bags',
      transmission: 'Smooth Automatic',
      service: 'Professional Chauffeur'
    },
    features: [
      'Whisper-Silent Hybrid Powertrain with Zero Cabin Vibrations',
      'Rear Seat Luxury Armrest with Audio & Recline Touch Controls',
      'Plush Ergonomic Leather Seating with Ventilated Cooling',
      'City Express Transit & Airport Express Pickups'
    ],
    idealFor: 'Full-day city sightseeing, executive transfers & business road itineraries'
  }
];

interface CarRentalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnquireSegment: (segmentName: string) => void;
}

export const CarRentalsModal: React.FC<CarRentalsModalProps> = ({
  isOpen,
  onClose,
  onEnquireSegment
}) => {
  const [activeSegmentId, setActiveSegmentId] = useState<string>('all');

  if (!isOpen) return null;

  const filteredSegments =
    activeSegmentId === 'all'
      ? CAR_SEGMENTS
      : CAR_SEGMENTS.filter((s) => s.id === activeSegmentId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#0C3C78] via-[#0057B5] to-[#102B23] text-white p-5 sm:p-7 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                Explore Our Vehicle Segments
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
                Choose from our handpicked luxury sedans, VIP lounge MPVs, and all-terrain SUVs—available with professional uniformed chauffeurs and personalized itineraries.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close vehicle segments modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Segment Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-5 mt-2">
            <button
              onClick={() => setActiveSegmentId('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeSegmentId === 'all'
                  ? 'bg-white text-[#0057B5] shadow-sm'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              All Segments ({CAR_SEGMENTS.length})
            </button>
            {CAR_SEGMENTS.map((seg) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegmentId(seg.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeSegmentId === seg.id
                    ? 'bg-white text-[#0057B5] shadow-sm'
                    : 'bg-white/15 text-white hover:bg-white/25'
                }`}
              >
                {seg.category}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Vehicle Cards Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/60">
          {filteredSegments.map((segment) => (
            <div
              key={segment.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Vehicle Image Preview */}
                <div className="lg:col-span-5 relative h-52 sm:h-60 lg:h-full min-h-[220px] bg-slate-900 overflow-hidden">
                  <img
                    src={segment.image}
                    alt={segment.category}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] tracking-wide shadow-sm ${segment.badgeColor}`}>
                      {segment.badge}
                    </span>
                  </div>

                  {/* Image Bottom Tagline */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-semibold text-amber-300">
                      {segment.tagline}
                    </p>
                  </div>
                </div>

                {/* Details & Models */}
                <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Category Title */}
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display tracking-tight">
                        {segment.category}
                      </h3>
                      <span className="text-[11px] font-bold text-[#0057B5] bg-[#EDF5FD] px-2.5 py-0.5 rounded-full">
                        Alps Verified Fleet
                      </span>
                    </div>

                    {/* Featured Car Models Pill List */}
                    <div className="mt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Featured Vehicles in This Segment:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {segment.models.map((car, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800"
                          >
                            <Car className="w-3.5 h-3.5 text-[#0057B5]" />
                            <span>{car.name}</span>
                            {car.tag && (
                              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                                {car.tag}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Specs Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 my-3 border-y border-slate-100 text-[11px] font-medium text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0057B5] shrink-0" />
                        <span>{segment.specs.passengers}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#0057B5] shrink-0" />
                        <span>{segment.specs.luggage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#0057B5] shrink-0" />
                        <span>{segment.specs.service}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#0057B5] shrink-0" />
                        <span>{segment.specs.transmission}</span>
                      </div>
                    </div>

                    {/* Key Luxury Features */}
                    <div className="space-y-1.5 mb-2">
                      {segment.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For */}
                    <div className="pt-2 text-[11px] text-slate-500">
                      <span className="font-bold text-slate-700">Recommended For: </span>
                      <span>{segment.idealFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Sticky Bottom Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 hidden sm:block" />
            <span>Need a custom fleet or outstation corporate package? Our concierge is ready 24/7.</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-full border border-slate-200 hover:border-slate-400 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                const selected =
                  activeSegmentId !== 'all'
                    ? CAR_SEGMENTS.find((s) => s.id === activeSegmentId)?.category
                    : 'Car Rentals Fleet';
                onEnquireSegment(selected || 'Car Rentals Fleet');
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-[#0057B5] hover:bg-[#004694] text-xs font-bold text-white shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Enquire Now / Get Quote</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
