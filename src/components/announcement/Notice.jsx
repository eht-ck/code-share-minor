// Import necessary libraries and styles
import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import new_button from "../../assets/new_button.jpg";
import "./notice.css"; // Your existing CSS file

const Notice = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

        // Show only the top 5 announcements if showAll is false
        const limitedAnnouncements = showAll
          ? sortedAnnouncements
          : sortedAnnouncements.slice(0, 5);

        setAnnouncements(limitedAnnouncements);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, [showAll]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const ReadMore = ({ children }) => {
    const text = typeof children === "string" ? children : String(children);
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">
        {isReadMore ? text.slice(0, 60) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "blue" }}
        >
          {isReadMore ? "...Link" : "...Loading"}
        </span>
      </p>
    );
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  // Determine if the container should be scrollable
  const isScrollable = announcements.length > 5 || showAll;

  return (
    <div
      className={`announce-container ${
        isScrollable ? "overflow-y-auto" : "overflow-y-hidden"
      }`}
    >
      <div className="notice-container flex flex-col items-center">
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
              <ReadMore>{announcement.announcement}</ReadMore>
            </div>
            {index === 0 && (
              <div className="new-label">
                <img src={new_button} alt="New" className="new_button" />
              </div>
            )}
          </div>
        ))}
        {!showAll && announcements.length > 5 && (
          <div className="show-more-container mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;
  