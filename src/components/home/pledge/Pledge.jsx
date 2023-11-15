import React from "react";
import pledge from "../../../assets/Pledge.jpg";
const Pledge = () => {
  return (
    <div class="Pledge">
      <div class="section-heading text-center d-flex align-items-center justify-content-around py-3">
        <div class="line"></div>
        <p class="heading">Our Pledge</p>
        <div class="line"></div>
      </div>
      <div class="flex-container">
        <img class="pics" src={pledge} alt="Pledge" />
        <div class="text">
          <p>
            We the cadets of the National Cadet Corps, do solemnly pledge that
            we shall always uphold the unity of India. We resolve to be
            disciplined and responsible citizens of our nation. We shall
            undertake positive community service in the spirit of selflessness
            and concern for our fellow beings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
