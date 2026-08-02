import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Btn from "@/components/site/Btn";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4EFE6]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="h-[76px] px-16 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="leading-none flex flex-col shrink-0"
        >
          <h1
            className="font-serif font-semibold text-[#2C1A0E] leading-none"
            style={{
              fontSize: "20px",
              letterSpacing: "-0.8px",
            }}
          >
            Baba Au Rhum
          </h1>

          <span
            className="uppercase text-[#2C1A0E] mt-1"
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
            }}
          >
            ANJUNA • GOA
          </span>
        </Link>

        {/* Desktop Navigation */}

        <ul className="hidden lg:flex items-center gap-10">

          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#C05C38] text-white rounded-full px-7 py-3 text-[16px] font-medium transition-all"
                    : "text-[#2C1A0E] text-[16px] hover:text-[#C05C38] transition-all"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

        </ul>

        {/* Reserve Button */}

        <div className="hidden lg:block">
          <Link to="/contact">
            <Btn
              className="rounded-full px-8 py-3 text-[16px]"
            >
              Reserve a Table
            </Btn>
          </Link>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-[#F4EFE6] border-t px-6 py-6 flex flex-col gap-4">

          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#C05C38] text-white rounded-xl px-4 py-3"
                  : "text-[#2C1A0E] px-4 py-3 rounded-xl hover:bg-[#E8E0D4]"
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact" onClick={() => setOpen(false)}>
            <Btn className="w-full justify-center rounded-full">
              Reserve a Table
            </Btn>
          </Link>

        </div>
      )}
    </header>
  );
}