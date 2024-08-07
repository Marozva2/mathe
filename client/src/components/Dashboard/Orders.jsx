import { useState, useEffect } from "react";
import { FiEdit, FiEye } from "react-icons/fi";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch orders from API
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/orders");
        const data = await response.json();

        if (response.ok) {
          setOrders(data);
        } else {
          setError("Failed to fetch orders.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchOrders();
  }, []);

  // Function to handle viewing an order
  const handleViewOrder = (orderId) => {
    console.log("Viewing order:", orderId);
    // Redirect to order detail page
    // navigate(`/order/${orderId}`);
  };

  // Function to handle editing an order
  const handleEditOrder = (orderId) => {
    console.log("Editing order:", orderId);
    // Redirect to order edit page
    // navigate(`/order/edit/${orderId}`);
  };

  // If loading, show loading message
  if (loading) {
    return <p className="text-center">Loading orders...</p>;
  }

  // If error exists, show error message
  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

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
              <td className="px-4 py-2">{order.id}</td>
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
                <button
                  onClick={() => handleViewOrder(order.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300"
                >
                  <FiEye className="inline-block mr-1" />
                  View
                </button>
                <button
                  onClick={() => handleEditOrder(order.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-300"
                >
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
