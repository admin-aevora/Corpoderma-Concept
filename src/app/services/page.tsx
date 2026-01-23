import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of beauty and wellness services at Plush Beauty Spa in Khalifa City, Abu Dhabi. Nails, lashes, facials, hammam, massage and more.",
  openGraph: {
    title: "Services | Plush Beauty Spa",
    description:
      "Browse 100+ premium beauty and wellness treatments. Book your appointment today.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
