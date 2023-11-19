import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import AlumniForm from "../components/AlumniForm";
import AnnouncementForm from "../components/AnnouncementForm";
import Enrolled from "../components/Enrolled";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("dashboard");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Check if the user is authenticated
  useEffect(() => {
    const checkAuthentication = () => {
      if (!user) {
        // Redirect to the login page if the user is not authenticated
        navigate("/login");
      }
    };

    checkAuthentication();
  }, [user, navigate]);

  const renderContent = () => {
    switch (selectedOption) {
      case "addAlumni":
        return <AlumniForm />;
      case "addAnnouncement":
        return <AnnouncementForm />;
      case "enrolledStudents":
        return <Enrolled />;
      default:
        return (
          <div className="bg-white p-8 rounded shadow-md mb-4">
  <h2 className="text-3xl font-bold mb-4 text-gray-800">Admin Privileges</h2>
  <p className="text-lg text-gray-700 mb-4">
    As an admin, you have the following privileges:
  </p>
  <ul className="list-disc pl-6 mb-4">
    <li className="text-base text-gray-800">Add and manage alumni details.</li>
    <li className="text-base text-gray-800">Create and update announcements.</li>
    <li className="text-base text-gray-800">View a list of currently enrolled students.</li>
  </ul>
  <p className="text-gray-700">
    Make the most of these privileges to efficiently manage the NCC platform!
  </p>
</div>

        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 p-4 text-white">
        <h2 className="text-lg font-semibold mb-4">Admin Options</h2>
        <ul>
          <li
            className={`${
              selectedOption === "dashboard" ? "font-bold" : ""
            } py-2 px-4 cursor-pointer hover:bg-gray-700 transition duration-300`}
            onClick={() => setSelectedOption("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`${
              selectedOption === "addAlumni" ? "font-bold" : ""
            } py-2 px-4 cursor-pointer hover:bg-gray-700 transition duration-300`}
            onClick={() => setSelectedOption("addAlumni")}
          >
            Add Alumni Details
          </li>
          <li
            className={`${
              selectedOption === "addAnnouncement" ? "font-bold" : ""
            } py-2 px-4 cursor-pointer hover:bg-gray-700 transition duration-300`}
            onClick={() => setSelectedOption("addAnnouncement")}
          >
            Add Announcement
          </li>
          <li
            className={`${
              selectedOption === "enrolledStudents" ? "font-bold" : ""
            } py-2 px-4 cursor-pointer hover:bg-gray-700 transition duration-300`}
            onClick={() => setSelectedOption("enrolledStudents")}
          >
            See Currently Enrolled Students
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white p-8 rounded shadow-md mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to the NCC Admin Dashboard
          </h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none transition duration-300"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        </div>

        {/* Render the selected content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
