import React, { useEffect, useState } from "react";

const AlumniTable = () => {
  const [alumniData, setAlumniData] = useState([]);
  const [batchNumber, setBatchNumber] = useState("");

  useEffect(() => {
    fetchAlumniData();
  }, []);

  const fetchAlumniData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/alumniDetail`);
      const data = await response.json();

      // Filter alumni based on passing year
      const filteredData = data.filter(alumni => {
        // Assuming batchNumber represents the passing year
        return alumni.passingYear - 4 === parseInt(batchNumber);
      });

      const simplifiedData = filteredData.map(({ name, email, designation, location }) => ({
        name,
        email,
        designation,
        location,
      }));

      setAlumniData(simplifiedData);
    } catch (error) {
      console.error("Error fetching alumni data:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchAlumniData();
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Meet Our Proud Alumni of NCC, NITJ</h2>
      <p className="text-gray-700 mb-8">
        Explore the achievements and success stories of our talented alumni who have
        made a mark in various fields.
      </p>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter batch number"
          value={batchNumber}
          onChange={(e) => setBatchNumber(e.target.value)}
          className="mr-2 px-3 py-1 border border-gray-300"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Designation</th>
            <th className="py-2 px-4 border">Location</th>
          </tr>
        </thead>
        <tbody>
          {alumniData.map((alumni, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="py-2 px-4 border">{alumni.name}</td>
              <td className="py-2 px-4 border">{alumni.email}</td>
              <td className="py-2 px-4 border">{alumni.designation}</td>
              <td className="py-2 px-4 border">{alumni.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniTable;
