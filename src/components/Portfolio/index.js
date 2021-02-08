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
        <section>
        <h1>My Work</h1>
        <p>Some of my most recent projects:</p>
        <div className="flex-row">
                {projects.map((image, i) => (
                    <div className="project-container">
                        <div className="project-header">
                            <h3 className="project-title">{projects[i].name}</h3>
                            <a href={projects[i].deployedURL} className="deployed-link">App</a>
                            <a href={projects[i].githubURL} className="repo-link">Github Repository</a>
                        </div>
                        <img
                            src={require(`../../assets/projects/${i}.png`).default}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            key={image.name}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
    }

export default Portfolio;