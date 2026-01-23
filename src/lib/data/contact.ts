// Contact information and business details for Corpoderma Spa & Slimming Lounge

export const contactInfo = {
  // Business name
  name: "Corpoderma Spa & Slimming Lounge",
  shortName: "Corpoderma",
  
  // Location - Abu Dhabi
  address: {
    street: "Al Reem Island",
    area: "Sky Tower",
    city: "Abu Dhabi",
    country: "UAE",
    full: "Al Reem Island, Sky Tower, Abu Dhabi, UAE",
    landmark: "Near Sun & Sky Tower",
    directions: "Ground floor, easily accessible parking available",
  },
  
  // Phone
  phone: {
    display: "02 XXX XXXX",
    link: "tel:+9712XXXXXXX",
  },
  
  // WhatsApp - Primary booking channel
  whatsapp: {
    number: "971XXXXXXXXX",
    display: "05X XXX XXXX",
    link: "https://wa.me/971XXXXXXXXX",
    // Pre-formatted message for general consultation
    consultationMessage: "Hi Corpoderma 👋\nI want to book a consultation for [Slimming / Skin / Wellness].\nPreferred day/time: __\nName: __",
    // Pre-formatted message for treatment booking
    treatmentMessage: "Hi Corpoderma 👋\nI want to book [Treatment name].\nPreferred day/time: __\nName: __",
    // Default message template
    messageTemplate: "Hi Corpoderma 👋\nI'd like to book a consultation.\nPreferred day/time: \nMy name: ",
  },
  
  // Email
  email: {
    address: "info@corpodermaspa.com",
    link: "mailto:info@corpodermaspa.com",
  },
  
  // Social Media
  social: {
    instagram: "https://www.instagram.com/corpodermaspa/",
    facebook: "https://www.facebook.com/corpodermaspa/",
  },
  
  // Google Maps - Abu Dhabi location
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.4!2d54.366!3d24.486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Corpoderma+Spa+Abu+Dhabi",
  },
};

// Operating hours
export const operatingHours = {
  weekdays: {
    days: "Sunday - Thursday",
    hours: "10:00 AM - 9:00 PM",
  },
  friday: {
    days: "Friday",
    hours: "2:00 PM - 9:00 PM",
  },
  saturday: {
    days: "Saturday",
    hours: "10:00 AM - 9:00 PM",
  },
};

// Generate WhatsApp link with custom message for consultation
export const getWhatsAppConsultationLink = (category?: string): string => {
  const baseUrl = contactInfo.whatsapp.link;
  let message = "Hi Corpoderma 👋\n";
  
  if (category) {
    message += `I want to book a consultation for ${category}.\nPreferred day/time: __\nName: __`;
  } else {
    message += "I'd like to book a consultation.\nPreferred day/time: __\nName: __";
  }
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

// Generate WhatsApp link for treatment booking
export const getWhatsAppTreatmentLink = (treatment?: string): string => {
  const baseUrl = contactInfo.whatsapp.link;
  let message = "Hi Corpoderma 👋\n";
  
  if (treatment) {
    message += `I want to book ${treatment}.\nPreferred day/time: __\nName: __`;
  } else {
    message += "I want to book a treatment.\nPreferred day/time: __\nName: __";
  }
  
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

// Generate general WhatsApp link
export const getWhatsAppLink = (service?: string): string => {
  return getWhatsAppConsultationLink(service);
};

// Generate booking link - WhatsApp is primary for Corpoderma
export const getBookingLink = (service?: string): string => {
  return getWhatsAppLink(service);
};

// Trust indicators for hero section (matching spec)
export const trustIndicators = [
  {
    icon: "target",
    text: "Result-driven treatments",
  },
  {
    icon: "shield",
    text: "Premium hygienic environment",
  },
  {
    icon: "user-check",
    text: "Specialist-guided plans",
  },
  {
    icon: "calendar",
    text: "Same-week appointments",
  },
];
