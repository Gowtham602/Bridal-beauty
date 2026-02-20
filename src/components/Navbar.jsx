import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 detect scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Services", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-pink-200
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
          : "bg-pink-100/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center">
        {/*  Premium Logo */}
        <div className="flex items-center gap-3 cursor-pointer group select-none shrink-0">
          <img
            src={logo}
            alt="Bridal Beauty Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            style={{ imageRendering: "auto" }}
          />

          <div className="leading-tight">
            <h1
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600 bg-clip-text text-transparent tracking-wide"
              style={{ fontFamily: "Playfair Display" }}
            >
              Bridal Beauty
            </h1>
            <p className="text-[9px] tracking-[0.35em] text-pink-400 uppercase">
              Luxury Bridal Studio
            </p>
          </div>
        </div>

        {/* 💎 Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer hover:text-pink-600 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-pink-500 after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* 🎀 Book Button */}
        <button className="hidden md:block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
          Book Now
        </button>

        {/* 📱 Animated Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8"
          >
            <span
              className={`absolute left-1 h-[2px] w-6 bg-pink-600 transition-all duration-300 ${
                isOpen ? "rotate-45 top-3" : "top-1"
              }`}
            />
            <span
              className={`absolute left-1 h-[2px] w-6 bg-pink-600 transition-all duration-300 top-3 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-1 h-[2px] w-6 bg-pink-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3" : "top-5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 space-y-4 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => setIsOpen(false)}
              className="hover:text-pink-600 cursor-pointer transition"
            >
              {item}
            </div>
          ))}

          <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 rounded-full shadow-md">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
