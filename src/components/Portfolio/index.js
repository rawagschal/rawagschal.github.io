import React, { useState } from 'react';

function Portfolio({currentProject}) {
    // const { name, description } = currentProject;

    const [projects] = useState([
        {
          name: 'Spaced Out',
          description: 'HTML/Bootstrap/JS',
          deployedURL: 'https://rawagschal.github.io/spaced-out/',
          githubURL: 'https://github.com/rawagschal/spaced-out',
        },
        {
          name: 'Notetakr',
          description: 'Express.js',
          deployedURL: 'https://arcane-wave-64105.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/notetakr',
        },
    ]);

    

    return (
        <section>
        <h1>{(projects.name)}</h1>
        <p>{projects.description}</p>
        <div className="flex-row">
                {projects.map((image, i) => (
                    <img
                        src={require(`../../assets/projects/${i}.png`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </section>
    );
    }

export default Portfolio;