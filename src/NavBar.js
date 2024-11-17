import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaLinkedin, FaXing } from 'react-icons/fa';

function NavBar() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/engineering.png`} alt="Logo" className="logo" />
            </div>

            {/* Links Box */}
            <div className="navbar-links-box">
                <ul className="navbar-links">
                    <li><Link to="/">{t('navbar.home')}</Link></li>
                </ul>
                <ul className="navbar-links">
                    <li><Link to="/about">{t('navbar.aboutMe')}</Link></li>
                </ul>
                <ul className="navbar-links">
                    <li><Link to="/projects">{t('navbar.projects')}</Link></li>
                </ul>
                <ul className="navbar-links">
                    <li><Link to="/contact">{t('navbar.contact')}</Link></li>
                </ul>
            </div>

            {/* Get in Touch Button */}
            <div className="navbar-button">
                <a href="mailto:your.email@example.com?subject=Let's Connect!" className="get-in-touch">
                    {t('navbar.getInTouch')}
                </a>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.xing.com/" target="_blank" rel="noopener noreferrer">
                    <FaXing className="social-icon" />
                </a>
            </div>

            {/* Language Switcher */}
            <div className="language-switcher">
                <button className="lang-toggle-button" onClick={toggleLanguage}>
                    <FaGlobe className="lang-icon" />
                    {i18n.language === 'en' ? 'Ger' : 'En'}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
