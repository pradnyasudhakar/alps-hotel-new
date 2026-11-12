import React, { useState } from 'react';
import { X, Check, Calendar, Users, Utensils, CreditCard, ShieldCheck, ArrowRight, ArrowLeft, Download, CheckCircle, Tag, Phone, Mail, MapPin } from 'lucide-react';
import { TourPackage, DepartureDate } from '../data/toursData';

interface BookingFlowModalProps {
  tour: TourPackage | null;
  initialDate?: DepartureDate;
  onClose: () => void;
  currency: string;
}

export const BookingFlowModal: React.FC<BookingFlowModalProps> = ({
  tour,
  initialDate,
  onClose,
  currency
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<DepartureDate | null>(
    initialDate || (tour ? tour.departureDates[0] : null)
  );

  // Travelers configuration
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);
  const [roomType, setRoomType] = useState<'twin' | 'triple' | 'single'>('twin');

  // Meal & Special
  const [mealPreference, setMealPreference] = useState<'pure-veg' | 'jain' | 'non-veg'>('pure-veg');
  const [wheelchairAssistance, setWheelchairAssistance] = useState<boolean>(false);
  const [celebration, setCelebration] = useState<string>('none');

  // Coupon code
  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<string>('');

  // Payment choice
  const [paymentType, setPaymentType] = useState<'deposit' | 'full'>('deposit');

  // Contact details
  const [leadName, setLeadName] = useState<string>('');
  const [leadEmail, setLeadEmail] = useState<string>('');
  const [leadPhone, setLeadPhone] = useState<string>('');
  const [leadCity, setLeadCity] = useState<string>('Mumbai');

  // Confirmation state
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!tour) return null;

  const basePricePerAdult = tour.price;
  const childPrice = Math.round(tour.price * 0.75); // 75% for children
  const singleSupplement = roomType === 'single' ? Math.round(tour.price * 0.3) : 0;

  const rawSubtotal = adults * basePricePerAdult + children * childPrice + singleSupplement;
  const subtotalAfterCoupon = Math.max(0, rawSubtotal - appliedDiscount);
  const gstAmount = Math.round(subtotalAfterCoupon * 0.05); // 5% GST on tour package
  const grandTotal = subtotalAfterCoupon + gstAmount;

  // Deposit is ₹25,000 per adult/child
  const depositAmount = (adults + children) * 25000;
  const finalToPay = paymentType === 'deposit' ? Math.min(grandTotal, depositAmount) : grandTotal;

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      const usdAmount = Math.round(amount / 86);
      return `$${usdAmount.toLocaleString('en-US')}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === 'ALPS5000') {
      setAppliedDiscount(5000);
      setCouponMessage('Coupon ALPS5000 applied! Saved ₹5,000.');
    } else if (code === 'EARLYBIRD') {
      setAppliedDiscount(10000);
      setCouponMessage('Coupon EARLYBIRD applied! Saved ₹10,000.');
    } else if (code === 'FAMILYFEST' && adults + children >= 4) {
      setAppliedDiscount(15000);
      setCouponMessage('Family Fest discount applied! Saved ₹15,000.');
    } else {
      setCouponMessage('Invalid coupon code. Try ALPS5000 or EARLYBIRD.');
    }
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail || !leadPhone) {
      alert('Please fill out all required contact fields.');
      return;
    }

    const randomRef = `ALPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomRef);
    setBookingConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Bar */}
        <div className="bg-[#072249] text-white p-4 sm:px-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm">
              {bookingConfirmed ? '✓' : `0${currentStep}`}
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-display text-white">
                {bookingConfirmed ? 'Booking Confirmed!' : `Book Tour: ${tour.title}`}
              </h2>
              <div className="text-xs text-slate-300">
                {tour.code} · {tour.duration.days} Days / {tour.duration.nights} Nights
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Multi-step progress bar (if not confirmed) */}
        {!bookingConfirmed && (
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-2.5 shrink-0 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar w-full">
              {[
                { step: 1, label: 'Departure' },
                { step: 2, label: 'Travelers' },
                { step: 3, label: 'Meals & Special' },
                { step: 4, label: 'Price & Deposit' },
                { step: 5, label: 'Contact & Pay' }
              ].map((item) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                    currentStep === item.step
                      ? 'text-[#D9480F] font-bold'
                      : currentStep > item.step
                      ? 'text-emerald-700 font-medium'
                      : 'text-slate-400'
                  }`}
                  onClick={() => currentStep > item.step && setCurrentStep(item.step)}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                      currentStep === item.step
                        ? 'bg-[#D9480F] text-white'
                        : currentStep > item.step
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {currentStep > item.step ? '✓' : item.step}
                  </span>
                  <span className="hidden sm:inline">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {/* CONFIRMATION SCREEN */}
          {bookingConfirmed ? (
            <div className="text-center py-6 sm:py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-md mb-2">
                  Booking ID: {bookingRef}
                </span>
                <h3 className="text-2xl font-black text-slate-900 font-display">
                  Congratulations, {leadName}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  Your escorted tour booking with Alps Hotels and Travels is successfully held. An instant booking voucher and payment receipt have been sent to <strong>{leadEmail}</strong> and WhatsApp <strong>{leadPhone}</strong>.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Tour Name:</span>
                  <span className="font-bold text-slate-800 text-right">{tour.title}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Departure Date:</span>
                  <span className="font-bold text-slate-800">{selectedDate?.formatted} (Ex {selectedDate?.hub})</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Travelers:</span>
                  <span className="font-bold text-slate-800">{adults} Adults{children > 0 ? `, ${children} Children` : ''}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Meal Plan:</span>
                  <span className="font-bold text-amber-800 capitalize">{mealPreference.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-slate-700 font-bold">Total Amount Paid:</span>
                  <span className="text-base font-black text-emerald-700 font-display">{formatPrice(finalToPay)}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => alert(`Simulating PDF download for booking voucher: ${bookingRef}`)}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Booking Receipt (PDF)</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold cursor-pointer"
                >
                  Back to Homepage
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: DEPARTURE DATE SELECTION */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 1: Choose Your Departure Date & City
                  </h3>
                  <p className="text-xs text-slate-500">
                    Select a guaranteed departure date for <strong>{tour.title}</strong>:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tour.departureDates.map((date) => (
                      <div
                        key={date.id}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          selectedDate?.id === date.id
                            ? 'border-[#D9480F] bg-amber-50/70 ring-1 ring-[#D9480F]'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-slate-900">{date.formatted}</span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              date.status === 'Last 4 Seats'
                                ? 'bg-red-100 text-red-700'
                                : date.status === 'Filling Fast'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {date.seatsLeft} seats left
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center justify-between">
                          <span>Departure Hub: <strong>Ex {date.hub}</strong></span>
                          <span className="text-[#0C3C78] font-bold">100% Guaranteed</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      Zero cancellation charges if rescheduled up to 30 days prior to departure.
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 2: TRAVELERS & ROOMS */}
              {currentStep === 2 && (
                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 2: Number of Passengers & Room Sharing
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Adults */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-800">Adults (12+ yrs)</div>
                        <div className="text-[10px] text-slate-500">Base Fare {formatPrice(basePricePerAdult)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm w-5 text-center">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(adults + 1)}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-800">Children (2-11 yrs)</div>
                        <div className="text-[10px] text-slate-500">75% of Fare {formatPrice(childPrice)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm w-5 text-center">{children}</span>
                        <button
                          type="button"
                          onClick={() => setChildren(children + 1)}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-800">Infants (0-2 yrs)</div>
                        <div className="text-[10px] text-slate-500">Taxes only</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setInfants(Math.max(0, infants - 1))}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm w-5 text-center">{infants}</span>
                        <button
                          type="button"
                          onClick={() => setInfants(infants + 1)}
                          className="w-7 h-7 rounded-md bg-white border border-slate-300 font-bold text-slate-700 hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Select Hotel Room Configuration:
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setRoomType('twin')}
                        className={`p-3 rounded-lg border text-left cursor-pointer ${
                          roomType === 'twin'
                            ? 'border-[#0C3C78] bg-blue-50/50 font-bold text-[#0C3C78]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div>Twin / Double Sharing</div>
                        <div className="text-[10px] text-slate-500 font-normal">Standard 2 per room</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRoomType('triple')}
                        className={`p-3 rounded-lg border text-left cursor-pointer ${
                          roomType === 'triple'
                            ? 'border-[#0C3C78] bg-blue-50/50 font-bold text-[#0C3C78]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div>Triple Sharing</div>
                        <div className="text-[10px] text-slate-500 font-normal">3 adults with extra bed</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRoomType('single')}
                        className={`p-3 rounded-lg border text-left cursor-pointer ${
                          roomType === 'single'
                            ? 'border-[#0C3C78] bg-blue-50/50 font-bold text-[#0C3C78]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div>Single Occupancy</div>
                        <div className="text-[10px] text-slate-500 font-normal">+30% single supplement</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: MEALS & SPECIAL REQUESTS */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 3: Meal Dietary Choice & Guest Preferences
                  </h3>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700">
                      Food & Dining Preference (Prepared by Alps Culinary Team on Tour):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div
                        onClick={() => setMealPreference('pure-veg')}
                        className={`p-3 rounded-xl border cursor-pointer ${
                          mealPreference === 'pure-veg'
                            ? 'border-emerald-600 bg-emerald-50/60 font-bold text-emerald-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-3 h-3 rounded-full border border-emerald-600 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          </span>
                          <span>Pure Vegetarian</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal">
                          Authentic Indian vegetarian dishes, dal, paneer, roti, rice & desserts.
                        </p>
                      </div>

                      <div
                        onClick={() => setMealPreference('jain')}
                        className={`p-3 rounded-xl border cursor-pointer ${
                          mealPreference === 'jain'
                            ? 'border-amber-600 bg-amber-50/60 font-bold text-amber-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-3 h-3 rounded-full border border-amber-600 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          </span>
                          <span>Jain Meals</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal">
                          No onion, garlic, or root vegetables. Prepared in dedicated separate cookware.
                        </p>
                      </div>

                      <div
                        onClick={() => setMealPreference('non-veg')}
                        className={`p-3 rounded-xl border cursor-pointer ${
                          mealPreference === 'non-veg'
                            ? 'border-red-600 bg-red-50/60 font-bold text-red-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-3 h-3 rounded-full border border-red-600 flex items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          </span>
                          <span>Non-Vegetarian / Mixed</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal">
                          Chicken / Fish options available alongside vegetarian delicacies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-3">
                    <label className="flex items-center gap-2 text-xs text-slate-700 font-medium cursor-pointer">
                      <input
                        type="checkbox"
                        checked={wheelchairAssistance}
                        onChange={(e) => setWheelchairAssistance(e.target.checked)}
                        className="rounded text-[#D9480F] focus:ring-[#D9480F]"
                      />
                      <span>Request Wheelchair / Senior Assistance at Airports & Sightseeing</span>
                    </label>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Any Special Celebration on Tour?
                      </label>
                      <select
                        value={celebration}
                        onChange={(e) => setCelebration(e.target.value)}
                        className="w-full sm:w-72 p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      >
                        <option value="none">No special celebration</option>
                        <option value="anniversary">Wedding Anniversary (Complimentary Cake & Celebration)</option>
                        <option value="birthday">Birthday Celebration (Special Surprise Cake)</option>
                        <option value="honeymoon">Honeymoon (Romantic Room Decor)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: COST BREAKDOWN & COUPONS */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 4: Transparent Cost Breakdown & Payment Choice
                  </h3>

                  {/* Coupon Bar */}
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Enter Promo Code: e.g. ALPS5000 or EARLYBIRD"
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs uppercase font-bold focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0057B5]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                  {couponMessage && (
                    <div
                      className={`text-xs font-semibold ${
                        appliedDiscount > 0 ? 'text-emerald-700' : 'text-red-600'
                      }`}
                    >
                      {couponMessage}
                    </div>
                  )}

                  {/* Cost Summary Table */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs space-y-2">
                    <div className="flex justify-between text-slate-600">
                      <span>Adult Base Fare ({adults} x {formatPrice(basePricePerAdult)}):</span>
                      <span className="font-semibold text-slate-800">{formatPrice(adults * basePricePerAdult)}</span>
                    </div>
                    {children > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Child Fare ({children} x {formatPrice(childPrice)}):</span>
                        <span className="font-semibold text-slate-800">{formatPrice(children * childPrice)}</span>
                      </div>
                    )}
                    {singleSupplement > 0 && (
                      <div className="flex justify-between text-slate-600">
                        <span>Single Room Supplement:</span>
                        <span className="font-semibold text-slate-800">{formatPrice(singleSupplement)}</span>
                      </div>
                    )}
                    {appliedDiscount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Discount Applied:</span>
                        <span>-{formatPrice(appliedDiscount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-slate-600">
                      <span>Government GST (5% on escorted tour):</span>
                      <span className="font-semibold text-slate-800">{formatPrice(gstAmount)}</span>
                    </div>

                    <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline font-bold">
                      <span className="text-slate-900 text-sm">Grand Total (All-Inclusive):</span>
                      <span className="text-xl font-black text-[#D9480F] font-display">
                        {formatPrice(grandTotal)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Type Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Choose How You Wish to Pay:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div
                        onClick={() => setPaymentType('deposit')}
                        className={`p-3.5 rounded-xl border cursor-pointer ${
                          paymentType === 'deposit'
                            ? 'border-[#0C3C78] bg-blue-50/70 font-bold text-[#0C3C78]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="text-sm font-extrabold mb-0.5">
                          Pay Advance Deposit: {formatPrice(Math.min(grandTotal, depositAmount))}
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal">
                          Lock in seats now with ₹25,000 / seat. Balance payable 30 days prior to departure.
                        </p>
                      </div>

                      <div
                        onClick={() => setPaymentType('full')}
                        className={`p-3.5 rounded-xl border cursor-pointer ${
                          paymentType === 'full'
                            ? 'border-[#0C3C78] bg-blue-50/70 font-bold text-[#0C3C78]'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="text-sm font-extrabold mb-0.5">
                          Pay Full Amount: {formatPrice(grandTotal)}
                        </div>
                        <p className="text-[11px] text-slate-500 font-normal">
                          Complete booking immediately and receive instant airline ticket PNR confirmation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT DETAILS & CHECKOUT */}
              {currentStep === 5 && (
                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    Step 5: Primary Traveler & Communication Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Lead Passenger Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="e.g. Ramesh Kulkarni"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (for Ticket & Itinerary) *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="e.g. ramesh.kulkarni@gmail.com"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number (WhatsApp Updates) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="+91 98200 12345"
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0C3C78]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City of Residence
                      </label>
                      <select
                        value={leadCity}
                        onChange={(e) => setLeadCity(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium"
                      >
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Thane">Thane</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Nashik">Nashik</option>
                        <option value="Delhi">Delhi NCR</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Secure Booking Guarantee:</strong> No credit card surcharge. All payments are processed through RBI-approved 256-bit SSL encrypted gateway.
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                    <span>Amount Due Now:</span>
                    <span className="text-lg font-black text-slate-900 font-display">
                      {formatPrice(finalToPay)}
                    </span>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Modal Navigation Buttons */}
        {!bookingConfirmed && (
          <div className="p-4 sm:px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="py-2 px-3 text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="py-2.5 px-6 bg-[#0C3C78] hover:bg-[#072249] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleConfirmBooking}
                className="py-2.5 px-6 bg-[#0057B5] hover:bg-[#004694] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <span>Confirm & Pay {formatPrice(finalToPay)}</span>
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
