import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Nav() {
    return (
        <div className='nav-main'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    {/* Logo on the left */}
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" />
                    </Link>
                    {/* Hamburger menu button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navigation links aligned to the right */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/skills">SKILLS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
