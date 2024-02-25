import React from "react";
import data from "./data.json";
import {
  Navbar,
  Footer,
  Hero,
  Enrollment,
  Blog,
  Bgs,
  Aim2,
  Achievements,
  Photo_gallery,
  Announcement,
  Tabs,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar /> {/* <Bgs /> */} <Hero />
      <Achievements />
      {/* <Tabs /> */}
      <Announcement />
      {/* <Aim2 /> */}
      <Photo_gallery />
      <Blog testimonialData={data} /> <Footer />
    </div>
  );
};

export default App;
