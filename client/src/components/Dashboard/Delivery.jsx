import { FiMapPin } from "react-icons/fi";

const deliveryData = [
  {
    id: 1,
    name: "John Doe",
    date: "2024-08-06",
    time: "10:30 AM",
    status: "Delivered",
    apartmentName: "Sunset Apartments",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-08-05",
    time: "02:15 PM",
    status: "Not Delivered",
    apartmentName: "Green Park",
  },
  {
    id: 3,
    name: "Alice Brown",
    date: "2024-08-04",
    time: "11:45 AM",
    status: "Delivered",
    apartmentName: "Maple Residences",
  },
  {
    id: 4,
    name: "Bob Johnson",
    date: "2024-08-03",
    time: "04:30 PM",
    status: "Delivered",
    apartmentName: "Oak Towers",
  },
  // Add more entries as needed
];

function Delivery() {
  return (
    <div className="bg-white rounded-t-lg shadow-md p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Delivery Status</h2>
      <hr className="border-t-2 border-black mb-4" />

      {deliveryData.map((entry) => (
        <div
          key={entry.id}
          className="flex flex-col mb-4 pb-4 border-b border-gray-300"
        >
          {/* Delivery Info */}
          <div className="flex justify-between items-center">
            <div className="text-[#6e3f41] font-semibold">{entry.name}</div>
            <div className="text-gray-500">
              {entry.date}, {entry.time}
            </div>
            <div
              className={`font-semibold ${
                entry.status === "Delivered" ? "text-green-500" : "text-red-500"
              }`}
            >
              {entry.status}
            </div>
          </div>

          {/* Location Info */}
          <div className="flex items-center mt-2">
            <FiMapPin className="text-[#6e3f41] mr-2" />
            <div className="text-gray-700">{entry.apartmentName}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Delivery;
