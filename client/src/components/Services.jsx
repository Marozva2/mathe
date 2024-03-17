import React from "react";

function Services() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h5 className="text-xl font-bold text-gray-700 mb-4">
              Laundry Pickup & Delivery
            </h5>
            <p className="text-gray-600">
              Enjoy the convenience of our pickup and delivery service for your
              laundry needs.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h5 className="text-xl font-bold text-gray-700 mb-4">
              Professional Dry Cleaning
            </h5>
            <p className="text-gray-600">
              Trust our experienced team for professional dry cleaning services
              to keep your garments fresh and clean.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h5 className="text-xl font-bold text-gray-700 mb-4">
              Tailoring & Alterations
            </h5>
            <p className="text-gray-600">
              Need alterations or tailoring? We've got you covered with our
              expert tailors who ensure the perfect fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
