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
            <h5 className="text-xl font-bold text-gray-700 mb-4">Laundry</h5>
            <p className="text-gray-600">
              Entrust us with your laundry and experience top-notch cleaning
              services.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h5 className="text-xl font-bold text-gray-700 mb-4">Plumbing</h5>
            <p className="text-gray-600">
              Trust our experienced team for professional plumbing services to
              solve your household issues.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
            <h5 className="text-xl font-bold text-gray-700 mb-4">Lawning</h5>
            <p className="text-gray-600">
              Need help with maintaining your lawn? Our experts provide
              comprehensive lawn care services to keep your yard looking its
              best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
