import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaSpotify,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1A0E] text-white pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Left */}

          <div className="lg:col-span-2">

            <h2 className="font-serif text-3xl font-semibold">
              Baba Au Rhum
            </h2>

            <p className="uppercase tracking-[4px] text-xs text-white/50 mt-2">
              ANJUNA · GOA · INDIA
            </p>

            <p className="text-white/60 mt-6 max-w-sm leading-7">
              A French café-bakery-pizzeria tucked into the
              jungled hillocks of Anjuna, where good food,
              live music, and slow mornings come together.
            </p>

            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C05C38] transition duration-300 flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C05C38] transition duration-300 flex items-center justify-center"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C05C38] transition duration-300 flex items-center justify-center"
              >
                <FaSpotify size={17} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-white/60 hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold mb-5">
              Opening Hours
            </h3>

            <div className="space-y-2 text-white/60 text-sm">

              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span>8 am – 11 pm</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8 am – 12 am</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9 am – 10 pm</span>
              </div>

            </div>

            <div className="mt-8 space-y-3 text-white/60 text-sm">

              <div className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>
                  Hilltop Road, Anjuna,
                  <br />
                  North Goa, 403509
                </span>
              </div>

              <div className="flex gap-2 items-center">
                <Phone size={16} />
                <span>+91 99231 88401</span>
              </div>

            </div>

          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">

          <p>
            © {new Date().getFullYear()} Baba Au Rhum.
            All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ by Rutuja Sontakke
          </p>

        </div>

      </div>
    </footer>
  );
}