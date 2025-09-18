import React, { useState, useEffect } from "react";
import { FiAperture } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence, scale } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [menuOpen]);

  return (
    <div className="bg-transparent absolute top-0 left-0 z-[9999] w-full text-white">
      <header className="max-w-[1320px] mx-auto p-[20px_10px] flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="logo text-[22px] flex items-center font-semibold gap-2"
        >
          <FiAperture className="text-[#ABFF02] text-[28px] spin" />
          <div className="relative inline-block">
            <div className="text-[26px] font-inter font-bold">
              <span className="drop-shadow-[0_0_20px_#ABFF02]">KRISH</span>
              <span className="text-[#ABFF02]">FOLIO</span>
            </div>
            <div className="absolute left-0 right-0 bottom-[-4px] h-[1px] overflow-hidden">
              <div className="w-[80%] h-full bg-[#ABFF02] animate-move"></div>
            </div>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <ul className="flex font-poppins items-center justify-center font-light gap-8 text-[16px] tracking-wide">
            <li>
              <a
                href="#home"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* CTA Button desktop*/}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileTap={{scale:0.9}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hidden lg:block text-end"
        >
          <a href="tel:+919773025969" className="relative overflow-hidden text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] inline-block rounded-full p-[10px_15px] group transition-all duration-500">
            <span className="relative font-medium z-10 font-poppins">
              Book a Free Call
            </span>
            <span
              className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] 
              group-hover:left-[120%] transition-all duration-700 ease-in-out"
            ></span>
          </a>
        </motion.div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-[28px]"
        >
          <AiOutlineMenu />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[80%] h-[100vh] bg-[#07030E] text-white flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{ zIndex: 9998 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-[30px]"
        >
          <AiOutlineClose />
        </button>

        <nav>
          <ul className="flex flex-col items-center gap-8 text-[20px] font-poppins">
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#home"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#about"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#skills"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#project"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Project
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#testimonials"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                onClick={() => setMenuOpen(false)}
                href="#contact"
                className="relative border-b border-transparent transition-all duration-300 ease-out after:absolute after:left-1/2 after:bottom-0 after:h-[1px] after:w-0 after:bg-[#ABFF02] pb-[5px] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA button mobile */}
        <a href="tel:+919773025969" className="relative overflow-hidden text-[#07030E] border text-[15px] cursor-pointer bg-[#ABFF02] rounded-full p-[12px_20px] group transition-all duration-500 hover:scale-105">
          <span className="relative font-medium z-10 font-poppins">
            Book a Free Call
          </span>
          <span
            className="absolute top-0 left-[-100%] w-[30px] h-full bg-white/90 skew-x-[-20deg] 
            group-hover:left-[120%] transition-all duration-700 ease-in-out"
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Header;
