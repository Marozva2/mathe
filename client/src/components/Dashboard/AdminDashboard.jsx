const AdminDashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Requested</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Approved</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Completed</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="text-center">Monthly Services Overview</h2>
          <div
            className="bg-cover h-32 w-full"
            style={{ backgroundImage: "url('image-url.jpg')" }}
          ></div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="text-center">
                  <div className="bg-maroon h-8 w-8 rounded-full mx-auto mb-2"></div>
                  <div>Users 100</div>
                </div>
              ))}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4 col-span-1">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">July Income</h2>
            <div className="flex justify-center items-center h-32">
              <div className="border border-blue-500 rounded-full h-24 w-24 flex items-center justify-center"></div>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Ratings</h2>
            <div className="text-center text-yellow-500 mt-2 text-xl">
              4.5 ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
