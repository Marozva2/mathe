import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        email,
        password,
      };

      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mt-15 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="px-8 py-12">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
            Sign In
          </h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Show Password</span>
            </label>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <div className="px-5 py-8 bg-gray-50">
          <button
            type="submit"
            className="w-full py-2 px-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          >
            Sign In
          </button>
          <div className="text-center mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Sign up
            </a>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default LogIn;
