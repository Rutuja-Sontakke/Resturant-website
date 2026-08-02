import { useState } from "react";
import VegBadge from "@/components/site/VegBadge";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/site-data";

export default function Menu() {
  const [tab, setTab] = useState("All");
  const filtered = tab === "All" ? MENU_ITEMS : MENU_ITEMS.filter((item) => item.category === tab);
  
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
            Our Menu
          </span>
          
          <h1 
            className="font-serif font-semibold" 
            style={{ 
              fontSize: "56px", 
              color: "#2C1A0E", 
              lineHeight: "1.1", 
              letterSpacing: "-1.68px",
              margin: "12px 0 0 0",
              textAlign: "left"
            }}
          >
            Food worth the journey.
          </h1>
          <p 
            className="font-sans" 
            style={{ 
              color: "#6b6375", 
              marginTop: "16px", 
              maxWidth: "576px",
              fontSize: "18px",
              lineHeight: "1.45",
              textAlign: "left"
            }}
          >
            Crafted fresh daily. Prices in Indian Rupees (₹). Veg & non-veg clearly marked.
          </p>
        </div>

        <div 
          className="flex flex-wrap gap-2 overflow-x-auto" 
          style={{ 
            marginBottom: "40px", 
            padding: "6px", 
            backgroundColor: "#E8E0D4", 
            borderRadius: "16px", 
            width: "fit-content", 
            maxWidth: "100%" 
          }}
        >
          {MENU_CATEGORIES.map((category) => (
            <button 
              key={category} 
              onClick={() => setTab(category)} 
              className="px-5 py-2.5 rounded-xl text-sm font-medium font-sans whitespace-nowrap transition-all duration-200 cursor-pointer"
              style={{
                border: "none",
                backgroundColor: tab === category ? "#FBF7F0" : "transparent",
                color: tab === category ? "#2C1A0E" : "#6b6375",
                boxShadow: tab === category ? "0 2px 8px rgba(44,26,14,0.1)" : "none"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5" style={{ paddingBottom: "64px" }}>
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="rounded-3xl p-6 transition-all duration-200"
              style={{
                backgroundColor: "#FBF7F0",
                border: "1px solid #E8E0D4",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg font-semibold" style={{ color: "#2C1A0E", margin: 0 }}>
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-xs px-2 py-0.5 rounded-full font-sans font-medium" style={{ backgroundColor: "rgba(192, 92, 56, 0.1)", color: "#C05C38" }}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-sans leading-relaxed" style={{ color: "#6b6375", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
                <p className="font-serif text-xl font-semibold shrink-0" style={{ color: "#C05C38", margin: 0 }}>
                  ₹{item.price}
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid #E8E0D4" }}>
                <VegBadge isVeg={item.veg} />
                <span className="text-xs font-sans" style={{ color: "#6b6375" }}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
