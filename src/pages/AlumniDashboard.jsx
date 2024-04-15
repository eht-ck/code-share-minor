import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

// Define AlumniDashboard component
const AlumniDashboard = () => {
  // Define state variables
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [alumniProfile, setAlumniProfile] = useState(null); // State to store alumni profile
  const [isEditing, setIsEditing] = useState(false); // State to manage editing mode
  const [editedProfile, setEditedProfile] = useState({
    // State to store edited profile data
    name: "",
    rank: "",
    passingYear: "",
    designation: "",
    location: "",
  });

  // Dummy alumni profile data
  const dummyProfile = {
    name: "John Doe",
    rank: "Captain",
    passingYear: "2010",
    designation: "Software Engineer",
    location: "New York",
  };

  // Function to fetch alumni profile data
  const fetchAlumniProfile = async () => {
    try {
      // Simulate API call to fetch alumni profile
      // Replace this with actual API call
      setAlumniProfile(dummyProfile);
      setEditedProfile(dummyProfile); // Initialize edited profile with fetched profile data
    } catch (error) {
      console.error("Error fetching alumni profile:", error);
    }
  };

  // Fetch alumni profile data on component mount
  useEffect(() => {
    fetchAlumniProfile();
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Function to handle editing mode toggle
  const toggleEdit = () => {
    setIsEditing((prev) => !prev); // Toggle editing mode
  };

  // Function to handle input change in edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle profile update
  const handleProfileUpdate = async () => {
    try {
      // Simulate API call to update alumni profile
      // Replace this with actual API call
      setAlumniProfile(editedProfile); // Update displayed profile with edited profile data
      toggleEdit(); // Exit editing mode
    } catch (error) {
      console.error("Error updating alumni profile:", error);
    }
  };

  // Return JSX
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar and Main Content */}
      {/* Sidebar is omitted for brevity */}

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white p-8 rounded shadow-md mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {alumniProfile && alumniProfile.name}!
          </h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>

        {/* Display Alumni Profile */}
        {alumniProfile && (
          <div className="bg-blue-100 p-8 rounded shadow-md mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Name:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleInputChange}
                  className="rounded-md border-gray-300 p-2 w-full"
                />
              ) : (
                <p className="text-blue-800">{alumniProfile.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Rank:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="rank"
                  value={editedProfile.rank}
                  onChange={handleInputChange}
                  className="rounded-md border-gray-300 p-2 w-full"
                />
              ) : (
                <p className="text-blue-800">{alumniProfile.rank}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Passing Year:
              </label>
              <p className="text-blue-800">{alumniProfile.passingYear}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Designation:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="designation"
                  value={editedProfile.designation}
                  onChange={handleInputChange}
                  className="rounded-md border-gray-300 p-2 w-full"
                />
              ) : (
                <p className="text-blue-800">{alumniProfile.designation}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={editedProfile.location}
                  onChange={handleInputChange}
                  className="rounded-md border-gray-300 p-2 w-full"
                />
              ) : (
                <p className="text-blue-800">{alumniProfile.location}</p>
              )}
            </div>
            {/* Render edit/save button based on editing mode */}
            {isEditing ? (
              <button
                onClick={handleProfileUpdate}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
              >
                Save
              </button>
            ) : (
              <button
                onClick={toggleEdit}
                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none mr-2"
              >
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlumniDashboard;
