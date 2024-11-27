import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-white py-4 shadow-lg w-full">
      <div className="px-6 lg:px-12">
        {/* Navbar Container */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-16 w-auto"
                src={Logo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-bold text-xl tracking-wide"
            >
              HOME
            </Link>
            <Link
              to="/Aboutus"
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-bold text-xl tracking-wide"
            >
              ABOUT US
            </Link>
            <Link
              to="/Services"
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-bold text-xl tracking-wide"
            >
              SERVICES
            </Link>
            <Link
              to="/solution"
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-bold text-xl tracking-wide"
            >
              SOLUTIONS
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-blue-600 transition-all duration-200 font-bold text-xl tracking-wide"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
              onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden bg-gray-50 py-4 shadow-lg rounded-lg mt-2">
        <div className="px-6 space-y-4">
          <Link
            to="/"
            className="block text-gray-800 hover:text-blue-600 py-2 font-bold text-lg"
          >
            HOME
          </Link>
          <Link
            to="/Aboutus"
            className="block text-gray-800 hover:text-blue-600 py-2 font-bold text-lg"
          >
            ABOUT US
          </Link>
          <Link
            to="/Services"
            className="block text-gray-800 hover:text-blue-600 py-2 font-bold text-lg"
          >
            SERVICES
          </Link>
          <Link
            to="/solution"
            className="block text-gray-800 hover:text-blue-600 py-2 font-bold text-lg"
          >
            SOLUTIONS
          </Link>
          <Link
            to="/contact"
            className="block text-gray-800 hover:text-blue-600 py-2 font-bold text-lg"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
}
