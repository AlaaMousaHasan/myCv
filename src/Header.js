import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <motion.div
                className="header-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Information Section */}
                <div className="profile-info">
                    <h1 className="name">{t('header.name')}</h1>
                    <p className="title">{t('header.title')}</p>
                    <p className="description">{t('header.description')}</p>
                    <div className="button-container">
                        <Link to="/portfolio" className="btn-primary">{t('header.viewPortfolio')}</Link>
                        <a href="mailto:your.email@example.com?subject=Let's Connect!" className="btn-secondary">{t('header.getInTouch')}</a>
                    </div>
                </div>

                {/* Profile Picture Section */}
                <motion.div
                    className="profile-pic-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/alaa_hasancv.jpg`}
                        alt={t('header.name')}
                        className="profile-pic"
                    />
                </motion.div>
            </motion.div>
        </header>
    );
}

export default Header;
