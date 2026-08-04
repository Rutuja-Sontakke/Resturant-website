import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import Btn from "@/components/site/Btn";
import StarRow from "@/components/site/StarRow";
import { GOOGLE_REVIEWS } from "@/lib/site-data";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4EFE6", paddingTop: "24px" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16" style={{ textAlign: "left" }}>
        
        <div style={{ marginBottom: "48px", textAlign: "left" }}>
          <span 
            className="uppercase font-sans font-semibold tracking-[4px]" 
            style={{ 
              fontSize: "12px", 
              color: "#C05C38",
              display: "block",
              marginBottom: "4px"
            }}
          >
            Reviews
          </span>
          <h1 
            className="font-serif font-semibold" 
            style={{ 
              fontSize: "56px", 
              color: "#2C1A0E", 
              lineHeight: "1.1", 
              letterSpacing: "-1.68px",
              margin: "16px 0 0 0",
              textAlign: "left"
            }}
          >
            Straight from our guests.
          </h1>
        </div>

        <div 
          className="rounded-3xl p-10 flex flex-col sm:flex-row items-center gap-8 max-w-2xl"
          style={{ 
            backgroundColor: "#FBF7F0",
            border: "1px solid #E8E0D4",
            boxShadow: "0 4px 32px rgba(44,26,14,0.07)",
            marginBottom: "64px"
          }}
        >
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#4285F4] font-bold font-sans text-sm">G</span>
              <span className="text-sm font-sans" style={{ color: "#6b6375" }}>Google Reviews</span>
            </div>
            <p className="font-serif text-7xl font-semibold leading-none" style={{ color: "#2C1A0E", margin: 0 }}>4.4</p>
            <StarRow rating={5} size={20} />
            <p className="text-sm font-sans mt-2" style={{ color: "#6b6375", margin: 0 }}>Based on 14,000+ reviews</p>
          </div>
          
          <div className="w-px h-24 hidden sm:block" style={{ backgroundColor: "#E8E0D4" }} />
          
          <div className="flex flex-col gap-2 w-full max-w-xs">
            {[5, 4, 3, 2, 1].map((rating) => {
              const pct = rating === 5 ? 89 : rating === 4 ? 8 : rating === 3 ? 2 : rating === 2 ? 1 : 0;
              return (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-xs w-2 text-right" style={{ color: "#6b6375" }}>{rating}</span>
                  <Star size={10} className="fill-[#E8A845] text-[#E8A845]" />
                  <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "#E8E0D4" }}>
                    <div className="h-full bg-[#E8A845] rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-xs w-6 text-right" style={{ color: "#6b6375" }}>{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl font-semibold" style={{ color: "#2C1A0E", margin: 0 }}>Recent Reviews</h2>
            <div className="flex gap-2">
              <button 
                aria-label="Previous review" 
                onClick={() => setIndex((i) => (i - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length)} 
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "transparent", border: "1px solid #E8E0D4" }}
              >
                <ChevronLeft size={18} style={{ color: "#2C1A0E" }} />
              </button>
              <button 
                aria-label="Next review" 
                onClick={() => setIndex((i) => (i + 1) % GOOGLE_REVIEWS.length)} 
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "transparent", border: "1px solid #E8E0D4" }}
              >
                <ChevronRight size={18} style={{ color: "#2C1A0E" }} />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out gap-6" style={{ transform: `translateX(calc(-${index * 100}% - ${index * 24}px))` }}>
              {GOOGLE_REVIEWS.map((review) => (
                <div 
                  key={review.name} 
                  className="min-w-[min(100%,420px)] rounded-3xl p-8 shrink-0"
                  style={{
                    backgroundColor: "#FBF7F0",
                    border: "1px solid #E8E0D4",
                    boxShadow: "0 2px 16px rgba(44,26,14,0.05)"
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-semibold" style={{ backgroundColor: "rgba(107, 124, 92, 0.2)", color: "#6B7C5C" }}>
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "#2C1A0E", margin: 0 }}>{review.name}</p>
                      <p className="text-xs" style={{ color: "#6b6375", margin: 0 }}>{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRow rating={review.rating} size={12} />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6375", margin: 0 }}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-1.5 mt-6">
            {GOOGLE_REVIEWS.map((review, i) => (
              <button 
                aria-label={`Show review ${i + 1}`} 
                key={review.name} 
                onClick={() => setIndex(i)} 
                className="h-1.5 rounded-full border-0 cursor-pointer" 
                style={{
                  width: i === index ? "24px" : "6px",
                  backgroundColor: i === index ? "#C05C38" : "#E8E0D4",
                  transition: "all 0.2s ease"
                }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-3xl p-10 text-center" style={{ backgroundColor: "#E8E0D4", marginTop: "64px", marginBottom: "64px" }}>
          <h3 className="font-serif text-2xl font-semibold mb-3" style={{ color: "#2C1A0E", margin: 0 }}>Visited recently?</h3>
          <p className="max-w-md mx-auto mb-6 text-base" style={{ color: "#6b6375" }}>
            We would love to hear about your experience. Your words help us and help the next traveller find us.
          </p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
            <Btn>Leave a Review on Google <ExternalLink size={16} /></Btn>
          </a>
        </div>

      </div>
    </div>
  );
}
