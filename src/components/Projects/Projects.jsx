import React, { useState, useEffect } from 'react';
import './Projects.scss';
import projectsJsonEn from '../../json/projects/projects-english.json';
import projectsJsonMaithili from '../../json/projects/projects-maithili.json';
import projectsJsonHindi from '../../json/projects/projects-hindi.json';
import projectsJsonRussian from '../../json/projects/projects-russian.json';
import projectsJsonChinese from '../../json/projects/projects-chinese.json';

function Projects({ selectedLanguage }) {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Function to set the JSON data based on the selected language
        const setLanguageData = () => {
            if (selectedLanguage === 'Maithili') {
                // console.log('Maithili in projects', JSON.stringify(projectsJsonMaithili));
                setJsonData(projectsJsonMaithili);
            } else if (selectedLanguage === 'Hindi') {
                // console.log('Hindi in projects', JSON.stringify(projectsJsonHindi));
                setJsonData(projectsJsonHindi);
            } else if (selectedLanguage === 'Russian') {
                // console.log('Russian in projects', JSON.stringify(projectsJsonRussian));
                setJsonData(projectsJsonRussian);
            } else if (selectedLanguage === 'Chinese') {
                // console.log('Chinese in projects', JSON.stringify(projectsJsonChinese));
                setJsonData(projectsJsonChinese);
            } else {
                // console.log('English in projects', JSON.stringify(projectsJsonEn));
                setJsonData(projectsJsonEn); // Default to English
            }
        };

        // Call the function to set the JSON data
        setLanguageData();
    }, [selectedLanguage]);

    return (
        <div className="projects">
            {jsonData && jsonData.map((project, index) => (
                <div key={index} className="card">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.desc}</p>
                        <p className="card-text">Technologies: {project.technology.join(', ')}</p>
                        <a href={project.github} className='button' target='_blank' rel='noopener noreferrer'>Github</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;