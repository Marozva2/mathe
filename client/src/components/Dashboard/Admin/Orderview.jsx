import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function OrderView() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/orders/${id}`);
        const data = await response.json();

        if (response.ok) {
          setOrder(data);
        } else {
          setError("Failed to fetch order.");
        }
      } catch (err) {
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading order...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Order Details</h2>
      <div className="border-b border-gray-300 mb-4"></div>
      <p>
        <strong>Order Number:</strong> {order.id}
      </p>
      <p>
        <strong>Date:</strong> {order.date}
      </p>
      <p>
        <strong>Status:</strong> {order.status}
      </p>
      {/* Add more details as needed */}
    </div>
  );
}

export default OrderView;
