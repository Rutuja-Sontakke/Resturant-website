import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Gallery from "../pages/Gallery";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";

import Login from "../pages/Login";

import Dashboard from "../pages/admin/Dashboard";
import MenuManagement from "../pages/admin/MenuManagement";
import ReservationManagement from "../pages/admin/ReservationManagement";
import Profile from "../pages/admin/Profile";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin */}

      <Route path="/login" element={<Login />} />

      <Route path="/admin/dashboard" element={<Dashboard />} />

      <Route path="/admin/menu" element={<MenuManagement />} />

      <Route
        path="/admin/reservations"
        element={<ReservationManagement />}
      />

      <Route path="/admin/profile" element={<Profile />} />

    </Routes>
  );
}