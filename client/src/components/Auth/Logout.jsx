import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        navigate("/"); // Redirect to "/" route after logout
      } else {
        setError(
          "An error occurred while logging out. Please try again later."
        );
      }
    } catch (err) {
      console.error("Logout error:", err);
      setError("An error occurred while logging out. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Logout
        </h2>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          onClick={handleLogout}
          className="w-full py-2 px-4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
