import React from "react";
import Navbar2 from "../components/navbar/Navbar2";
import Footer from "../components/footer/Footer";
import Alumni_connect from "../components/alumni_connect/Alumni_connect";
import AlumniDataFetch from "../components/AlumniDataFetch";
const Enrollment = () => {
  return (
    <>
      <Navbar2 />
      <Alumni_connect/>
      <AlumniDataFetch/>
      <Footer />
    </>
  );
};

export default Enrollment;
