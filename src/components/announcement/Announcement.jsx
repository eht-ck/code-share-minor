import React, { useState } from "react";
import "./announcement.css";
import Notice from "./Notice";

const Announcement = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="announcement">
      <div className="announce-heading">
        Announcement & <span className="text-gray-800">Notices </span>
      </div>
      <div className="announce-container overflow-y-auto overflow-x-hidden">
        <Notice />
        {/* <div className="notice">
          <div className="text">
            <p>RP day prade will be between 8 Am to 10 Am</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Announcement;
