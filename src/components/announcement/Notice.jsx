import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CircleIcon from "@mui/icons-material/Circle";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";

const CustomAutoAwesomeIcon = () => {
  return (
    <AutoAwesomeOutlinedIcon style={{ color: "red", fontSize: "1.5rem" }} />
  );
};

const CustomCircleIcon = () => {
  return <CircleIcon style={{ fontSize: "0.5rem", color: "#0369a0" }} />;
};

const AnnouncementContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnnouncementContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

const AnnouncementCard = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const AnnouncementCardInner = styled.div`
  border: 4px solid var(--accent);
  border-radius: 20px;
  background-color: var(--blue100);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow-y: auto;
  max-height: 200px; /* Limiting max height */
`;

const AnnouncementTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const AnnouncementDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centering the items */
  width: 100%;
`;

const AnnouncementDetail = styled.p`
  margin-bottom: 5px;
`;

const NewAnnouncement = styled.div`
  display: flex;
  align-items: center;
  color: red;
  margin-left: auto; /* Pushing the "NEW" label to the right */
`;

const DateLabel = styled.span`
  font-weight: bold;
`;

const Line = styled.hr`
  width: calc(100% - 40px);
  border: none;
  border-top: 2px solid black; /* Changed line color */
  margin: 0 20px; /* Adjusted margin */
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
          : sortedAnnouncements.slice(1, 4);

        setAnnouncements(
          limitedAnnouncements.filter(
            (announcement) => announcement.announcement.trim().length > 0
          )
        );
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

  const isValidDate = (date) => {
    return date && !isNaN(new Date(date).getTime());
  };

  return (
    <AnnouncementContainer>
      <AnnouncementContent>
        {latestAnnouncement && latestAnnouncement.announcement.trim().length > 0 && (
          <AnnouncementCard>
            <AnnouncementCardInner>
              <AnnouncementTitle>
                {latestAnnouncement.announcement}
              </AnnouncementTitle>
              <AnnouncementDetails>
                <AnnouncementDetail>
                  <DateLabel>Date:</DateLabel>{" "}
                  {isValidDate(latestAnnouncement.date)
                    ? new Date(latestAnnouncement.date).toLocaleDateString()
                    : "Date Not Available"}
                </AnnouncementDetail>
                {showAll && (
                  <NewAnnouncement>
                    <CustomAutoAwesomeIcon />
                    NEW
                  </NewAnnouncement>
                )}
              </AnnouncementDetails>
            </AnnouncementCardInner>
            {showAll && <Line />} {/* Adding line between new cards */}
          </AnnouncementCard>
        )}
        {announcements.map((announcement, index) => (
          <React.Fragment key={announcement._id}>
            <AnnouncementCard>
              <AnnouncementCardInner>
                <AnnouncementTitle>
                  {announcement.announcement}
                </AnnouncementTitle>
                <AnnouncementDetails>
                  <AnnouncementDetail>
                    <DateLabel>Date:</DateLabel>{" "}
                    {isValidDate(announcement.date)
                      ? new Date(announcement.date).toLocaleDateString()
                      : "Date Not Available"}
                  </AnnouncementDetail>
                  {index === 0 && showAll && (
                    <NewAnnouncement>
                      <CustomAutoAwesomeIcon />
                      NEW
                    </NewAnnouncement>
                  )}
                </AnnouncementDetails>
              </AnnouncementCardInner>
            </AnnouncementCard>
            {index < announcements.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </AnnouncementContent>
    </AnnouncementContainer>
  );
};

export default Notice;
