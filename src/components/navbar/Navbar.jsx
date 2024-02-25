import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/nccnitj.png";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  //setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // change navcolor when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  //close menu on click
  const closeMenu = () => setClick(false);

  return (
    <div className={color ? "header header-bg" : "header"}>
      {" "}
      {/* <div className="header header-bg"> */}{" "}
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>{" "}
        <div className="hamburger" onClick={handleClick}>
          {" "}
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}{" "}
        </div>{" "}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              {" "}
              HOME{" "}
            </a>{" "}
          </li>{" "}
          <li className="nav-item">
            <Link to="/aboutus" onClick={closeMenu}>
              ABOUT{" "}
            </Link>{" "}
          </li>{" "}
          <li className="nav-item">
            <a href="/events" onClick={closeMenu}>
              {" "}
              EVENTS{" "}
            </a>{" "}
          </li>{" "}
          <li className="nav-item">
            <a href="/alumni" onClick={closeMenu}>
              {" "}
              ALUMNI CONNECT{" "}
            </a>{" "}
          </li>{" "}
          <li className="nav-item">
            <Link to="/enrollment" onClick={closeMenu}>
              REGISTRATION{" "}
            </Link>{" "}
          </li>{" "}
          <li className="nav-item">
            <a href="/FAQ" onClick={closeMenu}>
              {" "}
              FAQs{" "}
            </a>{" "}
          </li>{" "}
          <li className="nav-item">
            <a href="/login" onClick={closeMenu}>
              {" "}
              ADMIN LOGIN{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
};

export default Navbar;
