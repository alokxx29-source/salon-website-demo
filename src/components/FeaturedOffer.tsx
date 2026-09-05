import React, { useState } from 'react';
import { Tag, Sparkles, Check, Copy, ArrowRight, ShieldCheck } from 'lucide-react';

interface FeaturedOfferProps {
  onBookNow: (promoCode?: string) => void;
}

export const FeaturedOffer: React.FC<FeaturedOfferProps> = ({ onBookNow }) => {
  const [copied, setCopied] = useState(false);
  const promoCode = 'FIRSTGLOW15';

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="offer" className="py-16 bg-[#1A1817] text-white relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900/95 to-amber-950/50 border border-amber-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Offer details */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Offer</span>
              </div>

              <div className="space-y-3">
                <span className="text-amber-400 text-base sm:text-lg font-medium tracking-wide block uppercase">
                  First Visit Special
                </span>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  Get 15% OFF <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                    on your first salon visit.
                  </span>
                </h2>
                <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Step in and experience the Glow &amp; Style difference. Enjoy an exclusive 15% savings across any haircut, luxury hair spa, facial treatment, or styling service on your inaugural booking.
                </p>
              </div>

              {/* Promo Code Pill & Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Coupon copy badge */}
                <div className="flex items-center bg-stone-950/90 border border-amber-500/40 rounded-xl px-4 py-3 shadow-inner">
                  <div className="text-left mr-3">
                    <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Coupon Code</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wider">
                      {promoCode}
                    </span>
                  </div>
                  <button
                    onClick={handleCopy}
                    id="copy-promo-btn"
                    className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-colors cursor-pointer"
                    title="Copy Coupon Code"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                  </button>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() => onBookNow(promoCode)}
                  id="offer-book-now-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-base shadow-lg shadow-amber-900/40 transition-all duration-200 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-stone-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Valid for new guests
                </span>
                <span>•</span>
                <span>No minimum bill amount</span>
                <span>•</span>
                <span>Demo promotion</span>
              </div>

            </div>

            {/* Visual Stamp Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-dashed border-amber-500/40 p-3 flex items-center justify-center bg-stone-950/40 backdrop-blur-sm">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500/20 via-stone-900 to-stone-950 flex flex-col items-center justify-center text-center p-6 border border-amber-500/30 shadow-2xl">
                  <Sparkles className="w-7 h-7 text-amber-400 mb-2 animate-pulse" />
                  <span className="font-display text-4xl sm:text-5xl font-black text-amber-300">15%</span>
                  <span className="font-display text-lg font-bold text-white uppercase tracking-wider">OFF</span>
                  <span className="text-[11px] text-stone-300 mt-1 uppercase tracking-widest font-semibold">
                    First Visit Special
                  </span>
                  <span className="text-[10px] text-amber-400/80 mt-2 font-mono">
                    DEMO VOUCHER
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
