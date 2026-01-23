import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { contactInfo, operatingHours } from "@/lib/data/contact";

const quickLinks = [
  { href: "/treatments", label: "Treatments" },
  { href: "/results", label: "Results" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Consultation" },
];

const treatmentLinks = [
  { href: "/treatments/slimming", label: "Slimming & Contouring" },
  { href: "/treatments/skin", label: "Skin & Aesthetics" },
  { href: "/treatments/wellness", label: "Wellness & Recovery" },
  { href: "/packages", label: "Packages" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-white">
      {/* Main Footer */}
      <div className="container section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Corpoderma
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Premium slimming and aesthetic treatments in Abu Dhabi. 
              Visible results with specialist-guided plans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={contactInfo.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address.full}</span>
              </a>
              <a
                href={contactInfo.phone.link}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <FaPhone className="flex-shrink-0" />
                <span>{contactInfo.phone.display}</span>
              </a>
              <a
                href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <FaWhatsapp className="flex-shrink-0" />
                <span>{contactInfo.whatsapp.display}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-lg mb-5 text-white">Treatments</h4>
            <ul className="space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-serif text-lg mb-5 text-white">Opening Hours</h4>
            <div className="space-y-2 text-sm text-white/70 mb-6" role="list" aria-label="Operating hours">
              <p className="flex justify-between" role="listitem">
                <span>{operatingHours.weekdays.days}</span>
                <span>{operatingHours.weekdays.hours}</span>
              </p>
              <p className="flex justify-between" role="listitem">
                <span>{operatingHours.friday.days}</span>
                <span>{operatingHours.friday.hours}</span>
              </p>
              <p className="flex justify-between" role="listitem">
                <span>{operatingHours.saturday.days}</span>
                <span>{operatingHours.saturday.hours}</span>
              </p>
            </div>

            {/* Social Links */}
            <h4 className="font-serif text-lg mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-whatsapp)] transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Corpoderma Spa & Slimming Lounge. All rights reserved.</p>
          <p className="text-white/40 text-xs">
            Concept by Ihab — Not associated with Corpoderma Spa
          </p>
        </div>
      </div>
    </footer>
  );
}
