import React, { useState } from 'react';
import { SALON_GALLERY, GalleryItem } from '../data/salonData';
import { Sparkles, Maximize2, X, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'hair-styling', label: 'Hair Styling' },
    { id: 'hair-coloring', label: 'Hair Coloring' },
    { id: 'facial', label: 'Facial Treatment' },
    { id: 'makeup', label: 'Makeup' },
    { id: 'grooming', label: 'Grooming' },
  ];

  const filteredItems = activeCategory === 'all'
    ? SALON_GALLERY
    : SALON_GALLERY.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold tracking-wider uppercase border border-amber-300/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Visual Portfolio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Salon Ambiance &amp; Artistry
          </h2>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Take a glance inside our luxury interior and explore real transformations across hair styling, radiant skincare, bridal aesthetics, and gentleman grooming.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/80 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-72"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1521590832167-7bcbfaa6381f')) {
                    target.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80';
                  }
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-stone-950/80 backdrop-blur-md text-amber-300 border border-stone-700/60">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-stone-950/80 backdrop-blur-md text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h3 className="font-display font-bold text-base leading-tight group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/80 text-stone-300 hover:text-white border border-stone-700 hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-stone-900 text-white space-y-2 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs text-stone-400">Glow &amp; Style Demo Portfolio</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
