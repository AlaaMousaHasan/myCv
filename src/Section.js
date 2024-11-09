import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = () => {
    return (
        <div className="sections-container">
            <Link to="/experience" className="section circle">
                <h2>Experience</h2>
            </Link>
            <Link to="/skills" className="section circle">
                <h2>Skills</h2>
            </Link>
            <Link to="/portfolio" className="section circle">
                <h2>Portfolio</h2>
            </Link>
            <Link to="/contact" className="section circle">
                <h2>Contact</h2>
            </Link>
        </div>
    );
};

export default Section;
