import React from "react";
import "./Navbar.css";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMedia, setShowMedia] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* logo part*/}
        <div className="logo">
          <h2>
            <span>S</span>wati
            <span>C</span>ooking's
          </h2>
        </div>
        {/*Menu-link*/}
        <div className={showMedia ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Service">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/*Social Media */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/HomeCookingShow"
                target="_cooking"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/homecookingshow/?hl=en"
                target="_cooking"
              >
                <FaInstagramSquare className="insta" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCLu1jSLRGzVgOsViFic42Gg"
                target="_cooking"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>
          {/* hamburget menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMedia(!showMedia)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/*Hero Section */}
     {/*<section className="hero-section">
        <p>Welcome TO</p>
        <h1>Cooking Website</h1>
      </section>*/}
    </>
  );
};

export default Navbar;
