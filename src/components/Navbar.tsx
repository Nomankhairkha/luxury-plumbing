"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto mt-4 px-4 md:px-6">

        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-full px-5 md:px-8 py-3 flex justify-between items-center">

          <a href="#" className="font-bold text-2xl">
            PLUMB<span className="text-blue-500">PRO</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:block bg-blue-600 px-5 py-2 rounded-full hover:bg-blue-500 transition"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 bg-[#111827]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6">

            <div className="flex flex-col gap-5 text-center">

              <a href="#services" onClick={() => setOpen(false)}>
                Services
              </a>

              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>

              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>

              <a href="#reviews" onClick={() => setOpen(false)}>
                Reviews
              </a>

              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-blue-600 py-3 rounded-xl"
              >
                Get Quote
              </a>

            </div>

          </div>
        )}

      </div>
    </motion.nav>
  );
}