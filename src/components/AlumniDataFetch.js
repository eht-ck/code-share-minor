import React, { useEffect, useState } from "react";

const AlumniTable = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        // Fetch alumni details from the endpoint
        const response = await fetch("http://localhost:3001/alumniDetail");
        const data = await response.json();

        // Extract only the required fields (name, email, designation, location)
        const simplifiedData = data.map(({ name, email, designation, location }) => ({
          name,
          email,
          designation,
          location,
        }));

        // Update state with the simplified data
        setAlumniData(simplifiedData);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    // Call the fetchAlumniData function
    fetchAlumniData();
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Meet Our Proud Alumni of NCC, NITJ</h2>
      <p className="text-gray-700 mb-8">
        Explore the achievements and success stories of our talented alumni who have
        made a mark in various fields.
      </p>

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
