import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink
              exact="true"
              to="#"
              className="text-xl font-bold text-white hover:text-gray-300"
            >
              MATHE
            </NavLink>
          </div>
          <div className="md:block">
            <ul className="flex ml-4 space-x-4">
              <li>
                <NavLink
                  exact="true"
                  to="/"
                  className="text-white hover:text-gray-300 uppercase tracking-wide font-semibold"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-white hover:text-gray-300 uppercase tracking-wide font-semibold"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="text-white hover:text-gray-300 uppercase tracking-wide font-semibold"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="mobile-menu-button focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
