import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

function Header() {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            <motion.div
                className="header-content"
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.img
                    src={`${process.env.PUBLIC_URL}/alaa_hasancv.jpg`}
                    alt="Alaa Mousa Hasan"
                    className="profile-pic"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1
                    className="name"
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    Alaa Mousa Hasan
                </motion.h1>
                <motion.p
                    className="title"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    Service Engineer
                </motion.p>
            </motion.div>
        </motion.header>
    );
}

export default Header;
