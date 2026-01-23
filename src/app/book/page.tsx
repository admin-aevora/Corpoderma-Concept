import { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your beauty appointment at Plush Beauty Spa in Khalifa City, Abu Dhabi. Easy online booking via Fresha or WhatsApp.",
  openGraph: {
    title: "Book Appointment | Plush Beauty Spa",
    description:
      "Book your treatment in seconds. Online booking available 24/7.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://plushbeautyspa.ae/book",
  },
};

export default function BookPage() {
  return <BookPageClient />;
}
