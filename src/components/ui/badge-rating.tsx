
import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

interface BadgeRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function BadgeRating({
  rating,
  maxRating = 5,
  size = "md",
  className,
}: BadgeRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);
  
  const starSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };
  
  const starSize = starSizes[size];
  
  return (
    <div className={cn("flex items-center", className)}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(starSize, "fill-yellow-400 text-yellow-400")}
          />
        ))}
      {hasHalfStar && (
        <StarHalf
          className={cn(starSize, "fill-yellow-400 text-yellow-400")}
        />
      )}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(starSize, "text-gray-300")}
          />
        ))}
    </div>
  );
}
