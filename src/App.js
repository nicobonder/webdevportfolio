import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import About from "./components/AboutMe/About";
import Acerca from "./components/AboutMe/Acerca";
import Contacto from "./components/ContactMe/Contacto";
import Contact from "./components/ContactMe/Contact";
import Inicio from "./components/Home/Inicio";

//import Form from "./components/Form";

export default function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

    return (
      <Router>
      <div>
        <Navbar language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={language === 'en' ? <Home /> : <Inicio />} />
          <Route path="/about" element={language === 'en' ? <About /> : <Acerca />} />
          <Route path="/contact" element={language === 'en' ? <Contact /> : <Contacto />} />
        </Routes>
      </div>
    </Router>
    );
};
  
