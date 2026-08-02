import { Outlet } from "react-router-dom";
import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/Footer";

export default function MainLayout() {
  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />

      <main className="pt-[76px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}