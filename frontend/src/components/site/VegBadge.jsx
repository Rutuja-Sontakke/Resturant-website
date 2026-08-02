import { Leaf, Wheat } from "lucide-react";

export default function VegBadge({ isVeg }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${isVeg ? "bg-secondary/15 text-secondary border border-secondary/25" : "bg-primary/10 text-primary/80 border border-primary/20"}`}>
      {isVeg ? <Leaf size={10} /> : <Wheat size={10} />}
      {isVeg ? "Veg" : "Non-veg"}
    </span>
  );
}
