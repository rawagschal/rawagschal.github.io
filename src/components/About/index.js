import aboutImage from "../../assets/img/about-me.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image';
import React from 'react';

function About() {
    return (
        <>
            <div className="intro-text">
                <h2> 
                    Creative coder, web developer, and proponent of the oxford comma. 
                </h2>
                <a href="mailto:rawagschal@gmail.com">Let's make something together.</a>
            </div>
                
            <Image src={aboutImage} roundedCircle fluid />
            
        </>
    );
}

export default About;