import React from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, Clock, CheckCircle2, Scissors, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onServicesClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onServicesClick }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-stone-950 text-white">
      {/* Background Salon Imagery with Luxury Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85"
          alt="Glow and Style Salon Interior"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Unisex Hair, Skin &amp; Grooming Sanctuary</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Look Good. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  Feel Amazing.
                </span>
              </h1>
              
              <p className="text-stone-300 text-lg sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Premium hair, beauty and grooming services designed around you. Experience bespoke styling, personalized skin treatments, and restorative care in a modern, serene sanctuary.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookClick}
                id="hero-book-appointment-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-xl shadow-amber-900/30 hover:shadow-amber-600/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-stone-950" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onServicesClick}
                id="hero-view-services-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-100 font-semibold text-base border border-stone-700/80 hover:border-amber-500/50 transition-all duration-200 cursor-pointer"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-stone-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Hygiene-Focused Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Professional Stylists</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Easy Appointment Booking</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-stone-800 to-amber-700/20 blur-xl opacity-70 -z-10" />

              <div className="relative rounded-2xl overflow-hidden border border-stone-700/60 shadow-2xl bg-stone-900/60 backdrop-blur-sm group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80"
                  alt="Hairstylist sculpting hair at Glow and Style Salon"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Experience Badge */}
                <div className="absolute top-4 right-4 bg-stone-950/90 backdrop-blur-md border border-amber-500/30 rounded-xl p-3.5 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-xs font-bold text-white tracking-wide">Premium Salon Experience</span>
                  </div>
                  <div className="text-[11px] text-stone-300 leading-snug">
                    Professional styling and personalized beauty care.
                  </div>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-md border border-stone-700/80 rounded-xl p-4 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
                      Featured Unisex Experience
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Custom Hair &amp; Skincare Consultations
                    </span>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Daily Open
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Four Benefit Cards */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/90 backdrop-blur-sm flex items-start gap-4 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">Expert Styling</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Precision haircuts and tailored styling crafted by skilled professionals.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/90 backdrop-blur-sm flex items-start gap-4 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">Premium Products</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Authentic, professional-grade hair and skin formulas from trusted brands.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/90 backdrop-blur-sm flex items-start gap-4 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">Personalized Care</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                One-on-one consultations tailored to your individual style and preferences.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/90 backdrop-blur-sm flex items-start gap-4 hover:border-amber-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-white">Easy Appointment Booking</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Fast, seamless online reservation process with flexible time slots.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
