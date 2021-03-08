import React from 'react';
import resume from '../../assets/RWagschal_resume.pdf';

function Resume() {
    return(
        <section className="resume-container">
            <div className="resume-header">
                <h2>Resume</h2>
                <p>Click <a href={resume} target="blank">here </a>
                    to download a copy of my resume</p>
            </div>
        </section>
    )
}


export default Resume;