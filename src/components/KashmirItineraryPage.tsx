import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ChevronRight, Users, BedDouble, Bus, CalendarDays, MapPin, Hotel,
  Check, X, Info, ChevronDown, Phone, Utensils, Moon, Download,
  MessageCircle, Sun, Camera, ShieldCheck, Clock, Flower2, IndianRupee,
} from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import {
  ROUTE, STAY, DAYS, HOTELS, HOTEL_INTRO, HOTEL_DETAILS,
  INCLUSIONS, EXCLUSIONS, NOTES, ROUTE_NOTES, PRICE, SEASON,
} from './kashmirData';

const HERO_IMAGE = '/assets/aistudio/kashmir-hero.webp';
const PHONE = 'tel:+91 9152861588'; // asli number daalo
const WHATSAPP = 'https://wa.me/9152861588?text=Hi%2C%20I%20want%20a%20quote%20for%20the%20Kashmir%20Group%20Tour%20(5N%2F6D)'; // asli number daalo

const FACTS = [
  { icon: Users, label: 'Group Size', value: '22 Passengers' },
  { icon: BedDouble, label: 'Rooms', value: '11 Rooms' },
  { icon: Bus, label: 'Vehicle', value: '27-Seater Bus' },
  { icon: CalendarDays, label: 'Duration', value: '5N / 6D' },
  { icon: Flower2, label: 'Best Season', value: SEASON.months },
];

const HIGHLIGHTS = [
  { icon: Flower2, text: 'Tulip Season • March – April' },
  { icon: Camera, text: 'Dal Lake Shikara Ride' },
  { icon: Sun, text: 'Sonmarg, Gulmarg & Pahalgam' },
  { icon: Utensils, text: 'Breakfast & Dinner (MAP)' },
  { icon: ShieldCheck, text: '3-Star Deluxe Hotels' },
];

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'hotels', label: 'Hotels' },
  { id: 'inclusions', label: 'Inclusions' },
  { id: 'notes', label: 'Notes' },
];

const SectionTitle: React.FC<{ eyebrow: string; title: string }> = ({ eyebrow, title }) => (
  <div className="mb-5">
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0057B5]">{eyebrow}</p>
    <h2 className="mt-1 text-2xl sm:text-3xl font-black font-display tracking-tight text-[#0B1F3A]">{title}</h2>
  </div>
);

export const KashmirItineraryPage: React.FC = () => {
  const navigate = useNavigate();
  const [openDays, setOpenDays] = useState<number[]>([1]);
  const [activeTab, setActiveTab] = useState('overview');
  const tourName = 'Kashmir Group Tour (5N/6D)';
  const price = PRICE.amount.toLocaleString('en-IN');

  const onEnquire = () => { window.location.href = PHONE; };
  const allOpen = openDays.length === DAYS.length;

  const toggleDay = (d: number) =>
    setOpenDays((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  const goTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveTab(e.target.id); });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    TABS.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-[#F4F7FB] min-h-screen pt-20 pb-24 lg:pb-0 text-slate-900">
      <Header
        onSearchClick={() => navigate('/')}
        onOpenCallback={onEnquire}
        selectedCity="Mumbai"
        onSelectCity={() => {}}
        currency="INR"
        onToggleCurrency={() => {}}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <img src={HERO_IMAGE} alt="Kashmir valley" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/80 via-transparent to-transparent" />

        <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto pt-8 sm:pt-12 pb-28 sm:pb-32">
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
            <button onClick={() => navigate('/')} className="hover:text-white cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Kashmir Group Tour</span>
          </nav>

          <div className="mt-8 sm:mt-12 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                <Clock className="w-3.5 h-3.5" /> 5 Nights / 6 Days
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#0057B5]">
                <IndianRupee className="w-3.5 h-3.5" /> {price} {PRICE.label}
              </span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-[1.05]">
              Kashmir
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              A memorable group journey through the valleys, meadows and lakes of Kashmir
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-300" /> {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto -mt-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 rounded-3xl bg-white p-5 sm:p-6 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
          {FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDF5FD] text-[#0057B5]">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
                <p className="text-sm font-black text-[#0B1F3A]">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-20 z-30 mt-8 border-y border-slate-200 bg-white/90 backdrop-blur">
        <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto flex gap-1 overflow-x-auto no-scrollbar">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => goTo(t.id)}
              className={`relative whitespace-nowrap px-4 py-3.5 text-xs sm:text-sm font-bold cursor-pointer transition-colors ${
                activeTab === t.id ? 'text-[#0057B5]' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {t.label}
              {activeTab === t.id && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-[#0057B5]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto py-10 grid lg:grid-cols-[1fr_340px] gap-8">
        <div className="min-w-0 space-y-14">
          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-40">
            <SectionTitle eyebrow="Overview" title="Travel Route" />
            <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-slate-200 space-y-6">
              <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
                {ROUTE.map((r, i) => (
                  <React.Fragment key={i}>
                    <div className="flex shrink-0 flex-col items-center gap-1.5">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-black ${
                        i === 0 || i === ROUTE.length - 1 ? 'bg-[#0057B5] text-white' : 'bg-[#EDF5FD] text-[#0057B5]'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="text-[11px] font-bold text-slate-700 whitespace-nowrap">{r}</span>
                    </div>
                    {i < ROUTE.length - 1 && <span className="mb-5 h-px w-8 shrink-0 bg-slate-300" />}
                  </React.Fragment>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-5">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-black text-[#0B1F3A]">
                  <Moon className="w-4 h-4 text-[#0057B5]" /> Stay plan
                </h3>
                <div className="grid gap-3 sm:grid-cols-3">
                  {STAY.map((s, i) => (
                    <div key={i} className="rounded-2xl bg-gradient-to-br from-[#0C3C78] to-[#0057B5] p-4 text-white">
                      <p className="text-sm font-black">{s.place}</p>
                      <p className="text-2xl font-black font-display leading-tight">
                        {s.nights} <span className="text-xs font-bold text-blue-100">{s.nights > 1 ? 'nights' : 'night'}</span>
                      </p>
                      <p className="mt-1 text-[11px] text-blue-100">{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                {ROUTE_NOTES.map((n) => (
                  <p key={n} className="text-xs leading-relaxed text-slate-500">{n}</p>
                ))}
              </div>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="scroll-mt-40">
            <div className="flex items-end justify-between gap-4">
              <SectionTitle eyebrow="Day by Day" title="Day-wise Detailed Itinerary" />
              <button
                onClick={() => setOpenDays(allOpen ? [] : DAYS.map((d) => d.day))}
                className="mb-5 shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:border-[#0057B5] hover:text-[#0057B5] cursor-pointer transition-colors"
              >
                {allOpen ? 'Collapse all' : 'Expand all'}
              </button>
            </div>

            <div className="relative space-y-4">
              <span className="absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-[#0057B5] via-[#0057B5]/30 to-transparent" />
              {DAYS.map((d) => {
                const open = openDays.includes(d.day);
                return (
                  <div key={d.day} className="relative pl-14">
                    <span className={`absolute left-0 top-3 flex h-11 w-11 items-center justify-center rounded-full text-sm font-black ring-4 ring-[#F4F7FB] transition-colors ${
                      open ? 'bg-[#0057B5] text-white' : 'bg-white text-[#0057B5] border border-slate-300'
                    }`}>
                      {d.day}
                    </span>

                    <div className={`overflow-hidden rounded-3xl bg-white ring-1 transition-shadow ${
                      open ? 'ring-[#0057B5]/30 shadow-lg shadow-slate-900/5' : 'ring-slate-200'
                    }`}>
                      <button onClick={() => toggleDay(d.day)} className="flex w-full items-center gap-3 p-4 sm:p-5 text-left cursor-pointer">
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[#0057B5]">Day {d.day}</p>
                          <h3 className="text-sm sm:text-base font-black text-[#0B1F3A]">{d.title}</h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                      </button>

                      {open && (
                        <div className="space-y-4 border-t border-slate-100 px-4 pb-5 pt-4 sm:px-5">
                          <p className="text-sm leading-relaxed text-slate-600">{d.intro}</p>
                          <ul className="grid gap-2.5">
                            {d.stops.map((s) => (
                              <li key={s.title} className="rounded-2xl bg-slate-50 p-3.5 ring-1 ring-slate-100">
                                <p className="flex items-center gap-2 text-xs sm:text-sm font-black text-[#0B1F3A]">
                                  <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-500" /> {s.title}
                                </p>
                                <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600">{s.text}</p>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-start gap-2.5 rounded-2xl bg-[#EDF5FD] p-3.5 text-xs sm:text-[13px] text-slate-700">
                            <Utensils className="mt-0.5 h-4 w-4 shrink-0 text-[#0057B5]" />
                            <span><b className="text-[#0B1F3A]">Meal / Night halt:</b> {d.meal}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* HOTELS */}
          <section id="hotels" className="scroll-mt-40">
            <SectionTitle eyebrow="Stay" title="Hotel & Rooming Details" />
            <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-slate-200">
              <p className="mb-5 text-xs leading-relaxed text-slate-500">{HOTEL_INTRO}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {HOTELS.map((h) => (
                  <div key={h.location} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <p className="flex items-center gap-2 text-sm font-black text-[#0B1F3A]">
                        <Hotel className="h-4 w-4 text-[#0057B5]" /> {h.location}
                      </p>
                      <span className="rounded-full bg-[#EDF5FD] px-2.5 py-0.5 text-[11px] font-bold text-[#0057B5]">{h.nights}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {h.options.map((o) => (
                        <li key={o} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 text-xs text-slate-600 sm:grid-cols-3">
                {HOTEL_DETAILS.map((d) => (
                  <p key={d.label}><b className="block text-[#0B1F3A]">{d.label}</b>{d.text}</p>
                ))}
              </div>
            </div>
          </section>

          {/* INCLUSIONS */}
          <section id="inclusions" className="scroll-mt-40">
            <SectionTitle eyebrow="Package" title="Inclusions & Exclusions" />
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-emerald-200">
                <h3 className="mb-4 flex items-center gap-2 text-base font-black font-display text-emerald-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100"><Check className="h-4 w-4" /></span>
                  Package Inclusions
                </h3>
                <ul className="space-y-2.5">
                  {INCLUSIONS.map((t) => (
                    <li key={t} className="flex gap-2.5 text-xs leading-relaxed text-slate-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-rose-200">
                <h3 className="mb-4 flex items-center gap-2 text-base font-black font-display text-rose-800">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-100"><X className="h-4 w-4" /></span>
                  Package Exclusions
                </h3>
                <ul className="space-y-2.5">
                  {EXCLUSIONS.map((t) => (
                    <li key={t} className="flex gap-2.5 text-xs leading-relaxed text-slate-600">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /> <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* NOTES */}
          <section id="notes" className="scroll-mt-40">
            <SectionTitle eyebrow="Good to know" title="Important Travel Notes" />
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <ul className="space-y-3">
                {NOTES.map((n) => (
                  <li key={n} className="flex gap-3 text-xs leading-relaxed text-amber-950/80">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /> <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CLOSING CTA */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C3C78] via-[#0057B5] to-[#102B23] p-8 sm:p-10 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">We wish you a wonderful</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black font-display">Kashmir Holiday</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
              Explore the lakes, meadows, mountains and warm hospitality of Kashmir.
            </p>
            <button
              onClick={onEnquire}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0057B5] shadow-lg hover:bg-amber-50 cursor-pointer transition-colors"
            >
              <Phone className="h-4 w-4" /> Get a Quote
            </button>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-40 space-y-4">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
              <div className="bg-gradient-to-r from-[#0C3C78] to-[#0057B5] p-5 text-white">
                <p className="text-[11px] font-bold uppercase tracking-wider text-blue-100">Group Package</p>
                <p className="mt-1 text-xl font-black font-display">{tourName}</p>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-2xl bg-[#EDF5FD] p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Starting from</p>
                  <p className="text-3xl font-black font-display text-[#0057B5]">
                    ₹{price}
                    <span className="ml-1 text-xs font-bold text-slate-500">{PRICE.label}</span>
                  </p>
                  <p className="mt-1 text-[11px] text-slate-600">{PRICE.note}</p>
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-bold text-amber-900">
                    <Flower2 className="h-3 w-3" /> {SEASON.highlight}: {SEASON.months}
                  </p>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-[#0057B5]" /> 22 passengers</li>
                  <li className="flex items-center gap-2"><BedDouble className="h-4 w-4 text-[#0057B5]" /> 11 rooms, 3-star deluxe</li>
                  <li className="flex items-center gap-2"><Bus className="h-4 w-4 text-[#0057B5]" /> 27-seater bus</li>
                  <li className="flex items-center gap-2"><Utensils className="h-4 w-4 text-[#0057B5]" /> Breakfast & dinner</li>
                </ul>
                <button
                  onClick={onEnquire}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0057B5] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#004694] cursor-pointer transition-colors"
                >
                  <Phone className="h-4 w-4" /> Enquire Now / Get Quote
                </button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <button
                  onClick={() => window.print()}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-xs font-bold text-slate-700 hover:border-slate-500 cursor-pointer transition-colors"
                >
                  <Download className="h-4 w-4" /> Print / Save as PDF
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* MOBILE BAR */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-slate-200 bg-white p-3">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <div className="flex flex-col justify-center pr-1 leading-tight">
          <span className="text-[10px] font-bold text-slate-500">From</span>
          <span className="text-base font-black text-[#0057B5]">₹{price}</span>
        </div>
        <button
          onClick={onEnquire}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#0057B5] px-5 text-sm font-bold text-white shadow-md cursor-pointer"
        >
          <Phone className="h-4 w-4" /> Get Quote
        </button>
      </div>

      <Footer />
    </div>
  );
};