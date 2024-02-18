import React from 'react';
import './Projects.scss';
import projectsJson from '../json/projects/projects.json'

function Projects() {
    return (
        // <div className="projects">

        //     <div class="card">
        //         <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" class="card-img-top" alt="..." />
        //         <div class="card-body">
        //             <h5 class="card-title">Card title</h5>
        //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //             <button>Go somewhere</button>
        //         </div>
        //     </div>

        // </div>

        <div className="projects">
            {projectsJson.map((projectsJson, index) => (
                <div key={index} className="card">
                    <img src={projectsJson.image} className="card-img-top" alt={projectsJson.title} />
                    <div className="card-body">
                        <h5 className="card-title">{projectsJson.title}</h5>
                        <p className="card-text">{projectsJson.desc}</p>
                        <p className="card-text">Technologies: {projectsJson.technology.join(', ')}</p>
                        <button className='button'>github</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
