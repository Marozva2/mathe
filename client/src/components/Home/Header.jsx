import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 text-white">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">LOGO</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
          <li><Link to="/register" className="hover:underline">Register/Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
