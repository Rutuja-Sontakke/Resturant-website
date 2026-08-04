import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-[#F7F2EA]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(44,26,14,0.08)]"
            : "bg-transparent"
          : "bg-[#F7F2EA] shadow-[0_1px_20px_rgba(44,26,14,0.08)]"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto h-[72px] px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none shrink-0 group no-underline"
          style={{ textDecoration: "none" }}
        >
          <span
            className="font-serif font-semibold transition-colors duration-200 group-hover:text-[#C05C38]"
            style={{
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "-0.5px",
              lineHeight: "1",
              hover: "#df430b",
            }}
          >
            Baba Au Rhum
          </span>

          <span
            className="uppercase mt-1"
            style={{
              fontSize: "10px",
              letterSpacing: "3px",
              lineHeight: "1",
              color: "rgb(163, 95, 0)",
            }}
          >
            ANJUNA • GOA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-2 m-0 p-0 list-none">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#C05C38] text-white rounded-full px-5 py-2 text-[14px] font-medium shadow-[0_2px_12px_rgba(192,92,56,.30)] transition-all duration-150"
                    : "text-[#2C1A0E]/80 hover:text-[#2C1A0E] hover:bg-[#E8E0D4] rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-150"
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
              size="sm"
              className="h-10 px-6 rounded-full text-[14px] font-medium"
            >
              Reserve a Table
            </Btn>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg text-[#2C1A0E]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#F7F2EA] border-t border-[#E8E0D4] px-6 py-6 flex flex-col gap-2 shadow-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#C05C38] text-white rounded-xl px-4 py-3 text-base font-medium"
                  : "text-[#2C1A0E] hover:bg-[#E8E0D4] rounded-xl px-4 py-3 text-base font-medium transition-all"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="pt-3 mt-2 border-t border-[#E8E0D4]">
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Btn className="w-full justify-center rounded-full">
                Reserve a Table
              </Btn>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}