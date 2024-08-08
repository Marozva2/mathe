const MatheRatings = () => {
  const ratings = [
    {
      service: "Service #1",
      rating: "5/5",
      comment: "Great service! Highly recommended.",
    },
    {
      service: "Service #2",
      rating: "4/5",
      comment: "Good service but can improve on timing.",
    },
    {
      service: "Service #3",
      rating: "5/5",
      comment: "Excellent quality and attention to detail.",
    },
    {
      service: "Service #4",
      rating: "3/5",
      comment: "Average service. Could be better.",
    },
  ];

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4990e2]">
        Mathe Ratings
      </h2>
      <div className="space-y-4">
        {ratings.map((rating, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{rating.service}</h3>
              <span className="text-sm font-medium text-gray-700">
                {rating.rating}
              </span>
            </div>
            <p className="mt-2 text-gray-700">{rating.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatheRatings;
