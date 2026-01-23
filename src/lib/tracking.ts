// Analytics tracking utilities for GA4 and Meta Pixel

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

// GA4 Event Types
type GA4Event = 
  | 'book_click'
  | 'whatsapp_click'
  | 'offer_click'
  | 'service_view'
  | 'search_used'
  | 'filter_applied'
  | 'package_view'
  | 'category_view'
  | 'phone_click';

interface EventParams {
  service_name?: string;
  category?: string;
  source?: string;
  source_page?: string;
  source_section?: string;
  offer_name?: string;
  search_term?: string;
  filter_type?: string;
  filter_value?: string;
  package_name?: string;
  value?: number;
}

// Track custom GA4 events
export const trackEvent = (eventName: GA4Event, params?: EventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

// Track book button click
export const trackBookClick = (
  serviceName: string,
  category: string,
  source: string
): void => {
  trackEvent('book_click', {
    service_name: serviceName,
    category,
    source,
  });
  
  // Also track Meta Pixel InitiateCheckout
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_name: serviceName,
      content_category: category,
    });
  }
};

// Track WhatsApp click
export const trackWhatsAppClick = (
  sourcePage: string,
  sourceSection: string
): void => {
  trackEvent('whatsapp_click', {
    source_page: sourcePage,
    source_section: sourceSection,
  });
  
  // Also track Meta Pixel Contact
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: 'WhatsApp',
    });
  }
};

// Track offer click
export const trackOfferClick = (offerName: string): void => {
  trackEvent('offer_click', {
    offer_name: offerName,
  });
};

// Track service view
export const trackServiceView = (
  serviceName: string,
  category: string
): void => {
  trackEvent('service_view', {
    service_name: serviceName,
    category,
  });
  
  // Also track Meta Pixel ViewContent
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: serviceName,
      content_category: category,
    });
  }
};

// Track category view
export const trackCategoryView = (category: string): void => {
  trackEvent('category_view', {
    category,
  });
};

// Track search usage
export const trackSearch = (searchTerm: string): void => {
  trackEvent('search_used', {
    search_term: searchTerm,
  });
  
  // Also track Meta Pixel Search
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchTerm,
    });
  }
};

// Track filter applied
export const trackFilter = (filterType: string, filterValue: string): void => {
  trackEvent('filter_applied', {
    filter_type: filterType,
    filter_value: filterValue,
  });
};

// Track package view
export const trackPackageView = (
  packageName: string,
  value: number
): void => {
  trackEvent('package_view', {
    package_name: packageName,
    value,
  });
};

// Track phone click
export const trackPhoneClick = (source: string): void => {
  trackEvent('phone_click', {
    source,
  });
};

// Page view tracking (called automatically by GA4, but can be used for SPAs)
export const trackPageView = (url: string, title: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID, {
      page_path: url,
      page_title: title,
    });
  }
  
  // Meta Pixel PageView
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};
