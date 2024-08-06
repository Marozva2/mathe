import { Route, Routes, NavLink, Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import Orders from "./Orders";
import Registry from "./Registry";
import Delivery from "./Delivery";
import Mathe from "./Mathe";
import Customers from "./Customers";
import Settings from "./Settings";

function AdminDash() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/6 bg-maroon text-white p-4 flex flex-col bg-[#6e3f41]">
        <div className="flex items-center mb-8">
          <div className="bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center text-black">
            LOGO
          </div>
        </div>
        <nav className="flex flex-col space-y-12 font-bold">
          <NavLink
            to="/admin/dash"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/admin/registry"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Registry
          </NavLink>
          <NavLink
            to="/admin/delivery"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Delivery
          </NavLink>
          <NavLink
            to="/admin/mathe"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Mathe
          </NavLink>
          <NavLink
            to="/admin/customers"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Customers
          </NavLink>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) =>
              `text-white no-underline transition duration-300 p-2 rounded ${
                isActive
                  ? "bg-[#d9d9d9] text-[#6e3f41]"
                  : "hover:bg-[#d9d9d9] hover:text-[#6e3f41]"
              }`
            }
          >
            Settings
          </NavLink>
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

        <Routes>
          <Route path="/admin/dash" element={<AdminDashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/registry" element={<Registry />} />
          <Route path="/admin/delivery" element={<Delivery />} />
          <Route path="/admin/mathe" element={<Mathe />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDash;
