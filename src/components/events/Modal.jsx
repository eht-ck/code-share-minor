/*import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleDocumentClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="event-heading">{event.heading}</h2>
        <img src={event.image} alt={`Event ${event.id}`} className="modal-event-image" />
        <p className="event-date">Date: {event.date}</p>
        <p className="event-location">Location: {event.location}</p>
        <p className="event-description">{event.description}</p>
        {event.moreInfo && (
          <>
            <hr />
            <p className="event-more-info">{event.moreInfo}</p>
          </>
        )}
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;*/
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Modal = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleDocumentClick = (event) => {
      if (event.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="event-heading">{event.heading}</h2>
        <img src={event.image} alt={`Event ${event.id}`} className="modal-event-image" />
        <p className="event-date">Date: {event.date}</p>
        <p className="event-location">Location: {event.location}</p>
        <p className="event-description">{event.description}</p>
        {event.moreInfo && (
          <>
            <hr />
            <p className="event-more-info">{event.moreInfo}</p>
          </>
        )}
        {event.images && (
          <div className="event-images">
            {event.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event ${event.id} Image ${index + 1}`}
                className="event-image"
              />
            ))}
          </div>
        )}
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;