import React from "react";
import shape from "../../Images/shape.png";
import nicobonder from "../../Images/nicobonder_img.png";

import myPDF from "../../Images/CV_NicolasBonder_wd.pdf";

// import ParticleBackground from "../particleBackground";

import "./About.css";

export default function About() {
  return (
    <section className="about_section">
      {/* <ParticleBackground /> */}
      <div className="about">
        <div className="left2">
          <h2>About Me</h2>
          <p className="about_left2_p">
            In 2022 I started to study to become a Web Developer. For several
            months, I studied on my own, and in August, I started the Full Stack
            Developer course at Soy Henry. In the course, I learned how to use
            technologies such as JavaScript, Redux, React.js, Node, Sequelize,
            and PostgreSQL.<br /> 
            <br /> 
            I have a degree in Administration, however, a few
            years ago, I realized I wanted to do something more creative. As I
            love reading and writing, I have been working as a freelance content
            writer for the past few years. <br />  
            <br /> 
            I believe that with web development, I can bring all my creativity to a company and collaborate with
            clients from a different perspective, bringing in the knowledge I
            gained through my background in other careers.
          </p>
          <img className="shape" src={shape} alt="Orange abstract figure"></img>
        </div>

        <div className="right2">
          <h2>Information</h2>
          <div className="info">
            <div className="column1">
              <p>Name:</p>
              <p>Adress:</p>
              <p>Zip code:</p>
              <p>Email:</p>
            </div>
            <div className="column2">
              <p>Nicolás Bonder</p>
              <p>Monte Cristo, Córdoba (Arg)</p>
              <p>5125</p>
              <p>nicolasbonder@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about_skills_section">
        <h2>Skills</h2>
        <div className="my_Skills">
          <div className="soft_Skills">
            <h3>Soft</h3>
            <ul className="skills_list">
              <li>Clear and precise communication, written and oral</li>
              <li>Team work and collaboration</li>
              <li>Time management</li>
              <li>Capacity and willingness to learn</li>
              <li>
                Responsibility and ability to take ownership of the position
              </li>
              <li>Curiosity</li>
            </ul>
          </div>

          <div className="tech_Skills">
            <h3>Tech</h3>
            <ul className="skills_list">
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Sequelize</li>
              <li>PostgreSQL</li>
              <li>MAterial UI</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cvEn">
        <h3>
          <a href={myPDF} download="CV_NicolasBonder_wd.pdf">
            Download my Resume
          </a>
        </h3>
      </div>
    </section>
  );
}
