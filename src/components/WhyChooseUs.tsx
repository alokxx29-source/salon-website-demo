import React from 'react';
import { Award, Sparkles, ShieldCheck, HeartHandshake, Coffee, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/salonData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-6 h-6 text-amber-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-700" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-amber-700" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>The Salon Standard</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Why Choose Glow &amp; Style
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            We are committed to thoughtful salon hospitality, skilled styling, and a clean, comfortable environment.
          </p>
        </div>

        {/* 5 Feature Cards Grid (responsive bento style: 3 on top, 2 wide on bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-amber-800">
                <span>Glow &amp; Style Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {WHY_CHOOSE_US.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                  {getIcon(item.iconName)}
                </div>

                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                    {item.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-stone-900 mt-1">
                    {item.title}
                  </h3>
                </div>

                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-1 text-xs font-semibold text-amber-800">
                <span>Glow &amp; Style Standard</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
