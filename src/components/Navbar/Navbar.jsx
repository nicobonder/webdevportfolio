import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/logo_1.png";
// import Switch from "react-switch";

import "./Navbar.css";

export default function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  //To swap languages
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  //To determinate wich tab is active
  const isActive = (path) => {
    return location.pathname === path;
  };

   const goAndClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <a href="#introduction_container">
          <img
            className="navbar_logo_img"
            src={Logo}
            alt="logo portfolio Nico Bonder"
          />
        </a>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
      <a href="#introduction_container"
          onClick={goAndClose}
          className={
            isActive("/webdevportfolio")
              ? "navbar_menu_link_active"
              : "navbar_menu_link"
          }
        >
          {language === "en" ? "HOME" : "INICIO"}
        </a>
        <a
           href="#about_container"
          onClick={goAndClose}
          className={
            isActive("/about") ? "navbar_menu_link_active" : "navbar_menu_link"
          }
        >
          {language === "en" ? "ABOUT ME" : "ACERCA"}
        </a>
        <a
          href="#contact_container"
          onClick={goAndClose}
          className={
            isActive("/contact")
              ? "navbar_menu_link_active"
              : "navbar_menu_link"
          }
        >
          {language === "en" ? "CONTACT" : "CONTACTO"}
        </a>
      </div>

      <div className="language_switch">
        <label className="button_switch" for="toggle_switch">
          <input
            id="toggle_switch"
            type="checkbox"
            onChange={handleLanguageToggle}
          />
          <span className="slider_switch"></span>
        </label>
      </div>

      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="line-1"></span>
        <span className="line-2"></span>
        <span className="line-3"></span>
      </div>
    </div>
  );
}
