// Import necessary hooks
import { useState, useEffect } from "react";

function Registry() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [registries, setRegistries] = useState([]); // State for registries
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    age: "",
    policeClearance: "",
    phoneNumber: "",
  });

  // Function to fetch registries from the API
  const fetchRegistries = async () => {
    try {
      const response = await fetch("http://localhost:5000/registries");
      if (!response.ok) {
        throw new Error("Failed to fetch registries");
      }
      const data = await response.json();
      setRegistries(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Fetch registries when the component mounts
  useEffect(() => {
    fetchRegistries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/registries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      setFormData({
        name: "",
        contact: "",
        age: "",
        policeClearance: "",
        phoneNumber: "",
      });

      setIsRegistering(false);
      alert("Registration successful!");

      // Refresh registries after successful registration
      fetchRegistries();
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
          {/* Display list of registered users */}
          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Contact</th>
                  <th className="px-4 py-2">Age</th>
                  <th className="px-4 py-2">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {registries.map((registry) => (
                  <tr
                    key={registry.id}
                    className="border-b hover:bg-gray-100 transition duration-300"
                  >
                    <td className="px-4 py-2">{registry.id}</td>
                    <td className="px-4 py-2">{registry.name}</td>
                    <td className="px-4 py-2">{registry.contact}</td>
                    <td className="px-4 py-2">{registry.age}</td>
                    <td className="px-4 py-2">{registry.phone_number}</td>
                  </tr>
                ))}
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
