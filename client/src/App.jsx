import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import Dashboard from "./components/Dashboard/mathe/Dashboard";
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

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

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

        {/* User Dashboard Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="laundry" element={<Laundry />} />
        <Route path="lawning" element={<Lawning />} />
        <Route path="plumbing" element={<Plumbing />} />
      </Routes>
    </Router>
  );
}

export default App;
