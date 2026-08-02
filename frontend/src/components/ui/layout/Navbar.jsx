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
        scrolled ? "bg-white shadow-md py-1" : "bg-transparent py-3"
      }`}
    >
      <nav
        className="
          max-w-[1440px]
          mx-auto
          h-[76px]
          px-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo Section - Uses div to completely strip global h1 styles */}
        <Link to="/" className="flex flex-col shrink-0 w-max z-50 group no-underline" style={{ textDecoration: 'none' }}>
          <div
            className="font-serif font-semibold"
            style={{
              fontSize: "27px",
              letterSpacing: "-0.8px",
              color: "#2C1A0E",
              margin: "0px",
              padding: "0px",
              lineHeight: "1.1"
            }}
          >
            Baba Au Rhum
          </div>
          <span
            className="uppercase mt-0.5 block"
            style={{
              fontSize: "10px",
              letterSpacing: "4px",
              color: "#2C1A0E",
              margin: "0px",
              padding: "0px",
              lineHeight: "1"
            }}
          >
            ANJUNA • GOA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 m-0 p-0 list-none">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#C05C38] text-white rounded-full px-4 py-2 text-[14px] font-medium transition-all"
                    : "text-[#2C1A0E] text-[14px] hover:text-[#C05C38] transition-all"
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
            <Btn className="rounded-full px-6 py-3 text-[14px]">
              Reserve a Table
            </Btn>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#2C1A0E] z-50 bg-transparent border-0 cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F4EFE6] border-t px-4 py-6 flex flex-col gap-2 absolute top-full left-0 right-0 shadow-lg">
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
