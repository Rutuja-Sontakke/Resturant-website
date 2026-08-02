import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Btn from "@/components/site/Btn";
import SectionLabel from "@/components/site/SectionLabel";

export default function About() {
  return (
    <div className="bg-background pt-[72px]">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden bg-muted">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&h=900&fit=crop&auto=format" alt="Baba Au Rhum exterior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-transparent to-foreground/60" />
        <div className="absolute bottom-12 left-6 lg:left-16">
          <SectionLabel><span className="text-card/70">About Us</span></SectionLabel>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-semibold text-card leading-tight">Our Story</h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <p className="font-serif text-2xl font-medium text-foreground leading-relaxed mb-6 italic">
              "We didn't plan a restaurant. We planted a garden and the kitchen followed."
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              Baba Au Rhum was born in 2016 when Marie and Sanjay — a French pastry chef and a Goan architect — rented a crumbling hillock home in Anjuna and turned its veranda into a bakery. They baked croissants at 5 am, sold them by 9, and were sold out by 10. Goa noticed.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              By 2018, the veranda had become a full kitchen. A wood-fired oven was installed under the mango tree. Marie's training from Lyon met Sanjay's obsession with Goan produce — and a menu was born that nobody could quite categorise. French-Italian with a Goan heartbeat, they said. That was enough.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-5">
              The live music started by accident — a friend with a guitar, a warm night, no one wanting to leave. Now the Friday and Saturday evening sessions draw guests from across Goa and beyond.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-10">
              Today, Baba Au Rhum seats 60 in its open-air jungle dining room. The herb garden feeds the kitchen daily. The sourdough starter — affectionately named "Bernard" — is going on nine years old. Everything else has changed; the warmth hasn't.
            </p>
            <Link to="/contact">
              <Btn>Find us in Anjuna <MapPin size={16} /></Btn>
            </Link>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&h=500&fit=crop&auto=format" alt="Chef at work" className="rounded-2xl w-full object-cover h-52 bg-muted" />
              <img src="https://images.unsplash.com/photo-1521305916504-4a1121188589?w=400&h=500&fit=crop&auto=format" alt="Fresh herbs" className="rounded-2xl w-full object-cover h-52 mt-8 bg-muted" />
            </div>
            <img src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&h=400&fit=crop&auto=format" alt="Garden dining area" className="rounded-2xl w-full object-cover h-52 bg-muted" />
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-border">
          <SectionLabel>What we stand for</SectionLabel>
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-12">The things we don't compromise on.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Local first", d: "Our produce comes from local farms and our own garden. We know where our eggs, greens, and spices come from." },
              { n: "02", t: "Honest craft", d: "We make our bread, pastry, pasta, and sauces from scratch. If it takes longer, we wake up earlier." },
              { n: "03", t: "No rush", d: "We don't hurry tables. Linger over your coffee, watch the light change through the trees. This is Goa." },
            ].map((v) => (
              <div key={v.n} className="bg-card rounded-3xl p-8 border border-border">
                <p className="font-serif text-5xl font-light text-primary/30 mb-4">{v.n}</p>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{v.t}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
