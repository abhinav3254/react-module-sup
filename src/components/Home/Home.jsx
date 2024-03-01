import React, { useState, useEffect } from 'react';
import './Home.scss';
import imageHome from '../../images/undraw_floating_re_xtcj.svg';
import HomeEnglish from '../../json/home/home-english.json';
import HomeMaithili from '../../json/home/home-maithili.json';
import HomeHindi from '../../json/home/home-hindi.json';
import HomeChinese from '../../json/home/home-chinese.json';
import HomeRussian from '../../json/home/home-russian.json';


function Home({ selectedLanguage }) {
    const [homeData, setHomeData] = useState({
        greeting: '',
        name: '',
        des: ''
    });

    useEffect(() => {
        // Load data from the JSON file

        const getAboutJson = () => {
            if (selectedLanguage === 'Maithili') {
                // console.log('selected lang in about is maithili :- ' + JSON.stringify(AboutJsonMaithili));
                setHomeData(HomeMaithili);
            } else if (selectedLanguage === 'Hindi') {
                // console.log('selected lang in about is Hindi :- ' + JSON.stringify(AboutJsonHindi));
                setHomeData(HomeHindi);
            } else if (selectedLanguage === 'Russian') {
                // console.log('selected lang in about is Russian :- ' + JSON.stringify(AboutJsonRussian));
                setHomeData(HomeRussian);
            } else if (selectedLanguage === 'Chinese') {
                // console.log('selected lang in about is Chinese :- ' + JSON.stringify(AboutJsonChinese));
                setHomeData(HomeChinese);
            } else {
                // console.log('selected lang in about is English :- ' + JSON.stringify(AboutJsonEn));
                setHomeData(HomeEnglish);
            }
        };

        // Call the function to get the JSON data
        getAboutJson();
    }, [selectedLanguage]);

    return (
        <div className='home-main'>
            <div className="home-content">
                <p className='greet'>{homeData.greeting}</p>
                <p className='name'>I'm <span>{homeData.name}</span></p>
                <p className='des'>{homeData.des}</p>
                <p id='spin' className='exp'></p>
            </div>
            <img src={imageHome} alt="" />
        </div>
    );
}

export default Home;
