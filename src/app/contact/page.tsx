import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Plush Beauty Spa in Khalifa City, Abu Dhabi. Call, WhatsApp, or visit us. Open 7 days a week.",
  openGraph: {
    title: "Contact Us | Plush Beauty Spa",
    description:
      "Visit us in Khalifa City, Abu Dhabi. Call 02 556 8600 or WhatsApp 055 316 6594.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
