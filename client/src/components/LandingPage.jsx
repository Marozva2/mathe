import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
