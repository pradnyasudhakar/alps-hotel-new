import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Plane, Hotel, Utensils, Camera, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

interface CinematicSpecialToursProps {
  onEnquireTour: (tourTitle: string) => void;
  currency: string;
}

export interface SpecialTourSlide {
  id: string;
  country: string;
  title: string;
  subtitle: string;
  route: string;
  inclusionsText: string;
  priceINR: number;
  priceUSD: number;
  image: string;
}

export const SPECIAL_TOURS: SpecialTourSlide[] = [
  {
    id: 'kashmir-heli',
    country: 'Kashmir, India',
    title: 'Kashmir With Vaishno Devi Heli Yatra',
    subtitle: 'Helicopter Yatra & Dal Lake Luxury Houseboat',
    route: '2N Katra · 2N Pahalgam · 1N Gulmarg · 2N Srinagar',
    inclusionsText: '7 Nights / 8 Days In 5 Star Hotel, Breakfast and Lunch Included',
    priceINR: 27500,
    priceUSD: 320,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'kerala-taj',
    country: 'Kerala, India',
    title: 'Explore Kerala With Taj Hotels',
    subtitle: 'Munnar Tea Valleys, Alleppey & Kumarakom Backwaters',
    route: '2N Munnar · 1N Thekkady · 1N Alleppey Houseboat · 2N Kumarakom',
    inclusionsText: '6 Nights / 7 Days In Signature Taj Resorts, Private Houseboat & Gourmet Dining',
    priceINR: 24500,
    priceUSD: 290,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'japan-autumn',
    country: 'Japan',
    title: 'Japan Autumn Special',
    subtitle: 'Tokyo Skytree, Kyoto Pagodas & Mount Fuji Panorama',
    route: '3N Tokyo · 2N Kyoto · 1N Hakone · 2N Osaka',
    inclusionsText: '8 Nights / 9 Days In 4 Star Hotel, Shinkansen Bullet Train & Excursions Included',
    priceINR: 185000,
    priceUSD: 2150,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'phu-quoc',
    country: 'Phu Quoc, Vietnam',
    title: 'Phu Quoc - Buy 1 Get 1 Free',
    subtitle: 'Emerald Coast, Halong Bay Cruise & Sun World Cable Car',
    route: '3N Phu Quoc Island · 2N Da Nang · 2N Hanoi',
    inclusionsText: '7 Nights / 8 Days In Beachfront Resort, Island Hop Cruise & Transfers Included',
    priceINR: 54200,
    priceUSD: 630,
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'swiss-panorama',
    country: 'Switzerland',
    title: 'Swiss Alps & Glacier Express',
    subtitle: 'Matterhorn Zermatt, Jungfraujoch & Lake Lucerne',
    route: '3N Zurich · 2N Interlaken · 2N Lucerne',
    inclusionsText: '7 Nights / 8 Days In Alpine Chalet Resorts, Mt Titlis Cable & Glacier Train Included',
    priceINR: 224000,
    priceUSD: 2600,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'rajasthan-palaces',
    country: 'Rajasthan, India',
    title: 'Royal Rajasthan Grand Palaces',
    subtitle: 'Udaipur Lake Palace, Jodhpur Blue City & Jaipur Forts',
    route: '2N Jaipur · 2N Jodhpur · 2N Udaipur Lake Palace',
    inclusionsText: '6 Nights / 7 Days In Historic Heritage Palaces, Folk Evenings & Desert Safari',
    priceINR: 26500,
    priceUSD: 310,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2000&q=85'
  }
];

interface ExpandingClone {
  image: string;
  startRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  isExpanded: boolean;
}

export const CinematicSpecialTours: React.FC<CinematicSpecialToursProps> = ({
  onEnquireTour,
  currency
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandingClone, setExpandingClone] = useState<ExpandingClone | null>(null);
  const [isDeckSliding, setIsDeckSliding] = useState(false);

  // Text animation states
  const [textPhase, setTextPhase] = useState<'visible' | 'exit' | 'enter'>('visible');
  const [displayedTour, setDisplayedTour] = useState<SpecialTourSlide>(SPECIAL_TOURS[0]);

  const sectionRef = useRef<HTMLElement>(null);
  const cardDeckRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const total = SPECIAL_TOURS.length;
  const currentTour = SPECIAL_TOURS[activeIndex];

  // Exactly 3 upcoming cards shown in the preview deck as requested
  const nextCardIndices = [
    (activeIndex + 1) % total,
    (activeIndex + 2) % total,
    (activeIndex + 3) % total
  ];

  const triggerTransitionToNext = (targetIndex: number, cardEl: HTMLDivElement | null) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const targetTour = SPECIAL_TOURS[targetIndex];

    if (cardEl && sectionRef.current) {
      const cardRect = cardEl.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      const startRect = {
        top: cardRect.top - sectionRect.top,
        left: cardRect.left - sectionRect.left,
        width: cardRect.width,
        height: cardRect.height
      };

      setTextPhase('exit');
      setIsDeckSliding(true);

      setExpandingClone({
        image: targetTour.image,
        startRect,
        isExpanded: false
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setExpandingClone((prev) => (prev ? { ...prev, isExpanded: true } : null));
        });
      });

      setTimeout(() => {
        setDisplayedTour(targetTour);
        setTextPhase('enter');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setTextPhase('visible');
          });
        });
      }, 260);

      setTimeout(() => {
        setActiveIndex(targetIndex);
        setExpandingClone(null);
        setIsDeckSliding(false);
        setIsTransitioning(false);
      }, 750);
    } else {
      setTextPhase('exit');
      setTimeout(() => {
        setDisplayedTour(targetTour);
        setActiveIndex(targetIndex);
        setTextPhase('visible');
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleNext = () => {
    if (isTransitioning) return;
    const nextIndex = (activeIndex + 1) % total;
    const firstCardEl = cardRefs.current[0];
    triggerTransitionToNext(nextIndex, firstCardEl);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    const prevIndex = (activeIndex - 1 + total) % total;
    const prevTour = SPECIAL_TOURS[prevIndex];

    setTextPhase('exit');
    setIsTransitioning(true);

    setTimeout(() => {
      setDisplayedTour(prevTour);
      setActiveIndex(prevIndex);
      setTextPhase('visible');
      setIsTransitioning(false);
    }, 350);
  };

  const handleCardClick = (targetIndex: number, cardIdxInDeck: number) => {
    if (isTransitioning) return;
    const cardEl = cardRefs.current[cardIdxInDeck];
    triggerTransitionToNext(targetIndex, cardEl);
  };

  const formatPrice = (inr: number, usd: number) => {
    if (currency === 'USD') {
      return `$${usd.toLocaleString('en-US')}`;
    }
    return `₹${inr.toLocaleString('en-IN')}`;
  };

  const cardSlideOffset = 226;

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[640px] sm:min-h-[680px] lg:min-h-[720px] overflow-hidden flex flex-col justify-between py-10 sm:py-14 text-white my-8 bg-[#0D1F19] select-none"
    >
      {/* 1. Underlying Active Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          key={currentTour.id}
          src={currentTour.image}
          alt={currentTour.title}
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out brightness-95"
        />
      </div>

      {/* 2. Seamless Expanding Card Clone */}
      {expandingClone && (
        <div
          className="absolute z-20 overflow-hidden shadow-2xl pointer-events-none"
          style={{
            top: expandingClone.isExpanded ? 0 : expandingClone.startRect.top,
            left: expandingClone.isExpanded ? 0 : expandingClone.startRect.left,
            width: expandingClone.isExpanded ? '100%' : expandingClone.startRect.width,
            height: expandingClone.isExpanded ? '100%' : expandingClone.startRect.height,
            borderRadius: expandingClone.isExpanded ? '0px' : '22px',
            transition: 'all 750ms cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <img
            src={expandingClone.image}
            alt="Expanding background"
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}

      {/* 3. Dark Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

      {/* 4. Main Body: Left Details & Right Card Carousel (3 cards) */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column matching reference UI layout */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`space-y-4 transition-all duration-300 ease-out ${
                textPhase === 'exit'
                  ? 'opacity-0 -translate-x-8'
                  : textPhase === 'enter'
                  ? 'opacity-0 translate-y-6'
                  : 'opacity-100 translate-x-0 translate-y-0'
              }`}
            >
              {/* Country tag with pin */}
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{displayedTour.country}</span>
              </div>

              {/* Title with horizontal divider line underneath */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-display tracking-tight leading-snug">
                  {displayedTour.title}
                </h2>
                <div className="w-full max-w-sm h-[1px] bg-white/40 my-3" />
              </div>

              {/* Route */}
              <div className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {displayedTour.route}
              </div>

              {/* Inclusions summary */}
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed max-w-md">
                {displayedTour.inclusionsText}
              </p>

              {/* Inclusions Icon Row (Larger icons as requested) */}
              <div className="flex items-center gap-6 pt-2 text-white/90">
                <div className="flex items-center gap-1.5" title="Flights Included">
                  <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                </div>
                <div className="flex items-center gap-1.5" title="Luxury Hotel Stay">
                  <Hotel className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                </div>
                <div className="flex items-center gap-1.5" title="Gourmet Dining">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                </div>
                <div className="flex items-center gap-1.5" title="Sightseeing Excursions">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                </div>
              </div>

              {/* Price & White CTA Button below (moved a little further down with pt-5 & gap-4) */}
              <div className="pt-5 flex flex-col items-start gap-4">
                <div>
                  <span className="text-xs text-slate-300">From </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-display tracking-tight">
                    {formatPrice(displayedTour.priceINR, displayedTour.priceUSD)}
                  </span>
                  <span className="text-xs text-slate-300"> / person</span>
                </div>

                <button
                  type="button"
                  onClick={() => onEnquireTour(displayedTour.title)}
                  className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-[#0057B5] bg-white hover:bg-slate-100 shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#0057B5]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Card Deck (3 cards) */}
          <div className="lg:col-span-7 overflow-hidden py-4 -mr-4 sm:-mr-6 lg:-mr-8">
            <div
              ref={cardDeckRef}
              className="flex items-center gap-4 sm:gap-5"
              style={{
                transform: isDeckSliding ? `translateX(-${cardSlideOffset}px)` : 'translateX(0px)',
                transition: isDeckSliding ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none'
              }}
            >
              {nextCardIndices.map((tourIndex, cardIdxInDeck) => {
                const tour = SPECIAL_TOURS[tourIndex];
                const isFirstCard = cardIdxInDeck === 0;

                return (
                  <div
                    key={`${tour.id}-${cardIdxInDeck}`}
                    ref={(el) => {
                      cardRefs.current[cardIdxInDeck] = el;
                    }}
                    onClick={() => handleCardClick(tourIndex, cardIdxInDeck)}
                    className={`group relative shrink-0 w-[200px] sm:w-[220px] h-[300px] sm:h-[340px] rounded-[24px] overflow-hidden cursor-pointer shadow-2xl border border-white/20 hover:border-white/60 transition-all duration-500 bg-slate-800 ${
                      isFirstCard && isDeckSliding ? 'opacity-0' : 'opacity-100 hover:-translate-y-1'
                    }`}
                  >
                    {/* Card Photo */}
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Dark Vignette Overlay on Card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    {/* Bottom Card Location Pin & Title */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="text-[11px] font-semibold text-amber-300 flex items-center gap-1 mb-1 truncate">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{tour.country}</span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-display tracking-tight line-clamp-2 leading-snug group-hover:text-amber-200 transition-colors">
                        {tour.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Bottom Navigation Bar */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={isTransitioning}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 hover:border-white bg-black/30 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              aria-label="Previous tour"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={isTransitioning}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/40 hover:border-white bg-black/30 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              aria-label="Next tour"
              title="Next tour"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thin Progress Timeline Bar */}
          <div className="flex-1 h-[2px] bg-white/25 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-amber-400 transition-all duration-700 ease-out"
              style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
            />
          </div>

          {/* Large Editorial Numeric Counter */}
          <div className="text-2xl sm:text-3xl font-black font-display text-white tracking-tighter select-none pl-2">
            0{activeIndex + 1}
          </div>
        </div>
      </div>
    </section>
  );
};
