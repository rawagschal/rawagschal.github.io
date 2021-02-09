import aboutImage from "../../assets/img/about-me.jpg";
import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Rachel</h1>
            <p> Rachel is a junior web developer learning to share beautiful and useful information
                through code. 
            </p>
            <img src={aboutImage} className="my-2" style={{ width: "45% "}} alt="Rachel Wagschal on her graduation day from the University of Oregon in June 2019." />
        </section>
    );
}

export default About;