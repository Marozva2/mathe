// Registry.jsx

import { useState } from "react";

function Registry() {
  // State to toggle the registration form
  const [isRegistering, setIsRegistering] = useState(false);
  
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    age: "",
    policeClearance: "",
    phoneNumber: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform registration with API call
      const response = await fetch("https://api.example.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // Reset form data
      setFormData({
        name: "",
        contact: "",
        age: "",
        policeClearance: "",
        phoneNumber: "",
      });

      // Close the form
      setIsRegistering(false);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-center text-xl font-bold mb-6">Registry</h2>
      {!isRegistering ? (
        <>
          {/* Registry content goes here, e.g., a list of registered users */}
          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Date Registered</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-100 transition duration-300">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">John Doe</td>
                  <td className="px-4 py-2">2024-08-01</td>
                  <td className="px-4 py-2">Active</td>
                </tr>
                <tr className="border-b hover:bg-gray-100 transition duration-300">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Jane Smith</td>
                  <td className="px-4 py-2">2024-07-29</td>
                  <td className="px-4 py-2">Inactive</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
          <div className="text-center mb-4 pt-4">
            <button
              onClick={() => setIsRegistering(true)}
              className="bg-[#6e3f41] text-white px-4 py-2 rounded hover:bg-[#68d9fe] hover:text-[blue] duration-300"
            >
              Register
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-[#6e3f41] font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 bg-[#6e3f41] text-white rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#6e3f41] font-semibold mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="p-2 bg-[#6e3f41] text-white rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#6e3f41] font-semibold mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="p-2 bg-[#6e3f41] text-white rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#6e3f41] font-semibold mb-1">
              Police Clearance
            </label>
            <input
              type="text"
              name="policeClearance"
              value={formData.policeClearance}
              onChange={handleChange}
              className="p-2 bg-[#6e3f41] text-white rounded focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#6e3f41] font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="p-2 bg-[#6e3f41] text-white rounded focus:outline-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#6e3f41] text-white px-4 py-2 rounded hover:bg-[#68d9fe] hover:text-[#6e3f41] transition duration-300"
            >
              Submit
            </button>
            <button
              onClick={() => setIsRegistering(false)}
              className="ml-4 bg-[#6e3f41] text-white px-4 py-2 rounded hover:bg-[#68d9fe] hover:text-[#6e3f41] transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Registry;

