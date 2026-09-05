/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FeaturedOffer } from './components/FeaturedOffer';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Haircut & Styling');
  const [appliedPromo, setAppliedPromo] = useState<string>('');

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToAppointment();
  };

  const handleOfferBookNow = (promoCode: string = 'FIRSTGLOW15') => {
    setAppliedPromo(promoCode);
    scrollToAppointment();
  };

  const handleClearPromo = () => {
    setAppliedPromo('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-700/20 selection:text-amber-950 font-sans">
      {/* Navigation */}
      <Navbar onBookClick={scrollToAppointment} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onBookClick={scrollToAppointment}
          onServicesClick={scrollToServices}
        />

        {/* 2. About Section */}
        <About onBookClick={scrollToAppointment} />

        {/* 3. Services Section (10 signature services) */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Featured Offer Section ("First Visit Special" - 15% OFF) */}
        <FeaturedOffer onBookNow={handleOfferBookNow} />

        {/* 5. Gallery Section (Interior, styling, coloring, facial, makeup, grooming) */}
        <Gallery />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Testimonials Section (3 demo client reviews) */}
        <Testimonials />

        {/* 8. Appointment Reservation Section */}
        <AppointmentSection
          preselectedService={selectedService}
          promoCodeApplied={appliedPromo}
          onClearPromo={handleClearPromo}
        />

        {/* 9. Contact Section with Map Placeholder & Opening Hours */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer
        onBookClick={scrollToAppointment}
        onSelectService={handleSelectService}
      />

      {/* Floating Quick Action Contacts (WhatsApp & Book Now) */}
      <FloatingActions onBookClick={scrollToAppointment} />
    </div>
  );
}
