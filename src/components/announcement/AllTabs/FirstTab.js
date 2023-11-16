import React, { useState, useEffect } from "react";
import axios from "axios";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://localhost:3001/announcements");

        // Sort announcements by date in descending order (newest first)
        const sortedAnnouncements = response.data.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });

        setAnnouncements(sortedAnnouncements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto p-4">
      <ul className="list-disc">
        {" "}
        {announcements.map((announcement) => (
          <li key={announcement._id} className="my-2">
            <p> {announcement.announcement} </p>{" "}
           
          </li>
        ))}{" "}
      </ul>{" "}
    </div>
  );
};

export default Announcements;
