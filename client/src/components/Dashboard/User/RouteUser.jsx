import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Rate from "./Rate";
import RateMathe from "./RateMathe";
import OrderService from "./OrderService";
import OrderStatus from "./OrderStatus";

function RouteUser() {
  return (
    <>
      <NavBar />
      <div className="mt-6">
        <Routes>
          <Route path="/order-service" element={<OrderService />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/view-ratings" element={<RateMathe />} />
        </Routes>
      </div>
    </>
  );
}

export default RouteUser;
