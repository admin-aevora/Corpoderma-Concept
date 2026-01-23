import { Metadata } from "next";
import PackagesPageClient from "./PackagesPageClient";

export const metadata: Metadata = {
  title: "Spa Packages",
  description:
    "Discover our curated spa packages at Plush Beauty Spa. Enjoy bundled treatments at special prices for the ultimate pampering experience in Khalifa City, Abu Dhabi.",
  openGraph: {
    title: "Spa Packages | Plush Beauty Spa",
    description:
      "Curated treatment bundles for complete relaxation. Save on premium spa experiences.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/packages",
  },
};

export default function PackagesPage() {
  return <PackagesPageClient />;
}
