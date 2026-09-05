import React, { useState, useEffect } from 'react';
import { Scissors, Phone, MessageCircle, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/salonData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'First Visit Offer', href: '#offer' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Demo Bar */}
      <div className="bg-stone-900 text-stone-300 text-xs px-4 py-1.5 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-amber-300 font-medium tracking-wider uppercase text-[11px] bg-amber-950/60 border border-amber-800/40 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Demo Showcase
            </span>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline text-stone-300">Premium Unisex Salon Template for Prospective Clients</span>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[12px]">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              id="top-bar-call-btn"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-medium">{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <span className="text-stone-700 hidden md:inline">•</span>
            <span className="hidden md:inline text-stone-400">Open Daily: 9:30 AM – 8:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navigation"
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'bg-stone-950/90 backdrop-blur-md text-stone-100 shadow-xl py-3 border-b border-stone-800/60'
            : 'bg-stone-950/75 backdrop-blur-sm text-stone-100 py-4 border-b border-stone-800/30'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" id="brand-logo-link" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                <Scissors className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                Glow &amp; Style
              </span>
              <span className="text-[10px] tracking-[0.25em] text-amber-400/90 uppercase font-medium -mt-0.5">
                Unisex Salon
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-900/60 transition-colors"
              title="Chat with Salon on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              id="nav-book-appointment-btn"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md shadow-amber-900/20 hover:shadow-amber-700/30 transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="lg:hidden p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-stone-800 bg-stone-950/95 backdrop-blur-lg rounded-2xl p-5 space-y-3 shadow-2xl">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-stone-200 hover:bg-stone-800/80 hover:text-amber-300 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-semibold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-stone-800 text-stone-200 text-xs font-semibold hover:bg-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Call Now
                </a>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 text-xs font-semibold hover:bg-emerald-900 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
