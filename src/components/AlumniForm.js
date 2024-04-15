import React, { useState } from "react";

const AlumniForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    regNumber: "",
    passingYear: "",
    rank: "",
    designation: "",
    location: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to submit data to the backend
      const response = await fetch("http://localhost:3001/alumniDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data after successful submission
        setFormData({
          name: "",
          regNumber: "",
          passingYear: "",
          rank: "",
          designation: "",
          location: "",
        });

        console.log("Alumni registered successfully");
      } else {
        console.error("Failed to register alumni");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Alumni Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="regNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Regimental Number:
          </label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="passingYear"
            className="block text-sm font-medium text-gray-600"
          >
            Passing Year:
          </label>
          <input
            type="text"
            id="passingYear"
            name="passingYear"
            value={formData.passingYear}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="rank"
            className="block text-sm font-medium text-gray-600"
          >
            Rank:
          </label>
          <input
            type="text"
            id="rank"
            name="rank"
            value={formData.rank}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-gray-600"
          >
            Designation:
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AlumniForm;
