import React, { useState, useEffect } from 'react';
import AboutJson from '../json/about/about-maithili.json'
import './About.scss'

function About() {

    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        setJsonData(AboutJson);
    }, []);

    return (
        <div className='about-page'>
            {
                jsonData && (
                    <div className='about-content'>
                        <p className='about-quote'>{jsonData.quote.content}</p>

                        <p className='about-p'>{jsonData.desc.content}</p>

                        <p className='about-p'>{jsonData.more.content}</p>

                        <p className='about-p'>{jsonData.extra.content}</p>
                    </div>
                )
            }
        </div >
    )
}

export default About