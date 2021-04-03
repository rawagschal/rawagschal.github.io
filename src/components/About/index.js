import aboutImage from "../../assets/img/about-me.jpg";
import React from 'react';

function About() {
    return (
        <section className="about-container">
            <div className="about-col-1">
                
                <h3> 
                    Creative coder, web developer, and proponent of the oxford comma. 
                </h3>
            </div>
            <img src={aboutImage} className="about-img" alt="Rachel Wagschal on her graduation day from the University of Oregon in June 2019." />
        </section>
    );
}

export default About;