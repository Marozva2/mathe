import { useState } from "react";

const OrderStatus = () => {
  const [orderStatus, setOrderStatus] = useState("");
  const [isStatusVisible, setIsStatusVisible] = useState(false);

  const simulateOrderStatus = () => {
    // Here, thou may fetch the real order status from an API or service
    setOrderStatus("Order received! We will contact you soon.");
  };

  const toggleOrderStatus = () => {
    if (!isStatusVisible) {
      simulateOrderStatus();
    }
    setIsStatusVisible(!isStatusVisible);
  };

  return (
    // Center the component on the page
    <div className="flex items-center justify-center min-h-screen bg-[#f2f2f2]">
      <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold mb-4 text-center text-[#4990e2]">
          Order Status
        </h3>
        <p className="text-gray-600 text-center mb-4">
          Track your order status here
        </p>
        <button
          onClick={toggleOrderStatus}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          {isStatusVisible ? "Hide Status" : "Show Status"}
        </button>
        {isStatusVisible && (
          <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
            <p className="mt-2 text-gray-700 text-center">{orderStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
