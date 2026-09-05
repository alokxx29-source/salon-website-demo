import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F4EFEA] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/70 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Sample Testimonials — Demo Content</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Loved By Our Guests
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Sample client impressions showcasing how reviews, styling service tags, and guest feedback can be presented on your salon website.
          </p>

          <div className="inline-block px-3.5 py-1 rounded-full bg-stone-200/80 text-[11px] font-semibold text-stone-700 border border-stone-300">
            Sample Testimonials — Demo Content
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 relative group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-stone-200 group-hover:text-amber-200 transition-colors" />
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 text-stone-700">
                  Service: {t.service}
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-300/60 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-display font-bold text-stone-900 text-sm">{t.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified Demo Client" />
                  </div>
                  <p className="text-[11px] text-stone-500">{t.role} • {t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Showcase Banner */}
        <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-white p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-800 border border-amber-300/60 shrink-0">
              <Sparkles className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <div className="text-base font-bold font-display text-stone-900">
                Premium Salon Experience
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Professional styling and personalized beauty care.
              </div>
            </div>
          </div>
          <div className="text-xs text-stone-500 text-center sm:text-right font-medium">
            Sample Testimonials — Demo Content
          </div>
        </div>

      </div>
    </section>
  );
};
