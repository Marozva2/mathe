import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function LandingPage() {
  return (
    <>
     {/* <Header /> */}
     <Home/>
    </>
  );
}

export default LandingPage;
