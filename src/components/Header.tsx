import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

type NavItem = { name: string; to: string; type: 'page' | 'section' };

const NAV_LINKS: NavItem[] = [
  { name: 'Home', to: '/', type: 'page' },
  { name: 'Kashmir', to: '/kashmir', type: 'page' },
  { name: 'Destinations', to: '#popular-destinations', type: 'section' },
  { name: 'Services', to: '#alps-services', type: 'section' },
  { name: 'About Us', to: '#why-alps', type: 'section' },
  { name: 'Travel Guide', to: '#departure-hubs', type: 'section' },
  { name: 'Tours', to: '#explore-guided-tours', type: 'section' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenCallback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const goSection = (id: string) => {
    setMobileMenuOpen(false);
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (l: NavItem) => l.type === 'page' && pathname === l.to;

  const linkClass = (active: boolean) =>
    `relative py-2 transition-colors whitespace-nowrap cursor-pointer ${
      active ? 'text-[#0057B5] font-bold' : 'hover:text-[#0057B5]'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 text-slate-900">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group cursor-pointer">
            <img
              src="/assets/aistudio/Glossy_Alps_Travel_Logo_with_Airplane_7b55b73e.png"
              alt="Alps Hotels & Travels"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
            {NAV_LINKS.map((l) =>
              l.type === 'page' ? (
                <Link key={l.name} to={l.to} className={linkClass(isActive(l))}>
                  <span>{l.name}</span>
                  {isActive(l) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#0057B5]" />
                  )}
                </Link>
              ) : (
                <button key={l.name} onClick={() => goSection(l.to)} className={linkClass(false)}>
                  {l.name}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
  href="https://wa.me/919152861588?text=Hi%2C%20I%20want%20to%20enquire%20about%20a%20tour"
  target="_blank"
  rel="noreferrer"
  className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer whitespace-nowrap shadow-md hover:shadow-lg bg-[#0057B5] hover:bg-[#004694] text-white transition-all"
>
  Enquire Now
</a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full border border-slate-200 text-slate-700 bg-white flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-xl">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((l) =>
              l.type === 'page' ? (
                <Link
                  key={l.name}
                  to={l.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EDF5FD] hover:text-[#0057B5]"
                >
                  {l.name}
                </Link>
              ) : (
                <button
                  key={l.name}
                  onClick={() => goSection(l.to)}
                  className="text-left px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:bg-[#EDF5FD] hover:text-[#0057B5]"
                >
                  {l.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};