import { Star } from "lucide-react";

export default function StarRow({ rating = 5, size = 14 }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < rating ? "#B98D58" : "none"}
          color="#B98D58"
        />
      ))}
    </div>
  );
}