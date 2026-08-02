import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Btn from "@/components/site/Btn";
import SectionLabel from "@/components/site/SectionLabel";
import StarRow from "@/components/site/StarRow";
import TESTIMONIALS from "@/constants/testimonials";
export default function Home() {
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-background">
      <section className="relative min-h-screen  flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1800&h=1100&fit=crop&auto=format"
            alt="Baba Au Rhum open-air dining under trees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1A0E]/80 via-[#2C1A0E]/30 to-transparent" />
          <div
            className="absolute inset-0 opacity-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pb-24 pt-40 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/70" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-sans font-medium">Anjuna · Goa</span>
            </div>
            <h1 className="font-serif text-[clamp(3rem,7vw,7rem)] font-semibold text-card leading-[1.05] mb-6 tracking-tight">
              Where the{" "}
              <em className="text-accent" style={{ fontStyle: "italic" }}>jungle</em>{" "}
              meets the kitchen.
            </h1>
            <p className="text-card/70 text-lg font-sans leading-relaxed max-w-xl mb-10">
              French-Italian food, hand-baked pastries, wood-fired pizzas, and live music under Anjuna's green canopy. Open every morning at eight.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu">
                <Btn size="lg">Explore the Menu <ArrowRight size={18} /></Btn>
              </Link>
              <Link to="/about">
                <Btn size="lg" variant="outline" className="border-card/40 text-card hover:bg-card hover:text-foreground">Our Story</Btn>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 hidden lg:flex">
          <div className="bg-card/90 backdrop-blur-sm border-l border-t border-border rounded-tl-2xl px-8 py-5 flex items-center gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl font-semibold text-foreground">4.9</p>
              <StarRow rating={5} size={12} />
              <p className="text-xs text-muted-foreground font-sans mt-1">250+ reviews</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Live Music</p>
              <p className="text-sm font-medium text-foreground font-sans mt-1">Fri & Sat Evenings</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Open Daily</p>
              <p className="text-sm font-medium text-foreground font-sans mt-1">8 am – 11 pm</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-semibold text-foreground leading-tight max-w-lg">
              From the oven, the garden, and the open fire.
            </h2>
          </div>
          <Link to="/menu" className="mt-6 lg:mt-0 self-start lg:self-auto">
            <Btn variant="ghost">Full menu <ArrowRight size={16} /></Btn>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "French Bakery", desc: "Croissants, pain au chocolat, sourdough & viennoiserie baked fresh each morning before dawn.", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=700&fit=crop&auto=format", tag: "Mornings" },
            { title: "Wood-fired Pizza", desc: "Neapolitan-inspired pies with San Marzano base, imported fior di latte, and 72-hour dough.", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=700&fit=crop&auto=format", tag: "All Day" },
            { title: "Gourmet Burgers", desc: "Hand-formed prime beef or crispy portobello patties, dressed simply and served with house fries.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=700&fit=crop&auto=format", tag: "Lunch & Dinner" },
            { title: "Live Music", desc: "Friday & Saturday evenings, acoustic sets under string lights with local and visiting musicians.", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=700&fit=crop&auto=format", tag: "Weekends" },
          ].map((card, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden bg-card shadow-[0_2px_20px_rgba(44,26,14,0.07)] hover:shadow-[0_8px_40px_rgba(44,26,14,0.12)] transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-foreground/80 backdrop-blur-sm text-card text-xs px-3 py-1 rounded-full font-sans">{card.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-foreground overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel><span className="text-accent/70">Our Story</span></SectionLabel>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold text-card leading-tight mb-6">
              Built by hand, run with heart, fed by Anjuna.
            </h2>
            <p className="text-card/60 font-sans leading-relaxed mb-4">
              Baba Au Rhum began as a dream on a hillock in Anjuna — a simple French bakery where the morning smells right and the coffee is never rushed. Over the years the menu grew, the garden took over, and the name stuck.
            </p>
            <p className="text-card/60 font-sans leading-relaxed mb-8">
              We grow our own herbs, source our eggs from local farms, and import a handful of key ingredients from France and Italy — the ones that simply cannot be compromised. Everything else is Goa.
            </p>
            <Link to="/about">
              <Btn variant="outline" className="border-card/30 text-card hover:bg-card hover:text-foreground">
                Read the full story <ArrowRight size={16} />
              </Btn>
            </Link>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=600&fit=crop&auto=format" alt="Cafe interior" className="rounded-2xl w-full object-cover h-64" />
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop&auto=format" alt="Fresh pastries" className="rounded-2xl w-full object-cover h-44 mt-10" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-5 shadow-lg">
              <p className="font-serif text-3xl font-semibold">8+</p>
              <p className="text-xs font-sans text-primary-foreground/70 mt-1 uppercase tracking-wider">Years in Anjuna</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-24 lg:py-32">
        <SectionLabel>What guests say</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          <div className="lg:w-1/3">
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-semibold text-foreground leading-tight">
              Stories from the table.
            </h2>
            <div className="flex gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === tIdx ? "w-8 bg-primary" : "w-2 bg-muted"}`}
                />
              ))}
            </div>
            <Link to="/reviews">
              <Btn variant="ghost" className="mt-6">
                All reviews <ArrowRight size={16} />
              </Btn>
            </Link>
          </div>
          <div className="lg:w-2/3 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${tIdx * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="w-full shrink-0 bg-card rounded-3xl p-8 shadow-[0_2px_20px_rgba(44,26,14,0.06)]">
                  <Quote size={32} className="text-primary/30 mb-4" />
                  <p className="font-serif text-xl font-medium text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary text-sm font-semibold font-sans">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground font-sans">{t.name}</p>
                      <p className="text-xs text-muted-foreground font-sans">{t.location}</p>
                    </div>
                    <div className="ml-auto"><StarRow rating={t.rating} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 lg:mx-16 mb-24 rounded-3xl bg-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }} />
        <div className="relative z-10 px-10 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-primary-foreground/70 text-sm font-sans uppercase tracking-widest mb-2">Join us</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground leading-tight">
              Friday music nights are back.<br />Book your table.
            </h2>
          </div>
          <Link to="/contact">
            <Btn variant="secondary" size="lg">
              Reserve Now <ArrowRight size={18} />
            </Btn>
          </Link>
        </div>
      </section>
    </div>
  );
}
