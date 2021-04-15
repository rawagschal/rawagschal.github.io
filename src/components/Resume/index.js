import React from 'react';
import resume from '../../assets/RWagschal_resume.pdf';

function Resume() {
    return(
        <section id="container-fluid" class="resume-container">
            <h2>Click&nbsp;<a href={resume} target="blank"> here </a>&nbsp;to download a copy of my resume
            </h2>
        </section>
    )
}


export default Resume;