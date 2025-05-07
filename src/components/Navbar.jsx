"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome, FaFlask, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white shadow-xl p-4 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90" data-aos="fade-down">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight hover:scale-105 transition-all duration-300 flex items-center" data-aos="fade-right" data-aos-delay="100" style={{ fontFamily: "var(--font-kanit)" }}>
          <GiCookingPot className="text-2xl md:text-3xl text-teal-200 mr-2 animate-pulse" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200 font-extrabold" style={{ fontFamily: "var(--font-kanit)" }}>AI Recipe</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium" data-aos="fade-left" data-aos-delay="200" style={{ fontFamily: "var(--font-kanit)" }}>
          <NavLink href="/" icon={<FaHome className="mr-2" />} text="หน้าแรก" />
          <NavLink href="/try" icon={<FaFlask className="mr-2" />} text="ทดลองใช้" />
          <NavLink href="/about" icon={<FaInfoCircle className="mr-2" />} text="เกี่ยวกับ" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 transition-transform duration-300 rotate-90" />
          ) : (
            <FaBars className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-gradient-to-b from-teal-600 to-blue-800 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out pt-24`}
        style={{ fontFamily: "var(--font-kanit)" }}
      >
        <div className="flex flex-col items-center space-y-6 p-8 text-xl" style={{ fontFamily: "var(--font-kanit)" }}>
          <MobileNavLink href="/" icon={<FaHome className="mr-3 text-teal-200" />} text="หน้าแรก" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink href="/try" icon={<FaFlask className="mr-3 text-teal-200" />} text="ทดลองใช้" onClick={() => setIsMenuOpen(false)} />
          <MobileNavLink href="/about" icon={<FaInfoCircle className="mr-3 text-teal-200" />} text="เกี่ยวกับ" onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, icon, text }) => (
  <Link 
    href={href} 
    className="hover:text-teal-200 transition-all duration-300 relative group py-2 flex items-center overflow-hidden font-kanit"
    style={{ fontFamily: "var(--font-kanit)" }}
  >
    <span className="flex items-center group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      {icon}
      {text}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </Link>
);

const MobileNavLink = ({ href, icon, text, onClick }) => (
  <Link 
    href={href} 
    className="flex items-center w-full py-3 px-6 hover:bg-teal-700 rounded-lg transition-colors duration-300 font-kanit"
    style={{ fontFamily: "var(--font-kanit)" }}
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Link>
);
