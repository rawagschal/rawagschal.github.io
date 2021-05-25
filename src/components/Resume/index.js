import React from 'react';
import resume from '../../assets/RWagschal_resume.pdf';

function Resume() {
    return(
        <section id="container-fluid" class="resume-container">
            <div id="services">
                <h2>Technologies I use include:</h2>
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
            <div className='resume-pdf'>
                <p>Click <a href={resume} target="blank">here</a> to download a copy of my resume
                </p>
            </div>
        </section>
    )
}


export default Resume;