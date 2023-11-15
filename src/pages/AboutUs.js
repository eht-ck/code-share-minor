import React, { useState } from "react";
import Role from "./Role.js";
import Activities from "./Activities.js";
import "./aboutus.css";
import img2 from "../images/2.jpg";
import img3 from "../images/3.png";
const Aboutus = () => {
  const [aboutData] = useState(Role);
  const [aboutData1] = useState(Activities);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src={img2} alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">ROLE OF NCC</h3>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;

                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* 2nd part of bayt us section  */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">ACTIVITIES</h3>
              {aboutData1.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src={img3} alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>

      {/*3rd part*/}
    </>
  );
};

export default Aboutus;

//  <section className="common-section our-services">
//    <div className="container mb-5">
//      <div className="row">
//        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
//          <img src={img2} alt="aboutusIMg" />
//        </div>

//        {/* 1section right side data  */}
//        <div className="col-12 col-lg-7 our-services-list">
//          <h3 className="mini-title">ROLE OF NCC</h3>

//          {aboutData2.map((curElem) => {
//            const { id, title, info } = curElem;

//            return (
//              <>
//                <div className="row our-services-info" key={id}>
//                  <div className="col-10 our-services-data">
//                    <h2>{title}</h2>
//                    <p className="main-hero-para">{info}</p>
//                  </div>
//                </div>
//              </>
//            );
//          })}
//        </div>
//      </div>
//    </div>
//  </section>;
