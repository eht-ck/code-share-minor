import "./photo_gallery.css";
import React, { useState } from "react";
import { Media } from "../media";

const Photo_gallery = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="container">
      <h1 className="uppercase text-3xl md:text-4xl font-semibold text-accent pb-2">
        Photo <span class="text-dark-purple">Gallery</span>
      </h1>
      <div className="media-container">
        {Media.map((file, index) => (
          <div className="media" key={index} onClick={() => setFile(file)}>
            {file.type == "image" ? (
              <img src={file.url} alt="" />
            ) : (
              <video src={file.url} muted />
            )}
          </div>
        ))}
      </div>
      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}> &times;</span>
        {file?.type === "video" ? (
          <video src={file?.url} muted autoPlay controls />
        ) : (
          <img src={file?.url} />
        )}
      </div>
    </div>
  );
};
export default Photo_gallery;
