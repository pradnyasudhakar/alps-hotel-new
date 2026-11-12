import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle, Mail, Phone } from 'lucide-react';
import { TourPackage } from '../data/toursData';

interface BrochureModalProps {
  tour: TourPackage | null;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ tour, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!tour) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-[#0C3C78] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-display">
                Download Official E-Brochure
              </h3>
              <p className="text-[11px] text-blue-200">
                {tour.code} · Detailed Day-wise PDF Guide
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5">
          {downloaded ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Brochure Sent & Downloaded!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                A copy of the complete itinerary and price brochure for <strong>{tour.title}</strong> has been emailed to <strong>{email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-3.5">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
                <div className="font-bold text-slate-800">{tour.title}</div>
                <div className="text-slate-500">
                  Includes full daily schedule, hotel list, flight baggage guidelines, and Maharaj meal menu.
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address to Send PDF *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (Optional for WhatsApp Copy)
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98200 12345"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#0057B5] hover:bg-[#004694] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download E-Brochure (Free PDF)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
