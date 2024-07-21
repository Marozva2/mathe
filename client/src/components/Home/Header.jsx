import React from "react";
import { Link } from "react-router-dom";

const linkClasses = "text-[#6b4146] no-underline text-2xl font-extrabold";

function Header() {
  return (
    <div className="w-full bg-[#56dffe] py-4 px-10 flex items-center justify-between">
      <div className="text-xl font-bold text-black">LOGO</div>
      <div className="flex-grow flex justify-center">
        <div className="space-x-8 mt-12">
          <Link to="/" className={linkClasses}>Home</Link>
          <Link to="/services" className={linkClasses}>Services</Link>
          <Link to="/about-us" className={linkClasses}>About Us</Link>
          <Link to="/contact-us" className={linkClasses}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
