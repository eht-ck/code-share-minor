import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-white p-8 rounded shadow-md mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome to NCC Admin Dashboard</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleLogout}
        >
          Sign Out
        </button>
      </div>
      {/* <div className="flex-1 bg-white p-8 rounded shadow-md max-w-md">
        <h2 className="text-lg mb-4">{user && user.email}</h2>
        {/* Admin Dashboard Content Goes Here 
      </div> */}

    </div>
  );
};

export default AdminDashboard;
