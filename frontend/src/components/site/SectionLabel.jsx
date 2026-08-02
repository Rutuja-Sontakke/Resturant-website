import { Star } from "lucide-react";

export default function StarRow({ rating, size }) {
  size = size || 14;
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} className={i <= rating ? "fill-[#E8A845] text-[#E8A845]" : "text-muted"} />
      ))}
    </div>
  );
}
