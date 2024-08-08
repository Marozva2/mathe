// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import LogIn from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import About from "./components/Home/About";
import Laundry from "./components/Services/Laundry";
import Lawning from "./components/Services/Lawning";
import Plumbing from "./components/Services/Plumbing";
import AdminDash from "./components/Dashboard/Admin/AdminDash";
import Orders from "./components/Dashboard/Admin/Orders";
import Registry from "./components/Dashboard/Admin/Registry";
import Delivery from "./components/Dashboard/Admin/Delivery";
import Mathe from "./components/Dashboard/Admin/Mathe";
import Customers from "./components/Dashboard/Admin/Customers";
import Settings from "./components/Dashboard/Admin/Settings";
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import OrderView from "./components/Dashboard/Admin/Orderview";
import OrderEdit from "./components/Dashboard/Admin/OrderEdit";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import RateMathe from "./components/Dashboard/User/RateMathe";
import RouteUser from "./components/Dashboard/User/RouteUser";
import Rate from "./components/Dashboard/User/Rate";
import Service from "./components/Dashboard/User/OrderService";

function App() {
  return (
    <Router>
      {/* Main Routes */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* Service Routes */}
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/lawning" element={<Lawning />} />
        <Route path="/plumbing" element={<Plumbing />} />

        {/* User Dashboard Routes */}
        <Route path="/user/*" element={<RouteUser />}>
          <Route path="rate" element={<Rate />} />
          <Route path="order-status" element={<Service />} />
          <Route path="view-ratings" element={<RateMathe />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute adminOnly>
              <AdminDash />
            </ProtectedRoute>
          }
        >
          <Route path="dash" element={<AdminDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order/:id" element={<OrderView />} />
          <Route path="order/edit/:id" element={<OrderEdit />} />
          <Route path="registry" element={<Registry />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="mathe" element={<Mathe />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
