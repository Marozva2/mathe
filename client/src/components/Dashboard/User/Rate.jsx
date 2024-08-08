import { useState } from "react";

const Rate = () => {
  const [rating, setRating] = useState(""); // State for storing the selected rating
  const [comment, setComment] = useState(""); // State for storing the comment
  const [submitMessage, setSubmitMessage] = useState(null); // State to display submission message

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitMessage("Your rating has been submitted. Thank you!");
    // Reset form fields
    setRating("");
    setComment("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-[#4990e2]">
        Rate Our Service
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="" disabled>
              Select rating
            </option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-gray-700"
          >
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Leave a comment..."
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {submitMessage && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md shadow-sm">
          <p className="text-center text-green-700">{submitMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Rate;
