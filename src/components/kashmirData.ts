export interface Stop { title: string; text: string }
export interface Day { day: number; title: string; intro: string; stops: Stop[]; meal: string }

export const ROUTE = ['Srinagar', 'Sonmarg', 'Srinagar', 'Gulmarg', 'Srinagar', 'Pahalgam', 'Srinagar Airport'];

export const STAY = [
  { place: 'Srinagar', nights: 3, note: 'at a 3-star deluxe hotel' },
  { place: 'Pahalgam', nights: 1, note: 'at a 3-star deluxe hotel' },
  { place: 'Srinagar', nights: 1, note: 'at a 3-star deluxe hotel' },
];

export const ROUTE_NOTES = [
  'This itinerary is arranged for a group of 22 passengers travelling together in a 27-seater bus, with 11 rooms as requested.',
  'Sightseeing order and road timings may be adjusted according to weather, traffic and local administration instructions.',
];

export const DAYS: Day[] = [
  {
    day: 1,
    title: 'Arrival in Srinagar & Local Sightseeing',
    intro: 'Arrival at Srinagar Airport. Meet the local tour representative and receive a traditional Kashmiri welcome shawl. Board the 27-seater bus and proceed for the planned Srinagar sightseeing, subject to arrival time.',
    stops: [
      { title: 'Dal Lake', text: 'Begin with the famous Dal Lake, one of Srinagar’s best-known landmarks. Enjoy views of the houseboats, floating gardens, traditional wooden boats and the surrounding Zabarwan hills.' },
      { title: 'Mughal Gardens – Nishat Bagh', text: 'Visit Nishat Bagh, the Garden of Bliss, known for its terraced lawns, fountains, water channels and beautiful views of Dal Lake.' },
      { title: 'Shalimar Bagh', text: 'Explore Shalimar Bagh, a historic Mughal garden with landscaped terraces, chinar trees and traditional garden architecture.' },
      { title: 'Shikara Ride', text: 'Enjoy the included Shikara ride on Dal Lake. Glide through calm waters and take in views of houseboats, lakeside life and the mountain backdrop. The ride is subject to weather and lake conditions.' },
      { title: 'Local market / Boulevard Road', text: 'If time permits, enjoy a short visit to the Dal Lake Boulevard area for a walk, photographs and browsing local Kashmiri handicrafts.' },
    ],
    meal: 'Overnight stay in Srinagar hotel. Dinner at the hotel.',
  },
  {
    day: 2,
    title: 'Sonmarg Day Excursion',
    intro: 'After breakfast, depart for Sonmarg, popularly known as the Meadow of Gold. The scenic drive follows the Sindh River and passes through picturesque villages, pine-covered slopes and mountain scenery. Keep the camera ready for views along the route.',
    stops: [
      { title: 'Gagangir', text: 'A scenic settlement on the way to Sonmarg, surrounded by mountain slopes and river views. A brief photo stop may be taken where road conditions allow.' },
      { title: 'Sonmarg Meadow', text: 'Reach Sonmarg and enjoy the open meadow framed by towering snow-clad peaks. Spend time taking photographs and enjoying the mountain atmosphere.' },
      { title: 'Sindh River', text: 'Admire the clear-flowing Sindh River, which accompanies much of the route and adds to the beauty of the valley.' },
      { title: 'Thajiwas Glacier area', text: 'The Thajiwas Glacier area is a popular excursion from Sonmarg. Access commonly involves local pony services or other locally operated arrangements; these are not included unless specifically agreed.' },
      { title: 'Zero Point / higher reaches', text: 'If accessible and permitted, guests may visit higher viewpoints or the Zero Point area using locally authorised vehicles. The Zero Point cab is excluded and depends on road, weather and security conditions.' },
    ],
    meal: 'Return to Srinagar by evening. Dinner and overnight stay at the Srinagar hotel.',
  },
  {
    day: 3,
    title: 'Gulmarg Day Excursion',
    intro: 'After breakfast, drive to Gulmarg, the celebrated Meadow of Flowers and a major mountain resort. The route passes through countryside, pine forests and scenic slopes. On arrival, enjoy the meadow and mountain views.',
    stops: [
      { title: 'Gulmarg Golf Course', text: 'See the famous high-altitude golf course, set among green meadows and surrounded by forested mountains. Access and playing facilities are subject to seasonal operations.' },
      { title: 'St. Mary’s Church', text: 'Visit the charming historic church, known for its distinctive architecture and peaceful setting in the Gulmarg landscape.' },
      { title: 'Maharani Temple', text: 'See the hilltop temple, also known as the Rani Temple, which is a recognisable landmark of Gulmarg.' },
      { title: 'Gulmarg Gondola', text: 'Guests may opt for the Gulmarg Gondola cable car, subject to ticket availability, operating schedule and weather. Gondola tickets are not included and should be booked separately.' },
      { title: 'Snow activities / meadow time', text: 'Enjoy free time for photographs and optional seasonal activities such as snow play, sledging or other locally operated experiences. All activities are optional and payable directly by guests.' },
      { title: 'Drung Waterfall', text: 'If road and weather conditions permit, an optional visit to the Drung Waterfall area may be considered. Local access rules and transport arrangements can change seasonally.' },
    ],
    meal: 'Return to Srinagar in the evening. Dinner and overnight stay at the Srinagar hotel. Gulmarg union cab, if required for local access, is excluded.',
  },
  {
    day: 4,
    title: 'Srinagar to Pahalgam',
    intro: 'After breakfast, check out from the Srinagar hotel and drive towards Pahalgam, the Valley of Shepherds. The journey offers views of countryside, saffron-growing areas, orchards and the Lidder River region. En-route stops depend on timing and traffic.',
    stops: [
      { title: 'Pampore Saffron Fields', text: 'Pass through the Pampore area, famous for saffron cultivation. During the flowering and harvest season, the fields offer a special glimpse of Kashmir’s saffron heritage.' },
      { title: 'Avantipura Ruins', text: 'Visit the historic temple ruins at Avantipura, associated with the ancient Kashmir kingdom and known for their stone architecture. The stop is subject to available time.' },
      { title: 'Apple orchards and countryside', text: 'Enjoy views of orchards and rural landscapes on the way to Pahalgam. Apple picking or orchard entry is not guaranteed and depends on season and owner permission.' },
      { title: 'Lidder River', text: 'On reaching Pahalgam, enjoy the beautiful Lidder River, known for its clear mountain water and scenic riverbank views.' },
      { title: 'Pahalgam town', text: 'Explore the main market and surrounding viewpoints at a relaxed pace. Pahalgam is known for its pine forests, mountain scenery and peaceful atmosphere.' },
    ],
    meal: 'Dinner and overnight stay at the Pahalgam hotel.',
  },
  {
    day: 5,
    title: 'Pahalgam Sightseeing & Return to Srinagar',
    intro: 'After breakfast, check out and explore the popular Pahalgam valley areas. Local sightseeing access is controlled by local unions and may require separate local vehicles. The 27-seater bus may not be permitted on certain internal routes.',
    stops: [
      { title: 'Betaab Valley', text: 'Visit the picturesque valley known for its lush meadows, river views, pine trees and mountain backdrop. It is a popular location for nature walks and photographs.' },
      { title: 'Aru Valley', text: 'Explore the scenic village and valley surrounded by forests and mountain peaks. It is known for its peaceful landscape and access to outdoor experiences.' },
      { title: 'Chandanwari', text: 'Visit the beautiful upper valley area, known as a starting point for the Amarnath Yatra route. Snow and road conditions vary by season.' },
      { title: 'Baisaran viewpoint', text: 'Often called Mini Switzerland, Baisaran is known for its wide green meadow and surrounding pine forests. Access is generally by pony or other locally arranged means and is not included.' },
      { title: 'Pahalgam market', text: 'If time permits, enjoy a short stop in the town market before departing for Srinagar.' },
    ],
    meal: 'Drive back to Srinagar. Check in at the hotel, enjoy dinner and overnight stay in Srinagar. Pahalgam union cab / local sightseeing vehicle and optional activities are excluded.',
  },
  {
    day: 6,
    title: 'Departure from Srinagar',
    intro: 'After breakfast, check out from the hotel. Board the bus and proceed to Srinagar Airport according to the flight schedule. The group representative will assist with departure coordination.',
    stops: [
      { title: 'Airport transfer', text: 'Drop at Srinagar Airport. Please keep sufficient time for the journey and airport security procedures.' },
    ],
    meal: 'Tour concludes with beautiful memories of Kashmir.',
  },
];

export const HOTEL_INTRO =
  'The following properties are the requested hotel options. Final hotel allocation is subject to availability and confirmation at the time of booking. All hotels are proposed in the 3-star deluxe category.';

export const HOTELS = [
  { location: 'Srinagar', options: ['Grand Zamin', 'Twin Towers', 'Grand Alden'], nights: '4 nights' },
  { location: 'Pahalgam', options: ['Highland Heaven', 'Lime Stone', 'Ababeel Heights'], nights: '1 night' },
];

export const HOTEL_DETAILS = [
  { label: 'Rooming', text: '11 rooms for 22 passengers. Room configuration and bed type should be reconfirmed with the hotels before arrival.' },
  { label: 'Meal plan', text: 'Breakfast and dinner (MAP). Lunch is not included.' },
  { label: 'Transport', text: 'One 27-seater bus for the group itinerary and transfers. Local union vehicles may be required for certain sightseeing areas.' },
];

export const INCLUSIONS = [
  'Accommodation for 5 nights in the mentioned / equivalent 3-star deluxe hotels.',
  '11 rooms for 22 passengers, subject to final rooming confirmation.',
  'Daily breakfast and dinner at the hotels (MAP plan).',
  'Transportation by 27-seater bus as per the itinerary, including airport pickup and drop.',
  'One Shikara ride on Dal Lake.',
  'Traditional welcome shawls for guests on arrival.',
  'Hotel taxes and service components as per the confirmed hotel booking; any additional statutory levy introduced later will be handled as per supplier policy.',
];

export const EXCLUSIONS = [
  'Lunch, snacks, beverages and meals other than the included breakfast and dinner.',
  'Gulmarg Gondola / cable car tickets.',
  'Gulmarg local union cab, if required for local sightseeing or access.',
  'Pahalgam local union cab / local sightseeing vehicle for Betaab Valley, Aru Valley, Chandanwari and other restricted routes.',
  'Sonmarg Zero Point cab and any other locally operated vehicle required beyond the bus route.',
  'Pony rides, horse riding, sledging, skiing, ATV rides, rafting and all other optional activities.',
  'Entry tickets, monument fees, guide charges, personal expenses, tips and shopping.',
  'Any additional sightseeing, route diversion, extra vehicle, or service not specifically mentioned under inclusions.',
];

export const NOTES = [
  'The itinerary is planned in the sequence provided. Actual departure times and stop durations may change due to traffic, weather, road closures or local administration instructions.',
  'The 27-seater bus will operate on permitted roads. Some sightseeing points in Gulmarg, Sonmarg and Pahalgam may require separate local union vehicles or pony services at additional cost.',
  'Thajiwas Glacier, Zero Point, Drung Waterfall and high-altitude routes are weather- and season-dependent. Access cannot be guaranteed.',
  'Gondola tickets are subject to availability and official operating schedules. Guests should arrange tickets in advance where possible.',
  'Please carry valid government photo identification for hotel check-in and travel.',
  'Guests should follow local instructions, keep the group together and arrive promptly at agreed reporting times.',
];

export const PRICE = {
  amount: 20400,
  label: 'per person',
  note: 'Inclusive of meals and sightseeing as per itinerary',
};

export const SEASON = {
  months: 'March – April',
  highlight: 'Tulip Season',
};