import React, { useState } from 'react';

function Portfolio() {
    // const { name, description } = currentProject;

    const projects = [
         {
          name: 'Notetakr',
          description: 'Express.js',
          deployedURL: 'https://arcane-wave-64105.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/notetakr',
        },
        {
          name: 'Spaced Out',
          description: 'HTML/Bootstrap/JS',
          deployedURL: 'https://rawagschal.github.io/spaced-out/',
          githubURL: 'https://github.com/rawagschal/spaced-out',
        },
        {
          name: 'Petter Life',
          description: 'MERN App',
          deployedURL: 'https://a-petter-life.herokuapp.com/',
          githubURL: 'https://github.com/ChrisMeissner/petter-life',
        }
    ];


    return (
        <section className="portfolio-container">
        <div className="portfolio-header">
            <h2>My Work</h2>
            <p>Some of my most recent projects:</p>
        </div>
        <div className="grid-container">
                {projects.map((image, i) => (
                    <div className="project-container">
                        <div className="project-header">
                            <h3 className="project-title">{projects[i].name}</h3>
                        </div>
                        <img
                            src={require(`../../assets/projects/${i}.png`).default}
                            alt={image.name}
                            className="project-img"
                            key={image.name}
                        />
                        <div className="project-footer">
                            <a href={projects[i].deployedURL} className="deployed-link">App</a>
                            <a href={projects[i].githubURL} className="repo-link">Github Repository</a>
                        </div>
                    </div>
                ))}
        </div>
        </section>
    );
    }

export default Portfolio;