import React from 'react';
import Container  from "react-bootstrap/Container";
import Project from '../Project';



export const projects = [
         {
          name: 'Book Search Engine',
          description: 'A MERN app using Google Books API and GraphQL',
          deployedURL: 'https://rawagschal-book-search.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/book-search',
          imgFile: 'book-search.png',
          index: 'grid-item-a'
        },
        {
          name: 'Shop Shop',
          description: 'An E-commerce MERN app with Redux',
          deployedURL: 'https://arcane-ocean-82265.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/shop-shop',
          imgFile: 'shop-shop.png',
          index: 'grid-item-b'
        },
        {
          name: 'Budget Tracker',
          description: 'A PWA using IndexedDB and a service worker',
          deployedURL: 'https://vast-thicket-23542.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/budget-tracker',
          imgFile: 'budget-tracker.png',
          index: 'grid-item-c'
        }
    ];

function Portfolio(projects) {
    return (
  
            <Container fluid>
                <Project />
            </Container>
    
    );
}

export default Portfolio;