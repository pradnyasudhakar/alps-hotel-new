import React, { useState } from 'react';
import { X, Phone, User, Mail, MapPin, CheckCircle, Clock } from 'lucide-react';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Europe');
  const [preferredTime, setPreferredTime] = useState('Anytime');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#0C3C78] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-display">
                Request a Free Callback
              </h3>
              <p className="text-[11px] text-blue-200">
                Speak directly with an Alps Tour Specialist
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

        {/* Form Body */}
        <div className="p-5">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">
                Thank You, {name}!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                Your request has been prioritized. Our Senior Tour Consultant will call you on <strong>{phone}</strong> within 15 minutes.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-2 px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Nilesh Shah"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (WhatsApp Enabled) *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9152861588 "
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Interested Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium"
                  >
                    <option value="Europe">Europe Escorted</option>
                    <option value="Kashmir">Kashmir Paradise</option>
                    <option value="Vietnam">Vietnam & Cambodia</option>
                    <option value="Dubai">Dubai & Abu Dhabi</option>
                    <option value="Kerala">Kerala Backwaters</option>
                    <option value="Char Dham">Char Dham Senior Yatra</option>
                    <option value="Women Special">My Fair Lady (Women)</option>
                    <option value="Thailand">Thailand Marigold</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Best Time to Call
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium"
                  >
                    <option value="Anytime">Anytime Today</option>
                    <option value="Morning">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#0057B5] hover:bg-[#004694] text-white font-bold text-xs rounded-lg shadow-sm cursor-pointer"
                >
                  Request Immediate Callback
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                Strict Privacy: Your phone number is never shared with third parties.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
