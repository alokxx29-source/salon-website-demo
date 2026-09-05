import React from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SALON_SERVICES } from '../data/salonData';

interface FooterProps {
  onBookClick: () => void;
  onSelectService: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick, onSelectService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Salon', href: '#about' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'First Visit Offer', href: '#offer' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Book Appointment', href: '#appointment' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800/80">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                  <Scissors className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  Glow &amp; Style Salon
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-400/90 uppercase font-medium">
                  Modern Unisex Salon
                </span>
              </div>
            </a>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              A contemporary salon retreat delivering bespoke haircutting, restorative botanical hair spas, event makeup, and personalized skincare in a serene, welcoming setting.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Demo Link"
                id="footer-instagram-icon"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-800 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Demo Link"
                id="footer-facebook-icon"
                className="w-10 h-10 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-800 text-stone-300 hover:text-amber-400 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-800/40 text-[11px] text-amber-300">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Client Demo Website Showcase</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              {SALON_SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.name)}
                    className="hover:text-amber-300 transition-colors text-left cursor-pointer"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Contact &amp; Hours
            </h3>
            
            <div className="space-y-3 text-sm text-stone-400">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </p>
              
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Book An Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 Glow &amp; Style Salon — Demo Website
          </div>

          <div className="text-center sm:text-right text-[11px] text-stone-500">
            Fictional business presentation model. All photos, logos &amp; copy designed for client demonstration.
          </div>

          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
