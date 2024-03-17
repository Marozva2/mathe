import React from "react";

function About() {
  return (
    <div className="container mt-8">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-800 leading-relaxed">
            We are dedicated to providing exceptional washroom experiences to
            our customers. Our mission is to craft spaces that seamlessly blend
            functionality with elegance, ensuring comfort and satisfaction.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Our vision is to redefine the standard for public washrooms,
            revolutionizing the way people perceive and interact with these
            essential facilities. We strive to elevate cleanliness, design, and
            customer experience to unparalleled heights.
          </p>
        </div>
        <div className="md:col-span-1">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Values
          </h3>
          <ul className="list-disc list-inside text-gray-800">
            <li className="mb-2">Customer Satisfaction</li>
            <li className="mb-2">Quality</li>
            <li className="mb-2">Innovation</li>
            <li className="mb-2">Sustainability</li>
            <li className="mb-2">Integrity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
