import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Analytics from "@/components/layout/Analytics";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corpodermaspa.com"),
  title: {
    default: "Corpoderma Spa & Slimming Lounge | Premium Slimming & Aesthetics in Abu Dhabi",
    template: "%s | Corpoderma Spa",
  },
  description:
    "Visible results. Real confidence. Experience premium slimming and aesthetic treatments at Corpoderma Spa in Abu Dhabi. Body contouring, skin treatments, and wellness services with specialist-guided plans.",
  keywords: [
    "slimming spa Abu Dhabi",
    "body contouring Abu Dhabi",
    "aesthetic treatments Abu Dhabi",
    "cavitation Abu Dhabi",
    "radio frequency treatment Abu Dhabi",
    "lymphatic drainage Abu Dhabi",
    "skin rejuvenation Abu Dhabi",
    "wellness spa Abu Dhabi",
    "Corpoderma Spa",
    "body sculpting Abu Dhabi",
  ],
  authors: [{ name: "Corpoderma Spa & Slimming Lounge" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://corpodermaspa.com",
    siteName: "Corpoderma Spa & Slimming Lounge",
    title: "Corpoderma Spa | Visible Results. Real Confidence.",
    description:
      "Premium slimming and aesthetic treatments in Abu Dhabi. Result-driven treatments, specialist-guided plans, and measurable progress.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corpoderma Spa - Abu Dhabi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corpoderma Spa | Premium Slimming & Aesthetics",
    description:
      "Visible results. Real confidence. Premium slimming treatments in Abu Dhabi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Corpoderma Spa & Slimming Lounge",
  image: "https://corpodermaspa.com/og-image.jpg",
  "@id": "https://corpodermaspa.com",
  url: "https://corpodermaspa.com",
  telephone: "+971 2 XXX XXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Reem Island, Sky Tower",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.499,
    longitude: 54.409,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "14:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "320",
    bestRating: "5",
  },
  priceRange: "$$$",
  description: "Premium slimming and aesthetic treatments with visible results. Body contouring, skin treatments, and wellness services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
