import { useState } from "react";

const matheData = [
  {
    id: 1,
    name: "John Doe",
    location: "Nairobi",
    services: "Plumbing, Electrical",
    pricing: "$50/hr",
    profilePic: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Kisumu",
    services: "Landscaping, Carpentry",
    pricing: "$60/hr",
    profilePic: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  // Add more entries as needed
];

function Mathe() {
  const [selected, setSelected] = useState({});

  const handleToggleSelect = (id) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h2 className="text-center text-xl font-bold mb-6">Mathe</h2>
      <div className="space-y-4">
        {matheData.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center bg-white shadow-lg p-4 rounded-l-full"
          >
            {/* Profile Picture */}
            <img
              src={entry.profilePic}
              alt={entry.name}
              className="rounded-full h-12 w-12 object-cover"
            />

            {/* Attributes */}
            <div className="flex flex-grow justify-between items-center pl-4">
              <div>
                <div className="flex">
                  <div className="font-semibold text-[#6e3f41] pr-8">Name:</div>
                  <div className="text-[#6e3f41]">{entry.name}</div>
                </div>
                <div className="flex">
                  <div className="font-semibold text-[#6e3f41] pr-6">
                    Services:
                  </div>
                  <div className="text-[#6e3f41]">{entry.services}</div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <div className="font-semibold text-[#6e3f41] pr-6">
                    Location:
                  </div>
                  <div className="text-[#6e3f41]">{entry.location}</div>
                </div>
                <div className="flex">
                  <div className="font-semibold text-[#6e3f41] pr-8">
                    Pricing:
                  </div>
                  <div className="text-[#6e3f41]">{entry.pricing}</div>
                </div>
              </div>
            </div>

            {/* Plus / Tick Button */}
            <button
              onClick={() => handleToggleSelect(entry.id)}
              className={`ml-auto bg-[#6e3f41] text-white p-2 rounded-full focus:outline-none transition duration-300 ${
                selected[entry.id]
                  ? "hover:bg-green-500"
                  : "hover:bg-blue-500"
              }`}
            >
              {selected[entry.id] ? (
                <span className="text-green-500 text-xl">✔</span>
              ) : (
                <span className="text-white text-xl">+</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mathe;
