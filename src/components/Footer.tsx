import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-white text-slate-900 pt-14 pb-20 md:pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-14 sm:h-16 flex items-center">
                <img
                  src="/assets/aistudio/Glossy_Alps_Travel_Logo_with_Airplane_7b55b73e.png"
                  alt="Alps Hotels & Travels"
                  className="h-13 sm:h-15 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              We bring you closer to the world's most breathtaking places with unforgettable escorted travel experiences, pure veg & jain dining, and caring tour managers.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0057B5] shrink-0" />
                <span className="font-semibold text-slate-900">Toll Free:  9152861588</span>
                {/* <span className="text-slate-500">/ 022 6664 0000</span> */}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0057B5] shrink-0" />
                <span> info@alphotelsandtravels.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0057B5] shrink-0" />
                <span>Headquarters: Alps House, Worli Sea Face, Mumbai 400018</span>
              </div>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Top Destinations</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Switzerland Alps</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Paris & France</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Japan Cherry Blossom</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Kashmir Paradise</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Dubai & Abu Dhabi</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Scandinavia Aurora</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li><a href="#why-alps" className="hover:text-[#0057B5] transition-colors">About Us</a></li>
              <li><a href="#why-alps" className="hover:text-[#0057B5] transition-colors">Why Alps & Trust</a></li>
              <li><a href="#departure-hubs" className="hover:text-[#0057B5] transition-colors">Departure Hubs</a></li>
              <li><a href="#travelers-reviews" className="hover:text-[#0057B5] transition-colors">Traveler Reviews</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Specialty Tours</a></li>
              <li><a href="#explore-guided-tours" className="hover:text-[#0057B5] transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Newsletter</h4>
            <p className="text-xs text-slate-600 mb-3">Subscribe for exclusive travel offers, holiday brochures, and updates.</p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 p-3 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0057B5] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold text-white bg-[#0057B5] hover:bg-[#004694] shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Alps Hotels and Travels. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
