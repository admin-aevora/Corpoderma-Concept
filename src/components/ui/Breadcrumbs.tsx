"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      <Link
        href="/"
        className="text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          <FaChevronRight className="text-xs text-[var(--color-warm-gray)]" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-[var(--color-warm-gray)] hover:text-[var(--color-charcoal)] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--color-charcoal)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
