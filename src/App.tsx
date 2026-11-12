import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSearch } from './components/HeroSearch';
import { TrustHighlights } from './components/TrustHighlights';
import { TourCard } from './components/TourCard';
import { TourModal } from './components/TourModal';
import { BookingFlowModal } from './components/BookingFlowModal';
import { CallbackModal } from './components/CallbackModal';
import { BrochureModal } from './components/BrochureModal';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { PopularDestinations } from './components/PopularDestinations';
import { CtaBannerSection } from './components/CtaBannerSection';
import { DiwaliSpecialPackages } from './components/DiwaliSpecialPackages';
import { CinematicSpecialTours } from './components/CinematicSpecialTours';
import { NotSureWhereToGo } from './components/NotSureWhereToGo';
import { AlpsServicesSection } from './components/AlpsServicesSection';
import { WhyKesariSection } from './components/WhyKesariSection';
import { LuxurySailingSection } from './components/LuxurySailingSection';
import { DepartureHubsSection } from './components/DepartureHubsSection';
import { TravelersReviewsSection } from './components/TravelersReviewsSection';
import { SpotlightToursSection } from './components/SpotlightToursSection';
import { TOURS_DATA, TourPackage, DepartureDate } from './data/toursData';
import { Filter, SlidersHorizontal, ArrowUpDown, Sparkles, CheckCircle2, Shield, Utensils, Heart, Plane } from 'lucide-react';

export default function App() {
  // Navigation & Search State
  const [selectedHub, setSelectedHub] = useState<string>('Mumbai');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('All Months');
  const [selectedDuration, setSelectedDuration] = useState<string>('All Durations');
  const [activeTab, setActiveTab] = useState<'all' | 'international' | 'domestic' | 'specialty'>('all');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'duration'>('popular');

  // Modals state
  const [itineraryTour, setItineraryTour] = useState<TourPackage | null>(null);
  const [bookingTour, setBookingTour] = useState<{ tour: TourPackage; date?: DepartureDate } | null>(null);
  const [brochureTour, setBrochureTour] = useState<TourPackage | null>(null);
  const [callbackModalOpen, setCallbackModalOpen] = useState<boolean>(false);



  // Toggle currency
  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'INR' ? 'USD' : 'INR'));
  };

  // Filter logic
  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter((tour) => {
      // Tab filter
      if (activeTab === 'international' && tour.region !== 'international') return false;
      if (activeTab === 'domestic' && tour.region !== 'domestic') return false;
      if (activeTab === 'specialty' && tour.specialtyType === 'General Escorted') return false;

      // Category / Destination filter
      if (selectedCategoryFilter !== 'all') {
        if (tour.category !== selectedCategoryFilter && !tour.title.toLowerCase().includes(selectedCategoryFilter.toLowerCase())) {
          return false;
        }
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = tour.title.toLowerCase().includes(query);
        const matchesCities = tour.cities.some((c) => c.toLowerCase().includes(query));
        const matchesCode = tour.code.toLowerCase().includes(query);
        const matchesCategory = tour.category.toLowerCase().includes(query);
        const matchesSpecialty = tour.specialtyType.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCities && !matchesCode && !matchesCategory && !matchesSpecialty) {
          return false;
        }
      }

      // Month filter
      if (selectedMonth !== 'All Months') {
        const hasMatchingMonth = tour.departureDates.some((d) => d.month === selectedMonth);
        if (!hasMatchingMonth) return false;
      }

      // Duration filter
      if (selectedDuration !== 'All Durations') {
        const days = tour.duration.days;
        if (selectedDuration === '1-5 Days' && (days < 1 || days > 5)) return false;
        if (selectedDuration === '6-9 Days' && (days < 6 || days > 9)) return false;
        if (selectedDuration === '10+ Days' && days < 10) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'duration') return b.duration.days - a.duration.days;
      return b.rating - a.rating;
    });
  }, [activeTab, selectedCategoryFilter, searchTerm, selectedMonth, selectedDuration, sortBy]);

  const handleSearchSubmit = () => {
    const el = document.getElementById('explore-guided-tours') || document.getElementById('tours-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSpecialty = (specialty: string) => {
    setActiveTab('specialty');
    setSearchTerm(specialty);
    setSelectedCategoryFilter('all');
    const el = document.getElementById('explore-guided-tours') || document.getElementById('tours-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedMonth('All Months');
    setSelectedDuration('All Durations');
    setActiveTab('all');
    setSelectedCategoryFilter('all');
  };

  return (
    <div className="min-h-screen bg-[#FAFCFB] text-[#1A2421] font-sans selection:bg-[#0057B5] selection:text-white">
      {/* 1. Header Navbar */}
      <Header
        onSearchClick={handleSearchSubmit}
        onOpenCallback={() => setCallbackModalOpen(true)}
        selectedCity={selectedHub}
        onSelectCity={setSelectedHub}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        wishlistCount={2}
        onOpenWishlist={() => {}}
      />

      <main className="overflow-hidden">
        {/* 2. Hero Search Banner */}
        <HeroSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          selectedDuration={selectedDuration}
          setSelectedDuration={setSelectedDuration}
          selectedHub={selectedHub}
          setSelectedHub={setSelectedHub}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onSearchSubmit={handleSearchSubmit}
          matchingCount={filteredTours.length}
        />

        {/* 3. Trust Highlights Strip */}
        <TrustHighlights />

        {/* 4. Popular Destinations Grid */}
        <PopularDestinations
          currency={currency}
          onSelectDestination={(destQuery) => {
            if (destQuery === 'all') {
              handleResetFilters();
            } else {
              setSearchTerm(destQuery);
            }
            const el = document.getElementById('explore-guided-tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Special Offer CTA Banner */}
        <CtaBannerSection
          onDiscoverClick={() => {
            const el = document.getElementById('explore-guided-tours');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Diwali Special Packages (3D Coverflow Infinite Carousel) */}
        <DiwaliSpecialPackages
          currency={currency}
          onEnquireTour={(tourTitle) => {
            setSearchTerm(tourTitle);
            setCallbackModalOpen(true);
          }}
          onExploreTour={(tourTitle) => {
            if (tourTitle === 'all') {
              handleResetFilters();
            } else {
              setSearchTerm(tourTitle);
            }
            const el = document.getElementById('explore-guided-tours');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 7. Special Tour Packages with Interactive Expanding Card-to-Background */}
        <CinematicSpecialTours
          currency={currency}
          onEnquireTour={(tourTitle) => {
            setSearchTerm(tourTitle);
            setCallbackModalOpen(true);
          }}
        />

        {/* 8. Not Sure Where to Go? */}
        <NotSureWhereToGo
          onSelectCategory={(categoryQuery) => {
            handleSelectSpecialty(categoryQuery);
          }}
        />

        {/* 8.2 Alps Services Section */}
        <AlpsServicesSection
          onEnquireService={(serviceTitle) => {
            setSearchTerm(serviceTitle);
            setCallbackModalOpen(true);
          }}
        />

        {/* 8.5 Alps Spotlight Tours */}
        <SpotlightToursSection
          currency={currency}
          onSelectTour={(query) => {
            if (query === 'all') {
              handleResetFilters();
            } else {
              setSearchTerm(query);
            }
            const el = document.getElementById('explore-guided-tours');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 9. Why Alps Hotels and Travels? */}
        <WhyKesariSection />

        {/* 10. Luxury Sailing Adventures */}
        <LuxurySailingSection
          onExploreExperience={(experienceTitle) => {
            setSearchTerm('Cruise');
            setCallbackModalOpen(true);
          }}
          onEnquire={(experienceTitle) => {
            setSearchTerm(experienceTitle);
            setCallbackModalOpen(true);
          }}
        />

        {/* 11. Start Your Journey Closer to Home */}
        <div id="departure-hubs">
          <DepartureHubsSection
            currency={currency}
            onSelectHub={(hubCity) => {
              setSelectedHub(hubCity);
              setSearchTerm(hubCity);
              const el = document.getElementById('explore-guided-tours');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onEnquireHub={(hubCity) => {
              setSearchTerm(`Departure from ${hubCity}`);
              setCallbackModalOpen(true);
            }}
          />
        </div>

        {/* 12. Explore Guided Tours Section */}
        <section id="explore-guided-tours" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#112A22] font-display tracking-tight">
                  Explore Guided Tours
                </h2>
                <span className="text-xs font-bold text-[#183B30] bg-[#183B30]/10 px-3 py-1 rounded-full">
                  {filteredTours.length} tours found
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl font-normal">
                Handpicked escorted journeys with pure veg & jain dining, 4★ luxury hotels, and expert tour managers.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleResetFilters}
                className="text-xs sm:text-sm font-bold text-[#183B30] hover:text-[#0057B5] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View All Destinations</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>

          {/* Filter Pills & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
            {/* Category Quick Tags */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                { id: 'all', label: 'All Tours' },
                { id: 'Northern Lights', label: 'Northern Lights' },
                { id: 'Autumn Special', label: 'Autumn Special' },
                { id: 'Beach Tours', label: 'Beach Tours' },
                { id: 'Cruise Special', label: 'Cruise Special' },
                { id: 'Safari Tours', label: 'Safari Tours' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    selectedCategoryFilter === cat.id
                      ? 'bg-[#0057B5] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0057B5] hover:text-[#0057B5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-[#0057B5]"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration (Longest)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips / Search Info */}
          {(searchTerm || selectedMonth !== 'All Months' || selectedDuration !== 'All Durations' || activeTab !== 'all' || selectedCategoryFilter !== 'all') && (
            <div className="flex flex-wrap items-center gap-2 mb-6 p-3 bg-[#EDF5FD] rounded-2xl border border-blue-100">
              <span className="text-xs font-bold text-[#0057B5]">Active Filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                  Keyword: "{searchTerm}"
                  <button onClick={() => setSearchTerm('')} className="hover:text-red-600 ml-1 font-bold">×</button>
                </span>
              )}
              {selectedMonth !== 'All Months' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                  Month: {selectedMonth}
                  <button onClick={() => setSelectedMonth('All Months')} className="hover:text-red-600 ml-1 font-bold">×</button>
                </span>
              )}
              {selectedDuration !== 'All Durations' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                  Duration: {selectedDuration}
                  <button onClick={() => setSelectedDuration('All Durations')} className="hover:text-red-600 ml-1 font-bold">×</button>
                </span>
              )}
              {activeTab !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                  Tab: {activeTab}
                  <button onClick={() => setActiveTab('all')} className="hover:text-red-600 ml-1 font-bold">×</button>
                </span>
              )}
              {selectedCategoryFilter !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                  Category: {selectedCategoryFilter}
                  <button onClick={() => setSelectedCategoryFilter('all')} className="hover:text-red-600 ml-1 font-bold">×</button>
                </span>
              )}
              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-red-600 hover:underline ml-auto cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Tours Grid */}
          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  currency={currency}
                  onViewItinerary={(t) => setItineraryTour(t)}
                  onBookTour={(t) => {
                    setSearchTerm(t.title);
                    setCallbackModalOpen(true);
                  }}
                  onDownloadBrochure={(t) => setBrochureTour(t)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🔍
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-display">No tours match your filter criteria</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
                Try clearing some filters or searching for another popular destination like Switzerland, Kashmir, or Japan.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-6 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0057B5] hover:bg-[#004694] shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </section>

        {/* 13. Travelers Reviews Section */}
        <TravelersReviewsSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        onOpenCallback={() => setCallbackModalOpen(true)}
        onScrollToCatalog={() => {
          const el = document.getElementById('explore-guided-tours');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals */}
      {itineraryTour && (
        <TourModal
          tour={itineraryTour}
          currency={currency}
          onClose={() => setItineraryTour(null)}
          onBookNow={(tour, date) => {
            setItineraryTour(null);
            setBookingTour({ tour, date });
          }}
        />
      )}

      {bookingTour && (
        <BookingFlowModal
          tour={bookingTour.tour}
          initialDate={bookingTour.date}
          currency={currency}
          onClose={() => setBookingTour(null)}
        />
      )}

      {brochureTour && (
        <BrochureModal
          tour={brochureTour}
          onClose={() => setBrochureTour(null)}
        />
      )}

      <CallbackModal
        isOpen={callbackModalOpen}
        onClose={() => setCallbackModalOpen(false)}
      />
    </div>
  );
};
