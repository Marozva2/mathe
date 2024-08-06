import { useState, useEffect } from "react";
import { FiEdit, FiEye } from "react-icons/fi";

function Orders() {
  // Dummy data for orders
  const [orders] = useState([
    { id: 1, name: "Order #1", date: "2024-08-01", status: "Delivered" },
    { id: 2, name: "Order #2", date: "2024-07-29", status: "Pending" },
    { id: 3, name: "Order #3", date: "2024-07-27", status: "Delivered" },
    { id: 4, name: "Order #4", date: "2024-07-25", status: "Pending" },
  ]);

  useEffect(() => {
    // Fetch orders from API or other sources here
    // setOrders(fetchedOrders);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Orders</h2>
      <div className="border-b border-gray-300 mb-4"></div>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-4 py-2">Order Number</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b hover:bg-gray-50 transition duration-300"
            >
              <td className="px-4 py-2">{order.name}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td
                className={`px-4 py-2 ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300">
                  <FiEye className="inline-block mr-1" />
                  View
                </button>
                <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300">
                  <FiEdit className="inline-block mr-1" />
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
