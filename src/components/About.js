import React from "react"
import shape from '../Images/shape.png'
import myPDF from '../Images/CV_NicolasBonder_wd.pdf'

export default function About(){
    return(
        <section>
            <div className="about">
                <div className="left2">
                    <h2>About Me</h2>
                    <p>In 2021 I started to study to become a Web Developer. I did The Web Developer Bootcamp by Colt Steele in Udemy.
                        <br /> Now I am practicing and I try to learn something new everyday.
                        <br />
                        <br /> I have a degree in Business Administration but some years ago I realized that I wanted to do something 
                        more creative. 
                        As I love to read and to write, I was working the last few years as a freelance content writer.
                        <br />
                        <br /> I think web development is a very good career to use all my creativity to do new stuff and help customers 
                        from a different place.
                    </p>
                        
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
                        
                        <div className="shape">
                            <img src={shape} 
                            alt="Orange abstract figure">
                            </img>
                        </div>

                        <div className="column2">
                            <p>Nicolás Bonder</p>
                            <p>Monte Cristo, Córdoba (Arg)</p>
                            <p>5125</p>
                            <p>nicolasbonder@gmail.com</p>
                            
                        </div>
                        
                    </div>
                    <div className="softSkills">
                        <h2>Soft Skills</h2>
                        <ul>
                        <li>Clear and precise communication, written and oral</li>
                            <li>Team work and collaboration</li>
                            <li>Time management</li> 
                            <li>Capacity and willingness to learn</li>
                            <li>Responsibility and ability to take ownership of the position</li>
                            <li>Curiosity</li>
                        </ul>
                    </div> 
                
                </div>
            </div>
            <div className="cvEn">
                <h3><a href={myPDF} 
                download="CV_NicolasBonder_wd.pdf">Download my Resume</a>
                </h3>
            </div>
        
        
        </section>

    )
}