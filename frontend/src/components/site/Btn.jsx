export default function Btn({ children, variant, size, onClick, className, type }) {
  variant = variant || "primary";
  size = size || "md";
  className = className || "";
  type = type || "button";

  const base = "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  const variants = {
    primary: "bg-primary text-primary-foreground shadow-[0_4px_16px_rgba(192,92,56,0.35)] hover:shadow-[0_6px_24px_rgba(192,92,56,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_8px_rgba(192,92,56,0.3)]",
    secondary: "bg-secondary text-secondary-foreground shadow-[0_4px_14px_rgba(107,124,92,0.3)] hover:shadow-[0_6px_20px_rgba(107,124,92,0.4)] hover:-translate-y-0.5 active:translate-y-0",
    ghost: "text-foreground hover:bg-muted hover:text-foreground",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };
  return (
    <button type={type} onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
