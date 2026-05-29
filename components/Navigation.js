'use client';

import { useState } from 'react';

export default function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-pink-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-pink-700">NICA ALTHEA LLAGUNO</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-pink-600 transition duration-300">
            About
          </a>
          <a href="#experience" className="hover:text-pink-600 transition duration-300">
            Experience
          </a>
          <a href="#achievements" className="hover:text-pink-600 transition duration-300">
            Achievements
          </a>
          <a href="#contact" className="hover:text-pink-600 transition duration-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-pink-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-200 px-6 py-4 space-y-3">
          <a href="#about" className="block text-sm font-medium hover:text-pink-600 transition">
            About
          </a>
          <a href="#experience" className="block text-sm font-medium hover:text-pink-600 transition">
            Experience
          </a>
          <a href="#achievements" className="block text-sm font-medium hover:text-pink-600 transition">
            Achievements
          </a>
          <a href="#contact" className="block text-sm font-medium hover:text-pink-600 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
