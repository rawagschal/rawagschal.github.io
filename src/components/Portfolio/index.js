import React, { useState } from 'react';

function Portfolio() {
    // const { name, description } = currentProject;

    const projects = [
         {
          name: 'Book Search Engine',
          description: 'A MERN app using Google Books API and GraphQL',
          deployedURL: 'https://rawagschal-book-search.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/book-search',
        },
        {
          name: 'Shop Shop',
          description: 'An E-commerce MERN app with Redux',
          deployedURL: 'https://arcane-ocean-82265.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/shop-shop',
        },
        {
          name: 'Budget Tracker',
          description: 'A PWA using IndexedDB and a service worker',
          deployedURL: 'https://vast-thicket-23542.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/budget-tracker',
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