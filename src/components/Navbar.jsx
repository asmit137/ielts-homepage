import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png"; // ✅ Add your logo image inside /src/assets/

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="IELTS Pro Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
          />
          <h1 className="text-2xl font-bold text-blue-600">IELTS Pro</h1>
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            Features
          </Link>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl cursor-pointer text-blue-600"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl cursor-pointer text-blue-600"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-700">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-blue-600"
            >
              Features
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-blue-600"
            >
              Testimonials
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="cursor-pointer hover:text-blue-600"
            >
              Contact
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
