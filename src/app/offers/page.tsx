import { Metadata } from "next";
import OffersPageClient from "./OffersPageClient";

export const metadata: Metadata = {
  title: "Special Offers",
  description:
    "Discover exclusive beauty deals and special offers at Plush Beauty Spa in Khalifa City, Abu Dhabi. Save on nails, facials, massage, and more.",
  openGraph: {
    title: "Special Offers | Plush Beauty Spa",
    description:
      "Exclusive deals on beauty and wellness treatments. Limited time offers available.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/offers",
  },
};

export default function OffersPage() {
  return <OffersPageClient />;
}
