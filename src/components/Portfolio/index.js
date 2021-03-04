import React from 'react';
import Project from '../Project';


function Portfolio() {

    const projects = [
         {
          name: 'Book Search Engine',
          description: 'A MERN app using Google Books API and GraphQL',
          deployedURL: 'https://rawagschal-book-search.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/book-search',
          imgFile: 'book-search.png',
        },
        {
          name: 'Shop Shop',
          description: 'An E-commerce MERN app with Redux',
          deployedURL: 'https://arcane-ocean-82265.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/shop-shop',
          imgFile: 'shop-shop.png',
        },
        {
          name: 'Budget Tracker',
          description: 'A PWA using IndexedDB and a service worker',
          deployedURL: 'https://vast-thicket-23542.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/budget-tracker',
          imgFile: 'budget-tracker.png',
        }
    ];

    return (
        <section className="portfolio-container">
            <div className="section-header">
                <h2>My Work</h2>
                <p>Some of my most recent projects:</p>
            </div>
        
            <div className="grid-container">
                { projects.map((project) => (
                    <Project key={project.name} {...project} />
                ))}
            </div>
        </section>
    );
    }

export default Portfolio;