// Spa packages for high AOV bookings

export interface Package {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  totalValue: number;
  packagePrice: number;
  savings: number;
  services: string[];
  image: string;
  freshaUrl: string;
  isBestSeller?: boolean;
}

const FRESHA_BASE_URL = "https://www.fresha.com/a/plush-beauty-spa-abu-dhabi-khalifa-city-a-street-12-l5zvp6pe";

export const packages: Package[] = [
  {
    id: "ultimate-relaxation",
    name: "Ultimate Relaxation",
    tagline: "Complete head-to-toe pampering",
    description: "Escape into complete tranquility with our signature relaxation package. Perfect for those seeking a full spa day experience.",
    duration: "3.5 hours",
    totalValue: 700,
    packagePrice: 550,
    savings: 150,
    services: [
      "Moroccan Hammam (90 min)",
      "Relaxation Massage (60 min)",
      "Express Facial (30 min)",
      "Classic Manicure (30 min)",
    ],
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
    isBestSeller: true,
  },
  {
    id: "glow-getter",
    name: "Glow Getter",
    tagline: "Radiant skin from head to toe",
    description: "Achieve luminous, glowing skin with our curated combination of exfoliation, hydration, and rejuvenation treatments.",
    duration: "2.5 hours",
    totalValue: 530,
    packagePrice: 420,
    savings: 110,
    services: [
      "Brightening Facial (60 min)",
      "Full Body Scrub (45 min)",
      "Hydrating Body Wrap (45 min)",
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "lash-brow-perfection",
    name: "Lash & Brow Perfection",
    tagline: "Frame your face beautifully",
    description: "Define your eyes with our complete lash and brow package for a polished, effortlessly beautiful look.",
    duration: "2 hours",
    totalValue: 330,
    packagePrice: 280,
    savings: 50,
    services: [
      "Classic Lash Extensions (90 min)",
      "Eyebrow Threading (15 min)",
      "Brow Tint (15 min)",
    ],
    image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "bridal-bliss",
    name: "Bridal Bliss",
    tagline: "Be radiant on your special day",
    description: "Our comprehensive bridal package ensures you look and feel your absolute best. Includes trial sessions for makeup and hair.",
    duration: "Full Day",
    totalValue: 1800,
    packagePrice: 1400,
    savings: 400,
    services: [
      "Bridal Makeup with Trial",
      "Hair Styling with Trial",
      "Gel Manicure & Pedicure",
      "Anti-Aging Facial",
      "Full Body Wax",
      "Relaxation Massage (60 min)",
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "mommy-me",
    name: "Mommy & Me",
    tagline: "Quality time together",
    description: "Share a special spa experience with your little one. Perfect for mother-daughter bonding time.",
    duration: "1.5 hours",
    totalValue: 180,
    packagePrice: 150,
    savings: 30,
    services: [
      "Classic Manicure (Mom)",
      "Kids Manicure",
      "Classic Pedicure (Mom)",
      "Kids Pedicure",
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "gentleman-grooming",
    name: "Gentleman's Grooming",
    tagline: "Refined care for men",
    description: "A tailored grooming experience designed for men who appreciate quality self-care.",
    duration: "2 hours",
    totalValue: 400,
    packagePrice: 320,
    savings: 80,
    services: [
      "Men's Facial (60 min)",
      "Classic Manicure (30 min)",
      "Classic Pedicure (45 min)",
    ],
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "express-refresh",
    name: "Express Refresh",
    tagline: "Quick pick-me-up",
    description: "Short on time? Get refreshed and polished in under 2 hours with our express package.",
    duration: "1.5 hours",
    totalValue: 230,
    packagePrice: 190,
    savings: 40,
    services: [
      "Express Facial (30 min)",
      "Classic Manicure (30 min)",
      "Blow Dry (30 min)",
    ],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
  {
    id: "party-prep",
    name: "Party Prep",
    tagline: "Event-ready in one visit",
    description: "Get glamorous and event-ready with this all-inclusive preparation package.",
    duration: "3 hours",
    totalValue: 550,
    packagePrice: 450,
    savings: 100,
    services: [
      "Party Makeup",
      "Hair Styling",
      "Gel Manicure",
      "Lash Lift & Tint",
    ],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    freshaUrl: `${FRESHA_BASE_URL}/services`,
  },
];

// Get best seller packages
export const getBestSellerPackages = (): Package[] => {
  return packages.filter(p => p.isBestSeller);
};

// Get all packages
export const getAllPackages = (): Package[] => {
  return packages;
};
