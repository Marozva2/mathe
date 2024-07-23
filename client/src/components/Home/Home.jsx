import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <div className="bg-[#56dffe] min-h-screen flex flex-col items-center">
      <Header />
      <div className="text-white text-3xl italic m-20 text-center">
        Welcome to <span className="font-bold">Mathe</span>
      </div>
      <div
        className="text-white text-6xl mt-3 mb-10 text-center"
        style={{ fontFamily: "'Shadows Into Light', cursive" }}
      >
        Your reliable <br />
        door-to-door <br />
        laundry service!
      </div>
      <button
        onClick={handleButtonClick}
        className="bg-[#6b4146] text-white text-xl px-6 py-3 rounded-lg"
      >
        Let's Get Started
      </button>
    </div>
  );
}

export default Home;
