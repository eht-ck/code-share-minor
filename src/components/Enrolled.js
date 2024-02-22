import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";

const Enrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [filteredYear, setFilteredYear] = useState("");
  const [filteredBranch, setFilteredBranch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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

  const applyFilters = () => {
    let newData = enrolledStudents;

    if (filteredYear) {
      newData = newData.filter((student) => student.year.toString() === filteredYear);
    }

    if (filteredBranch) {
      newData = newData.filter((student) => student.branch === filteredBranch);
    }

    setFilteredData(newData);
  };

  const downloadCSV = () => {
    const csvData = filteredData.map((student) => {
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

      <div className="mb-4">
        <label className="mr-2">Filter by Year:</label>
        <select
          value={filteredYear}
          onChange={(e) => setFilteredYear(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Years</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Filter by Branch:</label>
        <select
          value={filteredBranch}
          onChange={(e) => setFilteredBranch(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">All Branches</option>
          <option value="Biotechnology">Biotechnology</option>
          <option value="ChemicalEngineering">Chemical Engineering</option>
          <option value="CivilEngineering">Civil Engineering</option>
          <option value="ComputerScienceEngineering">Computer Science and Engineering</option>
          <option value="ElectricalEngineering">Electrical Engineering</option>
          <option value="ElectronicsCommunicationEngineering">Electronics and Communication Engineering</option>
          <option value="IndustrialProductionEngineering">Industrial and Production Engineering</option>
          <option value="InformationTechnology">Information Technology</option>
          <option value="InstrumentalControlEngineering">Instrumental and Control Engineering</option>
          <option value="MechanicalEngineering">Mechanical Engineering</option>
          <option value="TextileTechnology">Textile Technology</option>
        </select>
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 hover:bg-blue-600 focus:outline-none"
      >
        Apply Filters
      </button>

      <button
        onClick={downloadCSV}
        className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 ml-4 hover:bg-blue-600 focus:outline-none"
        disabled={!filteredData.length} // Disable the button if no filtered data
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
          {filteredData.map((student) => (
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
