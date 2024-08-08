import { useState } from "react";

function OrderService() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order submission
    console.log("Order Submitted:", formData);
    alert("Order received! We will contact you soon.");
    // Clear form
    setFormData({
      name: "",
      phone: "",
      service: "",
    });
  };

  return (
    <div className="bg-[#f2f2f2] h-screen">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#4990e2]">
          Order Laundry Service
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Select Service
            </label>
            <input
              list="services"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
            <datalist id="services">
              <option value="Dry Cleaning" />
              <option value="Laundry Wash" />
              <option value="Ironing" />
              <option value="Alterations" />
            </datalist>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
          >
            Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderService;
