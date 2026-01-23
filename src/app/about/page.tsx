import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Plush Beauty Spa - your premier beauty and wellness destination in Khalifa City, Abu Dhabi. Discover our story, values, and commitment to excellence.",
  openGraph: {
    title: "About Us | Plush Beauty Spa",
    description:
      "Your self-care destination in Khalifa City. Premium beauty and wellness since day one.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
