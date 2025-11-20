import React from 'react';
import './Projects.css'; // Reuse or create a new CSS file
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation(); // Initialize translation function

    // Fetch translated project items from translation JSON
    const projects = t('projects.items', { returnObjects: true });

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">{t('projects.title', 'Projects')}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-name">
                            <span>{project.name}</span>
                        </h3>
                        <p className="project-description">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
