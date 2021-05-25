import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
          
// passing in necessary props from projects objects
function Project() {
        const projects = [
         {
          name: 'Spaced Out',
          description: 'A destination for all us nerds that want to see the happenings in space.',
          deployedURL: 'https://rawagschal.github.io/spaced-out/',
          githubURL: 'https://github.com/rawagschal/spaced-out',
          imgFile: 'spaced-out.png',
          index: 'grid-item-a'
        },
        {
          name: 'Petter Life',
          description: 'An application to connect unhoused pets with loving homes.',
          deployedURL: 'https://a-petter-life.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/petter-life',
          imgFile: 'petter-life.png',
          index: 'grid-item-b'
        },
        {
          name: 'Wantings',
          description: 'An online ecommerce store for beautiful antique home goods.',
          deployedURL: 'https://warm-crag-68291.herokuapp.com/',
          githubURL: 'https://github.com/rawagschal/wantings',
          imgFile: 'wantings.png',
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