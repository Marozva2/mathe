import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Get user ID from local storage
    if (userId) {
      fetch(`http://127.0.0.1:5000/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("User ID not found in local storage.");
    }
  }, []);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      if (chart1Ref.current) {
        chart1Ref.current.destroy();
      }
      const ctx1 = document.getElementById("chart1").getContext("2d");
      chart1Ref.current = new Chart(ctx1, {
        type: "line",
        data: {
          // Your chart data for recent activity
        },
        options: {
          // Your chart options
        },
      });

      if (chart2Ref.current) {
        chart2Ref.current.destroy();
      }
      const ctx2 = document.getElementById("chart2").getContext("2d");
      chart2Ref.current = new Chart(ctx2, {
        type: "bar",
        data: {
          // Your chart data for performance
        },
        options: {
          // Your chart options
        },
      });
    }
  }, [userData]);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userId");
        navigate("/");
      } else {
        console.error("An error occurred while logging out.");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white py-8 px-4 w-64 flex flex-col justify-between">
        <ul>
          <li>
            <Link
              to="#"
              className="flex items-center hover:bg-gray-700 py-2 transition duration-300"
            >
              <svg
                className="h-6 w-6 mr-2 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3h2l14 14v-2H3zm0 18h18v-2H3z"
                  fill="currentColor"
                />
              </svg>
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center hover:bg-gray-700 py-2 transition duration-300"
            >
              <svg
                className="h-6 w-6 mr-2 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2zM15 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2zM9 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2zM19 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"
                  fill="currentColor"
                />
              </svg>
              Profile
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center hover:bg-gray-700 py-2 transition duration-300"
          >
            <svg
              className="h-6 w-6 mr-2 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19h-2V7h2v12zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9s9-4.03 9-9s-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7z"
                fill="currentColor"
              />
            </svg>
            Logout
          </button>
        </div>
      </nav>
      <main className="flex-grow p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 transition duration-300">
          Dashboard
        </h1>
        {userData ? (
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2 transition duration-300">
              Welcome, {userData.username}!!!
            </h2>
            <p className="text-gray-700 transition duration-300">
              Email: {userData.email}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded p-4 transform hover:scale-105 transition duration-300">
                <h3 className="text-lg font-semibold mb-2 transition duration-300">
                  Recent Activity
                </h3>
                <canvas id="chart1"></canvas>
              </div>
              <div className="bg-white rounded p-4 transform hover:scale-105 transition duration-300">
                <h3 className="text-lg font-semibold mb-2 transition duration-300">
                  Performance
                </h3>
                <canvas id="chart2"></canvas>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 mt-4">
              <div className="bg-white rounded p-4 transform hover:scale-104 transition duration-300">
                <h3 className="text-lg font-semibold mb-2 transition duration-300">
                  More Activities
                </h3>
                <canvas id="chart1"></canvas>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
