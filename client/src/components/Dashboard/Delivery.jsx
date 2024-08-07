import { useState, useEffect } from "react";
import { FiMapPin } from "react-icons/fi";

function Delivery() {
  const [deliveryData, setDeliveryData] = useState([]);

  const fetchDeliveries = async () => {
    try {
      const response = await fetch("http://localhost:5000/deliveries");
      if (!response.ok) {
        throw new Error("Failed to fetch delivery data");
      }
      const data = await response.json();
      setDeliveryData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <div className="bg-white rounded-t-lg shadow-md p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Delivery Status</h2>
      <hr className="border-t-2 border-black mb-4" />

      {deliveryData.map((entry) => (
        <div
          key={entry.id}
          className="flex flex-col mb-4 pb-4 border-b border-gray-300"
        >
          <div className="flex justify-between items-center">
            <div className="text-[#6e3f41] font-semibold">{entry.name}</div>
            <div className="text-gray-500">
              {entry.delivery_date}, {entry.delivery_time}
            </div>
            <div
              className={`font-semibold ${
                entry.status === "Delivered" ? "text-green-500" : "text-red-500"
              }`}
            >
              {entry.status}
            </div>
          </div>

          <div className="flex items-center mt-2">
            <FiMapPin className="text-[#6e3f41] mr-2" />
            <div className="text-gray-700">{entry.apartment_name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Delivery;
