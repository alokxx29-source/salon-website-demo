import React, { useState } from 'react';
import { SALON_SERVICES, ServiceItem } from '../data/salonData';
import { Clock, Check, Calendar, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Care' },
    { id: 'skin', label: 'Skin & Facial' },
    { id: 'hands-feet', label: 'Hands & Feet' },
    { id: 'grooming', label: 'Men\'s Grooming' },
    { id: 'makeup', label: 'Bridal & Party Makeup' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4EFEA] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/80">
            <Sparkles className="w-3.5 h-3.5 text-amber-800" />
            <span>Salon Menu &amp; Demo Pricing</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Signature Services &amp; Treatments
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Crafted for both men and women. Each service includes a personalized consultation and is performed using premium international products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-md shadow-stone-900/20 scale-102'
                  : 'bg-white/80 text-stone-700 hover:bg-white hover:text-stone-900 border border-stone-300/70'
              }`}
            >
              {cat.label}
              {cat.id === 'all' && (
                <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-stone-700 text-stone-200">
                  {SALON_SERVICES.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Image with Duration & Category Badges */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('photo-1570172619644-dfd03ed5d881')) {
                      target.src = 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />

                {/* Top Badge: Category */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-md bg-stone-950/80 backdrop-blur-md text-amber-300 border border-stone-700/60">
                  {service.categoryLabel}
                </span>

                {/* Bottom Bar: Duration & Price */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs text-stone-200 bg-stone-950/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-semibold text-amber-300/90 block leading-tight">Demo Pricing</span>
                    <span className="text-xs text-stone-300 font-medium mr-1">Starting from</span>
                    <span className="text-xl font-bold font-display text-white">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-2 border-t border-stone-100 space-y-1.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Book Action */}
                <div className="pt-3">
                  <button
                    onClick={() => onSelectService(service.name)}
                    id={`book-service-btn-${service.id}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-amber-700 text-stone-900 hover:text-white font-semibold text-xs tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-amber-700 group-hover/btn:text-white transition-colors" />
                    <span>Book {service.name}</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-stone-500 max-w-xl mx-auto">
          * Demo Pricing shown for demonstration purposes. Starting prices may vary based on hair length, texture, or customized service requirements.
        </div>

      </div>
    </section>
  );
};
