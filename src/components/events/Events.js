import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./events.css";
import Navbar from "../navbar/Navbar2";
import Footer from "../footer/Footer";
import Modal from "./Modal";
import img4 from "./event_image/e.jpg";
import IMA1 from "./event_image/IMA1.jpg";
import IMA2 from "./event_image/IMA2.jpg";
import IMA3 from "./event_image/IMA3.jpg";
import IMA4 from "./event_image/IMA4.jpg";
import IMA5 from "./event_image/IMA5.jpg";
import BD1 from "./event_image/BD1.jpg";
import BD2 from "./event_image/BD2.jpg";
import WPN1 from "./event_image/WPN1.jpg";
import WPN2 from "./event_image/WPN2.jpg";
import WPN3 from "./event_image/WPN1.jpg";
import WPN4 from "./event_image/WPN4.jpg";
import WPN5 from "./event_image/WPN5.jpg";
import WPN6 from "./event_image/WPN6.jpg";
import WPN7 from "./event_image/WPN7.jpg";
import WPN8 from "./event_image/WPN8.jpg";
import WPN9 from "./event_image/WPN9.jpg";
import WPN10 from "./event_image/WPN10.jpg";
import WPN11 from "./event_image/WPN11.jpg";
import WPN12 from "./event_image/WPN12.jpg";
import WPN13 from "./event_image/WPN13.jpg";
import WPN14 from "./event_image/WPN14.jpg";
import SWCH1 from "./event_image/SWCH1.jpg";
import SWCH2 from "./event_image/SWCH2.jpg";
import SWCH3 from "./event_image/SWCH3.jpg";
import SWCH4 from "./event_image/SWCH4.jpg";
import REC1 from "./event_image/REC1.jpg";
import REC2 from "./event_image/REC2.jpg";
import REC3 from "./event_image/REC3.jpg";
import REC4 from "./event_image/REC4.jpg";
import REC5 from "./event_image/REC5.jpg";
import REC6 from "./event_image/REC6.jpg";
import REC7 from "./event_image/REC7.jpg";
import REC8 from "./event_image/REC8.jpg";
import YOGA1 from "./event_image/YOGA1.jpg";
import YOGA2 from "./event_image/YOGA2.jpg";
import YOGA3 from "./event_image/YOGA3.jpg";
import YOGA4 from "./event_image/YOGA4.jpg";
import YOGA5 from "./event_image/YOGA5.jpg";
const eventsData = [
  {
    id: 1,
    image: IMA1,
    heading: "IMA Camp",
    date: "January  5-20, 2023",
    location: "Indian military Academy",
    description: "Academy provided cadets with holistic orientation to life in IMA  with character-builind honor code.",
    moreInfo: "The National Cadet Corps (NCC) Leadership Camp is a transformative experience, molding young cadets into future leaders. Through rigorous training, teamwork exercises, and leadership workshops, cadets hone their decision-making skills, learn effective communication, and develop a strong sense of discipline. The camp fosters camaraderie among participants, creating lifelong bonds and a supportive network. Cadets engage in physical challenges, obstacle courses, and simulated scenarios to test their resilience and adaptability. Guided by experienced instructors and mentors, they emerge from the camp with heightened confidence, enhanced leadership abilities, and a profound sense of duty towards their community and nation.",
    images:[IMA1,IMA2,IMA3,IMA4,IMA5],
  },
  {
    id: 2,
    image: BD2,
    heading: "Blood Donation Camp",
    date: "August 21-22, 2022",
    location: "Youth Training Center",
    description: "Intensive camp as part of Azadi ka amrit mahotsav by NCC cadets.",
    moreInfo: "Nav Sainik Camp is a pinnacle event within the National Cadet Corps (NCC), designed to instill maritime skills and leadership qualities in cadets. Set against the backdrop of naval training facilities, this camp immerses participants in hands-on experiences ranging from seamanship to navigation techniques. Cadets undergo intensive physical training, maritime drills, and leadership exercises, under the guidance of seasoned naval officers. The camp emphasizes teamwork, discipline, and adaptability, essential traits for maritime operations. Through practical challenges and theoretical learning, cadets gain a deeper understanding of naval operations and develop a strong sense of patriotism and service towards safeguarding the nation's maritime interests.",
    images:[BD1,BD2],
  },
  {
    id: 3,
    image: WPN2,
    heading: " Weapon Training",
    date: "June 15-25, 2022",
    location: "CATC-55 Camp",
    description: "Weapon training and smoke bomb as part of Battle craft with exciting activities and training.",
    moreInfo: "Vayu Sainik Camp is a prestigious event conducted by the National Cadet Corps (NCC), focusing on aerospace education and training. Held at air force bases or aviation facilities, this camp offers cadets a unique opportunity to delve into the world of aviation. Through a blend of theoretical knowledge sessions and practical experiences, cadets learn about aircraft operations, aerodynamics, and air navigation. They participate in flight simulations, parachute drills, and aircraft familiarization exercises under the supervision of experienced air force personnel. The camp fosters qualities like precision, discipline, and quick decision-making, essential for success in aerial operations. Cadets emerge from the Vayu Sainik Camp with a deep appreciation for aviation and a heightened sense of national pride.",
    images:[WPN1,WPN2,WPN3,WPN4,WPN5,WPN6,WPN7,WPN8,WPN9,WPN10,WPN11,WPN12,WPN13,WPN14],
  },
  {
    id: 4,
    image: img4,
    heading: "Swacchata Day",
    date: "October 1-2, 2022",
    location: "NIT Ground",
    description: "Shramdaan cleanliness drive as part of special Campaign.",
    moreInfo: "The Rock Climbing Camp organized by the National Cadet Corps (NCC) is an exhilarating adventure that challenges cadets both mentally and physically. Nestled amidst scenic landscapes, this camp provides cadets with the opportunity to learn rock climbing techniques from certified instructors. Participants develop strength, agility, and problem-solving skills as they scale cliffs and conquer challenging terrains. Safety protocols are rigorously enforced, ensuring a secure environment for cadets to push their limits and overcome fears. Through teamwork and encouragement, cadets foster camaraderie and mutual support, creating lasting bonds. The Rock Climbing Camp not only promotes physical fitness but also cultivates resilience and determination, empowering cadets to overcome obstacles both on and off the cliffs.his is a dummy paragraph of 100 words related to the Leadership Camp.",
    images:[SWCH1,SWCH2,SWCH3,SWCH4],
  },
  {
    id: 5,
    image: REC7,
    heading: "NCC Recruitment",
    date: "December 8, 2023",
    location: " NIT Main Ground",
    description: "Recruitment activites and competitions for NCC cadets.",
    moreInfo: "The Trekking Camp organized by the National Cadet Corps (NCC) offers cadets an immersive experience in the great outdoors, fostering a deep appreciation for nature and adventure. Set in picturesque landscapes, this camp combines physical endurance with environmental awareness as cadets embark on multi-day treks through diverse terrains. Led by experienced guides, cadets navigate trails, cross rivers, and conquer rugged terrain while learning essential survival skills and Leave No Trace principles. The camp promotes camaraderie and teamwork as cadets support each other through challenges, fostering lifelong friendships. Through this enriching experience, cadets develop resilience, self-reliance, and a sense of stewardship towards the environment, embodying the spirit of exploration and adventure.",
    images:[REC1,REC2,REC3,REC4,REC5,REC6,REC7,REC8],
  },
  {
    id: 6,
    image: YOGA1,
    heading: "yoga Day",
    date: "June 21, 2023",
    location: "CATC Center",
    description: "Intensive Yoga training camp for NCC cadets.",
    moreInfo: "The National Integration Camp (NIC) organized by the National Cadet Corps (NCC) serves as a platform to celebrate the rich diversity of India while promoting unity and harmony among its cadets. Held in various regions across the country, the NIC brings together cadets from diverse backgrounds, cultures, and languages. Through cultural exchanges, interactive workshops, and collaborative activities, cadets learn to appreciate and respect the differences that make India unique. The camp emphasizes the values of tolerance, empathy, and inclusivity, fostering a sense of national identity and solidarity among participants. By breaking down barriers and fostering understanding, the NIC plays a crucial role in building a cohesive and united nation.",
    images:[YOGA1,YOGA2,YOGA3,YOGA4,YOGA5],
  },
];

// Sample data for upcoming camps
const campsData = [
  {
    id: 1,
    heading: "NCC Annual Parade",
    date: "June 15, 2024",
    location: "Parade Ground, City",
    description: "Join us for the annual NCC parade showcasing discipline and unity.",
  },
  {
    id: 2,
    heading: "NCC Leadership Workshop",
    date: "March 10, 2024",
    location: "NCC Training Center",
    description: "Enhance your leadership skills at our NCC leadership workshop.",
  },
  {
    id: 3,
    heading: "NCC Drill Workshop",
    date: "July 10, 2024",
    location: "NCC Training Ground",
    description: "Become perfect in drill.",
  },
  {
    id: 4,
    heading: "NCC Fitness Workshop",
    date: "March 10, 2024",
    location: "NITJ Training ground",
    description: "Build your stamina.",
  },
  {
    id: 5,
    heading: "NCC Lecture Workshop",
    date: "April 10, 2024",
    location: "WE-2 Class",
    description: "Preparation for B & C Certificate examination.",
  },
];


export { eventsData, campsData };
const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const upcomingCampsGridRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHoveredIndex((prev) => (prev + 1) % eventsData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const toggleHidden = () => {
      const hiddenCards = upcomingCampsGridRef.current.querySelectorAll('.upcoming-camp-card.hidden');

      hiddenCards.forEach(card => {
        card.classList.toggle('hidden');
      });
    };

    const handleAnimationIteration = () => {
      toggleHidden();
    };

    upcomingCampsGridRef.current.addEventListener('animationiteration', handleAnimationIteration);

    return () => {
      upcomingCampsGridRef.current.removeEventListener('animationiteration', handleAnimationIteration);
    };
  }, []);

  const handleViewMoreClick = (event) => {
    setSelectedEvent(event);
  };
  /*const handleViewMoreClick = (event) => {
    setSelectedEvent(event);
  };*/

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Navbar />
      <div className="upcoming-camps-container">
        <h1 className="upcoming-camps-title">Upcoming <span style={{ color: "black" }}> Events</span></h1>

        <div className="upcoming-camps-grid" ref={upcomingCampsGridRef}>
          <AnimatePresence>
            {campsData.map((camp) => (
              <motion.div
                key={camp.id}
                className="upcoming-camp-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h2 className="camp-heading">{camp.heading}</h2>
                <p className="camp-date">Date: {camp.date}</p>
                <p className="camp-location">Location: {camp.location}</p>
                <p className="camp-description">{camp.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="events-container">
        <h1 className="events-title">
          NCC Training <span style={{ color: "black" }}>Camps</span>
        </h1>

        <div className="events-grid">
          <AnimatePresence>
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                className={`event-card ${index === hoveredIndex ? "hovered" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ x: index === hoveredIndex ? 0 : 20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.img
                  src={event.image}
                  alt={`Event ${event.id}`}
                  onClick={() => handleViewMoreClick(event)}
                />
                <div className="event-details">
                  <h2 className="event-heading">{event.heading}</h2>
                  <p className="event-date">Date: {event.date}</p>
                  <p className="event-location">Location: {event.location}</p>
                  <button
                    className="view-more-button"
                    onClick={() => handleViewMoreClick(event)}
                  >
                    View More
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Modal isOpen={selectedEvent !== null} onClose={handleModalClose} event={selectedEvent} />
      <Footer />
    </>
  );
};

export default Events;