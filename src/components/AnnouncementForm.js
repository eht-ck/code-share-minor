import React, { useState } from "react";
import axios from "axios";

const AnnouncementForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    content: "",
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
      // Get the current date
      const currentDate = new Date().toISOString();

      // Send a POST request to your backend endpoint
      await axios.post("http://localhost:3001/announcementDB", {
        date: currentDate,
        announcement: formData.content,
      });

      // Reset form data after successful submission
      setFormData({
        title: "",
        content: "",
      });

      // Show alert for successful submission
      window.alert("Announcement added successfully");
    } catch (error) {
      // Handle error responses from the server
      console.error("Error adding announcement:", error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4"> Add Announcement </h2>{" "}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title:
          </label>{" "}
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>{" "}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-600"
          >
            Content:
          </label>{" "}
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>{" "}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default AnnouncementForm;
