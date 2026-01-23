"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/data/contact";
import { trackWhatsAppClick } from "@/lib/tracking";

// Navigation links matching Corpoderma spec
const navLinks = [
  { href: "/treatments", label: "Treatments" },
  { href: "/results", label: "Results" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Only allow transparent header on homepage
  const isHomePage = pathname === "/";
  const shouldBeTransparent = isHomePage && !isScrolled;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleWhatsAppClick = () => {
    trackWhatsAppClick("header", "nav");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent
            ? "bg-transparent py-5"
            : "bg-white/95 backdrop-blur-md shadow-sm py-3"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span
              className={`font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors ${
                shouldBeTransparent && !isMobileMenuOpen
                  ? "text-white"
                  : "text-[var(--color-primary)]"
              }`}
            >
              Corpoderma
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:opacity-70 ${
                  isActive(link.href)
                    ? "text-[var(--color-primary)]"
                    : shouldBeTransparent
                    ? "text-white"
                    : "text-[var(--color-charcoal)]"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons - Book Consultation + WhatsApp as per spec */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </a>
            <Link href="/book" className="btn btn-primary btn-sm">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-all ${
              shouldBeTransparent && !isMobileMenuOpen 
                ? "bg-black/20 backdrop-blur-sm" 
                : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6 text-[var(--color-charcoal)]" />
            ) : (
              <HiMenu
                className={`w-6 h-6 ${
                  shouldBeTransparent 
                    ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" 
                    : "text-[var(--color-charcoal)]"
                }`}
              />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6 px-6"
            >
              {/* Home link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-serif transition-colors ${
                    isActive("/")
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-charcoal)] hover:text-[var(--color-primary)]"
                  }`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home
                </Link>
              </motion.div>
              
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif transition-colors ${
                      isActive(link.href)
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-charcoal)] hover:text-[var(--color-primary)]"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex flex-col gap-4 mt-8 w-full max-w-xs"
              >
                <a
                  href={`${contactInfo.whatsapp.link}?text=${encodeURIComponent(contactInfo.whatsapp.messageTemplate)}`}
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMobileMenuOpen(false);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full justify-center"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp Now
                </a>
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full justify-center"
                >
                  Book Consultation
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
