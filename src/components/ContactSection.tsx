import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Visit Or Inquire</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Get In Touch &amp; Visit Us
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Conveniently situated in the prime market district. Walk-ins are always welcomed subject to stylist availability.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details, Action Buttons & Opening Hours */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-md shadow-emerald-700/20 transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                id="contact-call-btn"
                className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm shadow-md transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Info Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <h3 className="font-display text-xl font-bold text-stone-900">
                Salon Contact Information
              </h3>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Direct Phone</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-base font-bold text-stone-900 hover:text-amber-800 transition-colors"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Assistance with bookings &amp; consultations</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Official Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-base font-bold text-stone-900 hover:text-amber-800 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Inquiries, corporate styling &amp; bridal requests</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Salon Address</span>
                    <p className="text-base font-bold text-stone-900">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">Valet parking available for all guests</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Box */}
              <div className="pt-6 border-t border-stone-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-800" />
                    <h4 className="font-semibold text-stone-900 text-sm uppercase tracking-wide">Opening Hours</h4>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Open Today
                  </span>
                </div>

                <div className="space-y-2.5">
                  {CONTACT_INFO.hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-stone-100 last:border-0"
                    >
                      <span className="text-stone-600 font-medium">{item.days}</span>
                      <span className="font-semibold text-stone-900 font-mono">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Placeholder & Location Guide */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    Location &amp; Directions
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">Google Maps Interactive Placeholder</p>
                </div>
                
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  Valet Available
                </span>
              </div>

              {/* Stylized Google Maps Container */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-stone-300 bg-[#E5E3DF] shadow-inner flex items-center justify-center">
                
                {/* Visual Map Texture Representation */}
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(#d1cfcb_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Simulated Street grid */}
                <div className="absolute inset-0 flex flex-col justify-around opacity-40 pointer-events-none">
                  <div className="w-full h-10 bg-stone-300 transform -rotate-6" />
                  <div className="w-full h-14 bg-stone-200 transform rotate-12" />
                  <div className="w-full h-8 bg-amber-200/50 transform -rotate-3" />
                </div>

                {/* Pin Card Marker */}
                <div className="relative z-10 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-stone-200 text-center max-w-xs mx-auto animate-bounce-subtle">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-white flex items-center justify-center mx-auto shadow-md mb-2">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="font-display font-bold text-base text-stone-900">
                    Glow &amp; Style Salon
                  </div>
                  <div className="text-xs text-stone-600 mt-0.5">
                    Main Market, Your City
                  </div>
                  <div className="text-[11px] text-amber-800 font-semibold mt-1">
                    Premium Salon Experience
                  </div>

                  <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-center gap-2">
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Navigation className="w-3 h-3 text-amber-400" />
                      <span>Directions</span>
                    </a>
                  </div>
                </div>

                {/* Map Control Overlay */}
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[10px] text-stone-600 border border-stone-300 font-medium">
                  Map Demo Placeholder
                </div>
              </div>

              {/* Nearby Landmarks */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-xs text-stone-600 space-y-1.5">
                <div className="font-semibold text-stone-800 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                  Nearby Landmarks &amp; Access:
                </div>
                <p>• Situated right in Main Market, near Central Plaza Fountain.</p>
                <p>• Complimentary valet parking directly in front of the salon entrance.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
