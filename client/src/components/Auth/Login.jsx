import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import image from "../../assets/images/image.png";

function LogIn() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = { email, password };

      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
          localStorage.setItem("userId", data.user_id);
          setError(null);
          navigate("/dashboard"); // Redirect to dashboard on successful login
          return; // Exit the function after redirection
        } else {
          setError("Invalid email or password.");
        }
      } else {
        setError("An error occurred. Please try again later.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="h-screen bg-[#55d9ff]">
        <Header />
        <div className="flex">
          <div className="w-1/2 flex justify-center p-5">
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name:"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 mb-4 border bg-[#6c3838] rounded"
                autoComplete="name"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 mb-4 border bg-[#6c3838] rounded"
                autoComplete="email"
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 mb-4 border bg-[#6c3838] rounded"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="w-full p-2 mb-4 bg-[#6c3838] text-white rounded hover:bg-blue-600"
              >
                {showPassword ? "Hide" : "Show"} Password
              </button>
              <div className="w-36 flex justify-center p-2 ml-16 mt-12 bg-[#6c3838] text-white rounded hover:bg-blue-600">
                <button type="submit">Log In</button>
              </div>
              {error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
              )}
            </form>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src={image}
              alt="Illustration"
              className="object-cover"
              style={{ width: 619, height: 670 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;