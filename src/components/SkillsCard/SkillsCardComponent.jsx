import React from 'react';
import './SkillsCardComponent.scss';

export const SkillsCardComponent = ({ jsonData }) => {
    return (
        <div>
            <div className="skill-card" key={jsonData.id}>
                <header className="skill-card__header">
                    <img src={require('../../images/skills/' + jsonData.title.toLowerCase() + '.svg')} alt={jsonData.name} className="skill-card__icon" />
                </header>
                <section className="skill-card__body">
                    <h2 className="skill-card__title">{jsonData.name}</h2>
                    <span className="skill-card__duration">{jsonData.experience}</span>
                    <ul className="skill-card__knowledge">
                        {jsonData.knowledge.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};