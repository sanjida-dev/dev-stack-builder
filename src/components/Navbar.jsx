import React, { useState } from "react";
import logoImg from "../assets/logo-text.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left: Brand logo + "Dev Stack" name */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
              D
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text">
              Dev Stack
            </span>
          </div>

          {/* Center: nav links */}
          <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
            <a href="#home" className="hover:text-pink-500 transition-colors">Home</a>
            <a href="#technologies" className="hover:text-pink-500 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-pink-500 transition-colors">Projects</a>
            <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
          </div>

          {/* Right: Sign In and Sign Up */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 font-medium hover:text-pink-500 transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white font-medium px-4 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-inner">
          <a href="#home" className="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded">Home</a>
          <a href="#technologies" className="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded">Technologies</a>
          <a href="#projects" className="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded">Projects</a>
          <a href="#about" className="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded">About</a>
          <a href="#contact" className="block px-3 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded">Contact</a>
        </div>
      )}
    </nav>
  );
}
