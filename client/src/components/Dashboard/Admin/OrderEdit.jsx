import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function OrderEdit() {
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

  const handleSave = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        alert("Order updated successfully!");
        // Redirect to orders page or other appropriate action
      } else {
        setError("Failed to update order.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  if (loading) {
    return <p className="text-center">Loading order...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Edit Order</h2>
      <div className="border-b border-gray-300 mb-4"></div>
      <form>
        <label className="block mb-4">
          <span className="text-gray-700">Order Number</span>
          <input
            type="text"
            value={order.id}
            readOnly
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Date</span>
          <input
            type="date"
            value={order.date}
            onChange={(e) => setOrder({ ...order, date: e.target.value })}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Status</span>
          <select
            value={order.status}
            onChange={(e) => setOrder({ ...order, status: e.target.value })}
            className="form-select mt-1 block w-full"
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Delivered">Delivered</option>
          </select>
        </label>
        <button
          type="button"
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default OrderEdit;
