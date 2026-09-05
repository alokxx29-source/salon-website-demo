import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/salonData';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* WhatsApp Floating Button */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="pointer-events-auto w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative border border-emerald-400/30"
        title="Chat with Salon on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-stone-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-stone-800 hidden sm:block">
          Chat on WhatsApp
        </span>
      </a>

      {/* Book Now Floating Pill for Mobile */}
      <button
        onClick={onBookClick}
        id="floating-book-btn"
        className="pointer-events-auto sm:hidden px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-xl flex items-center gap-2 border border-amber-400/60 active:scale-95 transition-transform cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-stone-950" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
