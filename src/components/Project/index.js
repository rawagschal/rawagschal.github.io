import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
          
// passing in necessary props from projects objects
function Project() {
        const projects = [
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


    return (
        <>
        { projects.map((project, i) => (
            <Row lg={10}>
                <Col lg={3} className="img-container">
                    <Image
                        src={require(`../../assets/img/projects/${project.imgFile}`).default}
                        alt={project.name}
                        className="project-img"
                        key={project.name}
                        thumbnail
                    />
                </Col>

                <Col lg={7} className="info-container">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="link-container">
                        <a href={project.deployedURL}>view live app</a>
                        <a href={project.githubURL}>view github repository</a>
                    </div>
                </Col>
            </Row>
        
        ))}  
        </>
       
        /* // <div className="project-container">
        //     <div className="project-header">
        //         <h3 className="project-title">{name}</h3>
        //         <p className="project-description">{description}</p>
        //     </div>
        //     <div className="image-container">
        //         <img
        //             src={require(`../../assets/img/projects/${imgFile}`).default}
        //             alt={name}
        //             className="project-img"
        //             key={name}
        //         />
        //     </div>
        //     <div className="project-footer">
        //         <a href={deployedURL} className="deployed-link" target="blank">App</a>
        //         <a href={githubURL} className="repo-link" target="blank">Github Repository</a>
        //     </div>
        // </div> */
    )

};

export default Project;