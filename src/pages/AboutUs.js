import React, { useState, useEffect } from "react";
import Role from "./Role.js";
import Activities from "./Activities.js";
import "./aboutus.css"; // Import your custom CSS file
import img2 from "../images/2.jpg";
import img3 from "../images/3.png";
import Navbar2 from "../components/navbar/Navbar2.jsx";
import Footer from "../components/footer/Footer";

const Aboutus = () => {
  const [aboutData] = useState(Role);
  const [aboutData1] = useState(Activities);
  const [isAnimated, setIsAnimated] = useState(false); // State for animation

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimated(true), 500); // Animate after 0.5 seconds
    return () => clearTimeout(timeout);
  }, []); // Run useEffect only once on component mount

  return (
    <>
      <Navbar2 />
      <section className="common-section our-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 our-service-leftside-img">
              <img src={img2} alt="aboutusIMg" className={isAnimated ? "animated fadeInLeft" : ""} />
            </div>
            <div className="col-lg-7 our-services-list">
              <h3 className="mini-title">ROLE OF NCC</h3>
              {aboutData.map((curElem) => (
                <div className="our-services-info" key={curElem.id}>
                  <div className="our-services-data">
                    <h2>{curElem.title}</h2>
                    <p className="main-hero-para">{curElem.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="common-section our-services our-services-rightside">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 our-services-list">
              <h3 className="mini-title">ACTIVITIES</h3>
              {aboutData1.map((curElem) => (
                <div className="our-services-info" key={curElem.id}>
                  <div className="our-services-data">
                    <h2>{curElem.title}</h2>
                    <p className="main-hero-para">{curElem.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-5 our-service-rightside-img">
              <img src={img3} alt="aboutusIMg" className={isAnimated ? "animated fadeInRight" : ""} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;