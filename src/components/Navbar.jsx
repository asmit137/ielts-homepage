// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">IELTSPro</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="home" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-600">Home</Link>
          <Link to="features" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-600">Features</Link>
          <Link to="testimonials" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-600">Testimonials</Link>
          <Link to="contact" smooth={true} offset={-80} duration={500} className="cursor-pointer hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col items-center py-6 space-y-4 text-gray-700 font-medium">
            <Link to="home" smooth offset={-80} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Home</Link>
            <Link to="features" smooth offset={-80} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Features</Link>
            <Link to="testimonials" smooth offset={-80} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Testimonials</Link>
            <Link to="contact" smooth offset={-80} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
