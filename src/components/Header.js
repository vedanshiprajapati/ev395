import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-100 shadow-md p-5">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-2xl font-bold font-serif text-gray-800 block"
        >
          X-TASY
        </a>
        <nav className="hidden md:flex">
          {/* Desktop Navigation */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="hover:text-blue-500 px-2 py-1 rounded transition-all duration-300 text-lg text-gray-800"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-green-500 px-2 py-1 rounded transition-all duration-300 text-lg text-gray-800"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-pink-500 px-2 py-1 rounded transition-all duration-300 text-lg text-gray-800"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-purple-500 px-2 py-1 rounded transition-all duration-300 text-lg text-gray-800"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/download"
                className="hover:text-orange-500 px-2 py-1 rounded transition-all duration-300 text-lg text-gray-800"
              >
                Download
              </a>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation (Hidden by default on larger screens) */}
        <div className="md:hidden">
          {/* Mobile Menu Icon */}
          <button
            className={`focus:outline-none ${
              isMobileMenuOpen
                ? "text-gray-900"
                : "text-blue-500 hover:text-blue-700"
            }`}
            aria-label="Toggle navigation"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              // Cross icon for open menu
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <rect width="12" height="2" x="6" y="11" fill="#5757f0"></rect>
                <rect
                  width="12"
                  height="2"
                  x="6"
                  y="11"
                  transform="rotate(90 12 12)"
                  fill="#5757f0"
                ></rect>
              </svg>
            ) : (
              // Hamburger icon for closed menu
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <rect width="20" height="2" x="2" y="10" fill="#5757f0"></rect>
                <rect width="20" height="2" x="2" y="16" fill="#5757f0"></rect>
                <rect width="20" height="2" x="2" y="4" fill="#5757f0"></rect>
              </svg>
            )}
          </button>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-gray-100 absolute top-16 right-0 left-0 z-50">
              <ul className="flex flex-col items-center space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-500 px-4 py-2 rounded transition-all duration-300 text-lg text-gray-800 block border-b-2 border-b-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-green-500 px-4 py-2 rounded transition-all duration-300 text-lg text-gray-800 block border-b-2 border-b-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/features"
                    className="hover:text-pink-500 px-4 py-2 rounded transition-all duration-300 text-lg text-gray-800 block border-b-2 border-b-gray-800"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-purple-500 px-4 py-2 rounded transition-all duration-300 text-lg text-gray-800 block border-b-2 border-b-gray-800"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/download"
                    className="hover:text-orange-500 px-4 py-2 rounded transition-all duration-300 text-lg text-gray-800 block border-b-2 border-b-gray-800"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
