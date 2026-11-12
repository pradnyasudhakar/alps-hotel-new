import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Search, Heart, Menu, X, ChevronDown, Check, ArrowRight, Compass, Shield, Sparkles, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
  onOpenCallback: () => void;
  selectedCity: string;
  onSelectCity: (city: string) => void;
  currency: string;
  onToggleCurrency: () => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
}

export const CITIES = ['Mumbai', 'Pune', 'Delhi', 'Ahmedabad', 'Bengaluru', 'Kolkata', 'Chennai', 'Nagpur'];

export const Header: React.FC<HeaderProps> = ({
  onSearchClick,
  onOpenCallback,
  selectedCity,
  onSelectCity,
  currency,
  onToggleCurrency,
  wishlistCount = 2,
  onOpenWishlist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const NAV_LINKS = [
    { name: 'Home', href: '#' },
    { name: 'Destinations', href: '#popular-destinations' },
    { name: 'Services', href: '#alps-services' },
    { name: 'About Us', href: '#why-alps' },
    { name: 'Travel Guide', href: '#departure-hubs' },
    { name: 'Tours', href: '#explore-guided-tours' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 text-slate-900">
      {/* Main Navbar */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Left: Brand Logo Image */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 group cursor-pointer"
          >
            <div className="h-12 sm:h-14 flex items-center">
              <img
                src="/assets/aistudio/Glossy_Alps_Travel_Logo_with_Airplane_7b55b73e.png"
                alt="Alps Hotels & Travels"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </a>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                    if (link.href === '#') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (link.href.startsWith('#')) {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`relative py-2 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#0057B5] font-bold'
                      : 'hover:text-[#0057B5]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0057B5]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Enquire Now Button & Mobile Menu */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Enquire Now Button */}
            <button
              onClick={onOpenCallback}
              className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg bg-[#0057B5] hover:bg-[#004694] text-white"
            >
              <span>Enquire Now</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-slate-200 text-slate-700 bg-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setActiveNav(link.name);
                  setMobileMenuOpen(false);
                  if (link.href === '#') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else if (link.href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EDF5FD] hover:text-[#0057B5] transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
