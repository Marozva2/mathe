import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#4990e2] p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold mb-2">
          Mathe Laundry Service
        </h1>
        <div className="space-x-6 mt-2 font-bold">
          <NavLink
            to="/user/order-service"
            exact="true"
            className="text-white hover:text-blue-200 no-underline"
            activeclassname="font-semibold underline"
          >
            Order Service
          </NavLink>
          <NavLink
            to="/user/order-status"
            exact="true"
            className="text-white hover:text-blue-200 no-underline"
            activeclassname="font-semibold underline"
          >
            Order Status
          </NavLink>
          <NavLink
            to="/user/rate"
            className="text-white hover:text-blue-200 no-underline"
            activeclassname="font-semibold underline"
          >
            Rate Service
          </NavLink>
          <NavLink
            to="/user/view-ratings"
            className="text-white hover:text-blue-200 no-underline"
            activeclassname="font-semibold underline"
          >
            View Ratings
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
