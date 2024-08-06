const Orders = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">Pending Orders</h3>
            <div className="mt-2 text-gray-600">Total: 123</div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">Processing Orders</h3>
            <div className="mt-2 text-gray-600">Total: 89</div>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold">Completed Orders</h3>
            <div className="mt-2 text-gray-600">Total: 345</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
