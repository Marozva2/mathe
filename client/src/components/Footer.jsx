import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1">
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <ul className="list-none">
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li className="mb-2">Email: example@example.com</li>
              <li>Address: 123 Street, City, Country</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="https://facebook.com" className="flex items-center">
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com" className="flex items-center">
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="flex items-center">
                  <FaInstagram className="mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p>
              We are dedicated to providing the best laundry experiences. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-3 pt-3 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mathe Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
