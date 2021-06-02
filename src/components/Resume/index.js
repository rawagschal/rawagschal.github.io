import React from 'react';
import resume from '../../assets/RWagschal_resume.pdf';

function Resume() {
    return(
        <section id="container-fluid" class="resume-container">
            <div id="container-fluid" className="summary">
                <h3>
                    A creative self starter who is eager to learn through collaboration.
                    Professional web development and digital marketing experience has provided strengths in cross-disciplinary communication, design thinking, and experimentation with emerging technologies.
                </h3>
            </div>
            <div>
                <p className="services-list">
                    <ul className="services-list-items">
                    HTML • 
                    CSS • 
                    JS •
                    Git • 
                    MERN Stack • 
                    LAMP Stack •
                    GraphQL • 
                    Apollo •
                    MongoDB •
                    REST •
                    Jest • 
                    Heroku • 
                    p5.js •
                    Adobe Suite •
                    Webflow •
                    Figma
                    </ul>
                </p>
            </div>
            <h3>Click <a href={resume} target="blank">here</a> to download a copy of my resume
            </h3>
        </section>
    )
}


export default Resume;