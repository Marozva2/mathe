const Customers = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>
      <div className="bg-white p-4 rounded shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">Customer ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-100 transition duration-300">
              <td className="px-4 py-2">101</td>
              <td className="px-4 py-2">Alice Brown</td>
              <td className="px-4 py-2">alice@example.com</td>
              <td className="px-4 py-2">+123456789</td>
            </tr>
            <tr className="border-b hover:bg-gray-100 transition duration-300">
              <td className="px-4 py-2">102</td>
              <td className="px-4 py-2">Bob White</td>
              <td className="px-4 py-2">bob@example.com</td>
              <td className="px-4 py-2">+987654321</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
