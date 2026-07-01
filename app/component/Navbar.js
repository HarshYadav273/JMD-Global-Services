"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const showTestimonialsLink = false;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-slate-100 px-5 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/#home" className="flex flex-col group">
            <div className="flex items-center gap-1">
              <span>
                <img
                  className="rounded-full"
                  width={50}
                  src="/logo.jpeg"
                  alt="JMD Global"
                />
              </span>

              <div>
                <span className="text-2xl font-black text-slate-900 tracking-tighter">
                  JMD
                </span>

                <span className="text-2xl font-bold text-blue-600 tracking-tighter">
                  Global
                </span>

                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 leading-none uppercase">
                  Services
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/#home"
              className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
            >
              Home
            </Link>

            <Link
              href="/#about"
              className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
            >
              About Us
            </Link>

            <Link
              href="/#service"
              className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
            >
              Services
            </Link>

            {showTestimonialsLink && (
              <Link
                href="/#client"
                className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
              >
                TESTIMONIALS
              </Link>
            )}

            <Link
              href="/#contact"
              className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
            >
              Company Registration
            </Link>

            <Link
              href="/#contact"
              className="font-bold text-slate-800 hover:bg-[#181818] p-2 m-2 hover:rounded-2xl hover:text-bold hover:text-blue-600 uppercase"
            >
              Contact
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <div
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40"
            ></div>

            {/* Menu */}
            <div className="lg:hidden mt-5 bg-black rounded-2xl py-6 relative z-50">
              <div className="flex flex-col items-center gap-5 text-center">
                <Link
                  href="/#home"
                  onClick={() => setMenuOpen(false)}
                  className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                >
                  Home
                </Link>

                <Link
                  href="/#about"
                  onClick={() => setMenuOpen(false)}
                  className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                >
                  About Us
                </Link>

                <Link
                  href="/#service"
                  onClick={() => setMenuOpen(false)}
                  className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                >
                  Services
                </Link>

                {showTestimonialsLink && (
                  <Link
                    href="/#client"
                    onClick={() => setMenuOpen(false)}
                    className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                  >
                    Testimonials
                  </Link>
                )}

                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                >
                  Company Registration
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-bold text-black text-xl bg-white rounded-xl w-52 py-2 hover:text-blue-600 uppercase"
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
