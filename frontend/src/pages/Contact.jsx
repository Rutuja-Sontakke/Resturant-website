import { useState } from "react";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Btn from "@/components/site/Btn";
import { createReservation } from "@/services/reservationService";

const inputStyle = {
  width: "100%",
  backgroundColor: "#FBF7F0",
  border: "1px solid #E8E0D4",
  borderRadius: "12px",
  padding: "12px 16px",
  color: "#2C1A0E",
  fontFamily: '"Inter", sans-serif',
  fontSize: "14px",
  outline: "none",
  marginTop: "4px"
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const submit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);

      const parsedGuests = parseInt(form.guests.split(" ")[0], 10) || 2;

      await createReservation({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.replace(/\D/g, ""), 
        reservationDate: new Date(form.date).toISOString(), 
        guests: parsedGuests,
        message: form.message.trim(),
      });

      setSent(true);
      setForm({ name: "", email: "", phone: "", date: "", guests: "2", message: "" });
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F4EFE6", paddingTop: "24px" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16" style={{ textDecoration: "none" }}>
        
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
            Contact & Visit
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
            Come find us.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ paddingBottom: "64px" }}>
          <div>
            <div className="rounded-3xl overflow-hidden h-64 mb-8 relative" style={{ backgroundColor: "#E8E0D4", border: "1px solid #E8E0D4" }}>
              <img src="https://unsplash.com" alt="Map of Anjuna Goa" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl px-6 py-4 shadow-lg text-center" style={{ backgroundColor: "#FBF7F0", border: "1px solid #E8E0D4" }}>
                  <MapPin size={24} className="mx-auto mb-2" style={{ color: "#C05C38" }} />
                  <p className="font-serif text-lg font-semibold" style={{ color: "#2C1A0E", margin: 0 }}>Baba Au Rhum</p>
                  <p style={{ color: "#6b6375", fontSize: "14px", margin: "4px 0" }}>Hilltop Road, Anjuna, Goa</p>
                  <a href="https://google.com" target="_blank" rel="noreferrer" style={{ color: "#C05C38", fontSize: "12px", textDecoration: "underline" }}>Open in Maps →</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                [Clock, "Opening Hours", <><span>Mon – Fri</span><span style={{ color: "#2C1A0E", fontWeight: 500, marginLeft: "32px" }}>8am – 11pm</span><br /><span>Saturday</span><span style={{ color: "#2C1A0E", fontWeight: 500, marginLeft: "28px" }}>8am – 12am</span><br /><span>Sunday</span><span style={{ color: "#2C1A0E", fontWeight: 500, marginLeft: "40px" }}>9am – 10pm</span></>], 
                [MapPin, "Find us", "Hilltop Road, Near St. Anthony's Chapel, Anjuna, North Goa 403509"], 
                [Phone, "Call us", "+91 99231 88401"], 
                [Mail, "Email us", "hello@babaauurhum.com"]
              ].map(([Icon, title, content]) => (
                <div key={title} className="rounded-2xl p-6" style={{ backgroundColor: "#FBF7F0", border: "1px solid #E8E0D4" }}>
                  <Icon size={20} className="mb-3" style={{ color: "#C05C38" }} />
                  <p className="font-semibold text-sm mb-3" style={{ color: "#2C1A0E", margin: 0 }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b6375", margin: 0 }}>{content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8 lg:p-10" style={{ backgroundColor: "#FBF7F0", border: "1px solid #E8E0D4", boxShadow: "0 4px 32px rgba(44,26,14,0.07)" }}>
            <h2 className="font-serif text-2xl font-semibold mb-2" style={{ color: "#2C1A0E", margin: 0 }}>Reserve a Table</h2>
            <p className="text-sm mb-8" style={{ color: "#6b6375", margin: "4px 0 32px 0" }}>We will confirm your reservation within a few hours.</p>
            
            {sent ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl" style={{ backgroundColor: "rgba(107, 124, 92, 0.15)" }}>🌿</div>
                <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: "#2C1A0E", margin: 0 }}>We got your request!</h3>
                <p className="text-sm" style={{ color: "#6b6375", margin: 0 }}>Expect a confirmation from us within a few hours. See you at Baba Au Rhum.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                    Your Name *
                    <input required style={inputStyle} placeholder="Marie Dupont" value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </label>
                  <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                    Email *
                    <input required type="email" style={inputStyle} placeholder="hello@you.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                    Phone *
                    <input required type="tel" maxLength={10} minLength={10} style={inputStyle} placeholder="9876543210" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                  </label>
                  <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                    Number of Guests
                    <select style={inputStyle} value={form.guests} onChange={(e) => update("guests", e.target.value)}>
                      {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                        <option key={n} value={n}>{n} {n === "1" ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                  Preferred Date *
                  <input required type="date" style={inputStyle} value={form.date} onChange={(e) => update("date", e.target.value)} />
                </label>
                <label className="text-xs uppercase tracking-wider" style={{ color: "#6b6375" }}>
                  Special Requests
                  <textarea rows="3" style={{ ...inputStyle, resize: "none" }} placeholder="Dietary requirements, occasion, anything else..." value={form.message} onChange={(e) => update("message", e.target.value)} />
                </label>
                <Btn type="submit" size="lg" className="w-full justify-center mt-2" disabled={loading}>
                  {loading ? "Booking..." : "Request Reservation"} <ArrowRight size={18} />
                </Btn>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
