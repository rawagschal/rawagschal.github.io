import aboutImage from "../../assets/img/about-me.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import React from 'react';

function About() {
    return (
        <>
            <div className="intro-text">
                <h2> 
                   Curious creative on a journey to build accesible and beautiful human experiences on the web.
                </h2>
                <p className="interests">
                    <ul className="interests-list">
                        <li>Front End Web Development</li>
                        <span className="bullet">•</span>
                        <li>Web Design</li>
                        <span className="bullet">•</span>
                        <li>Creative Technology</li>
                    </ul>

                </p>
                <a href="mailto:rawagschal@gmail.com">Let's make something together.</a>
            </div>
                
            <Image src={aboutImage} roundedCircle fluid />
            
        </>
    );
}

export default About;