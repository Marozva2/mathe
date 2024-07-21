import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-xl font-bold">Dashboard</h1>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
