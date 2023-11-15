import React from "react";
import aim from "../../../assets/Aim.jpg";
const Aim = () => {
  return (
    <div class="Our_AIM">
      <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
        <div class="line"></div>
        <p class="heading">Our AIM</p>
        <div class="line"></div>
      </div>
      <div class="flex-container">
        <img class="pics" src={aim} alt="Flag" />
        <div class="text">
          <p>
            The Aims of the NCC laid out in 1988 have stood the test of time and
            continue to meet the requirements expected of it in the current
            socio–economic scenario of the country.
            <ul>
              <li>
                {" "}
                To Create a Human Resource of Organized, Trained and Motivated
                Youth, To Provide Leadership in all Walks of life and be Always
                Available for the Service of the Nation.
              </li>
              <li>
                To Provide a Suitable Environment to Motivate the Youth to Take
                Up a Career in the Armed Forces.
              </li>
              <li>
                To Develop Character, Comradeship, Discipline, Leadership,
                Secular Outlook, Spirit of Adventure, and Ideals of Selfless
                Service amongst the Youth of the Country.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
