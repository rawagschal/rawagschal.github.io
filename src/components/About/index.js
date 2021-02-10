import aboutImage from "../../assets/img/about-me.jpg";
import React from 'react';

function About() {
    return (
        <section className="about-container">
            <div className="about-col-1">
                <h2 id="about" className="about-header">Hello, World!</h2>
                <p> 
                    Meet Rachel, a junior full stack web developer with
                    a passion for problem solving via creative solutions. 
                </p>
            </div>
            <img src={aboutImage} className="my-2" style={{ width: "45% "}} alt="Rachel Wagschal on her graduation day from the University of Oregon in June 2019." />
        </section>
    );
}

export default About;