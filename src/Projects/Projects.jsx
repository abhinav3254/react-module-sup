import React from 'react';
import './Projects.scss';
import javaImage from '../images/skills/java.svg';

function Projects() {
    return (
        <div className="card">
            <img className="img" src={javaImage} alt="Java Image" />
            <div className="textBox">
                <p className="text head">Ethereum</p>
                <span>Cryptocurrency</span>
                <p className="text price">1.654,34€</p>
            </div>
        </div>
    );
}

export default Projects;
