import React, { useState } from 'react';
import './MobileNavBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes, FaGlobe, FaLinkedin, FaXing, FaGithub } from 'react-icons/fa';

function MobileNavbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <nav className="mobile-navbar">
            <div className="navbar-header">
                <button className="hamburger-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                {/* Language Toggle */}
                <button className="lang-toggle-button" onClick={toggleLanguage}>
                    <FaGlobe className="lang-icon" />
                    {i18n.language === 'en' ? 'Ger' : 'En'}
                </button>
            </div>

            {isMenuOpen && (
                <div className="navbar-menu">
                    <ul className="navbar-links">
                        <li>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                {t('navbar.home')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                                {t('navbar.aboutMe')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/MyProjects" onClick={() => setIsMenuOpen(false)}>
                                {t('navbar.projects')}
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                {t('navbar.contact')}
                            </Link>
                        </li>
                    </ul>

                    <div className="navbar-footer">
                        {/* Get in Touch Button */}
                        <a
                            href="mailto:alaamousahassan@gmail.com?subject=Let's Connect!"
                            className="get-in-touch"
                        >
                            {t('navbar.getInTouch')}
                        </a>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/alaa-mousa-hasan-aa3bb7213"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a
                                href="https://www.xing.com/profile/Alaa_MousaHasan/web_profiles"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXing className="social-icon" />
                            </a>
                            <a
                                href="https://github.com/AlaaMousaHasan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default MobileNavbar;
