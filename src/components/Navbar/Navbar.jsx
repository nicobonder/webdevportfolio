import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/logo_1.png";
import Switch from "react-switch";

import "./Navbar.css";

export default function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  //To swap languages
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  //To determinate wich tab is active
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

   const goAndClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav_logo">
        <Link to="/webdevportfolio">
          <img
            className="navbar_logo_img"
            src={Logo}
            alt="logo portfolio Nico Bonder"
          />
        </Link>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link
          to={"/webdevportfolio"}
          onClick={goAndClose}
          className={
            isActive("/webdevportfolio")
              ? "navbar_menu_link_active"
              : "navbar_menu_link"
          }
        >
          {language === "en" ? "HOME" : "INICIO"}
        </Link>
        <Link
          to={"/about"}
          onClick={goAndClose}
          className={
            isActive("/about") ? "navbar_menu_link_active" : "navbar_menu_link"
          }
        >
          {language === "en" ? "ABOUT ME" : "ACERCA"}
        </Link>
        <Link
          to={"/contact"}
          onClick={goAndClose}
          className={
            isActive("/contact")
              ? "navbar_menu_link_active"
              : "navbar_menu_link"
          }
        >
          {language === "en" ? "CONTACT" : "CONTACTO"}
        </Link>
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
