// Offers and special deals for Purple Crush Beauty Spa

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  originalPrice?: number;
  offerPrice?: number;
  validUntil: string;
  terms: string[];
  category: string;
  image: string;
  isHighConversion?: boolean;
  isFeatured?: boolean;
}

export const offers: Offer[] = [
  // HIGH CONVERSION OFFERS (Featured on homepage)
  {
    id: "nails-combo",
    title: "Nails Combo",
    description: "Classic manicure + pedicure with gel polish upgrade",
    discount: "Save AED 50",
    originalPrice: 180,
    offerPrice: 130,
    validUntil: "Limited Time",
    terms: ["Both services in one visit", "Gel polish included", "Valid any day"],
    category: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    isHighConversion: true,
    isFeatured: true,
  },
  {
    id: "lashes-package",
    title: "Lashes Package",
    description: "Volume lash extensions + free lash serum",
    discount: "20% OFF",
    originalPrice: 350,
    offerPrice: 280,
    validUntil: "Limited Time",
    terms: ["Full volume set", "Includes aftercare serum", "2-3 week wear"],
    category: "Eyelashes",
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    isHighConversion: true,
    isFeatured: true,
  },
  {
    id: "facial-glow-package",
    title: "Facial Glow Package",
    description: "Deep cleansing facial + vitamin C boost + LED therapy",
    discount: "Save AED 100",
    originalPrice: 400,
    offerPrice: 300,
    validUntil: "Limited Time",
    terms: ["90 min treatment", "All skin types", "Visible results"],
    category: "Facials",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    isHighConversion: true,
    isFeatured: true,
  },
  
  // OTHER OFFERS
  {
    id: "new-client-welcome",
    title: "New Client Welcome",
    description: "First-time visitors get 15% off any service",
    discount: "15% OFF",
    validUntil: "Ongoing",
    terms: ["Valid for first visit only", "Cannot combine with other offers"],
    category: "All Services",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "hammam-massage-ritual",
    title: "Hammam & Massage Ritual",
    description: "Traditional Moroccan hammam + 60-min relaxation massage",
    discount: "Save AED 80",
    originalPrice: 450,
    offerPrice: 370,
    validUntil: "Limited Time",
    terms: ["2.5 hour experience", "Includes scrub & mask", "Refreshments included"],
    category: "Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "lash-refill-deal",
    title: "Lash Refill Deal",
    description: "Book your infill within 2 weeks and save",
    discount: "25% OFF",
    validUntil: "Ongoing",
    terms: ["Within 14 days of full set", "All lash styles"],
    category: "Eyelashes",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "birthday-special",
    title: "Birthday Month Special",
    description: "Celebrate your birthday with 20% off any treatment",
    discount: "20% OFF",
    validUntil: "Ongoing",
    terms: ["Valid during birthday month", "ID required", "One use per year"],
    category: "All Services",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "waxing-bundle",
    title: "Smooth Skin Bundle",
    description: "Full legs + underarms + bikini wax combo",
    discount: "Save AED 60",
    originalPrice: 250,
    offerPrice: 190,
    validUntil: "Limited Time",
    terms: ["All areas in one session", "Premium wax used"],
    category: "Hair Removal",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "refer-friend",
    title: "Refer a Friend",
    description: "You and your friend both get AED 50 credit",
    discount: "AED 50 CREDIT",
    validUntil: "Ongoing",
    terms: ["Friend must be new client", "Credit applied after friend's first visit"],
    category: "All Services",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    isFeatured: false,
  },
  {
    id: "bridal-beauty",
    title: "Bridal Beauty Package",
    description: "Complete bridal prep: hammam + facial + nails + lashes + makeup",
    discount: "Save AED 300",
    originalPrice: 1500,
    offerPrice: 1200,
    validUntil: "Limited Time",
    terms: ["Book 1 week in advance", "Includes trial makeup", "Full day pampering"],
    category: "Bridal",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    isFeatured: false,
  },
];

// Get featured offers for homepage (high conversion offers)
export const getFeaturedOffers = (): Offer[] => {
  return offers.filter(o => o.isFeatured).slice(0, 3);
};

// Get high conversion offers
export const getHighConversionOffers = (): Offer[] => {
  return offers.filter(o => o.isHighConversion);
};

// Get all active offers
export const getAllOffers = (): Offer[] => {
  return offers;
};
