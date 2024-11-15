import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaGlobe, FaLinkedin, FaXing, FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <img src={`${process.env.PUBLIC_URL}/engineering.png`} alt="Logo" className="logo" />
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Links */}
            <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
                <li><Link to="/" onClick={toggleMobileMenu}>{t('navbar.home')}</Link></li>
                <li><Link to="/about" onClick={toggleMobileMenu}>{t('navbar.aboutMe')}</Link></li>
                <li><Link to="/projects" onClick={toggleMobileMenu}>{t('navbar.projects')}</Link></li>
                <li><Link to="/contact" onClick={toggleMobileMenu}>{t('navbar.contact')}</Link></li>
            </ul>

            {/* Get in Touch Button */}
            <div className="navbar-button">
                <a href="mailto:your.email@example.com?subject=Let's Connect!" className="get-in-touch">
                    {t('navbar.getInTouch')}
                </a>
            </div>

            {/* Social Media Links */}
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/alaa-mousa-hasan-aa3bb7213/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.xing.com/profile/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaXing className="social-icon" />
                </a>
            </div>

            {/* Language Toggle Button */}
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
