import React from 'react';
import './Projects.scss';
import javaImage from '../images/skills/java.svg';

function Projects() {
    return (
        <div class="card">
            <img src="https://codingyaar.com/wp-content/uploads/card-image.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Projects;
