import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, User, Phone, Scissors, MessageSquare, CheckCircle2, Sparkles, Tag, X, Check } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData';

interface AppointmentSectionProps {
  preselectedService: string;
  promoCodeApplied: string;
  onClearPromo: () => void;
}

export interface BookingConfirmation {
  refId: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  promoApplied: string;
  estimatedPrice: number;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  preselectedService,
  promoCodeApplied,
  onClearPromo,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Haircut & Styling');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:30 AM');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Update selected service if parent changes it
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  // Set default date to tomorrow if empty
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const currentServiceObj = SALON_SERVICES.find(s => s.name === service) || SALON_SERVICES[0];
  const basePrice = currentServiceObj?.price || 899;
  const discountAmount = promoCodeApplied ? Math.round(basePrice * 0.15) : 0;
  const finalEstimatedPrice = basePrice - discountAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 8) {
      setErrorMsg('Please enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!date) {
      setErrorMsg('Please select your preferred appointment date.');
      return;
    }

    const randomId = 'GS-' + Math.floor(1000 + Math.random() * 9000);
    const newBooking: BookingConfirmation = {
      refId: randomId,
      name: name.trim(),
      phone: phone.trim(),
      service,
      date,
      time,
      message: message.trim(),
      promoApplied: promoCodeApplied,
      estimatedPrice: finalEstimatedPrice,
    };

    setConfirmation(newBooking);
  };

  const handleReset = () => {
    setConfirmation(null);
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#171615] text-white relative">
      {/* Soft background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Online Reservations</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Book Your Appointment
          </h2>

          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Reserve your preferred styling session in less than 60 seconds. Our concierge will send you an instant confirmation.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-2xl">
            
            {/* Promo banner inside form if applied */}
            {promoCodeApplied && (
              <div className="mb-8 p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-between text-amber-200 text-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Offer Applied: <strong className="text-amber-300">{promoCodeApplied}</strong> (15% First Visit Discount)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearPromo}
                  className="text-xs text-stone-400 hover:text-white underline cursor-pointer"
                >
                  Remove
                </button>
              </div>
            )}

            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-600/60 text-rose-200 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="client-name" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="client-name"
                      required
                      placeholder="e.g. Samantha Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="client-phone" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    Phone Number <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="client-phone"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Service Selection */}
              <div className="space-y-2">
                <label htmlFor="client-service" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                  Select Desired Service <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <select
                    id="client-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all appearance-none cursor-pointer"
                  >
                    {SALON_SERVICES.map((s) => (
                      <option key={s.id} value={s.name} className="bg-stone-900 text-white py-2">
                        {s.name} ({s.duration}) — ₹{s.price.toLocaleString('en-IN')}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 3: Preferred Date & Preferred Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="client-date" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    Preferred Date <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <CalendarIcon className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="client-date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                    Preferred Time Slot <span className="text-amber-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="client-time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all appearance-none cursor-pointer"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-stone-900 text-white">
                          {slot}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-stone-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Time Slots Quick Chips */}
              <div className="space-y-2">
                <span className="text-xs text-stone-400 block font-medium">Quick Slot Selection:</span>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                        time === slot
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 4: Message / Notes */}
              <div className="space-y-2">
                <label htmlFor="client-message" className="block text-xs font-semibold text-stone-300 uppercase tracking-wider">
                  Special Instructions or Hair/Skin Notes (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3.5 left-3.5 pointer-events-none text-stone-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="client-message"
                    rows={3}
                    placeholder="e.g. Any scalp sensitivity, reference haircut style, or wedding date schedule..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-sm transition-all"
                  />
                </div>
              </div>

              {/* Price Estimate Summary */}
              <div className="p-4 rounded-2xl bg-stone-950/90 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-xs text-stone-400 block font-medium">Selected Service</span>
                  <span className="font-semibold text-white text-sm">{service}</span>
                  <span className="text-xs text-stone-400 ml-2">({currentServiceObj?.duration})</span>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-xs text-stone-400 block font-medium">Estimated Total (Pay at Salon)</span>
                  <div className="flex items-center justify-center sm:justify-end gap-2">
                    {promoCodeApplied && (
                      <span className="text-xs text-stone-500 line-through">₹{basePrice.toLocaleString('en-IN')}</span>
                    )}
                    <span className="font-display text-xl font-bold text-amber-400">
                      ₹{finalEstimatedPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-appointment-btn"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-xl shadow-amber-900/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-stone-950" />
                  <span>Submit Appointment</span>
                </button>
              </div>

              <div className="text-center text-xs text-stone-400">
                🔒 Free cancellation up to 2 hours prior. Demo system stores bookings locally for your client preview.
              </div>

            </form>

          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {confirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-lg w-full bg-stone-900 rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl text-white space-y-6">
            
            <button
              onClick={handleReset}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/50 text-amber-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Appointment Requested!
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm">
                Thank you, <strong>{confirmation.name}</strong>. Your appointment request has been registered in the salon demo system.
              </p>
            </div>

            {/* Booking Details Ticket */}
            <div className="bg-stone-950 rounded-2xl p-5 border border-stone-800 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-stone-800">
                <span className="text-stone-400">Booking Reference</span>
                <span className="font-mono font-bold text-amber-400 text-sm">{confirmation.refId}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-stone-400">Service</span>
                <span className="font-semibold text-white text-right">{confirmation.service}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-stone-400">Date &amp; Time</span>
                <span className="font-semibold text-white">
                  {confirmation.date} at {confirmation.time}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-stone-400">Contact Phone</span>
                <span className="font-semibold text-white">{confirmation.phone}</span>
              </div>

              {confirmation.promoApplied && (
                <div className="flex justify-between items-center text-amber-300">
                  <span>Special Discount</span>
                  <span>15% OFF ({confirmation.promoApplied})</span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2 border-t border-stone-800 text-sm font-bold">
                <span className="text-stone-200">Total Due at Salon</span>
                <span className="text-amber-400">₹{confirmation.estimatedPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-300/90 text-center">
              ✨ Demo Notice: In production, an SMS &amp; WhatsApp confirmation message is automatically sent to the client.
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/919000000000?text=Hi%2C%20I%20have%20booked%20an%20appointment%20ref%20${confirmation.refId}%20for%20${encodeURIComponent(confirmation.service)}%20on%20${confirmation.date}%20at%20${confirmation.time}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors flex items-center justify-center gap-2"
              >
                <span>Notify Salon on WhatsApp</span>
              </a>
              <button
                onClick={handleReset}
                className="py-3 px-5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
