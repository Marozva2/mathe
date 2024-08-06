import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout";
import About from "./components/Home/About";
import Laundry from "./components/Services/Laundry";
import Lawning from "./components/Services/Lawning";
import Plumbing from "./components/Services/Plumbing";
import AdminDash from "./components/Dashboard/AdminDash";
import Orders from "./components/Dashboard/Orders";
import Registry from "./components/Dashboard/Registry";
import Delivery from "./components/Dashboard/Delivery";
import Mathe from "./components/Dashboard/Mathe";
import Customers from "./components/Dashboard/Customers";
import Settings from "./components/Dashboard/Settings";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

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
        <Route path="/admin/*" element={<AdminDash />}>
          <Route path="dash" element={<AdminDashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="registry" element={<Registry />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="mathe" element={<Mathe />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Services Routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="laundry" element={<Laundry />} />
        <Route path="lawning" element={<Lawning />} />
        <Route path="plumbing" element={<Plumbing />} />
      </Routes>
    </Router>
  );
}

export default App;
