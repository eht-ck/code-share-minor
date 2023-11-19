import React, { useState, useEffect } from "react";
import axios from "axios";
import "./notice.css";
import new_button from "../../assets/new_button.jpg";
const Notice = () => {
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
    <div className="announce-container overflow-y-auto">
      <div className="notice-container">
        {announcements.map((announcement, index) => (
          <div key={announcement._id} className="notice">
            <div className="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
              >
                <path
                  d="M19 0L23.2658 12.7832H37.0701L25.9022 20.6836L30.1679 33.4668L19 25.5664L7.83208 33.4668L12.0978 20.6832L0.929926 12.7832H14.7342L19 0Z"
                  fill="#0369A0"
                />
              </svg>
            </div>
            <div className="notice-text">
              <p>{announcement.announcement}</p>
            </div>
            {index === 0 && (
              <div className="new-label">
                <img src={new_button} alt="New" className="new_button" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notice;
