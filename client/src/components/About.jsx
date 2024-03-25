import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

function About() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">
          Discover Our Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Odyssey
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Embark on a journey with us as we unveil the artistry behind our
                pursuit of excellence in the realm of washroom design. Our odyssey
                is fueled by the passion to curate spaces that merge utility with
                opulence, crafting experiences that linger in memory and elevate
                expectations.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Visionary Expedition
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Our expedition charts new territories in the landscape of public
                restrooms, redefining paradigms and reshaping perceptions. It's an
                odyssey of innovation, where every detail is a brushstroke on the
                canvas of possibility, setting standards that transcend convention
                and inspire awe.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Principles Guiding Our Voyage
            </h3>
            <ul className="text-gray-800 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Customer Delight
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Excellence in Craftsmanship
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Boundary-Pushing Innovation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Sustainable Elegance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Unwavering Integrity
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;
