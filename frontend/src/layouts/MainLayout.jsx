import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";

export default function MainLayout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div
      className={`min-h-screen ${
        isHome ? "bg-transparent" : "bg-background"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />

      <main className={isHome ? "" : "pt-[72px]"}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}