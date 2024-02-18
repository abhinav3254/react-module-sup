import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import logo from '../images/name-logo.svg';
import languageIcon from '../images/language-icon.svg';

function Nav({ onSelectLanguage }) {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    // Mapping object to convert language names to English
    const languageMap = {
        'English': 'English',
        'मैथिली': 'Maithili',
        'हिंदी': 'Hindi',
        'Русский': 'Russian',
        '中文': 'Chinese'
    };

    // Function to handle language selection
    const handleLanguageSelect = (language) => {
        // Convert the selected language to English using the languageMap
        const languageEnglish = languageMap[language] || language;
        setSelectedLanguage(languageEnglish);
        onSelectLanguage(languageEnglish); // Pass the selected language to the parent component
    };

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
                            {/* Language dropdown */}
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='lang-image' src={languageIcon} alt="Language" />
                                </div>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleLanguageSelect('English')}>English</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleLanguageSelect('मैथिली')}>মৈথিনী</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleLanguageSelect('हिंदी')}>हिंदी</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleLanguageSelect('Русский')}>Русский</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item" onClick={() => handleLanguageSelect('中文')}>中文</button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;