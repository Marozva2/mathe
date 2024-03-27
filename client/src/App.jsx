import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import About from "./components/About";
import Laundry from "./components/Laundry";
import Lawning from "./components/Lawning";
import Plumbing from "./components/Plumbing";

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
