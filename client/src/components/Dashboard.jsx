import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
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
    fetch("http://127.0.0.1:5000/laundryitems", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unauthorized");
        }
        return response.json();
      })
      .then((data) => setRecentActivity(data))
      .catch((error) =>
        console.error("Error fetching recent activity:", error)
      );
  }, []);

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
              to=""
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
            <div className="relative">
              <button className="flex items-center hover:bg-gray-700 py-2 transition duration-300">
                <svg
                  className="h-6 w-6 mr-2 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3h2l14 14v-2H3zm0 18h18v-2H3z"
                    fill="currentColor"
                  />
                </svg>
                Services
              </button>
              <div className="absolute z-10 bg-white py-2 mt-2 w-32 rounded-lg shadow-md">
                <Link
                  to="/dashboard/laundry"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                >
                  Laundry
                </Link>
                <Link
                  to="/dashboard/lawning"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                >
                  Lawning
                </Link>
                <Link
                  to="/dashboard/plumbing"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                >
                  Plumbing
                </Link>
              </div>
            </div>
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
                <div>
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="mb-2">
                      <p className="font-semibold">{activity.title}</p>
                      <p className="text-gray-700">{activity.description}</p>
                      <p className="text-sm text-gray-500">
                        {activity.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
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
