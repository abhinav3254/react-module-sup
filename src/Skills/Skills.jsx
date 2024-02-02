import React from 'react';
import './Skills.scss';
import skillsData from '../json/skills/Skills-hindi.json';

function Skills() {
    return (
        <div className='skills'>
            {skillsData.map(skill => (
                <div className="skill-card" key={skill.id}>
                    <header className="skill-card__header">
                        <img src={require('../images/skills/' + skill.title.toLowerCase() + '.svg')} alt={skill.name} className="skill-card__icon" />
                    </header>
                    <section className="skill-card__body">
                        <h2 className="skill-card__title">{skill.name}</h2>
                        <span className="skill-card__duration">{skill.experience}</span>
                        <ul className="skill-card__knowledge">
                            {skill.knowledge.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            ))}
        </div>
    );
}

export default Skills;
