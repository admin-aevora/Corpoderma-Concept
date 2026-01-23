"use client";

import { FaStar, FaCheckCircle } from "react-icons/fa";
import { Review } from "@/lib/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="card card-elevated p-6 h-full flex flex-col border border-[var(--color-light-gray)]">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${
              i < review.rating
                ? "text-[var(--color-gold)]"
                : "text-[var(--color-light-gray)]"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-[var(--color-charcoal)] text-sm leading-relaxed flex-1 mb-4">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-[var(--color-light-gray)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[var(--color-charcoal)]">
              {review.name}
            </span>
            {review.verified && (
              <FaCheckCircle className="text-[var(--color-purple)] text-xs" />
            )}
          </div>
          <span className="text-xs text-[var(--color-warm-gray)]">
            {review.service}
          </span>
        </div>
        <span className="text-xs text-[var(--color-warm-gray)]">
          {review.date}
        </span>
      </div>
    </div>
  );
}

// Rating summary display component
interface RatingSummaryProps {
  rating: number;
  reviewCount: number;
  platform?: string;
  size?: "sm" | "md" | "lg";
}

export function RatingSummary({
  rating,
  reviewCount,
  platform = "Google",
  size = "md",
}: RatingSummaryProps) {
  const sizeClasses = {
    sm: {
      container: "gap-2",
      rating: "text-lg font-bold",
      stars: "text-sm",
      count: "text-xs",
    },
    md: {
      container: "gap-3",
      rating: "text-2xl font-bold",
      stars: "text-base",
      count: "text-sm",
    },
    lg: {
      container: "gap-4",
      rating: "text-4xl font-bold",
      stars: "text-xl",
      count: "text-base",
    },
  };

  const classes = sizeClasses[size];

  return (
    <div className={`flex items-center ${classes.container}`}>
      <span className={`${classes.rating} text-[var(--color-charcoal)]`}>
        {rating}
      </span>
      <div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${classes.stars} ${
                i < Math.floor(rating)
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-light-gray)]"
              }`}
            />
          ))}
        </div>
        <span className={`${classes.count} text-[var(--color-warm-gray)]`}>
          {reviewCount.toLocaleString()} reviews on {platform}
        </span>
      </div>
    </div>
  );
}
