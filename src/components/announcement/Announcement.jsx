import React from "react";
import "./announcement.css";
import Notice from "./Notice";

const Announcement = () => {
  return (
    <div className="announcement">
      <div className="announce-heading">
        Announcement & <span className="text-dark-purple">Notices </span>
      </div>
      <div className="announcement-container">
        <Notice />
      </div>
    </div>
  );
};

export default Announcement;
