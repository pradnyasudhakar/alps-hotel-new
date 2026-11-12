import React, { useState } from 'react';
import { Plane, Calendar, ArrowRight, X, Check, MapPin, Sparkles } from 'lucide-react';

interface DepartureHubsSectionProps {
  onSelectHub?: (hubCity: string) => void;
  onEnquireHub?: (hubCity: string) => void;
  currency?: 'INR' | 'USD';
}

interface CityHub {
  id: string;
  name: string;
  toursCount: number;
  departuresCount: number;
  priceInr: string;
  priceUsd: string;
  bgColor: string;
  accentColor: string;
  landmark: string;
  popularDestinations: string[];
  renderIllustration: () => React.ReactNode;
}

export const DepartureHubsSection: React.FC<DepartureHubsSectionProps> = ({
  onSelectHub,
  onEnquireHub,
  currency = 'INR'
}) => {
  const [activeModalCity, setActiveModalCity] = useState<CityHub | null>(null);

  const CITIES: CityHub[] = [
    {
      id: 'mumbai',
      name: 'Mumbai',
      toursCount: 189,
      departuresCount: 1321,
      priceInr: '₹38,990*',
      priceUsd: '$469*',
      bgColor: '#FDF6EC',
      accentColor: '#D97706',
      landmark: 'Gateway of India',
      popularDestinations: ['Kashmir Paradise', 'Kerala Backwaters', 'Highlights of Europe', 'Royal Rajasthan'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Soft background oval glow */}
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FDF6EC" />
          {/* Subtle sun reflection */}
          <circle cx="80" cy="40" r="28" fill="#FDE68A" fillOpacity="0.35" />
          {/* Distant Mumbai Skyline Silhouettes */}
          <rect x="22" y="52" width="10" height="28" fill="#F59E0B" fillOpacity="0.18" rx="1" />
          <rect x="34" y="46" width="8" height="34" fill="#F59E0B" fillOpacity="0.18" rx="1" />
          <rect x="118" y="48" width="9" height="32" fill="#F59E0B" fillOpacity="0.18" rx="1" />
          <rect x="129" y="54" width="12" height="26" fill="#F59E0B" fillOpacity="0.18" rx="1" />
          {/* Gateway of India Base */}
          <rect x="42" y="76" width="76" height="6" fill="#D97706" rx="1" />
          <rect x="46" y="56" width="68" height="20" fill="#F59E0B" fillOpacity="0.5" />
          {/* Gateway Main Center Arch */}
          <path d="M68 76V58C68 51.5 73.5 46 80 46C86.5 46 92 51.5 92 58V76H68Z" fill="#FDF6EC" />
          <path d="M70 76V59C70 53.5 74.5 49 80 49C85.5 49 90 53.5 90 59V76" stroke="#B45309" strokeWidth="1.5" />
          {/* Side Arches */}
          <path d="M50 76V65C50 62 52 60 55 60C58 60 60 62 60 65V76H50Z" fill="#FDF6EC" stroke="#B45309" strokeWidth="1.2" />
          <path d="M100 76V65C100 62 102 60 105 60C108 60 110 62 110 65V76H100Z" fill="#FDF6EC" stroke="#B45309" strokeWidth="1.2" />
          {/* Corner Turrets / Pillars */}
          <rect x="44" y="44" width="7" height="32" fill="#D97706" rx="1" />
          <rect x="109" y="44" width="7" height="32" fill="#D97706" rx="1" />
          <rect x="62" y="42" width="5" height="14" fill="#D97706" rx="1" />
          <rect x="93" y="42" width="5" height="14" fill="#D97706" rx="1" />
          {/* Domes */}
          <ellipse cx="80" cy="40" rx="9" ry="6" fill="#B45309" />
          <ellipse cx="47.5" cy="42" rx="3.5" ry="3" fill="#B45309" />
          <ellipse cx="112.5" cy="42" rx="3.5" ry="3" fill="#B45309" />
          {/* Arabian Sea Water ripples */}
          <path d="M25 88C35 86 45 90 55 88C65 86 75 90 85 88C95 86 105 90 115 88C125 86 135 90 145 88" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M15 94C27 92 39 96 51 94C63 92 75 96 87 94C99 92 111 96 123 94C135 92 147 96 155 94" stroke="#F59E0B" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
          {/* Small Ferry Boat */}
          <path d="M28 85L38 85L35 89L29 89Z" fill="#B45309" />
          <path d="M33 85V80L36 82L33 84" fill="#B45309" />
        </svg>
      )
    },
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      toursCount: 90,
      departuresCount: 488,
      priceInr: '₹71,990*',
      priceUsd: '$865*',
      bgColor: '#EFF7F2',
      accentColor: '#10B981',
      landmark: 'Vidhana Soudha',
      popularDestinations: ['Ooty & Coorg Escape', 'Singapore & Malaysia', 'Vietnam Heritage', 'Mysore Grandeur'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#EFF7F2" />
          <circle cx="80" cy="38" r="26" fill="#A7F3D0" fillOpacity="0.35" />
          {/* Lush Greenery Trees */}
          <circle cx="34" cy="74" r="10" fill="#059669" fillOpacity="0.4" />
          <circle cx="44" cy="76" r="8" fill="#10B981" fillOpacity="0.4" />
          <circle cx="126" cy="74" r="10" fill="#059669" fillOpacity="0.4" />
          <circle cx="116" cy="76" r="8" fill="#10B981" fillOpacity="0.4" />
          {/* Vidhana Soudha Neo-Dravidian Structure */}
          <rect x="42" y="74" width="76" height="8" fill="#047857" rx="1" />
          {/* Colonnade Pillars */}
          <rect x="48" y="54" width="64" height="20" fill="#10B981" fillOpacity="0.3" />
          {[52, 60, 68, 76, 84, 92, 100, 108].map((x, i) => (
            <rect key={i} x={x} y="54" width="2" height="20" fill="#047857" />
          ))}
          {/* Grand Central Pediment & Dome */}
          <path d="M64 54L80 44L96 54H64Z" fill="#059669" />
          <rect x="72" y="38" width="16" height="6" fill="#047857" rx="1" />
          <path d="M70 38C70 31 74 26 80 26C86 26 90 31 90 38H70Z" fill="#047857" />
          <rect x="79" y="22" width="2" height="5" fill="#047857" />
          <circle cx="80" cy="21" r="2" fill="#F59E0B" />
          {/* Side Mini Domes */}
          <path d="M48 54C48 50 51 47 55 47C59 47 62 50 62 54H48Z" fill="#059669" />
          <path d="M98 54C98 50 101 47 105 47C109 47 112 50 112 54H98Z" fill="#059669" />
          {/* Lawn Steps */}
          <path d="M30 88H130" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          <path d="M40 94H120" stroke="#059669" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'ahmedabad',
      name: 'Ahmedabad',
      toursCount: 88,
      departuresCount: 475,
      priceInr: '₹75,490*',
      priceUsd: '$908*',
      bgColor: '#FDF3EE',
      accentColor: '#EA580C',
      landmark: 'Statue of Unity',
      popularDestinations: ['Statue of Unity Tour', 'Kevadia & Gir Safari', 'Dubai Shopping Carnival', 'Kashmir Dal Lake'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FDF3EE" />
          <circle cx="80" cy="40" r="30" fill="#FED7AA" fillOpacity="0.4" />
          {/* Narmada River Hills */}
          <path d="M20 80C40 70 60 76 80 72C100 68 120 74 140 70V95H20V80Z" fill="#FDBA74" fillOpacity="0.25" />
          {/* Pedestal Base */}
          <rect x="70" y="74" width="20" height="8" fill="#C2410C" rx="1" />
          <rect x="73" y="70" width="14" height="4" fill="#EA580C" rx="1" />
          {/* Statue of Unity Silhouette */}
          {/* Head & Neck */}
          <ellipse cx="80" cy="28" rx="4" ry="5" fill="#9A3412" />
          {/* Torso & Draped Kurta / Nehru Jacket */}
          <path d="M74 34C74 34 76 33 80 33C84 33 86 34 86 34L88 56L72 56L74 34Z" fill="#C2410C" />
          {/* Draped Shawl line */}
          <path d="M75 35L82 48L85 40" stroke="#FDBA74" strokeWidth="1.5" strokeLinecap="round" />
          {/* Legs & Dhoti */}
          <rect x="75" y="56" width="4" height="14" fill="#9A3412" />
          <rect x="81" y="56" width="4" height="14" fill="#9A3412" />
          {/* River Water Flow */}
          <path d="M25 88C45 86 65 90 85 87C105 85 125 89 145 87" stroke="#EA580C" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
          <path d="M35 94C55 92 75 96 95 93C115 91 135 95 145 93" stroke="#EA580C" strokeWidth="1" strokeOpacity="0.2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'chennai',
      name: 'Chennai',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#F6F2FC',
      accentColor: '#8B5CF6',
      landmark: 'Kapaleeshwarar Temple',
      popularDestinations: ['Mahabalipuram Coast', 'Rameshwaram & Madurai', 'Sri Lanka Explorer', 'Bali Tropical Haven'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#F6F2FC" />
          <circle cx="80" cy="40" r="28" fill="#DDD6FE" fillOpacity="0.4" />
          {/* Temple Gopuram Pyramid Steps */}
          <rect x="68" y="72" width="24" height="10" fill="#7C3AED" rx="1" />
          <path d="M76 82V75C76 73 78 72 80 72C82 72 84 73 84 75V82H76Z" fill="#F6F2FC" />
          <rect x="70" y="64" width="20" height="7" fill="#8B5CF6" />
          <rect x="72" y="56" width="16" height="7" fill="#7C3AED" />
          <rect x="74" y="48" width="12" height="7" fill="#8B5CF6" />
          <rect x="76" y="40" width="8" height="7" fill="#7C3AED" />
          {/* Kalasams top */}
          <path d="M75 40L80 34L85 40" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="80" cy="33" r="1.5" fill="#F59E0B" />
          {/* Palm Tree */}
          <path d="M38 78C39 68 43 56 46 48" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
          <path d="M46 48C42 42 34 44 30 47" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 48C47 41 53 40 58 43" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M46 48C42 47 38 52 36 56" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
          {/* Marina Beach Lighthouse silhouette */}
          <rect x="122" y="58" width="5" height="24" fill="#7C3AED" fillOpacity="0.6" rx="1" />
          <polygon points="121,58 128,58 124.5,52" fill="#7C3AED" />
          {/* Ground Base */}
          <path d="M25 86H135" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'cochin',
      name: 'Cochin',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#EDF7F6',
      accentColor: '#0D9488',
      landmark: 'Chinese Fishing Nets',
      popularDestinations: ['Munnar & Alleppey Cruise', 'Wayanad Nature Trail', 'Maldives Atolls', 'Andaman Coral Islands'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#EDF7F6" />
          <circle cx="70" cy="42" r="26" fill="#99F6E4" fillOpacity="0.35" />
          {/* Backwater shoreline with palm trees */}
          <path d="M100 80C110 74 125 74 140 76" stroke="#0F766E" strokeWidth="1.5" strokeOpacity="0.4" />
          <circle cx="125" cy="62" r="8" fill="#0D9488" fillOpacity="0.3" />
          <circle cx="134" cy="64" r="7" fill="#0F766E" fillOpacity="0.3" />
          {/* Chinese Fishing Net Cantilever Frame */}
          {/* Main shore timber pillar */}
          <line x1="48" y1="84" x2="48" y2="52" stroke="#0F766E" strokeWidth="3" strokeLinecap="round" />
          {/* Diagonal cantilever arm */}
          <line x1="48" y1="58" x2="96" y2="44" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
          {/* Net hanging ropes */}
          <line x1="96" y1="44" x2="110" y2="72" stroke="#0D9488" strokeWidth="1.5" />
          <line x1="96" y1="44" x2="84" y2="72" stroke="#0D9488" strokeWidth="1.5" />
          {/* Drooping curved net in water */}
          <path d="M84 72C94 79 100 79 110 72" stroke="#0F766E" strokeWidth="2" fill="#99F6E4" fillOpacity="0.4" />
          {/* Counterweight stones on land */}
          <line x1="48" y1="58" x2="32" y2="74" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="74" r="3" fill="#0F766E" />
          <circle cx="35" cy="76" r="2.5" fill="#0F766E" />
          {/* Traditional Canoe / Houseboat in water */}
          <path d="M54 84C62 84 74 84 78 82L80 84C74 87 58 87 52 85L54 84Z" fill="#0F766E" />
          {/* Lagoon Ripples */}
          <path d="M20 88C40 86 60 90 80 88C100 86 120 90 140 88" stroke="#0D9488" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#F5F2FB',
      accentColor: '#7C3AED',
      landmark: 'Adiyogi Shiva',
      popularDestinations: ['Isha Yoga Tour', 'Nilgiri Mountain Railway', 'Kodaikanal Mist', 'Bangkok & Pattaya'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#F5F2FB" />
          {/* Velliangiri Mountain Backdrop */}
          <path d="M15 80L45 52L75 75L105 48L145 80H15Z" fill="#DDD6FE" fillOpacity="0.45" />
          <circle cx="80" cy="40" r="28" fill="#C4B5FD" fillOpacity="0.3" />
          {/* Adiyogi Monument Bust Silhouette */}
          {/* Crescent Moon in Matted Hair */}
          <path d="M72 32C72 27 75 24 78 24C77 26 77 29 78 32C76 32 73 33 72 32Z" fill="#FBBF24" />
          {/* Hair buns & crown */}
          <path d="M68 40C68 32 74 26 82 26C88 26 94 30 94 38C94 40 92 44 92 46H68Z" fill="#5B21B6" />
          {/* Head & Neck Silhouette */}
          <ellipse cx="80" cy="44" rx="10" ry="12" fill="#6D28D9" />
          {/* Serpent Kundalini around neck */}
          <path d="M72 52C75 56 85 56 88 52" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" />
          {/* Broad Shoulders Base */}
          <path d="M58 80C60 66 68 60 80 60C92 60 100 66 102 80H58Z" fill="#5B21B6" />
          {/* Crescent reflection on foundation */}
          <rect x="52" y="80" width="56" height="4" fill="#4C1D95" rx="1" />
          {/* Foreground pathway */}
          <path d="M25 88H135" stroke="#7C3AED" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'delhi',
      name: 'Delhi',
      toursCount: 87,
      departuresCount: 474,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#FDF2F2',
      accentColor: '#DC2626',
      landmark: 'India Gate',
      popularDestinations: ['Golden Triangle Luxury', 'Shimla & Manali', 'Leh Ladakh Odyssey', 'Dubai Desert Safari'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FDF2F2" />
          <circle cx="80" cy="40" r="28" fill="#FECACA" fillOpacity="0.45" />
          {/* Rajpath Greenery Silhouettes */}
          <rect x="22" y="70" width="14" height="12" rx="2" fill="#EF4444" fillOpacity="0.2" />
          <rect x="124" y="70" width="14" height="12" rx="2" fill="#EF4444" fillOpacity="0.2" />
          {/* India Gate Pedestal & Structure */}
          <rect x="46" y="76" width="68" height="6" fill="#B91C1C" rx="1" />
          <rect x="50" y="44" width="60" height="32" fill="#EF4444" fillOpacity="0.4" />
          {/* Grand Arch */}
          <path d="M68 76V56C68 50 73 45 80 45C87 45 92 50 92 56V76H68Z" fill="#FDF2F2" />
          <path d="M70 76V57C70 52 74 48 80 48C86 48 90 52 90 57V76" stroke="#B91C1C" strokeWidth="1.5" />
          {/* Top Attic & Inscription cornice */}
          <rect x="48" y="38" width="64" height="6" fill="#B91C1C" rx="1" />
          <rect x="54" y="32" width="52" height="6" fill="#DC2626" rx="1" />
          <rect x="62" y="28" width="36" height="4" fill="#991B1B" rx="1" />
          {/* Amar Jawan Flame glow */}
          <ellipse cx="80" cy="74" rx="2.5" ry="3" fill="#F59E0B" />
          {/* Fountains */}
          <path d="M35 78C33 74 35 71 37 78" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M125 78C123 74 125 71 127 78" stroke="#EF4444" strokeWidth="1.2" strokeLinecap="round" />
          {/* Base line */}
          <path d="M20 88H140" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'goa',
      name: 'Goa',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#FEF8EE',
      accentColor: '#D97706',
      landmark: 'Beachfront Heritage Villa',
      popularDestinations: ['North & South Goa Sun', 'Malvan Scuba Tour', 'Dudhsagar Waterfalls', 'Cruise Voyage'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FEF8EE" />
          <circle cx="80" cy="40" r="28" fill="#FDE68A" fillOpacity="0.4" />
          {/* Palm Trees */}
          <path d="M42 78C44 64 52 50 56 38" stroke="#B45309" strokeWidth="2" strokeLinecap="round" />
          <path d="M56 38C50 32 40 34 35 38" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M56 38C58 30 66 31 72 36" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M56 38C50 38 45 44 42 49" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M56 38C60 41 64 45 66 50" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" />
          {/* Portuguese Beach Villa */}
          <rect x="76" y="58" width="48" height="22" fill="#D97706" rx="1" />
          {/* Sloping Red Mangalore Tile Roof */}
          <polygon points="72,58 128,58 116,46 84,46" fill="#B45309" />
          {/* Balcony / Verandah Pillars */}
          <rect x="80" y="66" width="6" height="14" fill="#FEF8EE" rx="1" />
          <rect x="92" y="66" width="6" height="14" fill="#FEF8EE" rx="1" />
          <rect x="104" y="66" width="6" height="14" fill="#FEF8EE" rx="1" />
          <rect x="114" y="64" width="6" height="8" fill="#FEF8EE" rx="1" />
          {/* Beach shore & strolling couple */}
          <path d="M20 86C45 82 70 88 95 84C120 80 140 84 148 86" stroke="#D97706" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
          {/* Two strolling silhouettes */}
          <circle cx="68" cy="74" r="2" fill="#B45309" />
          <line x1="68" y1="76" x2="68" y2="82" stroke="#B45309" strokeWidth="1.2" />
          <circle cx="73" cy="75" r="1.8" fill="#B45309" />
          <line x1="73" y1="77" x2="73" y2="82" stroke="#B45309" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      id: 'guwahati',
      name: 'Guwahati',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#FDF3F3',
      accentColor: '#E11D48',
      landmark: 'Kamakhya Temple',
      popularDestinations: ['Kaziranga Rhino Safari', 'Shillong & Cherrapunji', 'Meghalaya Living Bridges', 'Bhutan Dragon Kingdom'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FDF3F3" />
          <circle cx="80" cy="40" r="28" fill="#FECDD3" fillOpacity="0.4" />
          {/* Nilachal Hills Backdrop */}
          <path d="M20 78C40 68 60 72 80 66C100 62 120 70 140 68V95H20V78Z" fill="#FDA4AF" fillOpacity="0.25" />
          {/* Kamakhya Shikhara Beehive Dome */}
          <path d="M66 78C66 56 72 38 80 34C88 38 94 56 94 78H66Z" fill="#BE123C" />
          {/* Fluted bands */}
          <path d="M68 66C72 63 88 63 92 66" stroke="#FDA4AF" strokeWidth="1.5" />
          <path d="M71 54C74 52 86 52 89 54" stroke="#FDA4AF" strokeWidth="1.5" />
          <path d="M75 44C77 43 83 43 85 44" stroke="#FDA4AF" strokeWidth="1.5" />
          {/* Golden Kalash Spire */}
          <rect x="79" y="28" width="2" height="6" fill="#F59E0B" />
          <circle cx="80" cy="27" r="2" fill="#F59E0B" />
          {/* Side Mandapa Shrines */}
          <path d="M52 78C52 64 56 56 62 54C64 62 65 72 66 78H52Z" fill="#9F1239" />
          <path d="M108 78C108 64 104 56 98 54C96 62 95 72 94 78H108Z" fill="#9F1239" />
          {/* Ground & Brahmaputra river */}
          <path d="M20 86C50 84 80 88 110 85C130 83 145 87 150 86" stroke="#BE123C" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#EDFAF6',
      accentColor: '#0D9488',
      landmark: 'Charminar',
      popularDestinations: ['Ramoji Film City', 'Golconda & Charminar', 'Singapore & Sentosa', 'Swiss Alpine Glow'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#EDFAF6" />
          <circle cx="80" cy="40" r="28" fill="#99F6E4" fillOpacity="0.35" />
          {/* Surrounding City trees */}
          <circle cx="36" cy="74" r="8" fill="#0D9488" fillOpacity="0.3" />
          <circle cx="124" cy="74" r="8" fill="#0D9488" fillOpacity="0.3" />
          {/* Charminar Structure */}
          <rect x="52" y="52" width="56" height="26" fill="#14B8A6" fillOpacity="0.35" />
          {/* Center Grand Arch */}
          <path d="M68 78V60C68 54 73 50 80 50C87 50 92 54 92 60V78H68Z" fill="#EDFAF6" />
          <path d="M70 78V61C70 56 74 52 80 52C86 52 90 56 90 61V78" stroke="#0F766E" strokeWidth="1.5" />
          {/* Second Storey Balcony Gallery */}
          <rect x="52" y="46" width="56" height="6" fill="#0F766E" rx="1" />
          {/* 4 Minarets (Front Two Main, Rear Two Peek) */}
          {/* Far Left Minaret */}
          <rect x="48" y="28" width="6" height="50" fill="#0F766E" rx="1" />
          <circle cx="51" cy="26" r="3" fill="#0F766E" />
          <rect x="47" y="38" width="8" height="2" fill="#14B8A6" />
          <rect x="47" y="48" width="8" height="2" fill="#14B8A6" />
          {/* Far Right Minaret */}
          <rect x="106" y="28" width="6" height="50" fill="#0F766E" rx="1" />
          <circle cx="109" cy="26" r="3" fill="#0F766E" />
          <rect x="105" y="38" width="8" height="2" fill="#14B8A6" />
          <rect x="105" y="48" width="8" height="2" fill="#14B8A6" />
          {/* Center Upper Domes */}
          <path d="M72 46C72 40 76 36 80 36C84 36 88 40 88 46H72Z" fill="#115E59" />
          {/* Base */}
          <path d="M25 86H135" stroke="#0F766E" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'indore',
      name: 'Indore',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#FEF9EB',
      accentColor: '#D97706',
      landmark: 'Rajwada Palace',
      popularDestinations: ['Ujjain Mahakal & Omkareshwar', 'Mandu Heritage Tour', 'Shimla Kufri Snow', 'Thailand Island Hopper'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#FEF9EB" />
          <circle cx="80" cy="40" r="28" fill="#FDE68A" fillOpacity="0.4" />
          {/* Seven-Storey Rajwada Palace Facade */}
          {/* Stone Base Floor */}
          <rect x="52" y="68" width="56" height="12" fill="#B45309" rx="1" />
          {/* Center Wooden Gateway */}
          <path d="M72 80V70C72 67 75 65 80 65C85 65 88 67 88 70V80H72Z" fill="#FEF9EB" />
          {/* Upper Wooden Floors */}
          <rect x="54" y="58" width="52" height="10" fill="#D97706" />
          <rect x="56" y="48" width="48" height="10" fill="#F59E0B" />
          <rect x="58" y="38" width="44" height="10" fill="#D97706" />
          <rect x="62" y="30" width="36" height="8" fill="#B45309" />
          {/* Jharokha Balconies */}
          <rect x="64" y="60" width="4" height="6" fill="#78350F" />
          <rect x="78" y="60" width="4" height="6" fill="#78350F" />
          <rect x="92" y="60" width="4" height="6" fill="#78350F" />
          <rect x="68" y="50" width="4" height="6" fill="#78350F" />
          <rect x="88" y="50" width="4" height="6" fill="#78350F" />
          {/* Top Maratha Arch Chhatri */}
          <path d="M74 30C74 24 77 22 80 22C83 22 86 24 86 30H74Z" fill="#78350F" />
          {/* Base */}
          <path d="M25 86H135" stroke="#B45309" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'kolkata',
      name: 'Kolkata',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#EFF6FC',
      accentColor: '#2563EB',
      landmark: 'Howrah Bridge',
      popularDestinations: ['Darjeeling & Gangtok Toy Train', 'Sundarbans Tiger Reserve', 'Europe Jewel Journey', 'Vietnam & Cambodia'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#EFF6FC" />
          <circle cx="80" cy="40" r="28" fill="#BFDBFE" fillOpacity="0.4" />
          {/* Howrah Bridge Cantilever Steel Structure */}
          {/* Pylons */}
          <rect x="38" y="44" width="8" height="34" fill="#1D4ED8" rx="1" />
          <rect x="114" y="44" width="8" height="34" fill="#1D4ED8" rx="1" />
          {/* Top Horizontal Truss Span */}
          <line x1="38" y1="46" x2="122" y2="46" stroke="#1E40AF" strokeWidth="2.5" />
          {/* Main Road Deck Span */}
          <line x1="20" y1="74" x2="140" y2="74" stroke="#1E40AF" strokeWidth="3" />
          {/* Lattice Diagonal Trusses */}
          <path d="M46 74L80 46L114 74" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M46 46L63 74L80 46L97 74L114 46" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          {/* Vertical suspender cables */}
          {[52, 60, 68, 76, 84, 92, 100, 108].map((x, i) => (
            <line key={i} x1={x} y1="48" x2={x} y2="74" stroke="#60A5FA" strokeWidth="1" strokeOpacity="0.6" />
          ))}
          {/* Hooghly River waters & Ferry Boat */}
          <path d="M15 84C35 82 55 86 75 84C95 82 115 86 135 84C145 83 150 85 155 84" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
          <path d="M25 90C45 88 65 92 85 90C105 88 125 92 145 90" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25" strokeLinecap="round" />
          {/* Ferry Boat */}
          <path d="M68 81L86 81L83 85L70 85Z" fill="#1D4ED8" />
          <rect x="74" y="78" width="7" height="3" fill="#93C5FD" />
        </svg>
      )
    },
    {
      id: 'nagpur',
      name: 'Nagpur',
      toursCount: 87,
      departuresCount: 473,
      priceInr: '₹90,590*',
      priceUsd: '$1,089*',
      bgColor: '#F0F7FE',
      accentColor: '#3B82F6',
      landmark: 'Deekshabhoomi Stupa',
      popularDestinations: ['Tadoba Tiger Reserve', 'Pench Jungle Safari', 'Kashmir Snow Special', 'Dubai Golden Oasis'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#F0F7FE" />
          <circle cx="80" cy="40" r="28" fill="#BAE6FD" fillOpacity="0.4" />
          {/* Distant Trees */}
          <circle cx="34" cy="74" r="8" fill="#3B82F6" fillOpacity="0.25" />
          <circle cx="126" cy="74" r="8" fill="#3B82F6" fillOpacity="0.25" />
          {/* Deekshabhoomi White / Marble Stupa Dome */}
          <rect x="44" y="74" width="72" height="6" fill="#1D4ED8" rx="1" />
          <rect x="50" y="68" width="60" height="6" fill="#3B82F6" rx="1" />
          {/* Grand Curved Dome */}
          <path d="M52 68C52 46 64 34 80 34C96 34 108 46 108 68H52Z" fill="#E0F2FE" stroke="#2563EB" strokeWidth="1.8" />
          {/* Curved Lotus Petal Arches */}
          <path d="M64 68C64 52 72 44 80 44C88 44 96 52 96 68" stroke="#3B82F6" strokeWidth="1.2" fill="none" />
          <path d="M72 68C72 58 76 52 80 52C84 52 88 58 88 68" stroke="#60A5FA" strokeWidth="1" fill="none" />
          {/* Spire / Harmika top */}
          <rect x="76" y="28" width="8" height="6" fill="#1D4ED8" rx="1" />
          <line x1="80" y1="28" x2="80" y2="20" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="80" cy="19" r="2" fill="#F59E0B" />
          {/* Ground pathway */}
          <path d="M25 86H135" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'pune',
      name: 'Pune',
      toursCount: 15,
      departuresCount: 51,
      priceInr: '₹40,990*',
      priceUsd: '$492*',
      bgColor: '#F1F5F9',
      accentColor: '#475569',
      landmark: 'Shaniwar Wada Delhi Gate',
      popularDestinations: ['Mahabaleshwar & Panchgani', 'Konkan Coastal Drive', 'Kashmir Tulip Special', 'Singapore Dream Cruise'],
      renderIllustration: () => (
        <svg viewBox="0 0 160 110" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="80" cy="55" rx="72" ry="48" fill="#F1F5F9" />
          <circle cx="80" cy="40" r="28" fill="#CBD5E1" fillOpacity="0.45" />
          {/* Historic Shaniwar Wada Stone Ramparts */}
          <rect x="36" y="58" width="88" height="20" fill="#64748B" rx="1" />
          {/* Battlements / Merlons top row */}
          {[36, 44, 52, 60, 68, 76, 84, 92, 100, 108, 116].map((x, i) => (
            <rect key={i} x={x} y="54" width="5" height="5" fill="#475569" />
          ))}
          {/* Two Rounded Stone Bastions */}
          <path d="M46 78C46 64 52 56 60 56C68 56 74 64 74 78H46Z" fill="#475569" />
          <path d="M86 78C86 64 92 56 100 56C108 56 114 64 114 78H86Z" fill="#475569" />
          {/* Massive Pointed Wooden Delhi Gate Arch */}
          <path d="M72 78V66C72 62 76 58 80 58C84 58 88 62 88 66V78H72Z" fill="#334155" />
          {/* Gate Spikes / Nails Line Art */}
          <line x1="75" y1="68" x2="77" y2="68" stroke="#94A3B8" strokeWidth="1" />
          <line x1="83" y1="68" x2="85" y2="68" stroke="#94A3B8" strokeWidth="1" />
          <line x1="75" y1="73" x2="77" y2="73" stroke="#94A3B8" strokeWidth="1" />
          <line x1="83" y1="73" x2="85" y2="73" stroke="#94A3B8" strokeWidth="1" />
          {/* Stone Base & Pathway */}
          <path d="M20 86H140" stroke="#475569" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FAFCFB] select-none">
      {/* 1. Header matching UI screenshot */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 font-display tracking-tight leading-tight">
          Start Your Journey Closer to Home
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
          Choose a departure city that&apos;s convenient for you
        </p>
      </div>

      {/* 2. Grid of 14 Departure Cities (Exact 7 across desktop layout matching screenshot) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4 lg:gap-4.5">
        {CITIES.map((city) => (
          <div
            key={city.id}
            onClick={() => {
              if (onSelectHub) {
                onSelectHub(city.name);
              }
              setActiveModalCity(city);
            }}
            className="group rounded-2xl border border-slate-200/90 bg-white px-4 pt-5 pb-6 sm:px-4.5 sm:pt-5 sm:pb-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
          >
            {/* Top Landmark Illustration Container with soft pastel tint & breathing room */}
            <div className="w-full h-28 sm:h-32 flex items-center justify-center relative overflow-hidden rounded-xl mb-2.5 p-1.5 group-hover:scale-105 transition-transform duration-300">
              {city.renderIllustration()}
            </div>

            {/* Label: "Tour Packages From" */}
            <span className="text-[11px] sm:text-xs text-slate-500 font-normal mt-1.5 leading-none">
              Tour Packages From
            </span>

            {/* Bold City Name */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display group-hover:text-[#0057B5] transition-colors leading-tight mt-1.5">
              {city.name}
            </h3>

            {/* Tours & Departures count */}
            <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1.5 leading-snug whitespace-nowrap">
              <span>{city.toursCount} tours</span>
              <span className="mx-1.5 opacity-60">·</span>
              <span>{city.departuresCount} departures</span>
            </p>

            {/* Starting Price Tag */}
            <div className="mt-2 text-xs sm:text-[13px] text-slate-700 font-normal">
              <span>Starts From </span>
              <span className="font-bold text-slate-900">
                {currency === 'INR' ? city.priceInr : city.priceUsd}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Quick Hub Modal */}
      {activeModalCity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Modal Header Banner */}
            <div
              className="p-6 relative overflow-hidden"
              style={{ backgroundColor: activeModalCity.bgColor }}
            >
              <button
                onClick={() => setActiveModalCity(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 transition-colors shadow-xs cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl bg-white p-1 shadow-sm shrink-0">
                  {activeModalCity.renderIllustration()}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0057B5]" />
                    Hub Departures
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 font-display">
                    Tour Packages from {activeModalCity.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {activeModalCity.toursCount} tours available · {activeModalCity.departuresCount} guaranteed departures
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body: Popular Departures from this City */}
            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Popular Departures from {activeModalCity.name}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalCity.popularDestinations.map((dest, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0057B5] shrink-0" />
                      <span className="text-xs font-bold text-slate-800">{dest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Callout */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 block">Lowest Available Fare</span>
                  <span className="text-lg font-black text-slate-900 font-display">
                    {currency === 'INR' ? activeModalCity.priceInr : activeModalCity.priceUsd}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    All-Inclusive Meals & Hotel
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    if (onEnquireHub) {
                      onEnquireHub(activeModalCity.name);
                    }
                    setActiveModalCity(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0057B5] hover:bg-[#004694] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <span>Enquire Departures from {activeModalCity.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
