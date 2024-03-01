import React, { useState, useEffect } from 'react';
import './Skills.scss';
import skillsDataEn from '../../json/skills/skills-english.json';
import skillsDataMaithili from '../../json/skills/skills-maithili.json';
import skillsDataHindi from '../../json/skills/skills-hindi.json';
import skillsDataRussian from '../../json/skills/skills-russian.json';
import skillsDataChinese from '../../json/skills/skills-chinese.json';
import { SkillsCardComponent } from '../SkillsCard/SkillsCardComponent';

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
                <SkillsCardComponent key={skill.id} jsonData={skill} />
            ))}

        </div>
    );
}

export default Skills;