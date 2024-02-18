import React, { useState, useEffect } from 'react';
import './Skills.scss';
import skillsDataEn from '../json/skills/skills-english.json';
import skillsDataMaithili from '../json/skills/skills-maithili.json';
import skillsDataHindi from '../json/skills/skills-hindi.json';
import skillsDataRussian from '../json/skills/skills-russian.json';
import skillsDataChinese from '../json/skills/skills-chinese.json';

function Skills({ selectedLanguage }) {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Function to set the JSON data based on the selected language
        const setLanguageData = () => {
            if (selectedLanguage === 'Maithili') {
                setJsonData(skillsDataMaithili);
            } else if (selectedLanguage === 'Hindi') {
                setJsonData(skillsDataHindi);
            } else if (selectedLanguage === 'Russian') {
                setJsonData(skillsDataRussian);
            } else if (selectedLanguage === 'Chinese') {
                setJsonData(skillsDataChinese);
            } else {
                setJsonData(skillsDataEn); // Default to English
            }
        };

        // Call the function to set the JSON data
        setLanguageData();
    }, [selectedLanguage]);

    return (
        <div className='skills'>
            {jsonData && jsonData.map(skill => (
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