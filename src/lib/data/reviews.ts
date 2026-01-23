// Customer reviews and testimonials for Corpoderma Spa

export interface Review {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

// Short, skimmable testimonials as per spec
export const reviews: Review[] = [
  {
    id: "1",
    name: "Fatima A.",
    service: "Slimming Program",
    rating: 5,
    text: "Professional team — I felt a difference quickly.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: "2",
    name: "Sara K.",
    service: "Body Contouring",
    rating: 5,
    text: "The place is clean, premium, and the results are real.",
    date: "3 days ago",
    verified: true,
  },
  {
    id: "3",
    name: "Mariam H.",
    service: "Consultation",
    rating: 5,
    text: "They recommended the right plan for my body.",
    date: "5 days ago",
    verified: true,
  },
  {
    id: "4",
    name: "Layla M.",
    service: "Transformation Package",
    rating: 5,
    text: "Worth it. I finally found something that works.",
    date: "2 weeks ago",
    verified: true,
  },
  {
    id: "5",
    name: "Noor S.",
    service: "RF Treatment",
    rating: 5,
    text: "Visible results after just a few sessions. Very impressed with their approach.",
    date: "4 days ago",
    verified: true,
  },
  {
    id: "6",
    name: "Hind R.",
    service: "Lymphatic Drainage",
    rating: 5,
    text: "I felt lighter and more energized. The team really knows what they're doing.",
    date: "1 week ago",
    verified: true,
  },
];

// Google review stats
export const freshaStats = {
  rating: 4.9,
  reviewCount: 320,
  platform: "Google",
};

// Get reviews for display
export const getReviews = (limit?: number): Review[] => {
  if (limit) {
    return reviews.slice(0, limit);
  }
  return reviews;
};
