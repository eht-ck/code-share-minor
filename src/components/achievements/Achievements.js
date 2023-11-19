import React from "react";
import "./achievements.css";
const Achievements = () => {
  return (
    <div className="ncc-achievements">
      <div className="achieve">
        <div
          id="announcements"
          class="md:col-start-1 md:col-end-3 row-span-2 flex flex-col space-y-6"
        >
          <div className="flex items-center justify-start space-x-6 group">
            {/* <h1 className="uppercase text-3xl md:text-4xl font-semibold text-accent">
              Current <span class="text-dark-purple">Achievements</span>
            </h1> */}
          </div>
        </div>
      </div>

      <div className="side-comp"></div>
    </div>
  );
};
export default Achievements;
