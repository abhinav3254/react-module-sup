import React from 'react';
import './Home.scss';

function Home() {

    return (
        <div className='home-main' >
            <div className="home-content">
                <p className='greet'>Hello EveryOne</p>
                <p className='name'>I'm <span>Abhinav Kumar</span></p>
                <p className='des'>SOFTWARE ENGINEER</p>
                <p className='exp'>MEAN <span>|</span> MERN <span>|</span> MOBILE <span>|</span> BACKEND</p>
            </div>
        </div>
    );
}

export default Home;
