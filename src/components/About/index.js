import aboutImage from "../../assets/img/about-me.jpg";
import React from 'react';

function About() {
    return (
        <section className="about-container">
            <div className="about-col-1">
                <h2 id="about" className="about-header">Hello, World!</h2>
                <p> 
                    Meet Rachel, a junior full-stack web developer with
                    a desire to create humane techonologies for more meaningful 
                    engagement on the web. 
                </p>
            </div>
            <img src={aboutImage} className="about-img" alt="Rachel Wagschal on her graduation day from the University of Oregon in June 2019." />
        </section>
    );
}

export default About;