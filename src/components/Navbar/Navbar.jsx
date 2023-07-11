import React, { useRef, useState } from "react";
//import { Link, useLocation } from "react-router-dom";
import Logo from "../../Images/logo_1.png";
// import Switch from "react-switch";

import "./Navbar.css";

export default function Navbar({ language, toggleLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  //const location = useLocation();
  const navRef = useRef(null);

  //To swap languages
  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  // //To determinate wich tab is active
  // const isActive = (path) => {
  //   return location.pathname === path;
  // };

  const goAndClose = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Obtengo la altura de la barra de navegación para desplazarnos un poco más abajo
      const navbarHeight = navRef.current.offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  
const addBlurToNavbar = () => {
  // Añadimos la clase blur
  document.querySelector(".navbar").classList.add("blur");
};

const removeBlurFromNavbar = () => {
  // Eliminamos la clase blur
  document.querySelector(".navbar").classList.remove("blur");
};

const handleScroll = () => {
  // Comprobamos si el usuario ha scrolleado la misma altura que la navbar
  const scrollTop = window.scrollY;
  const navbarHeight = navRef.current.offsetHeight;
  if (scrollTop >= navbarHeight) {
    addBlurToNavbar();
  } else {
    removeBlurFromNavbar();
  }
};

window.addEventListener("scroll", handleScroll);

  return (
    <div className='navbar' ref={navRef}>
      <div className='nav_logo'>
        <a
          href='#introduction_container'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("introduction_container");
            goAndClose();
          }}
        >
          <img
            className='navbar_logo_img'
            src={Logo}
            alt='logo portfolio Nico Bonder'
          />
        </a>
      </div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <a
          href='#introduction_container'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("introduction_container");
            goAndClose();
          }}
          className="navbar_menu_link_active"
        >
          {language === "en" ? "HOME" : "INICIO"}
        </a>
        <a
          href='#about_container'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about_container");
            goAndClose();
          }}
          className="navbar_menu_link_active"
        >
          {language === "en" ? "ABOUT ME" : "ACERCA"}
        </a>
        <a
          href='#contact_container'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact_container");
            goAndClose();
          }}
          className="navbar_menu_link_active"
        >
          {language === "en" ? "CONTACT" : "CONTACTO"}
        </a>
      </div>

      <div className='language_switch'>
        <label className='button_switch' for='toggle_switch'>
          <input
            id='toggle_switch'
            type='checkbox'
            onChange={handleLanguageToggle}
          />
          <span className='slider_switch'></span>
        </label>
      </div>

      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='line-1'></span>
        <span className='line-2'></span>
        <span className='line-3'></span>
      </div>
    </div>
  );
}
