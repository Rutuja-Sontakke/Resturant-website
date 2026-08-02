import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import SectionLabel from "@/components/site/SectionLabel";
import { GALLERY_IMAGES } from "@/lib/site-data";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => { 
    const onKey = (event) => { 
      if (!lightbox) return; 
      if (event.key === "Escape") setLightbox(null); 
      if (event.key === "ArrowRight") setLightbox((current) => { const i = (current.i + 1) % GALLERY_IMAGES.length; return { ...GALLERY_IMAGES[i], i }; }); 
      if (event.key === "ArrowLeft") setLightbox((current) => { const i = (current.i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; return { ...GALLERY_IMAGES[i], i }; }); 
    }; 
    window.addEventListener("keydown", onKey); 
    return () => window.removeEventListener("keydown", onKey); 
  }, [lightbox]);

  const columns = [[], [], []]; 
  GALLERY_IMAGES.forEach((image, i) => columns[i % 3].push(image));
  
  const open = (image) => setLightbox({ ...image, i: GALLERY_IMAGES.findIndex((item) => item.id === image.id) });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4EFE6", paddingTop: "24px" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16" style={{ textAlign: "left" }}>
        
        <div style={{ marginBottom: "32px", textAlign: "left" }}>
          <SectionLabel>Gallery</SectionLabel>
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
            Life at Baba Au Rhum.
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((image) => (
                <button 
                  key={image.id} 
                  className={`relative rounded-2xl overflow-hidden bg-muted cursor-pointer group text-left ${image.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`} 
                  onClick={() => open(image)}
                >
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all flex items-center justify-center">
                    <span className="scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all bg-card/90 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink size={18} className="text-foreground" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>

      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close gallery" className="absolute top-6 right-6 text-card/70 hover:text-card p-2 rounded-full bg-card/10">
            <X size={24} />
          </button>
          <button aria-label="Previous image" className="absolute left-4 top-1/2 -translate-y-1/2 text-card/70 hover:text-card p-3 rounded-full bg-card/10" onClick={(event) => { event.stopPropagation(); const i = (lightbox.i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length; setLightbox({ ...GALLERY_IMAGES[i], i }); }}>
            <ChevronLeft size={28} />
          </button>
          <button aria-label="Next image" className="absolute right-4 top-1/2 -translate-y-1/2 text-card/70 hover:text-card p-3 rounded-full bg-card/10" onClick={(event) => { event.stopPropagation(); const i = (lightbox.i + 1) % GALLERY_IMAGES.length; setLightbox({ ...GALLERY_IMAGES[i], i }); }}>
            <ChevronRight size={28} />
          </button>
          <img src={lightbox.url.replace(/&w=\d+/, "&w=1200").replace(/&h=\d+/, "&h=900")} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" onClick={(event) => event.stopPropagation()} />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-card/60 text-sm font-sans">{lightbox.alt}</p>
        </div>
      )}
    </div>
  );
}
