import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [ordersRequested, setOrdersRequested] = useState(0);
  const [ordersApproved, setOrdersApproved] = useState(0);
  const [ordersCompleted, setOrdersCompleted] = useState(0);
  const [monthlyServices, setMonthlyServices] = useState([]);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [ratings, setRatings] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersResponse = await fetch("/api/orders");
        const ordersData = await ordersResponse.json();
        setOrdersRequested(ordersData.requested);
        setOrdersApproved(ordersData.approved);
        setOrdersCompleted(ordersData.completed);

        const servicesResponse = await fetch("/api/monthly-services");
        const servicesData = await servicesResponse.json();
        setMonthlyServices(servicesData);

        const incomeResponse = await fetch("/api/income");
        const incomeData = await incomeResponse.json();
        setMonthlyIncome(incomeData.monthlyIncome);

        const ratingsResponse = await fetch("/api/ratings");
        const ratingsData = await ratingsResponse.json();
        setRatings(ratingsData.ratings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Requested</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4 flex items-center justify-center">
            {ordersRequested}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Approved</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4 flex items-center justify-center">
            {ordersApproved}
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-center">Orders Completed</h2>
          <div className="bg-maroon h-16 w-16 rounded-full mx-auto mt-4 flex items-center justify-center">
            {ordersCompleted}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow col-span-2">
          <h2 className="text-center">Monthly Services Overview</h2>
          <div
            className="bg-cover h-32 w-full"
            style={{ backgroundImage: "url('image-url.jpg')" }}
          ></div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {monthlyServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-maroon h-8 w-8 rounded-full mx-auto mb-2"></div>
                <div>
                  {service.name} {service.count}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4 col-span-1">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">July Income</h2>
            <div className="flex justify-center items-center h-32">
              <div className="border border-blue-500 rounded-full h-24 w-24 flex items-center justify-center">
                {monthlyIncome}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-center">Ratings</h2>
            <div className="text-center text-yellow-500 mt-2 text-xl">
              {ratings} ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
