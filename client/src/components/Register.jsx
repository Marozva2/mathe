import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    checkFormValidity();

    if (!formValid) {
      setError("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
        navigate("/login");
      } else {
        setError(data.detail);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const checkFormValidity = () => {
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md mt-16 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="px-6 py-4">
          <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
            Sign Up
          </h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          />
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <button
            type="submit"
            className="w-full py-2 px-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          >
            Sign Up
          </button>
          <p className="text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Sign in
            </a>{" "}
            here!
          </p>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Register;
