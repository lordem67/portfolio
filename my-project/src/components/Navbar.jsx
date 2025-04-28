import React, { useState } from 'react';
import logo from "../assets/cypherrr_logo.png";
import { FaGithub, FaInstagram, FaTiktok, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 md:px-12">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-16 md:w-20 rounded-full" src={logo} alt="logo" />
      </div>

      {/* Menu (desktop) */}
      <div className="hidden md:flex items-center gap-4 text-2xl">
        <ul className="flex space-x-6">
          <li><a href="https://www.youtube.com/@c.cypherr" target="_blank" className="hover:text-red-500 transition"><FaYoutube/></a></li>
          <li><a href="https://github.com/lordem67" target="_blank" className="hover:text-gray-500 transition"><FaGithub/></a></li>
          <li><a href="https://www.tiktok.com/@c.cypherrr?_t=ZM-8uoOfmpsUWE" target="_blank" className="hover:text-pink-500 transition"><FaTiktok/></a></li>
          <li><a href="https://www.instagram.com/c.cypherrr?igsh=cXhkd3llcjN5bzc5&utm_source=qr" target="_blank" className="hover:text-purple-500 transition"><FaInstagram/></a></li>
        </ul>
      </div>

      {/* Menu Burger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-3xl text-white" /> : <FaBars className="text-3xl text-white" />}
        </button>
      </div>

      {/* Menu Mobile avec animation */}
      <div className={`fixed top-0 right-0 h-full w-3/4 bg-black text-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden`}>
        <button className="absolute top-5 right-5 text-3xl" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <li><a href="https://www.youtube.com/@c.cypherr" target="_blank" className="hover:text-red-500 transition"><FaYoutube/> YouTube</a></li>
          <li><a href="https://github.com/lordem67" target="_blank" className="hover:text-gray-500 transition"><FaGithub/> GitHub</a></li>
          <li><a href="https://www.tiktok.com/@c.cypherrr?_t=ZM-8uoOfmpsUWE" target="_blank" className="hover:text-pink-500 transition"><FaTiktok/> TikTok</a></li>
          <li><a href="https://www.instagram.com/c.cypherrr?igsh=cXhkd3llcjN5bzc5&utm_source=qr" target="_blank" className="hover:text-purple-500 transition"><FaInstagram/> Instagram</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
