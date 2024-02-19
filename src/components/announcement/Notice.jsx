import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import axios from "axios";
import new_button from "../../assets/new_button.jpg";
import "./notice.css";

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
  animation: ${scrollY} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

// ... (Your imports)

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

    // Set up interval to automatically show more
    const interval = setInterval(() => {
      setShowAll(true);
    }, 5000); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [showAll]);

  return (
    <AppContainer>
      <Wrapper>
        {/* Show only the latest announcement separately */}
        {latestAnnouncement && (
          <div
            className={`notice new-announcement2 ${showAll ? "" : "hidden"}`}
          >
            <div className="star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="37"
                viewBox="0 0 38 37"
                fill="none"
              >
                <path
                  d="M19 0L23.2658 12.7832H37.0701L25.9022 20.6836L30.1679 33.4668L19 25.5664L7.83208 33.4668L12.0978 20.6832L0.929926 12.7832H14.7342L19 0Z"
                  fill="#0369A0"
                />
              </svg>
            </div>
            <div className="notice-text">{latestAnnouncement.announcement}</div>
            {showAll && (
              <div className="new-label">
                <img src={new_button} alt="New" className="new_button" />
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="37"
                    viewBox="0 0 38 37"
                    fill="none"
                  >
                    <path
                      d="M19 0L23.2658 12.7832H37.0701L25.9022 20.6836L30.1679 33.4668L19 25.5664L7.83208 33.4668L12.0978 20.6832L0.929926 12.7832H14.7342L19 0Z"
                      fill="#0369A0"
                    />
                  </svg>
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
