import React from 'react';
          
// passing in necessary props from projects objects
function Project({ name, description, deployedURL, githubURL, imgFile }) {
    return (     
        <div className="project-container">
            <div className="project-header">
                <h3 className="project-title">{name}</h3>
                <p className="project-description">{description}</p>
            </div>
            <div className="image-container">
                <img
                    src={require(`../../assets/img/projects/${imgFile}`).default}
                    alt={name}
                    className="project-img"
                    key={name}
                />
            </div>
            <div className="project-footer">
                <a href={deployedURL} className="deployed-link">App</a>
                <a href={githubURL} className="repo-link">Github Repository</a>
            </div>
        </div>
    )

};

export default Project;