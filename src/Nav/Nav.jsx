import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='nav'>
            <div className="content">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
