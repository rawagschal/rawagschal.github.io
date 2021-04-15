import React from 'react';
import resume from '../../assets/RWagschal_resume.pdf';

function Resume() {
    return(
        <section id="container-fluid" class="resume-container">
            <div id="services">
                <h2>What I can do for you:</h2>
                <ul>
                    <li>web application development</li>
                    <li>application prototypes</li>
                    <li>custom Squarespace sites</li>
                    <li>custom Webflow sites</li>
                </ul>
            </div>
            <div id="contact-info">
                <h3>Click&nbsp;<a href={resume} target="blank"> here </a>&nbsp;to download a copy of my resume
                </h3>
            </div>
        </section>
    )
}


export default Resume;