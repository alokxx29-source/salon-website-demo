import React from 'react';
import { Sparkles, Users, Award, Shield, CheckCircle } from 'lucide-react';

interface AboutProps {
  onBookClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>About Glow &amp; Style</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Where Modern Artistry Meets Uncompromising Care
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Welcome to Glow &amp; Style Salon — a modern unisex destination crafted for individuals who appreciate refined styling, attentive hygiene, and genuine personal attention.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase - Layered Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200/80 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern unisex interior at Glow and Style Salon"
                  className="w-full h-[360px] sm:h-[440px] object-cover hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset Overlapping Detail Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] bg-white hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80"
                  alt="Relaxing hair spa session"
                  className="w-full h-[220px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-stone-900 text-stone-100 rounded-2xl p-5 shadow-xl border border-amber-500/30 max-w-[210px]">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-white">Personalized Beauty Care</div>
                <div className="text-xs text-stone-300 mt-1 leading-snug">
                  Professional services tailored to your style and needs.
                </div>
              </div>

            </div>
          </div>

          {/* Narrative & Feature List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
                A Comfortable &amp; Stylish Environment For Everyone
              </h3>
              
              <p className="text-stone-600 leading-relaxed text-base">
                Established with a vision to provide quality salon care, Glow &amp; Style Salon unites gender-inclusive hair design, restorative facial care, precision beard grooming, and event styling in a comfortable, relaxed environment.
              </p>

              <p className="text-stone-600 leading-relaxed text-base">
                Whether you visit us for a quick midday refresh, a complete hair transformation, or pre-wedding makeup pampering, our team blends friendly consultation with professional techniques so you always leave feeling your best.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-2">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">True Unisex Approach</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated styling stations and private treatment areas designed for men and women.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-2">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Professional Stylists</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Stylists skilled in modern haircuts, balayage blends, and personalized styling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Hygiene-Focused Service</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Sanitized tools, fresh towels, and clean workstations for every client.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 mb-2">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-stone-900 text-sm">Premium Products</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Formulated with Olaplex, L'Oréal Professionnel, Moroccanoil, and Dermalogica.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Experience Our Salon</span>
                <span className="text-amber-400">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
