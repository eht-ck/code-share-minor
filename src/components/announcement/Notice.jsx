import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import axios from "axios";
import CircleIcon from "@mui/icons-material/Circle";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

import "./notice.css";
const CustomAutoAwesomeIcon = () => {
  return (
    <AutoAwesomeOutlinedIcon style={{ color: "red", fontSize: "1.5rem" }} />
  );
};
const CustomCircleIcon = () => {
  return <CircleIcon style={{ fontSize: "0.5rem", color: "#0369a0" }} />;
};
const AppContainer = styled.div`
  width: 100vw;
  height: 93vh;
  color: #000000;
  margin-top: 0rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  height: 500px; /* Adjust the height based on your design */
  width: 84%;
  overflow: hidden;
  user-select: none;
`;

const scrollY = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% * 2));
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  animation: ${scrollY} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;



const Notice = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [latestAnnouncement, setLatestAnnouncement] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("http://localhost:3001/announcements");

        const sortedAnnouncements = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setLatestAnnouncement(sortedAnnouncements[0]);

        const limitedAnnouncements = showAll
          ? sortedAnnouncements.slice(1)
          : sortedAnnouncements.slice(1, 6);

        setAnnouncements([...limitedAnnouncements, ...limitedAnnouncements]);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();

    const interval = setInterval(() => {
      setShowAll(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [showAll]);

  return (
    <AppContainer>
      <Wrapper>
        {latestAnnouncement && (
          <div
            className={`notice new-announcement2 ${showAll ? "" : "hidden"}`}
          >
            <div className="star">
              <CustomCircleIcon />
            </div>
            <div className="notice-text">{latestAnnouncement.announcement}</div>
            {showAll && (
              <div className="new-label">
                <CustomAutoAwesomeIcon />
                NEW
              </div>
            )}
          </div>
        )}

        <Marquee
          onAnimationIteration={() =>
            setAnnouncements((announcements) => [
              announcements[announcements.length - 1],
              ...announcements.slice(0, -1),
            ])
          }
        >
          <MarqueeGroup>
            {announcements.slice(0, -1).map((announcement, index) => (
              <div
                key={announcement._id}
                className={`notice ${index === 0 ? "new-announcement" : ""}`}
              >
                <div className="star">
                  <CustomCircleIcon />
                </div>
                <div className="notice-text">{announcement.announcement}</div>
              </div>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};

export default Notice;
