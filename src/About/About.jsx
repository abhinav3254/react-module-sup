import React, { useState, useEffect } from 'react';
import AboutJsonEn from '../json/about/about-english.json';
import AboutJsonMaithili from '../json/about/about-maithili.json';
import AboutJsonHindi from '../json/about/about-hindi.json';
import AboutJsonRussian from '../json/about/about-russian.json';
import AboutJsonChinese from '../json/about/about-chinese.json';
import './About.scss';

function About({ selectedLanguage }) {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Function to get the appropriate JSON data based on the selected language
        const getAboutJson = () => {
            if (selectedLanguage === 'Maithili') {
                // console.log('selected lang in about is maithili :- ' + JSON.stringify(AboutJsonMaithili));
                setJsonData(AboutJsonMaithili);
            } else if (selectedLanguage === 'Hindi') {
                // console.log('selected lang in about is Hindi :- ' + JSON.stringify(AboutJsonHindi));
                setJsonData(AboutJsonHindi);
            } else if (selectedLanguage === 'Russian') {
                // console.log('selected lang in about is Russian :- ' + JSON.stringify(AboutJsonRussian));
                setJsonData(AboutJsonRussian);
            } else if (selectedLanguage === 'Chinese') {
                // console.log('selected lang in about is Chinese :- ' + JSON.stringify(AboutJsonChinese));
                setJsonData(AboutJsonChinese);
            } else {
                // console.log('selected lang in about is English :- ' + JSON.stringify(AboutJsonEn));
                setJsonData(AboutJsonEn);
            }
        };

        // Call the function to get the JSON data
        getAboutJson();
    }, [selectedLanguage]);

    return (
        <div className='about-page'>
            {jsonData && (
                <div className='about-content'>
                    <p className='about-quote'>{jsonData.quote.content}</p>
                    <p className='about-p'>{jsonData.desc.content}</p>
                    <p className='about-p'>{jsonData.more.content}</p>
                    <p className='about-p'>{jsonData.extra.content}</p>
                </div>
            )}
        </div>
    );
}

export default About;
