import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { FaBars, FaTimes } from "react-icons/fa";

// Navbar displays navigation links and handles page switching
const Navbar = React.memo(({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleNavigation = useCallback(
    (page) => {
      setCurrentPage(page);
      setIsOpen(false);
    },
    [setCurrentPage]
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-indigo-600">Logo</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation("home")}
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation("signup")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavigation("home")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="block w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation("signup")}
              className="block w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 mt-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
});

Navbar.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};

export default Navbar;
