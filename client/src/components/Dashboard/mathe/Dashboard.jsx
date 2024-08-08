import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const statusChartInstanceRef = useRef(null);
  const navigate = useNavigate();

  const storedUserId = localStorage.getItem("userId");
  const storedAccessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (storedUserId) {
      fetch(`http://127.0.0.1:5000/user/${storedUserId}`)
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("User ID not found in local storage.");
    }
  }, [storedUserId, setUserData]);

  useEffect(() => {
    if (storedUserId) {
      fetch(`http://127.0.0.1:5000/laundryitem/${storedUserId}`, {
        headers: {
          Authorization: `Bearer ${storedAccessToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Unauthorized");
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setRecentActivity(
              data.map((item) => ({
                title: item.number.toString(),
                description: item.description,
                timestamp: new Date().toISOString(),
              }))
            );
          } else if (typeof data === "object") {
            setRecentActivity([
              {
                title: data.number.toString(),
                description: data.description,
                timestamp: new Date().toISOString(),
              },
            ]);
          } else {
            console.error("Data is not in the expected format:", data);
          }
        })
        .catch((error) =>
          console.error("Error fetching recent activity:", error)
        );
    } else {
      console.error("User ID not found in local storage.");
    }
  }, [storedUserId, storedAccessToken]);

  useEffect(() => {
    const canvas = document.getElementById("statusChart");
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (statusChartInstanceRef.current) {
        statusChartInstanceRef.current.destroy();
      }

      const data = {
        labels: ["Pending", "Approved"],
        datasets: [
          {
            data: [1, 0],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)", // Red for pending
              "rgba(54, 162, 235, 0.2)", // Blue for approved
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      };

      const statusChart = new Chart(ctx, {
        type: "doughnut",
        data: data,
        options: options,
      });

      statusChartInstanceRef.current = statusChart;
    }

    // Change status to approved and update chart color after 5 seconds
    const timeout = setTimeout(() => {
      if (statusChartInstanceRef.current) {
        statusChartInstanceRef.current.data.datasets[0].data = [0, 1];
        statusChartInstanceRef.current.data.datasets[0].backgroundColor = [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)", // Blue for approved
        ];
        statusChartInstanceRef.current.data.datasets[0].borderColor = [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ];
        statusChartInstanceRef.current.update();
      }
    }, 5000);

    return () => clearTimeout(timeout);
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
        <div className="py-2">
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="flex-grow p-10 bg-white rounded-lg shadow-md m-5">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Display user data if available */}
        {userData && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Welcome, {userData.name}!</h2>
            <p>Email: {userData.email}</p>
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Status Chart</h2>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300">
            Change Status
          </button>
        </div>
        <canvas id="statusChart" width="400" height="200"></canvas>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index} className="mb-2">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{activity.title}</h3>
                  <p>{activity.description}</p>
                  <span className="text-sm text-gray-500">
                    {activity.timestamp}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
