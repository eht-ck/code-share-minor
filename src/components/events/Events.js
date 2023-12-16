// Import necessary libraries and styles
import React from "react";
import { motion } from "framer-motion";
import "./events.css"; // Import your CSS file
import img2 from "../../assets/carousel1.jpg";
import img1 from "../../assets/carousel2.jpg";
import Navbar from "../navbar/Navbar2";
import Footer from "../footer/Footer";

// Sample data for events
const eventsData = [
  {
    id: 1,
    image: img1,
    description: "Description for Event 1",
  },
  {
    id: 2,
    image: img2,
    description: "Description for Event 2",
  },
  // Add more events as needed
];

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="events-container">
        <h1 className="events-title">
          Upcoming <span style={{ color: "black" }}>Events</span>
        </h1>

        <div className="events-grid">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              className="event-card"
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img
                src={event.image}
                alt={`Event ${event.id}`}
                whileHover={{ scale: 1.09 }}
              />
              <p className="event-description">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
