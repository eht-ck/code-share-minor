import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const Enrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  useEffect(() => {
    const fetchEnrolledStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/registeredUsers");
        setEnrolledStudents(response.data);
      } catch (error) {
        console.error("Error fetching enrolled students:", error);
      }
    };

    fetchEnrolledStudents();
  }, []);

  const downloadCSV = () => {
    const csvData = enrolledStudents.map((student) => {
      return `${student.name},${student.rollNumber},${student.email},${student.branch},${student.year},${student.phone}\n`;
    });

    const csvBlob = new Blob([`Name,Roll Number,Email,Branch,Year,Phone\n${csvData.join("")}`], {
      type: "text/csv;charset=utf-8",
    });

    saveAs(csvBlob, "enrolled_students.csv");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Enrolled Students</h2>
      <button
        onClick={downloadCSV}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600 focus:outline-none"
      >
        Download CSV
      </button>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Roll Number</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Branch</th>
            <th className="border border-gray-300 px-4 py-2">Year</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.map((student) => (
            <tr key={student._id}>
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.rollNumber}</td>
              <td className="border border-gray-300 px-4 py-2">{student.email}</td>
              <td className="border border-gray-300 px-4 py-2">{student.branch}</td>
              <td className="border border-gray-300 px-4 py-2">{student.year}</td>
              <td className="border border-gray-300 px-4 py-2">{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Enrolled;
