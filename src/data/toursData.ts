export interface DepartureDate {
  id: string;
  date: string; // YYYY-MM-DD
  formatted: string; // e.g. "12 May 2026"
  month: string; // e.g. "May 2026"
  seatsLeft: number;
  status: 'Available' | 'Filling Fast' | 'Last 4 Seats';
  hub: string;
  priceModifier?: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  route: string;
  activities: string[];
  stay: string;
  meals: string; // e.g. "Breakfast, Indian Lunch, Indian Dinner"
}

export interface TourPackage {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  region: 'international' | 'domestic';
  category: 'Europe' | 'Asia' | 'Middle East' | 'Himalayas' | 'South India' | 'Spiritual';
  specialtyType: 'General Escorted' | 'Womens Special' | 'Senior Citizens' | 'Marigold Economy' | 'Honeymoon';
  duration: {
    days: number;
    nights: number;
  };
  cities: string[];
  rating: number;
  reviews: number;
  price: number; // in INR
  originalPrice: number;
  discountLabel: string;
  featuredBadge?: 'Bestseller' | 'Guaranteed Departure' | 'Early Bird Offer' | 'Trending';
  image: string;
  bgFallback: string;
  highlights: string[];
  inclusions: {
    flights: boolean;
    hotelRating: string;
    meals: string;
    tourManager: boolean;
    transfers: boolean;
    visasInsurance: boolean;
  };
  departureDates: DepartureDate[];
  itinerary: ItineraryDay[];
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'europe-glimpse-12d',
    code: 'EUR-102',
    title: 'Glimpse of Europe with Swiss Alps & Paris',
    subtitle: 'Our flagship 12-day escorted holiday covering the iconic marvels of France and Switzerland with Indian Tour Maharaj.',
    region: 'international',
    category: 'Europe',
    specialtyType: 'General Escorted',
    duration: { days: 12, nights: 11 },
    cities: ['Paris', 'Brussels', 'Heidelberg', 'Black Forest', 'Lucerne', 'Interlaken', 'Zurich'],
    rating: 4.9,
    reviews: 3840,
    price: 265000,
    originalPrice: 295000,
    discountLabel: 'Save ₹30,000 per person',
    featuredBadge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-700 to-indigo-950',
    highlights: [
      'Eiffel Tower 2nd Level admission & romantic Seine River cruise',
      'Excursion to Mt. Titlis with world’s first revolving Rotair cable car',
      'Day trip to Jungfraujoch - Top of Europe with Ice Palace & Sphinx Observatory',
      'Scenic orientation of Paris Champs-Élysées, Arc de Triomphe & Louvre',
      'Authentic cuckoo clock demonstration in the scenic Black Forest',
      'Rhine Falls boat ride at Schaffhausen, Europe’s biggest waterfall'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star Premium Deluxe',
      meals: 'Daily Breakfast, Fresh Hot Indian Lunch & Dinner cooked by Alps Culinary Team',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'eur-d1', date: '2026-05-10', formatted: '10 May 2026', month: 'May 2026', seatsLeft: 4, status: 'Last 4 Seats', hub: 'Mumbai' },
      { id: 'eur-d2', date: '2026-05-24', formatted: '24 May 2026', month: 'May 2026', seatsLeft: 8, status: 'Filling Fast', hub: 'Delhi' },
      { id: 'eur-d3', date: '2026-06-07', formatted: '07 Jun 2026', month: 'June 2026', seatsLeft: 12, status: 'Available', hub: 'Mumbai' },
      { id: 'eur-d4', date: '2026-06-21', formatted: '21 Jun 2026', month: 'June 2026', seatsLeft: 6, status: 'Filling Fast', hub: 'Ahmedabad' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paris - The City of Lights',
        route: 'Departure Hub -> Paris Charles de Gaulle',
        activities: ['Meet & greet by Alps Tour Director at Paris Airport', 'Transfer to 4-star hotel in comfortable AC coach', 'Welcome dinner with authentic hot Indian cuisine'],
        stay: 'Courtyard by Marriott Paris or similar',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Paris City Tour & Eiffel Tower Experience',
        route: 'Paris Sightseeing',
        activities: ['Guided city tour: Champs-Élysées, Arc de Triomphe, Place de la Concorde', 'Ascent to Eiffel Tower 2nd Level for breathtaking city panoramas', 'Evening scenic cruise on the River Seine with illuminated monuments'],
        stay: 'Courtyard by Marriott Paris or similar',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Brussels Orientation & Grand Place',
        route: 'Paris -> Brussels -> Heidelberg',
        activities: ['Scenic drive across France into Belgium', 'Visit Grand Place, Atomium photo stop and Manneken Pis statue', 'Taste original Belgian waffles and artisan chocolates'],
        stay: 'Leonardo Hotel Heidelberg or similar',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 4,
        title: 'Black Forest Drive & Cuckoo Clock Craft',
        route: 'Heidelberg -> Black Forest -> Switzerland',
        activities: ['Scenic drive through the dense, picturesque Black Forest', 'Live demonstration of authentic cuckoo clock craftsmanship at Hofgut Sternen', 'Continue onwards to picturesque Central Switzerland'],
        stay: 'Hotel Terrace Engelberg / Swiss Star Zurich',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 5,
        title: 'Mt. Titlis Snow Glacier & Cliff Walk',
        route: 'Engelberg -> Mt Titlis -> Lucerne',
        activities: ['Ride the world’s first rotating cable car (Rotair) up to 10,000 feet', 'Walk across Europe’s highest suspension bridge - the Titlis Cliff Walk', 'Explore Glacier Cave and orientation tour of Lucerne with Lion Monument & Chapel Bridge'],
        stay: 'Hotel Terrace Engelberg / Swiss Star Zurich',
        meals: 'Breakfast, Indian Lunch atop mountain, Indian Dinner'
      },
      {
        day: 6,
        title: 'Jungfraujoch - Top of Europe',
        route: 'Lucerne -> Grindelwald -> Jungfraujoch -> Interlaken',
        activities: ['Ride the ultra-modern Eiger Express tricable gondola to Jungfraujoch (3,454m)', 'Explore the glittering Ice Palace, Alpine Sensation and Sphinx Terrace', 'Evening leisure stroll in vibrant Interlaken between Lake Thun and Lake Brienz'],
        stay: 'Hotel Terrace Engelberg / Swiss Star Zurich',
        meals: 'Breakfast, Indian Lunch atop Jungfrau, Indian Dinner'
      },
      {
        day: 7,
        title: 'Rhine Falls Boat Ride & Zurich City Walk',
        route: 'Zurich -> Schaffhausen -> Zurich',
        activities: ['Feel the roaring power of Rhine Falls up close via scenic boat ride', 'Orientation tour of Zurich’s Bahnhofstrasse, Lake Zurich promenade and Grossmünster', 'Free time for Swiss watch shopping and Lindt Home of Chocolate visit'],
        stay: 'Swiss Star Zurich or similar',
        meals: 'Breakfast, Indian Lunch, Gala Indian Dinner'
      },
      {
        day: 8,
        title: 'Homeward Journey',
        route: 'Zurich Airport -> Home Destination',
        activities: ['Check-out from hotel', 'Transfer to Zurich International Airport for return flight', 'Arrive home with unforgettable memories and lifelong friends made on Alps tour'],
        stay: 'Flight',
        meals: 'Breakfast, Meals onboard flight'
      }
    ]
  },
  {
    id: 'kashmir-paradise-7d',
    code: 'KAS-204',
    title: 'Grand Tour of Kashmir Paradise with Gulmarg',
    subtitle: 'Heaven on earth escorted group tour with Dal Lake Shikara ride, Mughal Gardens, snow fun in Gulmarg, and Lidder Valley in Pahalgam.',
    region: 'domestic',
    category: 'Himalayas',
    specialtyType: 'General Escorted',
    duration: { days: 7, nights: 6 },
    cities: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg'],
    rating: 4.9,
    reviews: 4210,
    price: 27500,
    originalPrice: 32000,
    discountLabel: 'Save ₹4,500 per person',
    featuredBadge: 'Guaranteed Departure',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-emerald-800 to-sky-950',
    highlights: [
      'Deluxe Houseboat stay on serene Dal Lake with romantic Shikara ride',
      'Gondola Cable Car ride at Gulmarg up to Phase 1 / Phase 2 snow plateau',
      'Visit Shalimar Bagh, Nishat Bagh & Asia’s largest Tulip Garden (in season)',
      'Scenic drive along Lidder River in Pahalgam with Betaab Valley & Aru Valley',
      'Excursion to Sonamarg - Meadow of Gold with Thajiwas Glacier pony trail',
      'Fresh hot Kashmiri Kahwa tea & traditional wazwan / pure veg satvik meals'
    ],
    inclusions: {
      flights: true,
      hotelRating: 'Deluxe Heritage & 4-Star Mountain Resorts',
      meals: 'Breakfast, Authentic Indian & Jain Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'kas-d1', date: '2026-05-04', formatted: '04 May 2026', month: 'May 2026', seatsLeft: 5, status: 'Filling Fast', hub: 'Mumbai' },
      { id: 'kas-d2', date: '2026-05-18', formatted: '18 May 2026', month: 'May 2026', seatsLeft: 2, status: 'Last 4 Seats', hub: 'Delhi' },
      { id: 'kas-d3', date: '2026-06-01', formatted: '01 Jun 2026', month: 'June 2026', seatsLeft: 14, status: 'Available', hub: 'Pune' },
      { id: 'kas-d4', date: '2026-06-15', formatted: '15 Jun 2026', month: 'June 2026', seatsLeft: 9, status: 'Available', hub: 'Ahmedabad' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar - The Venice of the East',
        route: 'Departure City -> Srinagar Airport -> Houseboat',
        activities: ['Traditional welcome by Alps Kashmir Tour Manager with steaming hot Kahwa', 'Check-in to carved wooden Deluxe Houseboat on Dal Lake', 'Sunset 1-hour Shikara boat ride gliding past floating vegetable and flower markets'],
        stay: 'Super Deluxe Houseboat, Dal Lake',
        meals: 'Welcome Lunch, Indian Dinner'
      },
      {
        day: 2,
        title: 'Mughal Gardens & Shankaracharya Temple',
        route: 'Srinagar Local Sightseeing',
        activities: ['Climb up to the historic Shankaracharya Hill Temple for panoramic valley views', 'Stroll through terraced fountains at Nishat Bagh (Garden of Pleasure) and Shalimar Bagh', 'Evening Kashmiri dry fruits and saffron shopping at Lal Chowk'],
        stay: 'The Grand Mamta or RK Sarovar Portico, Srinagar',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Excursion to Sonamarg - The Meadow of Gold',
        route: 'Srinagar -> Sonamarg -> Srinagar',
        activities: ['Drive through scenic Sindh Valley with rushing glacier streams and pine forests', 'Option to visit Thajiwas Glacier by pony / local taxi to touch snow', 'Return to Srinagar for musical evening with fellow travelers'],
        stay: 'The Grand Mamta, Srinagar',
        meals: 'Breakfast, Indian Lunch at Sonamarg, Indian Dinner'
      },
      {
        day: 4,
        title: 'Gulmarg Meadow of Flowers & Gondola Ride',
        route: 'Srinagar -> Gulmarg',
        activities: ['Ascend to Gulmarg (8,825 ft), world famous ski resort and golf course', 'Ride the famous Gulmarg Gondola Cable Car to Kongdoori / Apharwat Peak', 'Enjoy snow activities and photography amidst snow-capped peaks'],
        stay: 'Pine Palace Resort or Hotel Hilltop, Gulmarg',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 5,
        title: 'Pahalgam - The Valley of Shepherds',
        route: 'Gulmarg -> Awantipora Ruins -> Pahalgam',
        activities: ['Stop at saffron fields of Pampore and historic 9th-century Awantipora Sun Temple ruins', 'Check into riverside resort along crystal-clear Lidder River in Pahalgam', 'Evening walk through Pahalgam pine woods and market'],
        stay: 'Hotel Heevan or Mountview, Pahalgam',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 6,
        title: 'Betaab Valley & Chandanwari',
        route: 'Pahalgam Excursion',
        activities: ['Visit Betaab Valley where classic Bollywood movies were filmed', 'Explore Chandanwari, the starting point of the revered Amarnath Yatra', 'Special Alps farewell gala dinner with Kashmiri music'],
        stay: 'Hotel Heevan, Pahalgam',
        meals: 'Breakfast, Indian Lunch, Farewell Indian Dinner'
      },
      {
        day: 7,
        title: 'Departure from Srinagar',
        route: 'Pahalgam -> Srinagar Airport -> Home',
        activities: ['Morning breakfast and scenic drive back to Srinagar Airport', 'Fly back home carrying sweet saffron, walnuts, and blissful memories'],
        stay: 'Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'vietnam-cambodia-9d',
    code: 'VNM-309',
    title: 'Vietnam & Cambodia Cultural Discovery',
    subtitle: 'Experience breathtaking Halong Bay overnight cruise, ancient Hoi An lantern town, bustling Hanoi, and the majestic Angkor Wat temples.',
    region: 'international',
    category: 'Asia',
    specialtyType: 'General Escorted',
    duration: { days: 9, nights: 8 },
    cities: ['Hanoi', 'Halong Bay', 'Da Nang', 'Hoi An', 'Siem Reap'],
    rating: 4.8,
    reviews: 1980,
    price: 142000,
    originalPrice: 158000,
    discountLabel: 'Save ₹16,000 per person',
    featuredBadge: 'Trending',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-teal-800 to-slate-900',
    highlights: [
      'Overnight luxury cruise on UNESCO World Heritage Halong Bay',
      'Golden Bridge held by giant stone hands at Ba Na Hills, Da Nang',
      'Ancient yellow-walled merchant town of Hoi An with lantern boat ride',
      'Guided exploration of Angkor Wat, Bayon & Ta Prohm (Tomb Raider temple)',
      'Water Puppet Show in Hanoi & French Colonial Quarter cyclo tour',
      'Hot Indian veg/jain & international meals arranged by Alps culinary team'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star Luxury & 5-Star Cruise',
      meals: 'Breakfast, Hot Indian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'vnm-d1', date: '2026-05-15', formatted: '15 May 2026', month: 'May 2026', seatsLeft: 6, status: 'Filling Fast', hub: 'Mumbai' },
      { id: 'vnm-d2', date: '2026-06-05', formatted: '05 Jun 2026', month: 'June 2026', seatsLeft: 10, status: 'Available', hub: 'Delhi' },
      { id: 'vnm-d3', date: '2026-07-10', formatted: '10 Jul 2026', month: 'July 2026', seatsLeft: 16, status: 'Available', hub: 'Bengaluru' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Hanoi - Heart of Vietnam',
        route: 'Departure City -> Hanoi Noi Bai Airport',
        activities: ['Arrive in Hanoi, warmly received by Alps Tour Director', 'Check into hotel and relax', 'Evening traditional Thang Long Water Puppet Show followed by welcome dinner'],
        stay: 'The Ann Hanoi or Silk Path Hotel',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Hanoi Heritage & Halong Bay Cruise Boarding',
        route: 'Hanoi -> Halong Bay',
        activities: ['Morning visit to Ho Chi Minh Mausoleum complex, One Pillar Pagoda & Temple of Literature', 'Scenic expressway drive to Tuan Chau Port', 'Board luxury 5-star cruise ship in Halong Bay, welcome drink and cruise briefing'],
        stay: 'Paradise Grand Cruise / Athena Luxury Cruise, Halong Bay',
        meals: 'Breakfast, Special Indian Lunch on board, Sunset Party & Dinner'
      },
      {
        day: 3,
        title: 'Surprise Cave Exploration & Flight to Da Nang',
        route: 'Halong Bay -> Hanoi -> Da Nang',
        activities: ['Morning Tai Chi session on sundeck as the sun rises over karst islands', 'Explore massive Sung Sot (Surprise) Cave with stunning stalactites', 'Disembark cruise, drive to airport and flight to coastal Da Nang'],
        stay: 'Novotel Danang Premier Han River',
        meals: 'Brunch on board, Indian Dinner in Da Nang'
      },
      {
        day: 4,
        title: 'Ba Na Hills & Golden Giant Hand Bridge',
        route: 'Da Nang -> Ba Na Hills -> Hoi An',
        activities: ['Cable car ride up to Ba Na Hills French Village', 'Walk the world-famous Golden Bridge held aloft by colossal mossy stone hands', 'Continue to UNESCO heritage town of Hoi An, evening boat ride with floating paper lanterns'],
        stay: 'Hoi An Historic Resort or Belle Maison Hadana',
        meals: 'Breakfast, Indian Buffet Lunch, Indian Dinner'
      },
      {
        day: 5,
        title: 'Flight to Siem Reap - Kingdom of Wonder',
        route: 'Da Nang -> Siem Reap (Cambodia)',
        activities: ['Morning flight to Siem Reap, Cambodia', 'Check into resort and afternoon visit to Artisans Angkor silk craft workshops', 'Sunset view of temples and Cambodian cultural Apsara dance dinner show'],
        stay: 'Angkor Miracle Resort & Spa, Siem Reap',
        meals: 'Breakfast, Lunch, Apsara Cultural Dinner'
      },
      {
        day: 6,
        title: 'Angkor Wat - The Eighth Wonder of the World',
        route: 'Siem Reap Temple Circuit',
        activities: ['Marvel at the colossal sandstone towers of Angkor Wat', 'Visit Bayon Temple with 216 giant smiling stone faces of Avalokiteshvara', 'Walk inside overgrown Ta Prohm temple enveloped by massive banyan tree roots'],
        stay: 'Angkor Miracle Resort & Spa',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 7,
        title: 'Tonle Sap Floating Village & Departure',
        route: 'Siem Reap -> Departure Airport',
        activities: ['Scenic wooden boat cruise on Tonle Sap Lake visiting floating schools and villages', 'Souvenir shopping at Old Market Psar Chaa', 'Evening transfer to airport for return flight to India'],
        stay: 'Flight',
        meals: 'Breakfast, Indian Lunch'
      }
    ]
  },
  {
    id: 'dubai-abu-dhabi-6d',
    code: 'DXB-406',
    title: 'Simply Dubai with Abu Dhabi & Ferrari World',
    subtitle: 'The ultimate royal Middle Eastern holiday featuring Burj Khalifa 124th floor, Desert Safari with BBQ, Museum of the Future, and BAPS Hindu Mandir in Abu Dhabi.',
    region: 'international',
    category: 'Middle East',
    specialtyType: 'General Escorted',
    duration: { days: 6, nights: 5 },
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    rating: 4.8,
    reviews: 5120,
    price: 89900,
    originalPrice: 102000,
    discountLabel: 'Save ₹12,100 per person',
    featuredBadge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-600 to-stone-900',
    highlights: [
      'Ascent to Burj Khalifa 124th & 125th floor observation decks',
      'Thrilling Red Dune Desert Safari with 4x4 dune bashing, camel ride & Tanoura dance show',
      'Visit the iconic Museum of the Future & Dubai Frame panoramic glass walkway',
      'Abu Dhabi full-day tour with Sheikh Zayed Grand Mosque & newly inaugurated BAPS Hindu Mandir',
      'Admission to Ferrari World Theme Park with Formula Rossa, the world’s fastest rollercoaster',
      'Luxury Marina Dhow Cruise with live entertainment and gourmet Indian buffet'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star Premium Central Dubai Hotel',
      meals: 'Breakfast, Daily Indian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'dxb-d1', date: '2026-05-08', formatted: '08 May 2026', month: 'May 2026', seatsLeft: 4, status: 'Last 4 Seats', hub: 'Mumbai' },
      { id: 'dxb-d2', date: '2026-05-22', formatted: '22 May 2026', month: 'May 2026', seatsLeft: 7, status: 'Filling Fast', hub: 'Ahmedabad' },
      { id: 'dxb-d3', date: '2026-06-12', formatted: '12 Jun 2026', month: 'June 2026', seatsLeft: 15, status: 'Available', hub: 'Delhi' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Marina Dhow Cruise',
        route: 'Departure Hub -> Dubai International Airport',
        activities: ['Arrive at Dubai Terminal, meet Alps tour manager and transfer in luxury coach', 'Check into hotel and freshen up', 'Evening Marina Dhow Cruise surrounded by illuminated skyscrapers, buffet dinner and Tanoura performance'],
        stay: 'Citymax Hotel Al Barsha / Millennium Al Barsha',
        meals: 'Indian Dinner on Dhow Cruise'
      },
      {
        day: 2,
        title: 'Dubai City Tour & Burj Khalifa At The Top',
        route: 'Dubai Modern Landmarks',
        activities: ['Drive past Palm Jumeirah and Atlantis The Palm, photo stop at Burj Al Arab', 'Visit Dubai Mall and witness the majestic dancing Dubai Fountains', 'Ride high-speed elevator to Burj Khalifa 124th floor for 360-degree desert & ocean views'],
        stay: 'Millennium Al Barsha, Dubai',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Museum of the Future & Desert 4x4 Safari',
        route: 'Dubai -> Arabian Desert Camp',
        activities: ['Morning visit to architectural marvel Museum of the Future', 'Afternoon 4x4 Land Cruiser dune bashing across undulating golden desert dunes', 'Camel rides, Henna painting, belly dancing and fire show with barbecue dinner under the stars'],
        stay: 'Millennium Al Barsha, Dubai',
        meals: 'Breakfast, Indian Lunch, Desert BBQ Dinner'
      },
      {
        day: 4,
        title: 'Abu Dhabi Grand Mosque & BAPS Hindu Mandir',
        route: 'Dubai -> Abu Dhabi -> Dubai',
        activities: ['Full-day excursion to UAE capital Abu Dhabi', 'Tour the awe-inspiring Sheikh Zayed Grand Mosque with pure white marble domes and Swarovski chandeliers', 'Visit the historic and intricately hand-carved BAPS Hindu Mandir', 'Drive past Presidential Palace and Emirates Palace'],
        stay: 'Millennium Al Barsha, Dubai',
        meals: 'Breakfast, Indian Lunch in Abu Dhabi, Indian Dinner'
      },
      {
        day: 5,
        title: 'Ferrari World & Dubai Gold Souk Shopping',
        route: 'Dubai & Yas Island',
        activities: ['Experience Ferrari World on Yas Island with high-octane rides', 'Evening visit to traditional Deira Gold Souk and Spice Souk across the Dubai Creek', 'Farewell dinner celebration with travel companions'],
        stay: 'Millennium Al Barsha, Dubai',
        meals: 'Breakfast, Lunch voucher, Indian Dinner'
      },
      {
        day: 6,
        title: 'Dubai Frame & Homeward Flight',
        route: 'Dubai Frame -> Airport -> Home',
        activities: ['Morning visit to Dubai Frame showing Old Dubai on one side and Modern Dubai on the other', 'Duty Free shopping and transfer to Dubai International Airport for return flight'],
        stay: 'Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'kerala-gods-own-country-7d',
    code: 'KER-507',
    title: 'Kerala God\'s Own Country with Houseboat & Munnar',
    subtitle: 'Lush tea plantations of Munnar, wildlife sanctuary of Thekkady, and overnight backwater cruise on an authentic Alleppey Kettuvallam houseboat.',
    region: 'domestic',
    category: 'South India',
    specialtyType: 'General Escorted',
    duration: { days: 7, nights: 6 },
    cities: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey'],
    rating: 4.9,
    reviews: 3650,
    price: 24500,
    originalPrice: 28500,
    discountLabel: 'Save ₹4,000 per person',
    featuredBadge: 'Early Bird Offer',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-emerald-700 to-amber-950',
    highlights: [
      '2 nights in misty tea garden hills of Munnar with Mattupetty Dam & Echo Point',
      'Spice plantation tour and Kathakali cultural classical dance show in Thekkady',
      'Periyar Lake wildlife boat cruise spotting wild elephants and native birds',
      'Overnight cruise on luxury Alleppey backwater houseboat with traditional meals',
      'Cochin heritage walk seeing iconic Chinese Fishing Nets & Fort Kochi',
      'Fresh coconut water, banana chips, and authentic Kerala & North Indian meals'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star Hill Resort & Air-Conditioned Deluxe Houseboat',
      meals: 'Breakfast, Indian Vegetarian & Traditional Kerala Lunch/Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'ker-d1', date: '2026-05-12', formatted: '12 May 2026', month: 'May 2026', seatsLeft: 6, status: 'Filling Fast', hub: 'Mumbai' },
      { id: 'ker-d2', date: '2026-05-26', formatted: '26 May 2026', month: 'May 2026', seatsLeft: 11, status: 'Available', hub: 'Pune' },
      { id: 'ker-d3', date: '2026-06-09', formatted: '09 Jun 2026', month: 'June 2026', seatsLeft: 8, status: 'Available', hub: 'Delhi' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cochin & Drive to Misty Munnar',
        route: 'Cochin Airport -> Cheeyappara Waterfalls -> Munnar',
        activities: ['Arrive at Cochin Airport, welcomed by Alps representative', 'Scenic hill drive winding past Valara & Cheeyappara waterfalls', 'Check in to Munnar resort surrounded by lush emerald tea bushes'],
        stay: 'The Leaf Munnar or Mountain Club Resort',
        meals: 'Welcome Lunch, Indian Dinner'
      },
      {
        day: 2,
        title: 'Munnar Tea Gardens & Eravikulam National Park',
        route: 'Munnar Sightseeing',
        activities: ['Visit Eravikulam National Park, home of the endangered Nilgiri Tahr mountain goat', 'Tea Museum tour learning orthodox tea processing and tea tasting', 'Photo stops at Mattupetty Dam, Echo Point, and Kundala Lake'],
        stay: 'The Leaf Munnar',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Spice Gardens of Thekkady & Periyar Sanctuary',
        route: 'Munnar -> Thekkady (Periyar)',
        activities: ['Scenic drive across Cardamom hills into Thekkady', 'Guided nature walk through fragrant spice plantations of cardamom, pepper, vanilla, and cinnamon', 'Evening Kalarippayattu martial arts and Kathakali classical dance show'],
        stay: 'Elephant Court or Greenwoods Resort, Thekkady',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 4,
        title: 'Periyar Lake Boat Safari & Drive to Alleppey',
        route: 'Thekkady -> Alleppey Backwaters',
        activities: ['Early morning boat cruise on Periyar Lake inside the Periyar Tiger Reserve', 'Drive to Alleppey, known as the Venice of the East', 'Board your private Deluxe Air-conditioned Houseboat around noon'],
        stay: 'Deluxe Air-Conditioned Houseboat, Alleppey',
        meals: 'Breakfast, Traditional Kerala Sadhya Lunch on board, Houseboat Dinner'
      },
      {
        day: 5,
        title: 'Houseboat Backwater Serenity & Cochin Heritage',
        route: 'Alleppey -> Cochin',
        activities: ['Morning cruise through tranquil village canals, palm-fringed lagoons, and paddy fields', 'Disembark houseboat and drive to historical port city of Cochin', 'Visit Fort Kochi, historic St. Francis Church, Santa Cruz Basilica, and Chinese Fishing Nets'],
        stay: 'Casino Hotel or Radisson Blu Cochin',
        meals: 'Breakfast on boat, Indian Lunch, Gala Farewell Dinner'
      },
      {
        day: 6,
        title: 'Dutch Palace, Jewish Synagogue & Shopping',
        route: 'Mattancherry & Cochin Local',
        activities: ['Visit Mattancherry Dutch Palace with beautiful mythological murals', 'Walk along Jew Town with antique shops and the 16th-century Paradesi Synagogue', 'Time for Kerala souvenir shopping: spices, chips, cashews, and handicrafts'],
        stay: 'Radisson Blu Cochin',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 7,
        title: 'Departure from Cochin',
        route: 'Cochin Hotel -> Cochin Airport -> Return Home',
        activities: ['Breakfast at hotel and checkout', 'Transfer to Cochin International Airport for flight home with serene memories'],
        stay: 'Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'my-fair-lady-europe-10d',
    code: 'WMS-710',
    title: 'My Fair Lady - Europe Women\'s Special Tour',
    subtitle: 'Alps Hotels and Travels signature women-only holiday! Safe, liberating, full of laughter, DJ gala nights, pampering, and sightseeing across Paris and Switzerland.',
    region: 'international',
    category: 'Europe',
    specialtyType: 'Womens Special',
    duration: { days: 10, nights: 9 },
    cities: ['Paris', 'Lucerne', 'Interlaken', 'Zurich', 'Titlis'],
    rating: 5.0,
    reviews: 2150,
    price: 245000,
    originalPrice: 275000,
    discountLabel: 'Save ₹30,000 per person',
    featuredBadge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-rose-800 to-indigo-950',
    highlights: [
      'Exclusively for women travelers with experienced female Alps Tour Escort',
      'Special DJ Dance Party night, fashion ramp walk & themed dinner celebration',
      'Professional photoshoot session in front of Eiffel Tower in Paris',
      'Scenic trip to Mt Titlis snow peak and Glacier Walk',
      'Dedicated private luxury coach with female friendly amenities & verified hotels',
      'Pure Indian home-style dining with Maharaj preparing fresh hot meals daily'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star Premium Deluxe',
      meals: 'Breakfast, Indian Lunch & Dinner with special snacks & hi-tea',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'wms-d1', date: '2026-05-14', formatted: '14 May 2026', month: 'May 2026', seatsLeft: 3, status: 'Last 4 Seats', hub: 'Mumbai' },
      { id: 'wms-d2', date: '2026-06-11', formatted: '11 Jun 2026', month: 'June 2026', seatsLeft: 8, status: 'Filling Fast', hub: 'Pune' },
      { id: 'wms-d3', date: '2026-07-02', formatted: '02 Jul 2026', month: 'July 2026', seatsLeft: 12, status: 'Available', hub: 'Delhi' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'All-Women Kickoff in Paris',
        route: 'Departure Hub -> Paris',
        activities: ['Welcoming cocktail/mocktail party at hotel with fellow women travelers', 'Ice-breaking games, bonding session and presentation of My Fair Lady tour kit', 'Welcome royal Indian feast prepared by our chef'],
        stay: 'Courtyard by Marriott Paris',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Paris Glamour & Eiffel Tower Photoshoot',
        route: 'Paris City & Eiffel Tower',
        activities: ['Ascent to Eiffel Tower with dedicated group photographer for saree/dress photoshoot', 'Scenic cruise along River Seine sipping French hot chocolate', 'Shopping at Galeries Lafayette and Champs-Élysées perfumes'],
        stay: 'Courtyard by Marriott Paris',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Journey to Switzerland via Black Forest',
        route: 'Paris -> Germany -> Swiss Alps',
        activities: ['Picturesque drive through Alsace wine country and Germany’s Black Forest', 'Black Forest cherry cake tasting and cuckoo clock shopping', 'Arrive in the storybook Swiss alpine valley of Engelberg'],
        stay: 'Hotel Terrace Engelberg',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 4,
        title: 'Mt. Titlis Snow Fun & Swiss Village Stroll',
        route: 'Engelberg -> Mt Titlis -> Lucerne',
        activities: ['Revolving cable car to Mt Titlis at 10,000 ft, playing in the snow and cliff walk', 'Romantic walk across Lucerne’s historic Chapel Bridge and swan feeding on Lake Lucerne', 'Time for Swiss watches, pocket knives and chocolates'],
        stay: 'Hotel Terrace Engelberg',
        meals: 'Breakfast, Hot Indian Lunch on Titlis, Indian Dinner'
      },
      {
        day: 5,
        title: 'My Fair Lady Gala Night & Dance Party',
        route: 'Swiss Alpine Resort',
        activities: ['Leisure morning in alpine village with optional bicycle ride', 'Afternoon styling and theme costume party', 'Exclusive DJ dance night with music, awards, prizes, and celebratory banquet'],
        stay: 'Hotel Terrace Engelberg',
        meals: 'Breakfast, Indian Lunch, Royal Gala Dinner with DJ'
      },
      {
        day: 6,
        title: 'Zurich Lake Walk & Return Flight',
        route: 'Engelberg -> Zurich Airport -> Home',
        activities: ['Visit Zurich lake promenade and Lindt Chocolate Museum', 'Transfer to airport for return journey having forged lifelong sisterhood'],
        stay: 'Flight',
        meals: 'Breakfast, Indian Lunch'
      }
    ]
  },
  {
    id: 'second-innings-chardham-11d',
    code: 'SNR-811',
    title: 'Second Innings - Senior Citizens Sacred Char Dham Yatra',
    subtitle: 'Thoughtfully curated for senior travelers: comfortable pace, doctor-on-call, wheelchair assistance, ground-floor hotel rooms, and devoted tour managers.',
    region: 'domestic',
    category: 'Spiritual',
    specialtyType: 'Senior Citizens',
    duration: { days: 11, nights: 10 },
    cities: ['Haridwar', 'Barkot', 'Yamunotri', 'Uttarkashi', 'Gangotri', 'Guptkashi', 'Kedarnath', 'Badrinath'],
    rating: 4.9,
    reviews: 2890,
    price: 29500,
    originalPrice: 34500,
    discountLabel: 'Save ₹5,000 per person',
    featuredBadge: 'Guaranteed Departure',
    image: 'https://images.unsplash.com/photo-1626014303757-646629910d64?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-800 to-slate-950',
    highlights: [
      'Specially designed for senior citizens with relaxed, unhurried daily schedule',
      'Dedicated medical attendant & doctor-on-call throughout the mountain circuit',
      'Assistance with Doli, Palki, or Helicopter booking for Kedarnath & Yamunotri',
      'Attending the sacred Ganga Aarti at Har Ki Pauri, Haridwar',
      'VIP Darshan facilitation at Badrinath and Gangotri shrines',
      'Pure Satvik vegetarian & Jain food cooked with wholesome warmth by Alps team'
    ],
    inclusions: {
      flights: false,
      hotelRating: 'Best Available Deluxe Pilgrimage Hotels with Geysers',
      meals: 'Breakfast, Hot Satvik Lunch & Dinner, Herbal Teas',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'snr-d1', date: '2026-05-18', formatted: '18 May 2026', month: 'May 2026', seatsLeft: 4, status: 'Last 4 Seats', hub: 'Delhi' },
      { id: 'snr-d2', date: '2026-06-02', formatted: '02 Jun 2026', month: 'June 2026', seatsLeft: 9, status: 'Filling Fast', hub: 'Delhi' },
      { id: 'snr-d3', date: '2026-09-12', formatted: '12 Sep 2026', month: 'Sep 2026', seatsLeft: 14, status: 'Available', hub: 'Haridwar' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Haridwar - The Gateway of the Gods',
        route: 'Delhi -> Haridwar',
        activities: ['Assemble in Delhi and AC coach transfer to sacred city of Haridwar', 'Check in to riverside hotel and rest', 'Evening witness the soulful Ganga Aarti with thousands of floating earthen lamps at Har Ki Pauri'],
        stay: 'Radisson Blu Haridwar or similar',
        meals: 'Welcome Lunch, Satvik Dinner'
      },
      {
        day: 2,
        title: 'Haridwar to Barkot via Mussoorie',
        route: 'Haridwar -> Mussoorie -> Barkot',
        activities: ['Scenic drive past Mussoorie and Kempty Falls into Yamuna Valley', 'Arrival in Barkot with panoramic views of Bandarpoonch mountain peak', 'Gentle acclimatization and health check by tour doctor'],
        stay: 'Camp Nirvana Barkot or GMVN Tourist Bungalow',
        meals: 'Breakfast, Hot Lunch, Satvik Dinner'
      },
      {
        day: 3,
        title: 'Yamunotri Dham Darshan',
        route: 'Barkot -> Janki Chatti -> Yamunotri -> Barkot',
        activities: ['Drive to Janki Chatti, journey to sacred Yamunotri temple via Palki / Pony / Trek', 'Cook rice in the natural hot sulphur spring of Surya Kund as Prasad', 'Offer heartfelt prayers at Yamuna Devi Shrine and return to Barkot'],
        stay: 'Camp Nirvana Barkot',
        meals: 'Breakfast, Packaged Lunch, Hot Satvik Dinner'
      },
      {
        day: 4,
        title: 'Barkot to Uttarkashi & Kashi Vishwanath Temple',
        route: 'Barkot -> Uttarkashi',
        activities: ['Picturesque drive along Bhagirathi River', 'Check into hotel and evening visit to historic 12th-century Kashi Vishwanath Temple and Shakti Temple with ancient brass spear'],
        stay: 'Hotel Great Ganga Uttarkashi',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 5,
        title: 'Gangotri Dham Darshan',
        route: 'Uttarkashi -> Harsil -> Gangotri -> Uttarkashi',
        activities: ['Drive through the heavenly pine valley of Harsil', 'Holy dip in Bhagirathi river and Darshan at Gangotri temple where Goddess Ganga descended to earth', 'Special Bhagirath Shila prayer and return to Uttarkashi'],
        stay: 'Hotel Great Ganga Uttarkashi',
        meals: 'Breakfast, Hot Satvik Lunch, Indian Dinner'
      },
      {
        day: 6,
        title: 'Uttarkashi to Guptkashi / Phata',
        route: 'Uttarkashi -> Guptkashi',
        activities: ['Scenic drive past Mandakini river and Tehri Dam reservoir', 'Arrival in Guptkashi, briefing for Kedarnath Darshan by Tour Escort'],
        stay: 'Kedar River Retreat, Guptkashi',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 7,
        title: 'Kedarnath Dham Darshan',
        route: 'Guptkashi -> Sonprayag -> Kedarnath',
        activities: ['Helicopter shuttle / Palki ride to Kedarnath shrine at 11,755 ft surrounded by snow peaks', 'Soul-stirring Darshan at Lord Shiva’s Jyotirlinga, one of the 12 holiest shrines in Hinduism', 'Attend the divine evening Aarti at Kedarnath'],
        stay: 'GMVN Kedarnath / Guest House or return hotel',
        meals: 'Breakfast, Hot Prasad Lunch, Satvik Dinner'
      },
      {
        day: 8,
        title: 'Kedarnath to Badrinath via Chopta & Joshimath',
        route: 'Guptkashi -> Joshimath -> Badrinath',
        activities: ['Drive past scenic Chopta meadow (Switzerland of India) and ancient Shankaracharya Math at Joshimath', 'Arrive at holy Badrinath Dham along Alaknanda River'],
        stay: 'Hotel Snow Crest or Sarovar Portico, Badrinath',
        meals: 'Breakfast, Hot Lunch, Satvik Dinner'
      },
      {
        day: 9,
        title: 'Badrinath Darshan & Mana Village (Last Indian Village)',
        route: 'Badrinath -> Mana -> Rudraprayag',
        activities: ['Sacred bath at Tapt Kund natural hot springs followed by VIP morning Darshan of Badri Vishal', 'Visit Mana Village, Vyas Gufa where Mahabharata was penned, and Saraswati River Origin (Bhim Pul)', 'Drive down to Rudraprayag, confluence of Alaknanda and Mandakini rivers'],
        stay: 'Monal Resort Rudraprayag',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 10,
        title: 'Rudraprayag to Rishikesh & Devprayag Confluence',
        route: 'Rudraprayag -> Devprayag -> Rishikesh',
        activities: ['Stop at holy Devprayag where Bhagirathi and Alaknanda join to form the holy River Ganga', 'Arrive in spiritual yoga capital Rishikesh: visit Ram Jhula, Laxman Jhula and Swarg Ashram', 'Special certificate of completion and felicitation for all senior Yatris'],
        stay: 'Aloha On The Ganges or Divine Resort Rishikesh',
        meals: 'Breakfast, Indian Lunch, Celebration Dinner'
      },
      {
        day: 11,
        title: 'Rishikesh to Delhi & Farewell',
        route: 'Rishikesh -> Delhi Airport / Station',
        activities: ['Morning meditation by the holy Ganga', 'Comfortable AC coach drive back to Delhi', 'Arrive in Delhi by evening with the supreme blessings of Char Dham fulfilled'],
        stay: 'Home',
        meals: 'Breakfast, Lunch'
      }
    ]
  },
  {
    id: 'marigold-thailand-6d',
    code: 'MGD-906',
    title: 'Marigold Economy Thailand Discovery',
    subtitle: 'Alps super-value Marigold brand: Top-tier escorted comfort at unbeatable prices! Coral Island speedboat, Alcazar Show, Safari World, and Bangkok temples.',
    region: 'international',
    category: 'Asia',
    specialtyType: 'Marigold Economy',
    duration: { days: 6, nights: 5 },
    cities: ['Bangkok', 'Pattaya', 'Coral Island'],
    rating: 4.7,
    reviews: 6420,
    price: 42500,
    originalPrice: 49900,
    discountLabel: 'Save ₹7,400 per person',
    featuredBadge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-600 to-indigo-900',
    highlights: [
      'Speedboat ride to pristine Coral Island (Koh Larn) with water sports options',
      'VIP seats at world-renowned Alcazar Cabaret Show in Pattaya',
      'Safari World & Marine Park with live dolphin, sea lion & stunt shows',
      'Bangkok City tour with Golden Buddha and Marble Temple (Wat Benchamabophit)',
      'Chao Phraya Princess luxury dinner cruise with live singing & Indian banquet',
      'Alps tour manager escorting the group from start to finish'
    ],
    inclusions: {
      flights: true,
      hotelRating: 'Comfortable 3-Star Superior Hotels',
      meals: 'Breakfast, Daily Indian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'mgd-d1', date: '2026-05-09', formatted: '09 May 2026', month: 'May 2026', seatsLeft: 8, status: 'Filling Fast', hub: 'Mumbai' },
      { id: 'mgd-d2', date: '2026-05-23', formatted: '23 May 2026', month: 'May 2026', seatsLeft: 4, status: 'Last 4 Seats', hub: 'Delhi' },
      { id: 'mgd-d3', date: '2026-06-13', formatted: '13 Jun 2026', month: 'June 2026', seatsLeft: 18, status: 'Available', hub: 'Kolkata' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok & Transfer to Pattaya',
        route: 'Bangkok Suvarnabhumi -> Pattaya',
        activities: ['Arrive in Bangkok, warm meet & greet by Alps team', 'Scenic expressway drive to beach city Pattaya', 'Evening VIP tickets to glamorous Alcazar Cabaret Show with international dance and music'],
        stay: 'A-One Star Hotel or Golden Beach Pattaya',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Coral Island Speedboat & Water Sports',
        route: 'Pattaya -> Koh Larn Coral Island -> Pattaya',
        activities: ['Speedboat ride across turquoise waters to Coral Island', 'Relax on white sandy beach or try parasailing, underwater sea walk, and banana boat ride', 'Indian lunch in Pattaya followed by Gems Gallery train tour'],
        stay: 'A-One Star Hotel Pattaya',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Nong Nooch Botanical Garden & Transfer to Bangkok',
        route: 'Pattaya -> Nong Nooch -> Bangkok',
        activities: ['Visit 500-acre Nong Nooch Tropical Garden with Thai cultural show and elephant talent show', 'Drive to capital Bangkok and check into hotel', 'Evening free for street market shopping at Pratunam and Indra Square'],
        stay: 'Ambassador Hotel Bangkok or Season Siam',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 4,
        title: 'Safari World & Marine Park Full Day Fun',
        route: 'Bangkok City -> Safari World',
        activities: ['Drive through open Safari Park seeing lions, tigers, zebras, and giraffes in open habitat', 'Witness spectacular Dolphin Show, Sea Lion Show, and Hollywood Cowboy Stunt Show in Marine Park', 'Grand Chao Phraya River Dinner Cruise with live band and illuminated temple views'],
        stay: 'Ambassador Hotel Bangkok',
        meals: 'Breakfast, Indian Buffet Lunch at Safari World, Cruise Dinner'
      },
      {
        day: 5,
        title: 'Bangkok Temples & Shopping Galore',
        route: 'Bangkok Temple Circuit',
        activities: ['Visit Wat Traimit housing 5.5-tonne solid gold Buddha and Wat Benchamabophit (Marble Temple)', 'Shopping excursion to MBK Centre or Platinum Fashion Mall', 'Farewell dinner celebration with tour group'],
        stay: 'Ambassador Hotel Bangkok',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 6,
        title: 'Departure to India',
        route: 'Bangkok Hotel -> Airport -> Home',
        activities: ['Checkout and transfer to Bangkok Airport for flight back to India with bag full of souvenirs and memories'],
        stay: 'Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'japan-cherry-blossom-10d',
    code: 'JPN-610',
    title: 'Japan Cherry Blossom & Golden Route',
    subtitle: 'From ultra-futuristic Tokyo to ancient Kyoto shrines, bullet train Shinkansen at 320 km/h, Mt. Fuji 5th station, and Nara deer park.',
    region: 'international',
    category: 'Asia',
    specialtyType: 'General Escorted',
    duration: { days: 10, nights: 9 },
    cities: ['Tokyo', 'Mt. Fuji', 'Hakone', 'Kyoto', 'Nara', 'Osaka', 'Hiroshima'],
    rating: 4.9,
    reviews: 1420,
    price: 288000,
    originalPrice: 315000,
    discountLabel: 'Save ₹27,000 per person',
    featuredBadge: 'Trending',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-pink-800 to-indigo-950',
    highlights: [
      'Ride the high-speed Shinkansen Bullet Train across Japan’s countryside',
      'Drive up to Mt. Fuji 5th Station (2,305m) & cruise on Lake Ashi, Hakone',
      'Historic Kyoto: Kinkaku-ji (Golden Pavilion) & thousands of red torii gates at Fushimi Inari',
      'Meet gentle sacred bowing deer in Nara Deer Park & visit Todai-ji giant Buddha',
      'Tokyo Skytree 350m observation deck, Asakusa Senso-ji temple & Shibuya crossing',
      'Pure Indian meals specially arranged by Alps catering partner in Japan'
    ],
    inclusions: {
      flights: true,
      hotelRating: '4-Star City Central Hotels',
      meals: 'Breakfast, Daily Indian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: true
    },
    departureDates: [
      { id: 'jpn-d1', date: '2026-05-16', formatted: '16 May 2026', month: 'May 2026', seatsLeft: 4, status: 'Last 4 Seats', hub: 'Mumbai' },
      { id: 'jpn-d2', date: '2026-06-06', formatted: '06 Jun 2026', month: 'June 2026', seatsLeft: 8, status: 'Filling Fast', hub: 'Delhi' }
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Tokyo - City of Tomorrow',
        route: 'Departure Hub -> Tokyo Narita / Haneda',
        activities: ['Arrive in Tokyo, warm greeting by Alps Tour Manager', 'Transfer to hotel and relax', 'Evening visit to bustling Odaiba waterfront and Rainbow Bridge'],
        stay: 'Hotel Metropolitan Tokyo or Grand Nikko Tokyo',
        meals: 'Indian Dinner'
      },
      {
        day: 2,
        title: 'Tokyo Skytree, Senso-ji & Shibuya Crossing',
        route: 'Tokyo Metropolis Sightseeing',
        activities: ['Ascend Tokyo Skytree (350m) for breathtaking panoramic city views', 'Visit Asakusa Senso-ji, Tokyo’s oldest and most revered Buddhist temple', 'Walk across the world’s busiest pedestrian crossing at Shibuya and photo with Hachiko statue'],
        stay: 'Hotel Metropolitan Tokyo',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 3,
        title: 'Majestic Mt. Fuji & Lake Ashi Pirate Cruise',
        route: 'Tokyo -> Mt. Fuji -> Hakone',
        activities: ['Drive up to Mt. Fuji 5th Station at 2,305 meters elevation (weather permitting)', 'Hakone Pirate Ship cruise on crater Lake Ashi with views of Mt. Fuji', 'Ride the Hakone Ropeway over volcanic sulfur vents of Owakudani Valley'],
        stay: 'Hakone Hotel Kowaki-en or similar',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 4,
        title: 'Shinkansen Bullet Train to Ancient Kyoto',
        route: 'Hakone -> Shinkansen -> Kyoto',
        activities: ['Experience the thrilling 320 km/h Shinkansen Bullet Train ride to Kyoto', 'Visit Kinkaku-ji (The Golden Pavilion) glittering above its reflecting pond', 'Stroll through Arashiyama Bamboo Grove and Togetsukyo Bridge'],
        stay: 'Kyoto Tokyu Hotel or Keihan Kyoto Grande',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 5,
        title: 'Fushimi Inari Torii Shrine & Nara Deer Park',
        route: 'Kyoto -> Nara -> Osaka',
        activities: ['Walk beneath thousands of vermilion Torii gates at Fushimi Inari Taisha', 'Visit Nara Deer Park where hundreds of gentle deer bow for rice crackers', 'Marvel at colossal bronze Daibutsu (Great Buddha) inside wooden Todai-ji Temple, drive to Osaka'],
        stay: 'Hotel Granvia Osaka or Swissotel Nankai',
        meals: 'Breakfast, Indian Lunch, Indian Dinner'
      },
      {
        day: 6,
        title: 'Osaka Castle & Dotonbori Neon Promenade',
        route: 'Osaka City Circuit',
        activities: ['Photo stop at imposing Osaka Castle and its historic stone ramparts', 'Explore vibrant Dotonbori entertainment district with giant Glico Man sign', 'Farewell gala dinner celebrating Japanese hospitality with Indian flavors'],
        stay: 'Hotel Granvia Osaka',
        meals: 'Breakfast, Indian Lunch, Farewell Indian Dinner'
      },
      {
        day: 7,
        title: 'Departure from Osaka Kansai Airport',
        route: 'Osaka -> Kansai Airport -> Flight Home',
        activities: ['Morning checkout and transfer to Kansai International Airport', 'Fly home with memories of Zen temples, bullet trains and cherry blossoms'],
        stay: 'Home',
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: 'golden-triangle-6d',
    code: 'IND-301',
    title: 'Golden Triangle Explorer - Delhi, Agra & Jaipur',
    subtitle: 'Discover India\'s iconic heritage triangle with Taj Mahal sunrise, Jaipur Pink City palaces, and Delhi Mughal monuments.',
    region: 'domestic',
    category: 'Spiritual',
    specialtyType: 'General Escorted',
    duration: { days: 6, nights: 5 },
    cities: ['New Delhi', 'Agra', 'Jaipur'],
    rating: 4.8,
    reviews: 5120,
    price: 23500,
    originalPrice: 28000,
    discountLabel: 'Save ₹4,500 per person',
    featuredBadge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-800 to-rose-950',
    highlights: [
      'Sunrise view of world wonder Taj Mahal in Agra with expert guide',
      'Explore majestic Amber Fort in Jaipur with Jeep ride to hill ramparts',
      'Photo stop at Hawa Mahal and tour of City Palace museum',
      'Qutub Minar, India Gate, and Jama Masjid sightseeing in Delhi',
      'Pure vegetarian & Jain meals prepared fresh by our dedicated team'
    ],
    inclusions: {
      flights: false,
      hotelRating: '4-Star Heritage & Deluxe Hotels',
      meals: 'Breakfast, Indian Vegetarian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: false
    },
    departureDates: [
      { id: 'dt-gt-1', date: '2026-05-10', formatted: '10 May 2026', month: 'May 2026', seatsLeft: 8, status: 'Filling Fast', hub: 'Mumbai / Delhi' },
      { id: 'dt-gt-2', date: '2026-06-12', formatted: '12 Jun 2026', month: 'Jun 2026', seatsLeft: 12, status: 'Available', hub: 'Pune / Mumbai' },
      { id: 'dt-gt-3', date: '2026-07-15', formatted: '15 Jul 2026', month: 'Jul 2026', seatsLeft: 6, status: 'Available', hub: 'Bengaluru / Delhi' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi & City Sightseeing', route: 'Delhi Airport -> Hotel', activities: ['Arrive in Delhi, check in to hotel', 'Visit India Gate and drive past Rashtrapati Bhavan'], stay: 'Pride Plaza Delhi or similar', meals: 'Dinner' },
      { day: 2, title: 'Delhi to Agra Taj Mahal', route: 'Delhi -> Agra (230 km)', activities: ['Drive via Yamuna Expressway to Agra', 'Sunset visit to Mehtab Bagh overlooking Taj Mahal'], stay: 'Taj View Agra or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Agra to Jaipur via Fatehpur Sikri', route: 'Agra -> Fatehpur Sikri -> Jaipur (240 km)', activities: ['Sunrise visit to Taj Mahal and Agra Fort', 'Stop at UNESCO site Fatehpur Sikri'], stay: 'Clarks Amer Jaipur or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Jaipur Sightseeing - Pink City', route: 'Jaipur City Tour', activities: ['Elephant or Jeep ride at Amber Fort', 'Photo stop at Jal Mahal and Hawa Mahal'], stay: 'Clarks Amer Jaipur or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Jaipur to Delhi Shopping', route: 'Jaipur -> Delhi', activities: ['Morning shopping in Johri Bazaar', 'Drive back to Delhi for farewell dinner'], stay: 'Pride Plaza Delhi or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Departure from Delhi', route: 'Delhi -> Home', activities: ['Breakfast and transfer to Delhi airport or railway station'], stay: 'Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'shimla-manali-7d',
    code: 'IND-302',
    title: 'Scenic Himachal - Shimla & Manali Mountain Holiday',
    subtitle: 'Breathtaking snow peaks, pine forests, Rohtang Pass / Atal Tunnel snow valley, and Mall Road strolls.',
    region: 'domestic',
    category: 'Himalayas',
    specialtyType: 'General Escorted',
    duration: { days: 7, nights: 6 },
    cities: ['Chandigarh', 'Shimla', 'Kullu', 'Manali'],
    rating: 4.9,
    reviews: 3840,
    price: 26900,
    originalPrice: 31500,
    discountLabel: 'Save ₹4,600 per person',
    featuredBadge: 'Guaranteed Departure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-sky-800 to-emerald-950',
    highlights: [
      'Stroll on historic Mall Road & Ridge in Shimla with Christ Church views',
      'Excursion to Kufri snow valley & Himalayan nature park',
      'Drive through Atal Tunnel to Sissu waterfall & Lahaul valley snow views',
      'Solang Valley adventure sports and ropeway cable car ride',
      'Pure veg & Jain meals cooked fresh by our traveling catering team'
    ],
    inclusions: {
      flights: false,
      hotelRating: '3/4 Star Mountain View Resorts',
      meals: 'Breakfast, Indian Vegetarian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: false
    },
    departureDates: [
      { id: 'dt-hm-1', date: '2026-05-14', formatted: '14 May 2026', month: 'May 2026', seatsLeft: 10, status: 'Filling Fast', hub: 'Delhi / Chandigarh' },
      { id: 'dt-hm-2', date: '2026-06-18', formatted: '18 Jun 2026', month: 'Jun 2026', seatsLeft: 14, status: 'Available', hub: 'Mumbai / Delhi' }
    ],
    itinerary: [
      { day: 1, title: 'Chandigarh to Shimla', route: 'Chandigarh -> Shimla (120 km)', activities: ['Arrive Chandigarh airport, drive to Shimla', 'Evening stroll on Mall Road'], stay: 'Combermere Shimla or similar', meals: 'Dinner' },
      { day: 2, title: 'Shimla & Kufri Excursion', route: 'Shimla -> Kufri -> Shimla', activities: ['Visit Kufri winter sports capital', 'See Jakhoo Temple Hanuman statue'], stay: 'Combermere Shimla or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Shimla to Manali via Kullu Valley', route: 'Shimla -> Kullu -> Manali (250 km)', activities: ['Scenic drive along Sutlej and Beas rivers', 'Kullu shawl factory visit'], stay: 'Larisa Resort Manali or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Manali - Solang Valley & Atal Tunnel', route: 'Manali -> Atal Tunnel -> Sissu', activities: ['Drive through Atal Tunnel to Sissu waterfall', 'Solang Valley paragliding & zorbing'], stay: 'Larisa Resort Manali or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Manali Local Sightseeing', route: 'Manali Town Tour', activities: ['Visit Hadimba Devi wooden temple', 'Vashisht hot water sulphur springs and Tibetan monastery'], stay: 'Larisa Resort Manali or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Manali Leisure & Shopping', route: 'Manali Mall Road', activities: ['Day free for local shopping on Manali Mall Road', 'Special farewell dinner'], stay: 'Larisa Resort Manali or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 7, title: 'Departure to Chandigarh', route: 'Manali -> Chandigarh Airport', activities: ['Morning checkout and drive back to Chandigarh for return flight'], stay: 'Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'goa-sun-sand-5d',
    code: 'IND-303',
    title: 'Goa Sun, Sand & Heritage Coastal Escape',
    subtitle: 'Relaxing golden beaches of North & South Goa, Portuguese colonial churches, Mandovi river cruise, and Goan seafood / veg feasts.',
    region: 'domestic',
    category: 'South India',
    specialtyType: 'General Escorted',
    duration: { days: 5, nights: 4 },
    cities: ['Goa', 'Panaji', 'Calangute', 'Colva'],
    rating: 4.8,
    reviews: 4230,
    price: 19500,
    originalPrice: 23500,
    discountLabel: 'Save ₹4,000 per person',
    featuredBadge: 'Trending',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-cyan-800 to-blue-950',
    highlights: [
      'Stay at premium beach resort near Calangute / Baga beach',
      'Sunset cruise on Mandovi river with Goan folk music and dance',
      'Explore UNESCO heritage Basilica of Bom Jesus and Se Cathedral in Old Goa',
      'Dolphin spotting boat trip & Aguada Fort panoramic lighthouse views',
      'Pure vegetarian & Jain dining options with authentic coastal flavors'
    ],
    inclusions: {
      flights: false,
      hotelRating: '4-Star Beachfront Resort',
      meals: 'Breakfast, Indian Vegetarian & Continental Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: false
    },
    departureDates: [
      { id: 'dt-goa-1', date: '2026-05-05', formatted: '05 May 2026', month: 'May 2026', seatsLeft: 15, status: 'Available', hub: 'Mumbai / Pune' },
      { id: 'dt-goa-2', date: '2026-06-10', formatted: '10 Jun 2026', month: 'Jun 2026', seatsLeft: 10, status: 'Available', hub: 'Bengaluru / Mumbai' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Goa & Beach Sunset', route: 'Goa Airport -> Beach Resort', activities: ['Arrive Goa airport, transfer to resort', 'Welcome drink and evening relaxation at Calangute beach'], stay: 'Novotel Goa Resort or similar', meals: 'Dinner' },
      { day: 2, title: 'North Goa Beaches & Aguada Fort', route: 'Calangute -> Vagator -> Anjuna', activities: ['Visit historic Fort Aguada lighthouse', 'Explore Vagator beach and Chapora fort view'], stay: 'Novotel Goa Resort or similar', meals: 'Breakfast, Dinner' },
      { day: 3, title: 'Old Goa Churches & Mandovi Cruise', route: 'Panaji Heritage Tour', activities: ['Visit Basilica of Bom Jesus and St. Augustine tower', 'Evening Mandovi River sunset cruise with music'], stay: 'Novotel Goa Resort or similar', meals: 'Breakfast, Dinner' },
      { day: 4, title: 'South Goa White Sands & Spice Farm', route: 'Colva -> Ponda Spice Plantation', activities: ['Visit tropical spice plantation with traditional Goan organic lunch', 'Relax at pristine Colva beach'], stay: 'Novotel Goa Resort or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Departure from Goa', route: 'Goa -> Airport -> Home', activities: ['Breakfast and transfer to Goa airport for return flight'], stay: 'Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'ooty-kodai-6d',
    code: 'IND-304',
    title: 'Nilgiri Hills - Ooty & Kodaikanal Queen of Hill Stations',
    subtitle: 'Misty eucalyptus forests, Botanical Gardens, Nilgiri Mountain Toy Train ride, and serene Kodaikanal star-shaped lake.',
    region: 'domestic',
    category: 'South India',
    specialtyType: 'General Escorted',
    duration: { days: 6, nights: 5 },
    cities: ['Coimbatore', 'Ooty', 'Coonoor', 'Kodaikanal'],
    rating: 4.9,
    reviews: 2980,
    price: 22900,
    originalPrice: 27000,
    discountLabel: 'Save ₹4,100 per person',
    featuredBadge: 'Early Bird Offer',
    image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-emerald-900 to-teal-950',
    highlights: [
      'Memorable Nilgiri Mountain Toy Train ride (UNESCO World Heritage)',
      'Ooty Botanical Gardens, Rose Garden & Ooty Lake boat ride',
      'Coonoor Sims Park & Dolphin\'s Nose viewpoint overlooking valleys',
      'Kodaikanal star-shaped lake boating, Coaker\'s Walk & Pillar Rocks',
      'Pure South Indian vegetarian & Jain meals throughout'
    ],
    inclusions: {
      flights: false,
      hotelRating: '3/4 Star Hill Resort',
      meals: 'Breakfast, South Indian Vegetarian Lunch & Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: false
    },
    departureDates: [
      { id: 'dt-ooty-1', date: '2026-05-20', formatted: '20 May 2026', month: 'May 2026', seatsLeft: 10, status: 'Filling Fast', hub: 'Bengaluru / Chennai' },
      { id: 'dt-ooty-2', date: '2026-06-15', formatted: '15 Jun 2026', month: 'Jun 2026', seatsLeft: 12, status: 'Available', hub: 'Mumbai / Coimbatore' }
    ],
    itinerary: [
      { day: 1, title: 'Coimbatore to Ooty Hill Station', route: 'Coimbatore -> Ooty (85 km)', activities: ['Arrive Coimbatore, scenic ghat road drive to Ooty', 'Evening check-in and cool mountain breeze walk'], stay: 'Sterling Ooty Fern Hill or similar', meals: 'Dinner' },
      { day: 2, title: 'Ooty Sightseeing & Botanical Gardens', route: 'Ooty Town Tour', activities: ['Visit Government Botanical Garden and Ooty Rose Garden', 'Boating at Ooty Lake'], stay: 'Sterling Ooty Fern Hill or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 3, title: 'Nilgiri Toy Train & Coonoor Excursion', route: 'Ooty -> Coonoor -> Ooty', activities: ['Enjoy heritage Nilgiri Mountain Railway Toy Train ride', 'Visit Coonoor Sims Park and Dolphin’s Nose'], stay: 'Sterling Ooty Fern Hill or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 4, title: 'Ooty to Kodaikanal Transfer', route: 'Ooty -> Kodaikanal (250 km)', activities: ['Scenic drive across Western Ghats through Palani hills', 'Evening arrival in Kodaikanal'], stay: 'Sterling Kodai Lake or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 5, title: 'Kodaikanal Princess of Hill Stations', route: 'Kodaikanal Sightseeing', activities: ['Walk along Coaker\'s Walk and visit Pillar Rocks', 'Boat ride at Kodaikanal star-shaped lake and Bryant Park'], stay: 'Sterling Kodai Lake or similar', meals: 'Breakfast, Lunch, Dinner' },
      { day: 6, title: 'Departure to Coimbatore', route: 'Kodaikanal -> Coimbatore Airport', activities: ['Morning checkout and drive back to Coimbatore for return journey'], stay: 'Home', meals: 'Breakfast' }
    ]
  },
  {
    id: 'varanasi-ayodhya-5d',
    code: 'IND-305',
    title: 'Varanasi & Ayodhya Divine Spiritual Yatra',
    subtitle: 'Sacred Ganga Aarti at Dashashwamedh Ghat, Sarnath Buddhist site, and grand Ram Mandir Darshan in Ayodhya.',
    region: 'domestic',
    category: 'Spiritual',
    specialtyType: 'General Escorted',
    duration: { days: 5, nights: 4 },
    cities: ['Varanasi', 'Sarnath', 'Ayodhya'],
    rating: 4.9,
    reviews: 4610,
    price: 17900,
    originalPrice: 21500,
    discountLabel: 'Save ₹3,600 per person',
    featuredBadge: 'Guaranteed Departure',
    image: 'https://images.unsplash.com/photo-1561359313-0639aad49ff6?auto=format&fit=crop&w=1200&q=80',
    bgFallback: 'from-amber-900 to-stone-950',
    highlights: [
      'Morning sunrise boat ride on holy River Ganges visiting ancient Ghats',
      'Witness grand evening Ganga Aarti at Dashashwamedh Ghat from reserved boat',
      'Kashi Vishwanath Corridor VIP Darshan and temple tour',
      'Visit newly consecrated grand Ram Mandir and Hanuman Garhi in Ayodhya',
      'Excursion to Sarnath where Buddha gave his first sermon'
    ],
    inclusions: {
      flights: false,
      hotelRating: '3/4 Star Heritage & Pilgrimage Hotels',
      meals: 'Breakfast, Pure Satvik Vegetarian & Jain Dinner',
      tourManager: true,
      transfers: true,
      visasInsurance: false
    },
    departureDates: [
      { id: 'dt-var-1', date: '2026-05-12', formatted: '12 May 2026', month: 'May 2026', seatsLeft: 12, status: 'Available', hub: 'Mumbai / Delhi' },
      { id: 'dt-var-2', date: '2026-06-08', formatted: '08 Jun 2026', month: 'Jun 2026', seatsLeft: 10, status: 'Filling Fast', hub: 'Varanasi / Lucknow' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Varanasi & Evening Ganga Aarti', route: 'Varanasi Airport -> Ghats', activities: ['Arrive Varanasi, check in to hotel', 'Reserved boat ride on Ganges to witness grand Dashashwamedh Ghat Ganga Aarti'], stay: 'Riviera Palace Varanasi or similar', meals: 'Dinner' },
      { day: 2, title: 'Kashi Vishwanath Darshan & Sarnath', route: 'Varanasi -> Sarnath', activities: ['Early morning sunrise boat ride and Kashi Vishwanath Corridor Darshan', 'Visit Sarnath deer park, museum and Dhamek stupa'], stay: 'Riviera Palace Varanasi or similar', meals: 'Breakfast, Dinner' },
      { day: 3, title: 'Varanasi to Ayodhya', route: 'Varanasi -> Ayodhya (200 km)', activities: ['Morning drive to sacred city of Ayodhya', 'Visit Kanak Bhawan and evening Saryu river Aarti'], stay: 'Abhay Residency Ayodhya or similar', meals: 'Breakfast, Dinner' },
      { day: 4, title: 'Ayodhya Ram Mandir Darshan', route: 'Ayodhya Sightseeing', activities: ['VIP Darshan at grand Ram Janmabhoomi Mandir', 'Visit Hanuman Garhi and Lata Mangeshkar Chowk'], stay: 'Abhay Residency Ayodhya or similar', meals: 'Breakfast, Dinner' },
      { day: 5, title: 'Departure from Varanasi', route: 'Ayodhya -> Varanasi Airport', activities: ['Morning checkout and transfer to Varanasi airport for return flight'], stay: 'Home', meals: 'Breakfast' }
    ]
  }
];

export const TRUST_STATS = [
  { label: 'Years of Travel Trust', value: '40+', icon: 'ShieldCheck' },
  { label: 'Delighted Tour Guests', value: '15 Lakh+', icon: 'Users' },
  { label: 'Destinations Worldwide', value: '180+', icon: 'Globe' },
  { label: 'Guaranteed Escorted Departures', value: '100%', icon: 'Award' }
];

export const BRANCH_OFFICES = [
  { city: 'Mumbai (Head Office)', address: '314, L.J. Road, Mahim (W), Mumbai 400016', phone: '022 6664 0000', timing: '9:30 AM - 7:00 PM' },
  { city: 'Pune', address: 'ALPS HOUSE, 252, Sadashiv Peth, Kumthekar Road, Pune 411030', phone: '020 6722 0000', timing: '9:30 AM - 7:00 PM' },
  { city: 'Thane', address: 'Ground Floor, Paradise Tower, Gokhale Road, Naupada, Thane (W)', phone: '022 2544 5555', timing: '10:00 AM - 7:00 PM' },
  { city: 'Delhi NCR', address: 'Barakhamba Road, Connaught Place, New Delhi 110001', phone: '011 4355 6000', timing: '9:30 AM - 6:30 PM' },
  { city: 'Ahmedabad', address: 'Mithakhali Six Roads, Navrangpura, Ahmedabad 380009', phone: '079 4004 8000', timing: '9:30 AM - 7:00 PM' },
  { city: 'Bengaluru', address: 'MG Road, Off Brigade Road, Bengaluru 560001', phone: '080 4123 7000', timing: '10:00 AM - 7:00 PM' }
];

export const GUEST_TESTIMONIALS = [
  {
    name: 'Dr. Ramesh & Sunita Kulkarni',
    city: 'Pune',
    tour: 'Glimpse of Europe with Swiss & Paris',
    rating: 5,
    date: 'April 2026',
    feedback: 'Our first Europe tour was an absolute dream thanks to Alps Hotels and Travels! Having an Indian Maharaj cook fresh, piping-hot Gujarati and Maharashtrian dishes in the middle of Switzerland was unbelievable. Our Tour Manager Amit Joshi took care of everyone like family.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Ananya & Shrikant Deshmukh',
    city: 'Mumbai',
    tour: 'Grand Tour of Kashmir Paradise',
    rating: 5,
    date: 'March 2026',
    feedback: 'Alps Hotels and Travels hospitality in Kashmir was top notch! The Shikara ride, the stay in the luxury Dal Lake Houseboat, and the Gulmarg Gondola tickets were all pre-arranged seamlessly with zero queues. Truly 100% stress-free travel.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Sadhana Patwardhan & Friends',
    city: 'Nagpur',
    tour: 'My Fair Lady Europe Special',
    rating: 5,
    date: 'February 2026',
    feedback: 'As an all-women group of friends, we felt so empowered, safe, and pampered! The DJ night in Switzerland and the photoshoot at the Eiffel Tower are memories we will cherish for our whole lives. Three cheers to Alps Hotels and Travels!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  }
];
