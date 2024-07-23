import React from "react";

function AdminDash() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-maroon text-white p-4 flex flex-col bg-[#6e3f41]">
        <div className="flex items-center mb-8">
          <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
            LOGO
          </div>
        </div>
        <nav className="flex flex-col space-y-12 font-bold">
          <a
            href="admin/dash"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Dashboard
          </a>
          <a
            href="admin/orders"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Orders
          </a>
          <a
            href="admin/registry"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Registry
          </a>
          <a
            href="admin/delivery"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Delivery
          </a>
          <a
            href="admin/mathe"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Mathe
          </a>
          <a
            href="admin/customers"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Customers
          </a>
          <a
            href="admin/settings"
            className="text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
          >
            Settings
          </a>
        </nav>
        <a
          href="/logout"
          className="mt-auto text-white no-underline hover:bg-[#d9d9d9] hover:text-[#6e3f41] transition duration-300 p-2 rounded"
        >
          LOGOUT
        </a>
      </aside>
      <main className="w-4/5 p-6 bg-[#68d9fe]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4"></div>
          <div className="flex items-center space-x-2">
            <div className="text-gray-500">msg</div>
            <div className="text-gray-500">notif</div>

            <div>Dante.</div>
            <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center">
              <i className="ri-user-line text-2xl"></i>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Orders requested</h2>
            <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Orders approved</h2>
            <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4"></div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Orders completed</h2>
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
      </main>
    </div>
  );
}

export default AdminDash;
