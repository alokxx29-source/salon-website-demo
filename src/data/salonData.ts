export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'hands-feet' | 'makeup' | 'grooming';
  categoryLabel: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'hair-styling' | 'hair-coloring' | 'facial' | 'makeup' | 'grooming';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  service: string;
  comment: string;
  date: string;
  avatar: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: 'haircut-styling',
    name: 'Haircut & Styling',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Precision cut tailored to your face shape and personal aesthetic, followed by luxury blow-dry and professional styling.',
    price: 899,
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    features: ['Consultation & Hair Analysis', 'Hydrating Wash & Scalp Massage', 'Tailored Cut & Heat Protectant Styling']
  },
  {
    id: 'hair-coloring',
    name: 'Hair Coloring',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Bespoke highlights, global color, balayage or root touch-up using ammonia-free, hair-nourishing premium pigments.',
    price: 2799,
    duration: '120 mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    features: ['Color Tone Matching', 'Bond Protection Treatment', 'Post-Color Gloss & Silk Blowout']
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    category: 'hair',
    categoryLabel: 'Hair Care',
    description: 'Intense therapeutic treatment for damaged, frizzy or dry hair with rich botanical masks, micro-mist steam and deep scalp relaxation.',
    price: 1499,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    features: ['Scalp Detox & Exfoliation', 'Keratin & Argan Moisture Mask', 'Aromatherapy Shoulder & Neck Massage']
  },
  {
    id: 'facial',
    name: 'Facial',
    category: 'skin',
    categoryLabel: 'Skin & Beauty',
    description: 'Customized luxury facial addressing hydration, brightness and anti-aging with clinical botanical serums and cooling jade therapy.',
    price: 1999,
    duration: '60 mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    features: ['Deep Pore Ultrasonic Cleanse', 'Hydrating Botanical Infusion', 'Collagen Mask & Acupressure Lifting']
  },
  {
    id: 'cleanup',
    name: 'Cleanup',
    category: 'skin',
    categoryLabel: 'Skin & Beauty',
    description: 'Quick yet thorough skin revitalization: gentle steaming, blackhead removal, fruit enzyme peel, and purifying clay mask.',
    price: 999,
    duration: '40 mins',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    features: ['Gentle Herbal Steam', 'Comedone & Blackhead Extraction', 'Soothing Chamomile Gel Finish']
  },
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'hands-feet',
    categoryLabel: 'Hands & Feet',
    description: 'Complete nail shaping, cuticle therapy, aromatic hand scrub, relaxing reflexology massage, and premium long-wear lacquer.',
    price: 799,
    duration: '45 mins',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
    features: ['Nail Reshaping & Cuticle Care', 'Sugar Scrub Exfoliation', 'Strengthening Base & High-Shine Finish']
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'hands-feet',
    categoryLabel: 'Hands & Feet',
    description: 'Relaxing foot soak with Himalayan bath salts, callus smoothing, revitalizing mint scrub, foot massage, and buff or polish.',
    price: 999,
    duration: '50 mins',
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80',
    features: ['Mineral Foot Soak', 'Callus Softening & Buffing', 'Moisture Wrap & Pressure Point Relief']
  },
  {
    id: 'beard-styling',
    name: 'Beard Styling',
    category: 'grooming',
    categoryLabel: 'Grooming',
    description: 'Expert beard trimming, razor contouring, hot towel preparation, and conditioning with cedarwood organic beard elixirs.',
    price: 499,
    duration: '30 mins',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    features: ['Precision Blade Edge Lining', 'Hot Towel Steam Treatment', 'Beard Butter & Conditioning Finish']
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup & Artistry',
    description: 'Flawless HD/Airbrush bridal makeover designed to last 16+ hours, including hairstyle setting, draping, and luxury lashes.',
    price: 7999,
    duration: '180 mins',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    features: ['Pre-Bridal Consultation', 'HD Waterproof Makeup Application', 'Intricate Hair Styling & Dupatta Draping']
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup & Artistry',
    description: 'Glamorous evening or festive makeover with radiant dewy skin, defined eyes, contouring, and complimentary hairstyling touch.',
    price: 2999,
    duration: '75 mins',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80',
    features: ['High-Definition Skin Prep', 'Smokey or Soft Glam Eye Art', 'Setting Spray & Volumizing Hair Finish']
  }
];

export const SALON_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Luxury Styling Stations',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    description: 'Warm ambient backlighting, ergonomic Italian leather salon chairs, and minimalist brass mirrors.'
  },
  {
    id: 'gal-2',
    title: 'Modern Hair Styling & Blowout',
    category: 'hair-styling',
    categoryLabel: 'Hair Styling',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    description: 'Dimensional beach waves styled with Dyson Supersonic professional tech.'
  },
  {
    id: 'gal-3',
    title: 'Caramel Balayage & Glaze',
    category: 'hair-coloring',
    categoryLabel: 'Hair Coloring',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Sun-kissed transitions seamlessly blended with root shadow for low-maintenance brilliance.'
  },
  {
    id: 'gal-4',
    title: 'Hydra-Glow Facial Treatment',
    category: 'facial',
    categoryLabel: 'Facial Treatment',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Rejuvenating facial therapy in our private soundproof skincare wellness suite.'
  },
  {
    id: 'gal-5',
    title: 'Editorial & Bridal Makeup',
    category: 'makeup',
    categoryLabel: 'Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Flawless complexion artistry with soft illuminated golden shimmer.'
  },
  {
    id: 'gal-6',
    title: 'Precision Gentleman Grooming',
    category: 'grooming',
    categoryLabel: 'Grooming',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Razor-sharp lines and hot towel therapy tailored for the modern gentleman.'
  },
  {
    id: 'gal-7',
    title: 'Spa Shampoo & Relaxation Lounge',
    category: 'interior',
    categoryLabel: 'Salon Interior',
    imageUrl: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80',
    description: 'Reclining massage wash basins designed for complete serenity.'
  },
  {
    id: 'gal-8',
    title: 'Vibrant Ash Blonde Transformation',
    category: 'hair-coloring',
    categoryLabel: 'Hair Coloring',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    description: 'Clean cool tones formulated with bond-rebuilding Olaplex systems.'
  }
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 'stylists',
    title: 'Professional Stylists',
    subtitle: 'Experienced Hair & Beauty Artistes',
    description: 'Our skilled stylists and aesthetic specialists provide personalized hair designs and grooming crafted with contemporary techniques.',
    iconName: 'Award'
  },
  {
    id: 'products',
    title: 'Premium Products',
    subtitle: '100% Authentic & Professional',
    description: 'We exclusively formulate with trusted salon brands including Olaplex, L\'Oréal Professionnel, Moroccanoil, and Dermalogica.',
    iconName: 'Sparkles'
  },
  {
    id: 'hygiene',
    title: 'Hygienic Environment',
    subtitle: 'Hygiene-Focused Service',
    description: 'Sanitized professional tools, fresh single-use styling sheets, and clean, comfortable private styling stations.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'service',
    title: 'Personalized Care',
    subtitle: 'Tailored to Your Style & Needs',
    description: 'Every appointment begins with a friendly consultation to understand your hair texture, skin preferences, and daily routine.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'atmosphere',
    title: 'Comfortable Atmosphere',
    subtitle: 'Relaxing Salon Experience',
    description: 'Enjoy calming salon interiors, comfortable ergonomic seating, and complimentary beverages during your visit.',
    iconName: 'Coffee'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Ananya Sharma',
    role: 'Fashion Consultant',
    rating: 5,
    service: 'Balayage & Hair Spa',
    comment: 'Hands down the best salon experience! The stylist took time to study my hair texture before suggesting the caramel balayage. It turned out even better than my reference photos, and my hair feels so healthy.',
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Rohan Mehra',
    role: 'Tech Executive',
    rating: 5,
    service: 'Haircut & Beard Styling',
    comment: 'Finding a unisex salon that understands both modern men\'s grooming and high-end styling is rare. The hot towel treatment and razor fade were flawless. Super clean, courteous team and great ambiance.',
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Priyanka Kapoor',
    role: 'Creative Producer',
    rating: 5,
    service: 'Hydra Facial & Party Makeup',
    comment: 'Booked Glow & Style for my sister\'s cocktail evening. The facial gave my skin an unbelievable glass-glow, and the makeup was feather-light yet stayed fresh all night long. Highly recommend them!',
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
  }
];

export const CONTACT_INFO = {
  phone: '+91 90000 00000',
  phoneDisplay: '+91 90000 00000',
  email: 'hello@glowandstylesalon.demo',
  address: 'Main Market, Your City',
  city: 'Your City',
  mapQuery: 'Main Market, City Center',
  hours: [
    { days: 'Monday – Friday', time: '9:30 AM – 8:30 PM' },
    { days: 'Saturday', time: '9:00 AM – 9:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 7:30 PM' }
  ],
  whatsappLink: 'https://wa.me/919000000000?text=Hi%20Glow%20%26%20Style%20Salon%2C%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.'
};
