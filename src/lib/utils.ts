// Utility functions

import { type ClassValue, clsx } from "clsx";

// Combine class names conditionally
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// Format price display
export function formatPrice(price: number): string {
  return `AED ${price}`;
}

// Format phone number for display
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $4');
}

// Slugify text
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Generate WhatsApp URL with message
export function generateWhatsAppUrl(
  phone: string,
  message?: string
): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const baseUrl = `https://wa.me/${cleanPhone}`;
  
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  
  return baseUrl;
}

// Truncate text with ellipsis
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Check if we're on mobile (client-side only)
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

// Debounce function for search inputs
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Format duration string
export function formatDuration(duration: string): string {
  return duration.replace('min', ' min').replace('hour', ' hour');
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
