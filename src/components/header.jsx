import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled
      setIsScrolled(currentScrollY > 20);

      // Show/hide header based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not near top - hide header
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-indigo-500/5 py-4'
          : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-6'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              NexaCore
            </span>
          </a>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu - Removed */}
      </div>
    </nav>
  );
};