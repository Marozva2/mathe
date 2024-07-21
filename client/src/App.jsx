import React from "react";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/laundry" element={<Laundry />} />
        <Route path="dashboard/lawning" element={<Lawning />} />
        <Route path="dashboard/plumbing" element={<Plumbing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
