import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/logo_1.png";
import Switch from "react-switch";

import "./Navbar.css";

export default function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleLanguageToggle = () => {
    toggleLanguage();
  };
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  // const toggleLanguage = () => {
  //   setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
  // };

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
          className={
            isActive("/webdevportfolio") ? "navbar_menu_link_active" : "navbar_menu_link"
          }
        >
          {language === "en" ? "HOME" : "INICIO"}
        </Link>
        <Link
          to={"/about"}
          className={
            isActive("/about") ? "navbar_menu_link_active" : "navbar_menu_link"
          }
        >
          {language === "en" ? "ABOUT ME" : "ACERCA"}
        </Link>
        <Link
          to={"/contact"}
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
        <span className="change_lang_text">English</span>
        <Switch
          onChange={handleLanguageToggle}
          checked={language === "es"}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#008000"
          offColor="#f5af31"
          className="switcher_look"
        />
        <span className="change_lang_text">Español</span>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
      </div>
    </div>
  );
}
